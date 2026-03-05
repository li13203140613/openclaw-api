import Link from "next/link";
import { models } from "@/data/models";

type ModelTabsProps = {
  activeSlug?: string;
};

export default function ModelTabs({ activeSlug }: ModelTabsProps) {
  return (
    <div className="tabs-shell" aria-label="模型页面导航">
      {models.map((model) => {
        const active = model.slug === activeSlug;
        return (
          <Link
            key={model.slug}
            href={`/models/${model.slug}`}
            className={`tab-link ${active ? "active" : ""}`}
          >
            {model.name}
          </Link>
        );
      })}
    </div>
  );
}
