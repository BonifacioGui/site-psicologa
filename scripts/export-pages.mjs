import { cp, mkdir, readFile, readdir, rm, writeFile } from "node:fs/promises";
import path from "node:path";

const repository = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "site-psicologa";
const basePath = `/${repository}`;
const origin = `https://bonifaciogui.github.io${basePath}`;
const routes = ["", "sobre", "atendimento", "adolescentes", "jovens-adultos", "abordagem-tcc", "formacao", "faq", "contato", "politica-de-privacidade", "conteudos"];

const workerUrl = new URL("../dist/server/index.js", import.meta.url);
workerUrl.searchParams.set("pages-export", Date.now().toString());
const { default: worker } = await import(workerUrl.href);

await rm("out", { recursive: true, force: true });
await mkdir("out", { recursive: true });
await cp("dist/client", "out", { recursive: true });

async function rewriteCssAssetUrls(directory) {
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
    .replace(/\b(srcSet|imageSrcSet)="([^"]+)"/g, (_, attribute, value) => {
      const candidates = value
        .split(",")
        .map((candidate) => candidate.trim().replace(/^\/(?!\/)/, `${basePath}/`))
        .join(", ");
      return `${attribute}="${candidates}"`;
    })
    .replace(/(href|src)="\/(?!\/)/g, `$1="${basePath}/`)
    .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, "")
    .replace(/<link[^>]+rel="modulepreload"[^>]*>/gi, "");
  const outputDir = route ? path.join("out", route) : "out";
  await mkdir(outputDir, { recursive: true });
  await writeFile(path.join(outputDir, "index.html"), html, "utf8");
}

const sitemap = routes.map((route) => `<url><loc>${origin}/${route}</loc></url>`).join("");
await writeFile("out/sitemap.xml", `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${sitemap}</urlset>`, "utf8");
await writeFile("out/robots.txt", `User-agent: *\nAllow: /\nSitemap: ${origin}/sitemap.xml\n`, "utf8");
await writeFile("out/.nojekyll", "", "utf8");

const index = await readFile("out/index.html", "utf8");
if (
  !index.includes("Ana Lívia Calado da Costa")
  || !index.includes("CRP 02/34611")
  || !index.includes("Psicoterapia online para adolescentes")
  || !index.includes(`${basePath}/_next/`)
  || !index.includes(`srcSet="${basePath}/ana-livia-hero-480.jpg 480w, ${basePath}/ana-livia-hero.jpg 960w"`)
  || !index.includes(`<meta property="og:image" content="${origin}/og.png"`)
) {
  throw new Error("A validação da exportação estática falhou.");
}
console.log(`Exportação pronta em out para ${origin}`);
