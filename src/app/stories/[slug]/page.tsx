import Link from "next/link";
import { notFound } from "next/navigation";
import { MapPin } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PhotoGallery from "@/components/PhotoGallery";
import { Testimonial, Invitation } from "@/components/StudioSections";
import { stories } from "@/lib/portfolio";

export function generateStaticParams() { return stories.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const story = stories.find((item) => item.slug === slug);
  return { title: story ? `${story.names} — Alma & Light` : "Story not found" };
}
export default async function StoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const story = stories.find((item) => item.slug === slug);
  if (!story) notFound();
  return <main className="studio"><Header /><section className="album-heading"><h1>{story.names}</h1><p className="eyebrow"><MapPin size={13} />{story.location}<span>—</span><time dateTime={story.date}>{new Date(story.date + "T12:00:00Z").toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" })}</time></p></section><PhotoGallery images={story.gallery} names={story.names} /><Testimonial names={story.names} image={story.image} /><div className="album-description content-width"><p>{story.description}</p><Link className="text-link" href="/work">← All wedding stories</Link></div><Invitation /><Footer /></main>;
}
