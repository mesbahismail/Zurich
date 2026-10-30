import Image from "next/image";
import Link from "next/link";
import SocialLinks from "./SocialLinks";
import Newsletter from "./Newsletter";
import Wordmark from "./Wordmark";

const strip = ["/alma-portrait.jpg", "/wedding-flowers.jpg", "/journal-desert.jpg", "/brooklyn-bridge.jpg", "/wedding-garden.jpg"];
export default function Footer() {
  return <footer className="studio-footer"><div className="instagram-strip">{strip.map((src, i) => <div key={src}><Image src={src} alt={["A photographer holding a camera", "Wedding flowers", "A journey through the desert", "Brooklyn at sunset", "A garden wedding"][i]} fill unoptimized sizes="20vw" /></div>)}<Link href="/news" className="instagram-label">Little stories, along the way ↗</Link></div><div className="footer-columns"><nav aria-label="Footer navigation"><Link href="/about">About</Link><Link href="/work">Work</Link><Link href="/news">News</Link><Link href="/contact">Contact</Link></nav><div className="footer-social"><h3>Follow me</h3><SocialLinks /><p className="eyebrow">© {new Date().getFullYear()} ELYA ZURICH<br />TEMPLATE BY ISMAIL MESBAH</p></div><Newsletter /></div><div className="footer-signature"><Wordmark /><p>Fictional studio · Illustrative stories · <Link href="/terms">Photo credits & details</Link></p></div></footer>;
}
