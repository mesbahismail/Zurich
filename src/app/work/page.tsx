import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PortfolioGrid from "@/components/PortfolioGrid";
import { Invitation } from "@/components/StudioSections";

export default function WorkPage() {
  return <main className="studio"><Header /><section className="work-banner content-width"><Image src="/wedding-hero.jpg" alt="Soft light falling on a wedding bouquet" fill unoptimized priority sizes="90vw" /><div className="banner-shade" /><div><h1>Brilliant Measures</h1><p className="eyebrow"><span />MY WORK<span /></p></div></section><PortfolioGrid /><Invitation /><Footer /></main>;
}
