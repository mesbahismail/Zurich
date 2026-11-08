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
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const panel = panelRef.current;
    const viewport = viewportRef.current;
    const track = trackRef.current;
    if (!section || !panel || !viewport || !track) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let enabled = false;
    let distance = 0;
    let top = 0;
    let frame = 0;
    let offset = 0;
    let swipeOffset = 0;

    function update() {
      frame = 0;
      if (!enabled) return;
      const progress = Math.max(0, Math.min(distance, top - section!.getBoundingClientRect().top));
      // Both page scrolling and sideways gestures share the same seamless loop.
      offset = ((progress + swipeOffset) % distance + distance) % distance;
      track!.style.setProperty("--gallery-offset", `${-offset}px`);
    }

    function scheduleUpdate() {
      if (!frame) frame = window.requestAnimationFrame(update);
    }

    function swipe(event: WheelEvent) {
      if (!enabled || event.ctrlKey) return;
      const horizontal = event.shiftKey && event.deltaX === 0 ? event.deltaY : event.deltaX;
      // Leave ordinary vertical scrolling and trackpad pinch-to-zoom native.
      if (!horizontal || (!event.shiftKey && Math.abs(horizontal) <= Math.abs(event.deltaY))) return;
      const unit = event.deltaMode === 1 ? 16 : event.deltaMode === 2 ? panel!.clientWidth : 1;
      event.preventDefault();
      swipeOffset = (swipeOffset + horizontal * unit) % distance;
      scheduleUpdate();
    }

    function measure() {
      const panelHeight = panel!.offsetHeight;
      const albums = viewport!.firstElementChild as HTMLElement;
      const copy = track!.firstElementChild as HTMLElement;
      const gap = parseFloat(getComputedStyle(albums).columnGap) || 0;
      const columnGap = parseFloat(getComputedStyle(track!).columnGap) || 0;
      const firstCard = albums.firstElementChild as HTMLElement | null;
      const lastCard = albums.lastElementChild as HTMLElement | null;
      // Measure within the moving row so swiping cannot change the cycle length.
      distance = firstCard && lastCard
        ? lastCard.getBoundingClientRect().right - firstCard.getBoundingClientRect().left + copy.getBoundingClientRect().width + columnGap + gap
        : 0;
      enabled = window.innerWidth > 700 && window.innerHeight > panelHeight + 116 && distance > 0 && !reducedMotion.matches;

      if (enabled) {
        // Center the gallery in the space beneath the compact navbar.
        top = Math.max(92, (window.innerHeight - panelHeight + 72) / 2);
        section!.dataset.scrollSlider = "";
        section!.style.height = `${panelHeight + distance}px`;
        section!.style.setProperty("--gallery-top", `${top}px`);
        section!.style.setProperty("--gallery-distance", `${distance}px`);
        viewport!.scrollLeft = 0;
      } else {
        delete section!.dataset.scrollSlider;
        section!.style.removeProperty("height");
        section!.style.removeProperty("--gallery-top");
        section!.style.removeProperty("--gallery-distance");
        track!.style.removeProperty("--gallery-offset");
        offset = 0;
        swipeOffset = 0;
      }
      update();
    }

    function revealFocusedCard(event: FocusEvent) {
      if (!enabled || !(event.target instanceof HTMLElement)) return;
      const card = event.target.closest<HTMLElement>(".album-card, .studio-button");
      if (!card) return;
      const cardBounds = card.getBoundingClientRect();
      const viewportBounds = panel!.getBoundingClientRect();
      let shift = 0;
      if (cardBounds.left < viewportBounds.left) shift = cardBounds.left - viewportBounds.left;
      else if (cardBounds.right > viewportBounds.right) shift = cardBounds.right - viewportBounds.right;
      if (Math.abs(shift) < 1) return;
      const destination = Math.max(0, Math.min(distance, offset + shift));
      swipeOffset = 0;
      window.scrollTo({
        top: window.scrollY + section!.getBoundingClientRect().top - top + destination,
        behavior: "instant",
      });
      update();
    }

    const observer = new ResizeObserver(measure);
    observer.observe(panel);
    observer.observe(viewport);
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", measure);
    reducedMotion.addEventListener("change", measure);
    track.addEventListener("focusin", revealFocusedCard);
    panel.addEventListener("wheel", swipe, { passive: false });
    measure();

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", measure);
      reducedMotion.removeEventListener("change", measure);
      track.removeEventListener("focusin", revealFocusedCard);
      panel.removeEventListener("wheel", swipe);
      window.cancelAnimationFrame(frame);
      delete section.dataset.scrollSlider;
      section.style.removeProperty("height");
      section.style.removeProperty("--gallery-top");
      section.style.removeProperty("--gallery-distance");
      track.style.removeProperty("--gallery-offset");
    };
  }, []);

  return (
    <section className="work-teaser-scroll content-width" ref={sectionRef} aria-labelledby="gallery-title">
      <div className="work-teaser" ref={panelRef}>
        <div className="work-teaser-track" ref={trackRef}>
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
          <div className="work-teaser-repeat" aria-hidden="true">
            <div />
            <div className="teaser-albums">
              {stories.map((story) => <Albumcard key={story.slug} story={story} tabIndex={-1} />)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
