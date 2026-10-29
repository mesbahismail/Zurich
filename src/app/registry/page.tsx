import Link from "next/link";
import { Button } from "@/components/ui/button";
import registry from "../../../registry.json";

export const metadata = { title: "Alma & Light — shadcn Registry" };

export default function RegistryPage() {
  return (
    <main className="mx-auto max-w-3xl space-y-8 px-6 py-20 font-sans">
      <div className="space-y-3">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary">Alma & Light Registry</p>
        <h1 className="text-4xl font-semibold">Wedding photography template</h1>
        <p className="text-muted-foreground">Install the Alma & Light portfolio in a Next.js App Router project using the shadcn CLI.</p>
      </div>
      {registry.items.map((item) => (
        <article key={item.name} className="space-y-5 rounded-lg border border-border p-6">
          <h2 className="text-2xl font-semibold">{item.title}</h2>
          <p>{item.description}</p>
          <div className="flex flex-wrap gap-3">
            <Button asChild><Link href="/">Preview template</Link></Button>
            <Button variant="outline" asChild><a href={`/r/${item.name}.json`}>View registry JSON</a></Button>
          </div>
          <p className="text-sm text-muted-foreground">Run this in a separate project with shadcn already initialized:</p>
          <pre className="overflow-x-auto rounded-md bg-muted p-4 text-sm"><code>npx shadcn@latest add http://localhost:3001/r/{item.name}.json</code></pre>
          <p className="text-sm text-muted-foreground">This installs template routes and a root layout. Review overwrite prompts in an existing app. Photographs load from this registry server.</p>
        </article>
      ))}
      <a className="text-sm underline" href="/r/registry.json">Browse the registry catalog</a>
    </main>
  );
}
