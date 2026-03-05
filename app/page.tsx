import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import EmailCaptureForm from "@/components/EmailCaptureForm";
import ModelTabs from "@/components/ModelTabs";
import StructuredData from "@/components/StructuredData";
import { models } from "@/data/models";
import { siteName, siteTagline, siteUrl } from "@/lib/site";

const crabApi = "\u5c0f\u9f99\u867e API";

export const metadata: Metadata = {
  title: "openclaw-api homepage",
  description:
    `OpenClaw API homepage for ${crabApi} and mainstream model API access. ` +
    `Join waitlist and get notified when slots open.`,
  keywords: [
    "openclaw-api",
    crabApi,
    "OpenClaw API",
    "model API gateway",
    "LLM API proxy",
    "MiniMax 2.5 API",
    "DeepSeek R1 API",
    "Qwen2.5-Max API",
  ],
  alternates: {
    canonical: "/",
  },
};

const faqItems = [
  {
    question: "What is OpenClaw API?",
    answer:
      "OpenClaw API is a unified gateway for mainstream model APIs with SEO-ready model pages and shared integration patterns.",
  },
  {
    question: "Why should users submit email first?",
    answer:
      "Current demand is high and onboarding is controlled in private beta. Submitted emails enter the priority queue.",
  },
  {
    question: "Why does each model have a dedicated page?",
    answer:
      "Dedicated pages match model-specific search intent and pass internal-link authority back to the homepage.",
  },
];

const testimonials = [
  {
    text: "One gateway for many models saved us significant engineering time.",
    name: "E-commerce AI Service Team",
  },
  {
    text: "Model-specific SEO pages improved both brand and long-tail traffic.",
    name: "Growth Operations Team",
  },
  {
    text: "OpenClaw API made our model rollout process easier to manage.",
    name: "SaaS Product Team",
  },
];

const longTailKeywords = [
  "openclaw-api model gateway",
  "xiaolongxia api model access",
  "minimax api proxy",
  "deepseek r1 api endpoint",
  "qwen api integration",
  "glm api gateway",
  "claude api page",
  "gpt-4.1 api route",
];

export default function HomePage() {
  const pageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteName,
    url: siteUrl,
    description: siteTagline,
    inLanguage: ["zh-CN", "en"],
    potentialAction: {
      "@type": "SearchAction",
      target: `${siteUrl}/models/{model}`,
      "query-input": "required name=model",
    },
  };

  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteName,
    url: siteUrl,
    sameAs: [siteUrl],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <main className="site-wrap">
      <StructuredData data={[pageJsonLd, orgJsonLd, faqJsonLd]} />

      <header className="topbar">
        <Link href="/" className="brand">
          OpenClaw API
        </Link>
        <nav className="quick-links">
          <a href="#models">Model Pages</a>
          <a href="#faq">FAQ</a>
          <a href="#waitlist">Waitlist</a>
        </nav>
      </header>

      <section className="hero card">
        <p className="eyebrow">Core keyword: openclaw-api</p>
        <h1>
          OpenClaw API | {crabApi} Multi-Model Gateway
        </h1>
        <p className="hero-copy">
          \u4e3a\u4e86\u83b7\u5f97\u7a33\u5b9a\u670d\u52a1\u4f53\u9a8c\uff0c\u76ee\u524d\u8fd8\u5728\u5185\u6d4b\u9636\u6bb5\u3002
          Leave your email to join the priority queue and get notified first.
        </p>
        <div id="waitlist">
          <EmailCaptureForm source="homepage-hero" />
        </div>
      </section>

      <section className="card">
        <h2>Model Navigation</h2>
        <p className="section-copy">
          Every model has a dedicated page with breadcrumb and tab links to push
          authority back to higher-level pages.
        </p>
        <ModelTabs />
      </section>

      <section id="models" className="card">
        <h2>Mainstream Model API Pages</h2>
        <div className="model-grid">
          {models.map((model) => (
            <article key={model.slug} className="model-card">
              <Image
                src={model.image}
                alt={`${model.name} ${crabApi}`}
                width={640}
                height={360}
              />
              <h3>{model.name}</h3>
              <p>{model.intro}</p>
              <Link href={`/models/${model.slug}`} className="btn-link">
                View {model.name} Page
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="card">
        <h2>Long-tail SEO Coverage</h2>
        <p className="section-copy">
          This page and model detail pages are built around high-intent keyword
          clusters:
        </p>
        <ul className="feature-list">
          {longTailKeywords.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="card">
        <h2>Customer Quotes</h2>
        <div className="quote-grid">
          {testimonials.map((quote) => (
            <blockquote key={quote.name} className="quote-item">
              <p>{quote.text}</p>
              <cite>{quote.name}</cite>
            </blockquote>
          ))}
        </div>
      </section>

      <section id="faq" className="card">
        <h2>FAQ</h2>
        <div className="faq-list">
          {faqItems.map((item) => (
            <details key={item.question}>
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <footer className="footer">
        <p>{siteName} - {siteTagline}</p>
      </footer>
    </main>
  );
}
