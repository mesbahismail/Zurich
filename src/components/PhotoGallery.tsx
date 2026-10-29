"use client";
import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight, ExternalLink, Share2, X, Plus } from "lucide-react";

const mobileQuery = "(max-width: 700px)";
function subscribeViewport(callback: () => void) {
  const media = window.matchMedia(mobileQuery);
  media.addEventListener("change", callback);
  return () => media.removeEventListener("change", callback);
}
function getMobileSnapshot() { return window.matchMedia(mobileQuery).matches; }
function getServerSnapshot() { return false; }

export default function PhotoGallery({ images, names }: { images: string[]; names: string }) {
  const mobile = useSyncExternalStore(subscribeViewport, getMobileSnapshot, getServerSnapshot);
  const [expanded, setExpanded] = useState(false);
  const visible = expanded ? images.length : mobile ? 2 : 6;
  const [current, setCurrent] = useState<number | null>(null);
  const [notice, setNotice] = useState("");
  const viewer = useRef<HTMLDialogElement>(null);
  const active = current ?? 0;
  const hasMore = visible < images.length;
  useEffect(() => {
    if (current === null) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = previous; };
  }, [current]);
  function open(index: number) { setCurrent(index); setNotice(""); viewer.current?.showModal(); }
  function close() { viewer.current?.close(); setCurrent(null); }
  function move(direction: number) { setCurrent((value) => ((value ?? 0) + direction + images.length) % images.length); setNotice(""); }
  async function share() {
    try {
      await navigator.clipboard.writeText(new URL(images[active], window.location.href).href);
      setNotice("Photo link copied.");
    } catch { setNotice("Use ‘Open original’ to share this photograph."); }
  }
  return <section className="gallery-section content-width" aria-label={`${names} wedding gallery`}><div className={`photo-grid ${hasMore ? "has-more" : ""}`}>{images.slice(0, visible).map((src, index) => <button className="photo-tile" key={`${src}-${index}`} aria-label={`Open ${names} wedding photograph ${index + 1}`} onClick={() => open(index)}><Image src={src} alt={`Wedding photograph ${index + 1} from the illustrative ${names} story`} fill unoptimized sizes="(max-width: 700px) 100vw, 33vw" /><span className="photo-open"><Plus size={25} strokeWidth={1} /></span></button>)}</div>{hasMore && <div className="load-more"><button className="studio-button" onClick={() => setExpanded(true)}><Plus size={15} />LOAD MORE</button></div>}<p className="gallery-count" aria-live="polite">{Math.min(visible, images.length)} of {images.length} photographs</p><dialog className="photo-lightbox" ref={viewer} onClose={() => setCurrent(null)} aria-label={`${names} photo viewer`} onClick={(event) => { if (event.target === event.currentTarget) close(); }} onKeyDown={(event) => { if (event.key === "ArrowLeft") { event.preventDefault(); move(-1); } if (event.key === "ArrowRight") { event.preventDefault(); move(1); } }}><div className="lightbox-toolbar"><a href={images[active]} target="_blank" rel="noreferrer" aria-label="Open original photograph"><ExternalLink size={19} /></a><button onClick={share} aria-label="Copy photograph link"><Share2 size={19} /></button><button autoFocus onClick={close} aria-label="Close photo viewer"><X size={22} /></button></div><button className="lightbox-prev" aria-label="Previous photograph" onClick={() => move(-1)}><ArrowLeft size={20} /></button><div className="lightbox-image"><Image src={images[active]} alt={`Photograph ${active + 1} of ${images.length}, ${names}`} fill unoptimized sizes="90vw" /></div><button className="lightbox-next" aria-label="Next photograph" onClick={() => move(1)}><ArrowRight size={20} /></button><div className="lightbox-counter" aria-live="polite">{active + 1}/{images.length}</div><p className="lightbox-notice" role="status">{notice}</p></dialog></section>;
}
