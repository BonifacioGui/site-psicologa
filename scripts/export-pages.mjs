import { cp, mkdir, readFile, readdir, rm, writeFile } from "node:fs/promises";
import path from "node:path";

const repository = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "site-psicologa";
const githubBasePath = `/${repository}`;
const githubOrigin = `https://bonifaciogui.github.io${githubBasePath}`;
const isCloudflarePages = process.env.CF_PAGES === "1";
const configuredOrigin = process.env.SITE_URL?.trim().replace(/\/+$/, "");
const cloudflareOrigin = process.env.CF_PAGES_URL?.trim().replace(/\/+$/, "");
const basePath = isCloudflarePages ? "" : githubBasePath;
const origin = configuredOrigin || (isCloudflarePages ? cloudflareOrigin : githubOrigin) || githubOrigin;
const canonicalOrigin = configuredOrigin || "https://analiviapsicologia.com.br";
const routes = ["", "sobre", "atendimento", "adolescentes", "jovens-adultos", "abordagem-tcc", "formacao", "faq", "contato", "politica-de-privacidade", "conteudos", "primeiro-contato"];
const sitemapRoutes = routes.filter((route) => route !== "primeiro-contato");

const workerUrl = new URL("../dist/server/index.js", import.meta.url);
workerUrl.searchParams.set("pages-export", Date.now().toString());
const { default: worker } = await import(workerUrl.href);

await rm("out", { recursive: true, force: true });
await mkdir("out", { recursive: true });
await cp("dist/client", "out", { recursive: true });

async function rewriteCssAssetUrls(directory) {
  if (!basePath) return;

  const entries = await readdir(directory, { withFileTypes: true });

  for (const entry of entries) {
    const filePath = path.join(directory, entry.name);

    if (entry.isDirectory()) {
      await rewriteCssAssetUrls(filePath);
      continue;
    }

    if (!entry.name.endsWith(".css")) continue;

    const css = await readFile(filePath, "utf8");
    const rewrittenCss = css.replaceAll("url(/_next/", `url(${basePath}/_next/`);

    if (rewrittenCss !== css) {
      await writeFile(filePath, rewrittenCss, "utf8");
    }
  }
}

await rewriteCssAssetUrls("out");

for (const route of routes) {
  const response = await worker.fetch(
    new Request(`http://localhost/${route}`, { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
  if (!response.ok) throw new Error(`Falha ao exportar /${route}: ${response.status}`);
  let html = await response.text();
  html = html
    .replaceAll("https://www.exemplo-psicologia.com.br", origin)
    .replaceAll(githubOrigin, origin)
    .replace(/\b(srcSet|imageSrcSet)="([^"]+)"/g, (_, attribute, value) => {
      const candidates = value
        .split(",")
        .map((candidate) => candidate.trim().replace(/^\/(?!\/)/, `${basePath}/`))
        .join(", ");
      return `${attribute}="${candidates}"`;
    })
    .replace(/(href|src)="\/(?!\/)/g, `$1="${basePath}/`)
    .replace(/<script\b([^>]*)>[\s\S]*?<\/script>/gi, (script, attributes) =>
      /\bid=["\x27]theme-init["\x27]/i.test(attributes)
      || /\btype=["\x27]application\/ld\+json["\x27]/i.test(attributes) ? script : "")
    .replace(/<link[^>]+rel="modulepreload"[^>]*>/gi, "");
  if (route !== "primeiro-contato") {
    html = html.replace("</head>", `<link rel="canonical" href="${canonicalOrigin}/${route}" /></head>`);
  }
  const outputDir = route ? path.join("out", route) : "out";
  await mkdir(outputDir, { recursive: true });
  await writeFile(path.join(outputDir, "index.html"), html, "utf8");
}

const sitemap = sitemapRoutes.map((route) => `<url><loc>${origin}/${route}</loc></url>`).join("");
await writeFile("out/sitemap.xml", `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${sitemap}</urlset>`, "utf8");
await writeFile("out/robots.txt", `User-agent: *\nAllow: /\nSitemap: ${origin}/sitemap.xml\n`, "utf8");
await writeFile("out/.nojekyll", "", "utf8");

const index = await readFile("out/index.html", "utf8");
const firstContact = await readFile("out/primeiro-contato/index.html", "utf8");
const jsonLdMatch = index.match(/<script\b[^>]*\btype=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/i);
if (!jsonLdMatch) throw new Error("JSON-LD não foi preservado na exportação estática.");
let schema;
try {
  schema = JSON.parse(jsonLdMatch[1]);
} catch {
  throw new Error("O JSON-LD exportado não é um JSON válido.");
}
if (
  schema["@context"] !== "https://schema.org"
  || !Array.isArray(schema["@graph"])
  || !schema["@graph"].some((item) => item["@type"] === "Person" && item.name === "Ana Lívia Calado da Costa" && item.identifier?.value === "02/34611")
  || !schema["@graph"].some((item) => item["@type"] === "OnlineBusiness" && item.url === canonicalOrigin)
) {
  throw new Error("A identidade profissional no JSON-LD está ausente ou incorreta.");
}

await Promise.all([
  "favicon.ico", "favicon-48.png", "favicon-96.png", "apple-touch-icon.png",
].map((file) => readFile(path.join("out", file))));
if (
  !index.includes("Ana Lívia Calado da Costa")
  || !index.includes("CRP 02/34611")
  || !index.includes("Psicoterapia online para adolescentes")
  || !index.includes(`${basePath}/_next/`)
  || !index.includes(`srcSet="${basePath}/ana-livia-hero-arch-transparent-512.avif 512w, ${basePath}/ana-livia-hero-arch-transparent.avif 1055w"`)
  || !index.includes(`srcSet="${basePath}/ana-livia-hero-arch-transparent-512.png 512w, ${basePath}/ana-livia-hero-arch-transparent.png 1055w"`)
  || !index.includes(`<meta property="og:image" content="${origin}/og.png"`)
  || !index.includes(`<link rel="canonical" href="${canonicalOrigin}/" />`)
  || !index.includes('id="theme-init"')
  || !index.includes('data-theme-toggle')
  || !index.includes(`${basePath}/brand/horizontal-light.svg`)
  || !index.includes(`${basePath}/favicon.ico`)
  || !index.includes(`${basePath}/favicon-96.png`)
  || !firstContact.includes("Seu primeiro contato pode ser simples.")
) {
  throw new Error("A validação da exportação estática falhou.");
}
console.log(`Exportação pronta em out para ${origin} (${isCloudflarePages ? "Cloudflare Pages" : "GitHub Pages"})`);
