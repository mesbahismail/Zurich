import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { journal } from "@/lib/journal";

export const metadata = { title: "News & Notes — Alma & Light" };
export default function NewsPage() {
  return <main className="studio"><Header /><section className="news-list content-width" aria-label="News and travel journal">{journal.map((post) => <article className="news-card" key={post.slug}><Link href={`/news/${post.slug}`}><div className="news-card-image"><Image src={post.image} alt={post.alt} fill unoptimized sizes="(max-width: 700px) 100vw, 90vw" /></div><div className="news-card-copy"><p className="eyebrow">{post.category} / <time dateTime={post.date}>{post.dateLabel}</time></p><h2>{post.title}</h2><p>{post.excerpt}</p></div></Link></article>)}</section><Footer /></main>;
}
