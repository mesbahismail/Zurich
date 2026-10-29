import Image from "next/image";
import Link from "next/link";
import type { stories } from "@/lib/portfolio";

type Story = (typeof stories)[number];
export default function Albumcard({ story }: { story: Story; index?: number }) {
  return <Link href={`/stories/${story.slug}`} className="album-card"><Image src={story.image} alt={story.alt} fill unoptimized sizes="(max-width: 700px) 100vw, 50vw" /><div className="album-card-shade" /><div className="album-caption"><h2>{story.names}</h2><p className="eyebrow">MARRIED <span>—</span> {story.dateLabel}</p></div></Link>;
}
