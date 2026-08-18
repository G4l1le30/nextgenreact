import Sponsor from "@/components/Sponsor";
import ImpactBento from "@/components/ImpactBento";

export default function CollaborationImpact() {
  return (
    <section id="collaboration-impact" className="py-20 lg:py-24 bg-slate-100/50">
      <div id="our-sponsor" className="mx-auto max-w-7xl px-6">
        {/* Mitra & Sponsor Section */}
        <Sponsor />

        {/* Bento Grid Impact Section */}
        <ImpactBento />
      </div>
    </section>
  );
}
