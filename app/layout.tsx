import type { Metadata } from "next";
import "./globals.css";
import { siteName, siteTagline, siteUrl } from "@/lib/site";

const crabApi = "\u5c0f\u9f99\u867e API";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteName} | ${crabApi} Gateway`,
    template: `%s | ${siteName}`,
  },
  description:
    `OpenClaw API offers unified model access with SEO-first landing pages. ` +
    `Core keywords: openclaw-api, ${crabApi}, model API proxy.`,
  keywords: [
    "openclaw-api",
    "OpenClaw API",
    crabApi,
    "AI model API",
    "API gateway",
    "LLM API proxy",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `${siteName} | ${crabApi} Gateway`,
    description: siteTagline,
    url: siteUrl,
    siteName,
    locale: "zh_CN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <head>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-2EN5V1G28V"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-2EN5V1G28V');
            `,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
