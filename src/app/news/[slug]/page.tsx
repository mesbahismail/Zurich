import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Invitation } from "@/components/StudioSections";
import { journal } from "@/lib/journal";

export function generateStaticParams() { return journal.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) { const { slug } = await params; const post = journal.find((item) => item.slug === slug); return { title: post ? `${post.title} — Alma & Light` : "Article not found" }; }
export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const index = journal.findIndex((post) => post.slug === slug);
  if (index < 0) notFound();
  const post = journal[index];
  const next = journal[(index + 1) % journal.length];
  return <main className="studio article-page"><Header /><div className="article-hero"><Image src={post.image} alt={post.alt} fill unoptimized priority sizes="100vw" /></div><article className="article-body"><p className="eyebrow">{post.category} / <time dateTime={post.date}>{post.dateLabel}</time></p><h1>{post.title}</h1><p>{post.paragraphs[0]}</p><blockquote>{post.quote}<cite>{post.quoteBy}</cite></blockquote>{post.paragraphs.slice(1).map((text) => <p key={text}>{text}</p>)}<Link className="text-link" href="/news">← Back to the journal</Link><Link href={`/news/${next.slug}`} className="next-article"><span className="eyebrow">NEXT ARTICLE</span><h2>{next.title}</h2></Link></article><Invitation /><Footer /></main>;
}
