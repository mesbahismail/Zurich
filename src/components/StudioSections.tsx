import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Mail, MapPin } from "lucide-react";
export { default as WorkTeaser } from "./WorkTeaser";

export function StoryIntro({ full = false }: { full?: boolean }) {
  return <section className="story-overlap content-width" id="my-story"><div className="story-portrait"><Image src="/alma-portrait.jpg" alt="A photographer looking through a vintage camera" fill unoptimized sizes="(max-width: 700px) 100vw, 55vw" /></div><div className="story-panel"><p className="eyebrow">MY STORY</p><h2>Taking photos was and<br className="desktop-break" /> still is my passion.</h2><p>I’m Elya. A photographer, a light chaser, and a collector of the little moments. From quiet vows to wild dance floors, I make photographs that feel like you.</p>{full && <p>Based in Annecy, I follow stories across France and beyond. My approach blends honest documentary moments with gently guided portraits. No perfect poses. Just your people, your day, and a little magic.</p>}<Link className="studio-button" href={full ? "/contact" : "/about"}>{full ? "CONTACT ME" : "LEARN MORE"}<ArrowRight size={16} /></Link></div></section>;
}
export function Invitation() {
  return <section className="invitation"><span className="round-icon"><Mail size={30} strokeWidth={1.3} /></span><h2>Do you have a new wedding<br />coming up?</h2><p>Tell me a little about your plans. I’d love to help you<br className="desktop-break" /> keep the moments that matter most.</p><Link href="/contact" className="studio-button">CONTACT ME<ArrowRight size={16} /></Link></section>;
}
export function LocationSection() {
  return <section className="location-section content-width"><div className="location-photo"><Image src="/brooklyn-bridge.jpg" alt="The Brooklyn Bridge glowing in the evening light" fill unoptimized sizes="90vw" /></div><div className="location-panel"><span className="round-icon"><MapPin size={30} strokeWidth={1.3} /></span><h2>Based in Annecy.<br />At home everywhere.</h2><p>From the French Alps to the streets of New York,<br className="desktop-break" /> a beautiful story is always worth the journey.</p></div></section>;
}
export function FAQ() {
  const questions = [["How can we hire you for our upcoming wedding?", "Tell me your date, location, and a little about your plans. We’ll arrange a relaxed conversation and build a photography experience around your day."], ["What’s your rate?", "Every celebration is different. Share what you’re dreaming of and I’ll prepare a personal proposal with coverage, travel, and album options."], ["Can you travel for a wedding?", "Absolutely. Home is Annecy, but I photograph celebrations across France and beyond. Travel arrangements are included in your proposal before you book."], ["Will every session feel different?", "Always. I follow your pace, your personalities, and the light. A little gentle guidance when you need it, and plenty of space to be yourselves."]];
  return <section className="faq content-width"><div className="section-heading"><p className="eyebrow">FAQ</p><h2>Give your questions answers.</h2></div><div className="faq-grid">{questions.map(([question, answer], i) => <article key={question}><p className="eyebrow">0{i + 1}</p><h3>{question}</h3><p>{answer}</p></article>)}</div></section>;
}
export function Testimonial({ names = "Amélie & Théo", image = "/lakeside-wedding.jpg" }: { names?: string; image?: string }) {
  return <section className="testimonial content-width"><span className="quote-mark" aria-hidden="true">“</span><div className="testimonial-photo"><Image src={image} alt={`Wedding portrait for the illustrative ${names} story`} fill unoptimized sizes="25vw" /></div><blockquote><p>Our love story was something very unique, and we wanted to feel that all over again in our photographs.</p><span className="quote-rule" /><cite>{names}<span className="eyebrow">HUSBAND & WIFE · SAMPLE STORY</span></cite></blockquote></section>;
}
