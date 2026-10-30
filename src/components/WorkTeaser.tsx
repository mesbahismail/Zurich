"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Albumcard from "./Albumcard";
import { stories } from "@/lib/portfolio";

export default function WorkTeaser() {
  const sectionRef = useRef<HTMLElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const panel = panelRef.current;
    const viewport = viewportRef.current;
    if (!section || !panel || !viewport) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let enabled = false;
    let distance = 0;
    let top = 0;
    let frame = 0;

    function update() {
      frame = 0;
      if (!enabled) return;
      // Native page scrolling supplies the entire horizontal journey, in both directions.
      viewport!.scrollLeft = Math.max(0, Math.min(distance, top - section!.getBoundingClientRect().top));
    }

    function scheduleUpdate() {
      if (!frame) frame = window.requestAnimationFrame(update);
    }

    function measure() {
      const panelHeight = panel!.offsetHeight;
      distance = Math.max(0, viewport!.scrollWidth - viewport!.clientWidth);
      enabled = window.innerWidth > 700 && window.innerHeight > panelHeight + 116 && distance > 0 && !reducedMotion.matches;

      if (enabled) {
        // Center the gallery in the space beneath the compact navbar.
        top = Math.max(92, (window.innerHeight - panelHeight + 72) / 2);
        section!.dataset.scrollSlider = "";
        section!.style.height = `${panelHeight + distance}px`;
        section!.style.setProperty("--gallery-top", `${top}px`);
      } else {
        delete section!.dataset.scrollSlider;
        section!.style.removeProperty("height");
        section!.style.removeProperty("--gallery-top");
      }
      update();
    }

    function revealFocusedCard(event: FocusEvent) {
      if (!enabled || !(event.target instanceof HTMLElement)) return;
      const card = event.target.closest<HTMLElement>(".album-card");
      if (!card) return;
      const cardBounds = card.getBoundingClientRect();
      const viewportBounds = viewport!.getBoundingClientRect();
      let shift = 0;
      if (cardBounds.left < viewportBounds.left) shift = cardBounds.left - viewportBounds.left;
      else if (cardBounds.right > viewportBounds.right) shift = cardBounds.right - viewportBounds.right;
      if (Math.abs(shift) < 1) return;
      const destination = Math.max(0, Math.min(distance, viewport!.scrollLeft + shift));
      window.scrollTo({
        top: window.scrollY + section!.getBoundingClientRect().top - top + destination,
        behavior: "instant",
      });
      viewport!.scrollLeft = destination;
    }

    const observer = new ResizeObserver(measure);
    observer.observe(panel);
    observer.observe(viewport);
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", measure);
    reducedMotion.addEventListener("change", measure);
    viewport.addEventListener("focusin", revealFocusedCard);
    measure();

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", measure);
      reducedMotion.removeEventListener("change", measure);
      viewport.removeEventListener("focusin", revealFocusedCard);
      window.cancelAnimationFrame(frame);
      delete section.dataset.scrollSlider;
      section.style.removeProperty("height");
      section.style.removeProperty("--gallery-top");
    };
  }, []);

  return (
    <section className="work-teaser-scroll content-width" ref={sectionRef} aria-labelledby="gallery-title">
      <div className="work-teaser" ref={panelRef}>
        <div className="work-teaser-copy">
          <p className="eyebrow">MY WORK</p>
          <h2 id="gallery-title">Take a tour inside<br />my gallery.</h2>
          <Link className="studio-button" href="/work">TAKE A TOUR<ArrowRight size={16} /></Link>
        </div>
        <div className="teaser-window" ref={viewportRef}>
          <div className="teaser-albums">
            {stories.map((story) => <Albumcard key={story.slug} story={story} />)}
          </div>
        </div>
      </div>
    </section>
  );
}
