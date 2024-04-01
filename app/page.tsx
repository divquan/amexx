import Hersection from "@/components/home/Hersection";
import CommunitySection from "@/components/home/CommunitySection";
import Section2 from "@/components/home/Section2";
import SuccessStory from "@/components/home/SuccessStory";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Footer from "@/components/home/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-24 md:pt-32 gap-28 ">
      <Hersection />
      <Section2 />
      <SuccessStory />
      <CommunitySection />
      <Footer />
    </main>
  );
}
