"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { StoryIntro, WorkTeaser, Invitation } from "@/components/StudioSections";

const slides = ["/wedding-hero.jpg", "/slide-01.jpg", "/lakeside-wedding.jpg", "/slide-04.jpg"];

export default function Home() {
  const [slide, setSlide] = useState({ index: 0, cycle: 0 });
  const [heroVisible, setHeroVisible] = useState(true);
  const hero = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!hero.current) return;
    const observer = new IntersectionObserver(([entry]) => {
      setHeroVisible(entry.isIntersecting);
    });
    observer.observe(hero.current);
    return () => observer.disconnect();
  }, []);

  function selectSlide(index: number) {
    setSlide((current) => ({ index, cycle: current.cycle + 1 }));
  }

  function advanceSlide() {
    setSlide((current) => ({
      index: (current.index + 1) % slides.length,
      cycle: current.cycle + 1,
    }));
  }

  return (
    <main className="studio">
      <section className="home-hero" ref={hero} data-hero-visible={heroVisible} aria-label="Wedding photography">
        <div className="hero-images" aria-hidden="true">
          {slides.map((src, index) => (
            <div key={src} className={`hero-slide ${index === slide.index ? "is-active" : ""}`}>
              <Image src={src} alt="" fill unoptimized priority={index === 0} sizes="100vw" />
            </div>
          ))}
        </div>
        <div className="hero-shade" />
        <Header overlay />
        <div className="hero-content">
          <p className="eyebrow">ELYA ZURICH</p>
          <h1>Taking photos is savoring life,<br className="desktop-break" /> and every second of it.</h1>
          <Link className="studio-button" href="/work">TAKE A LOOK<ArrowRight size={18} /></Link>
        </div>
        <div className="slide-controls" aria-label="Slideshow controls">
          {slides.map((src, index) => (
            <button
              key={src}
              type="button"
              aria-label={`Show photograph ${index + 1}`}
              aria-pressed={slide.index === index}
              onClick={() => selectSlide(index)}
            >
              <svg className="slide-marker" viewBox="0 0 12 12" aria-hidden="true" focusable="false">
                <rect className="slide-marker-track" x="1" y="1" width="10" height="10" />
                {slide.index === index && (
                  <rect
                    key={slide.cycle}
                    className="slide-marker-progress"
                    x="1"
                    y="1"
                    width="10"
                    height="10"
                    pathLength="100"
                    onAnimationEnd={advanceSlide}
                  />
                )}
              </svg>
            </button>
          ))}
        </div>
        <a className="scroll-cue" href="#my-story">
          <span aria-hidden="true" />
          <span className="eyebrow">SCROLL</span>
        </a>
      </section>
      <StoryIntro />
      <WorkTeaser />
      <Invitation />
      <Footer />
    </main>
  );
}
