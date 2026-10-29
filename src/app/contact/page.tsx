import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return <main className="studio"><Header /><section className="contact-page"><div className="section-heading"><p className="eyebrow">CONTACT ME</p><h1>Say something nice!</h1><p>A date, a place, a little about the two of you.<br />Every good story starts with hello.</p></div><ContactForm /></section><Footer /></main>;
}
