import { AppFooter } from "@/components/ui";
import { SectionHero, SectionLearnModes } from "@/features/home";

export default function LandingPage() {
  return (
    <main className="max-w-screen-xl mx-auto min-h-screen flex flex-col">
      <div className="flex flex-col px-8 grow">
        <SectionHero />
        <SectionLearnModes />
        {/* <SectionRoadmap /> */}
      </div>
      <AppFooter />
    </main>
  );
}
