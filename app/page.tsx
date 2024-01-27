import Image from "next/image";
import Nav from "@/components/shared/Nav"
import { logo } from "@/assets";
import Hero from "@/components/shared/Hero";
import HowItWorks from "@/components/shared/HowItWorks";
import Feature from "@/components/shared/Feature";
import CTA from "@/components/shared/CTA";
import Blog from "@/components/shared/Blog";
export default function Home() {
  return (
    <main className="text-secondary">
      <Hero/>
      <HowItWorks/>
      <Feature/>
      <CTA/>
      <Blog/>
    </main>
  );
}
