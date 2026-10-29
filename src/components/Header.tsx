"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import SocialLinks from "./SocialLinks";
import Wordmark from "./Wordmark";

const links = [["/work", "Work"], ["/about", "About"], ["/contact", "Contact"], ["/news", "News"]];
export default function Header({ overlay = false }: { overlay?: boolean }) {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = previous; };
  }, [open]);
  function close() { dialog.current?.close(); setOpen(false); trigger.current?.focus(); }
  return <header className={`studio-header ${overlay ? "studio-header--overlay" : ""}`}>
    <Wordmark />
    <nav className="desktop-nav" aria-label="Main navigation">{links.map(([href, label]) => <Link key={href} href={href} aria-current={path.startsWith(href) ? "page" : undefined}>{label}</Link>)}</nav>
    <div className="header-social"><span>Follow me</span><SocialLinks /></div>
    <button className="menu-toggle" ref={trigger} aria-label="Open navigation" aria-expanded={open} aria-controls="mobile-navigation" onClick={() => { dialog.current?.showModal(); setOpen(true); }}><Menu size={25} strokeWidth={1.4} /></button>
    <dialog className="mobile-menu" id="mobile-navigation" ref={dialog} onClose={() => setOpen(false)} aria-label="Navigation">
      <div className="mobile-menu-top"><Wordmark onClick={close} /><button aria-label="Close navigation" onClick={close} autoFocus><X size={28} strokeWidth={1.2} /></button></div>
      <nav aria-label="Mobile navigation">{links.map(([href, label]) => <Link key={href} href={href} onClick={close}>{label}</Link>)}</nav><div className="mobile-menu-social"><SocialLinks /></div>
    </dialog>
  </header>;
}
