"use client";
import { useState } from "react";
import { ArrowRight } from "lucide-react";

export default function Newsletter() {
  const [saved, setSaved] = useState(false);
  return <div className="newsletter"><h3>Subscribe to Newsletter</h3><p className="eyebrow">GET THE LATEST STORIES & INSPIRATION</p><form onSubmit={(event) => { event.preventDefault(); setSaved(true); }}><label className="sr-only" htmlFor="newsletter-email">Email address</label><input id="newsletter-email" name="email" type="email" placeholder="Email address" required autoComplete="email" disabled={saved} /><button type="submit" aria-label="Preview newsletter subscription" disabled={saved}><ArrowRight size={17} /></button></form><p className="form-note" role="status">{saved ? "Thank you! Subscription preview complete. No email was submitted." : "Demo newsletter — no emails are collected."}</p></div>;
}
