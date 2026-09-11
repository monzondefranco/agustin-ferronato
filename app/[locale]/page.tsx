import { getTranslations } from "next-intl/server";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Treatments from "@/components/Treatments";
import ModuleSection from "@/components/ModuleSection";
import FeaturedStrip from "@/components/FeaturedStrip";
import Testimonials from "@/components/Testimonials";
import RelatedProducts from "@/components/RelatedProducts";
import About from "@/components/About";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import FloatingWidgets from "@/components/FloatingWidgets";
import { siteConfig } from "@/lib/site-config";
import { getFaqJsonLd, type JsonLdFaq } from "@/lib/structured-data";

type Block = { heading: string; items: string[] };
type TrainingModule = {
  mediaLabel: string;
  kicker: string;
  titleLine1: string;
  titleLine2: string;
  lede: string[];
  blocks: Block[];
  priceValue: string;
  priceUnit: string;
};

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Training" });
  const tFaq = await getTranslations({ locale, namespace: "Faq" });

  const module1 = t.raw("module1") as TrainingModule;
  const module2 = t.raw("module2") as TrainingModule;

  const rawFaqs = tFaq.raw("items") as { question: string; answer: string[] }[];
  const faqsForJsonLd: JsonLdFaq[] = rawFaqs.map((faq) => ({
    question: faq.question,
    answer: faq.answer.map((paragraph) =>
      paragraph.replaceAll("{phone}", siteConfig.phones.turnos),
    ),
  }));

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Treatments />

        <div className="wrap">
          <div className="divider" />
        </div>

        <ModuleSection
          id="formacion"
          mediaLabel={module1.mediaLabel}
          kicker={module1.kicker}
          title={
            <>
              {module1.titleLine1}
              <br />
              {module1.titleLine2}
            </>
          }
          lede={module1.lede}
          blocks={module1.blocks}
          price={{ value: module1.priceValue, unit: module1.priceUnit }}
        />

        <div className="wrap">
          <div className="divider" />
        </div>

        <ModuleSection
          mediaLabel={module2.mediaLabel}
          kicker={module2.kicker}
          title={
            <>
              {module2.titleLine1}
              <br />
              {module2.titleLine2}
            </>
          }
          lede={module2.lede}
          blocks={module2.blocks}
          price={{ value: module2.priceValue, unit: module2.priceUnit }}
          reverse
        />

        <div className="wrap">
          <div className="divider" />
        </div>

        <FeaturedStrip />
        <Testimonials />
        <RelatedProducts />

        <div className="wrap">
          <div className="divider" />
        </div>

        <About />

        <div className="wrap">
          <div className="divider" />
        </div>

        <Faq />
      </main>
      <Footer />
      <FloatingWidgets />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getFaqJsonLd(faqsForJsonLd)) }}
      />
    </>
  );
}
