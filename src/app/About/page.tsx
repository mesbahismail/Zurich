import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { StoryIntro, LocationSection, FAQ, Invitation } from "@/components/StudioSections";

export default function AboutPage() {
  return <main className="studio"><Header /><StoryIntro full /><LocationSection /><FAQ /><Invitation /><Footer /></main>;
}
