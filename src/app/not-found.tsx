import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Header from "@/components/Header";

export default function NotFound() {
  return <main className="studio"><Header /><section className="not-found"><Image src="/journal-desert.jpg" alt="A quiet desert landscape" fill unoptimized sizes="100vw" /><div><p className="eyebrow">YOU’RE LOST</p><h1>This page doesn’t really<br />exist anymore.</h1><Link className="studio-button" href="/work">TAKE A LOOK<ArrowRight size={16} /></Link></div></section></main>;
}
