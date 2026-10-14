import { Features } from "@/components/sections/Features";
import { Hero } from "@/components/sections/Hero";
import { InsightsPreview } from "@/components/sections/InsightsPreview";
import { Problem } from "@/components/sections/Problem";
import { Process } from "@/components/sections/Process";
import { Solutions } from "@/components/sections/Solutions";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Problem />
      <Process />
      <Solutions />
      <Features />
      <InsightsPreview />
    </>
  );
}
