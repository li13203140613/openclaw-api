import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import EmailCaptureForm from "@/components/EmailCaptureForm";
import ModelTabs from "@/components/ModelTabs";
import StructuredData from "@/components/StructuredData";
import { modelMap, models } from "@/data/models";
import { siteName, siteUrl } from "@/lib/site";

type ModelPageProps = {
  params: Promise<{ slug: string }>;
};

const crabApi = "\u5c0f\u9f99\u867e API";

export function generateStaticParams() {
  return models.map((model) => ({ slug: model.slug }));
}

export async function generateMetadata({
  params,
}: ModelPageProps): Promise<Metadata> {
  const { slug } = await params;
  const model = modelMap.get(slug);

  if (!model) {
    return { title: "Model not found" };
  }

  return {
    title: `${model.name} API via OpenClaw`,
    description: model.intro,
    keywords: [
      "openclaw-api",
      crabApi,
      "OpenClaw API",
      model.name,
      model.keyword,
      ...model.longTailKeywords,
    ],
    alternates: {
      canonical: `/models/${model.slug}`,
    },
    openGraph: {
      title: `${model.name} | OpenClaw API`,
      description: model.intro,
      url: `${siteUrl}/models/${model.slug}`,
      type: "article",
    },
  };
}

export default async function ModelPage({ params }: ModelPageProps) {
  const { slug } = await params;
  const model = modelMap.get(slug);

  if (!model) {
    notFound();
  }

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "OpenClaw API Homepage",
        item: siteUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: model.name,
        item: `${siteUrl}/models/${model.slug}`,
      },
    ],
  };

  const softwareJsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: `${model.name} - OpenClaw API`,
    operatingSystem: "All",
    applicationCategory: "DeveloperApplication",
    description: model.intro,
    keywords: [model.keyword, ...model.longTailKeywords].join(", "),
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      availability: "https://schema.org/PreOrder",
    },
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: model.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <main className="site-wrap">
      <StructuredData data={[breadcrumbJsonLd, softwareJsonLd, faqJsonLd]} />

      <header className="topbar">
        <Link href="/" className="brand">
          OpenClaw API
        </Link>
        <Link href="/" className="back-home">
          Back to Homepage
        </Link>
      </header>

      <nav className="breadcrumb card" aria-label="Breadcrumb">
        <Link href="/">Home</Link>
        <span>/</span>
        <span>{model.name}</span>
      </nav>

      <section className="card model-hero">
        <p className="eyebrow">{model.keyword}</p>
        <h1>{model.headline}</h1>
        <p className="hero-copy">{model.intro}</p>
      </section>

      <section className="card">
        <h2>Model Tabs</h2>
        <ModelTabs activeSlug={model.slug} />
      </section>

      <section className="card split">
        <div>
          <h2>{model.name} Overview</h2>
          <p className="section-copy">{model.intro}</p>
        </div>
        <div className="model-visual">
          <Image
            src={model.image}
            alt={`${model.name} ${crabApi}`}
            width={640}
            height={360}
          />
        </div>
      </section>

      <section className="card">
        <h2>Customer Quote</h2>
        <blockquote className="single-quote">
          <p>{model.quote.text}</p>
          <cite>
            {model.quote.author} | {model.quote.role}
          </cite>
        </blockquote>
      </section>

      <section className="card">
        <h2>{model.name} Key Features</h2>
        <ul className="feature-list">
          {model.features.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>
      </section>

      <section className="card">
        <h2>Long-tail Keywords</h2>
        <ul className="feature-list">
          {model.longTailKeywords.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="card">
        <h2>FAQ</h2>
        <div className="faq-list">
          {model.faqs.map((faq) => (
            <details key={faq.question}>
              <summary>{faq.question}</summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="card">
        <h2>Get {model.name} API Access</h2>
        <p className="section-copy">
          Submit your email and join the priority queue for OpenClaw API beta
          slots.
        </p>
        <EmailCaptureForm source={`model-${model.slug}`} />
      </section>

      <footer className="footer">
        <p>
          {siteName} | {model.name}
        </p>
      </footer>
    </main>
  );
}
