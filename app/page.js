import Footer from "@/components/footer";
import { EconomicsSection } from "@/components/landing/economics-section";
import { FAQSection } from "@/components/landing/faq-section";
import { Hero } from "@/components/landing/hero";
import { ModelSection } from "@/components/landing/model-section";
import { QualificationStepper } from "@/components/landing/qualification-stepper";
import { SiteHeader } from "@/components/site-header";
import TrackableAnchor from "@/components/trackable-anchor";

export default function HomePage() {
  return (
    <main className="overflow-x-clip pb-24 md:pb-12">
      <SiteHeader />
      <Hero />
      <ModelSection />
      <EconomicsSection />
      <QualificationStepper />
      <FAQSection />
      <Footer />

      <div className="fixed inset-x-4 bottom-4 z-30 md:hidden">
        <TrackableAnchor
          href="#evaluar"
          className="button-primary w-full justify-center shadow-[0_18px_45px_rgba(20,18,32,0.26)]"
          eventParams={{ cta_name: "sticky_mobile_eval", cta_location: "mobile_footer" }}
        >
          Evaluar mi plaza (3 min)
        </TrackableAnchor>
      </div>
    </main>
  );
}
