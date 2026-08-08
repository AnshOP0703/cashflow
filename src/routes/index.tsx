import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/landing/Nav";
import { Hero } from "@/components/landing/Hero";
import { ProblemStrip } from "@/components/landing/ProblemStrip";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { ChaseEngine } from "@/components/landing/ChaseEngine";
import { Features } from "@/components/landing/Features";
import { Markets } from "@/components/landing/Markets";
import { Comparison } from "@/components/landing/Comparison";
import { Testimonials } from "@/components/landing/Testimonials";
import { Pricing } from "@/components/landing/Pricing";
import { WhoItsFor } from "@/components/landing/WhoItsFor";
import { ClientScores } from "@/components/landing/ClientScores";
import { Recurring } from "@/components/landing/Recurring";
import { Calculator } from "@/components/landing/Calculator";
import { Integrations } from "@/components/landing/Integrations";
import { Security } from "@/components/landing/Security";
import { FounderNote } from "@/components/landing/FounderNote";
import { MobileCtaBar } from "@/components/landing/MobileCtaBar";
import { Faq, faqs } from "@/components/landing/Faq";
import { FinalCta } from "@/components/landing/FinalCta";
import { Footer } from "@/components/landing/Footer";

const TITLE = "Tagada — Invoicing that chases your unpaid invoices for you";
const DESCRIPTION =
  "Tagada sends your invoice, then chases it over email, WhatsApp, and SMS until you get paid. Built for India and global small businesses.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "theme-color", content: "#0B0B0C" },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "/og-image.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
      { name: "twitter:image", content: "/og-image.png" },
    ],
    links: [{ rel: "canonical", href: "https://tagada.app/" }],
  }),
  component: Landing,
});

const jsonLd = () => [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Tagada",
    url: "https://tagada.app/",
    description:
      "Tagada is an invoicing tool that automatically chases unpaid invoices so small businesses get paid faster.",
  },
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Tagada",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    description: DESCRIPTION,
    offers: [
      { "@type": "Offer", name: "Free", price: "0", priceCurrency: "USD" },
      { "@type": "Offer", name: "Free", price: "0", priceCurrency: "INR" },
      { "@type": "Offer", name: "Pro", price: "19", priceCurrency: "USD" },
      { "@type": "Offer", name: "Pro", price: "799", priceCurrency: "INR" },
      { "@type": "Offer", name: "Business", price: "49", priceCurrency: "USD" },
      { "@type": "Offer", name: "Business", price: "1999", priceCurrency: "INR" },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  },
];

function Landing() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd()) }}
      />
      <Nav />
      <main>
        <Hero />
        <ProblemStrip />
        <WhoItsFor />
        <HowItWorks />
        <ChaseEngine />
        <ClientScores />
        <Recurring />
        <Features />
        <Calculator />
        <Markets />
        <Integrations />
        <Comparison />
        <Security />
        <FounderNote />
        <Testimonials />
        <Pricing />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <MobileCtaBar />
    </>
  );
}