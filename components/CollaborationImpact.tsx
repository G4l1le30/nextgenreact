import Sponsor from "@/components/Sponsor";
import ImpactBento from "@/components/ImpactBento";

export default function CollaborationImpact() {
  return (
    <section id="collaboration-impact" className="py-14 sm:py-20 lg:py-24 bg-teal-dark border-y border-white/10 dark:bg-[#0a0f04]">
      <div id="our-sponsor" className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Mitra & Sponsor Section */}
        <Sponsor />

        {/* Bento Grid Impact Section */}
        <ImpactBento />
      </div>
    </section>
  );
}
