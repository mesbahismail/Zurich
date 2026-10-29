"use client";
import { useState } from "react";
import { stories } from "@/lib/portfolio";
import Albumcard from "./Albumcard";

export default function PortfolioGrid() {
  const [sort, setSort] = useState("newest");
  const sorted = [...stories].sort((a, b) => sort === "name" ? a.names.localeCompare(b.names) : sort === "oldest" ? a.date.localeCompare(b.date) : b.date.localeCompare(a.date));
  return <section className="portfolio content-width"><div className="portfolio-filter"><label htmlFor="album-sort">Filter</label><select id="album-sort" value={sort} onChange={(event) => setSort(event.target.value)}><option value="newest">Date ↓</option><option value="oldest">Date ↑</option><option value="name">Name</option></select></div><div className="album-grid">{sorted.map((story) => <Albumcard key={story.slug} story={story} />)}</div></section>;
}
