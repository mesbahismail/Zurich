"use client";
import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);
  return submitted ? <div className="contact-success" role="status"><span className="round-icon"><Check size={28} /></span><h2>A lovely beginning, {name}.</h2><p>Your enquiry preview is complete. This is a demo form, so your message has not been sent.</p><button className="studio-button" onClick={() => setSubmitted(false)}>WRITE ANOTHER NOTE<ArrowRight size={16} /></button></div> : <form className="contact-form" onSubmit={(event) => { event.preventDefault(); setSubmitted(true); }}><div className="form-name-row"><label><span className="sr-only">First name</span><input name="firstName" placeholder="First name" autoComplete="given-name" required value={name} onChange={(event) => setName(event.target.value)} /></label><label><span className="sr-only">Last name</span><input name="lastName" placeholder="Last name" autoComplete="family-name" required /></label></div><label><span className="sr-only">Email address</span><input type="email" name="email" placeholder="Email" autoComplete="email" required /></label><label><span className="sr-only">Tell me about your plans</span><textarea name="message" placeholder="Tell me about your day, your date, and the little things that matter to you…" rows={6} required minLength={15} /></label><p className="form-note">Demo enquiry — your details won’t be sent or stored.</p><button className="studio-button" type="submit">CONTACT ME<ArrowRight size={16} /></button></form>;
}
