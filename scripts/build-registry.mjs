import { execFileSync } from "node:child_process";
import { readFileSync, writeFileSync, readdirSync, existsSync } from "node:fs";

// Serve the registry and its original photographs from the same origin.
const origin = new URL(process.env.REGISTRY_URL || "http://localhost:3001").origin;
execFileSync(process.execPath, ["node_modules/shadcn/dist/index.js", "build"], {
  stdio: "inherit",
});
const itemPath = "public/r/wedding-photography.json";
const item = JSON.parse(readFileSync(itemPath, "utf8"));
const images = readdirSync("public").filter((name) => /\.(jpg|png)$/.test(name));
for (const file of item.files) {
  if (!file.content) continue;
  for (const image of images) {
    file.content = file.content.replaceAll(`"/${image}"`, `"${origin}/${image}"`);
    file.content = file.content.replaceAll(`'/${image}'`, `'${origin}/${image}'`);
    file.content = file.content.replaceAll(`url(${image})`, `url(${origin}/${image})`);
    file.content = file.content.replaceAll(`url(/${image})`, `url(${origin}/${image})`);
  }
}
writeFileSync(itemPath, JSON.stringify(item, null, 2) + "\n");
const catalog = JSON.parse(readFileSync("registry.json", "utf8"));
catalog.homepage = origin;
catalog.items = catalog.items.map(({ files, ...entry }) => ({
  ...entry,
  files: files.map(({ path, type, target }) => ({ path, type, target })),
}));
writeFileSync("public/r/registry.json", JSON.stringify(catalog, null, 2) + "\n");
writeFileSync("public/registry.json", JSON.stringify(catalog, null, 2) + "\n");
if (!existsSync(itemPath)) throw new Error("Registry item was not built");
console.log(`Registry ready: ${origin}/r/wedding-photography.json`);
