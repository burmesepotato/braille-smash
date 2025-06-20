import { AppFooter } from "@/components/ui";
import {
  SectionHero,
  SectionLearnModes,
  SectionRoadmap,
} from "@/features/home";

export default function LandingPage() {
  return (
    <main className=" min-h-screen flex flex-col">
      <SectionHero />
      <SectionLearnModes />
      <SectionRoadmap />

      <AppFooter />
    </main>
  );
}
