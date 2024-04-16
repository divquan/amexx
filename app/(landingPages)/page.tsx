import Hersection from "@/components/home/Hersection";
import CommunitySection from "@/components/home/CommunitySection";
import Section2 from "@/components/home/Section2";
import SuccessStory from "@/components/home/SuccessStory";
import image from "@/public/images/Community.png";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-24 md:pt-32 gap-28 ">
      <Hersection />
      <Section2 />
      <SuccessStory />
      <CommunitySection
        image={image}
        title={"Expert team"}
        text={
          " Our consultants have a track record of crafting applications\n\nthat no admission committee or recruiter can ignore"
        }
      />
    </main>
  );
}
