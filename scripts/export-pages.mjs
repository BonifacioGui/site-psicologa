import { cp, mkdir, readFile, rm, writeFile } from "node:fs/promises";
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
if (!index.includes("Um espaço para entender") || !index.includes(`${basePath}/_next/`)) {
  throw new Error("A validação da exportação estática falhou.");
}
console.log(`Exportação pronta em out para ${origin}`);
