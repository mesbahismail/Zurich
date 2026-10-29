"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Pause, Play } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { StoryIntro, WorkTeaser, Invitation } from "@/components/StudioSections";

const slides = ["/wedding-hero.jpg", "/slide-01.jpg", "/lakeside-wedding.jpg", "/slide-04.jpg"];
export default function Home() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  useEffect(() => {
    if (paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(() => setActive((current) => (current + 1) % slides.length), 7000);
    return () => window.clearInterval(timer);
  }, [paused]);
  return <main className="studio"><section className="home-hero"><div className="hero-images" aria-hidden="true">{slides.map((src, index) => <div key={src} className={`hero-slide ${index === active ? "is-active" : ""}`}><Image src={src} alt="" fill unoptimized priority={index === 0} sizes="100vw" /></div>)}</div><div className="hero-shade" /><Header overlay /><div className="hero-content"><p className="eyebrow">ALMA & LIGHT</p><h1>Taking photos is savoring life,<br className="desktop-break" /> and every second of it.</h1><Link className="studio-button" href="/work">TAKE A LOOK<ArrowRight size={18} /></Link></div><div className="slide-controls" aria-label="Slideshow controls">{slides.map((src, index) => <button key={src} aria-label={`Show photograph ${index + 1}`} aria-pressed={active === index} onClick={() => setActive(index)}><span className={active === index ? "is-active" : ""} /></button>)}<button onClick={() => setPaused(!paused)} aria-label={paused ? "Play slideshow" : "Pause slideshow"}>{paused ? <Play size={11} /> : <Pause size={11} />}</button></div><a className="scroll-cue" href="#my-story"><span aria-hidden="true" /><span className="eyebrow">SCROLL</span></a></section><StoryIntro /><WorkTeaser /><Invitation /><Footer /></main>;
}
