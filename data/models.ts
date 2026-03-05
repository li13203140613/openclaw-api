export type ModelFaq = {
  question: string;
  answer: string;
};

export type ModelInfo = {
  slug: string;
  name: string;
  headline: string;
  keyword: string;
  intro: string;
  image: string;
  quote: {
    text: string;
    author: string;
    role: string;
  };
  features: string[];
  faqs: ModelFaq[];
  longTailKeywords: string[];
};

const crabApi = "\u5c0f\u9f99\u867e API";

export const models: ModelInfo[] = [
  {
    slug: "minimax-2-5",
    name: "MiniMax 2.5",
    headline: `MiniMax 2.5 ${crabApi} Gateway`,
    keyword: `openclaw-api ${crabApi} MiniMax 2.5 API`,
    intro:
      `OpenClaw API provides a unified MiniMax 2.5 endpoint for chat, summary, and automation workflows. ` +
      `Core term coverage: openclaw-api, ${crabApi}, MiniMax API.`,
    image: "/models/minimax-2-5.svg",
    quote: {
      text: "After switching to OpenClaw API, our MiniMax integration time dropped from days to hours.",
      author: "Product Team",
      role: "SaaS AI Team Lead",
    },
    features: [
      "Unified request format for faster model switching",
      "Stable error conventions for retries and observability",
      "Source-level tracking for traffic and conversion analysis",
      "Compatible with mainstream chat completion workflows",
    ],
    faqs: [
      {
        question: "How do I call MiniMax 2.5 on OpenClaw API?",
        answer: "Keep the same endpoint format and set model to MiniMax 2.5.",
      },
      {
        question: "Is this page optimized for SEO?",
        answer: `Yes. It targets openclaw-api + ${crabApi} + MiniMax long-tail terms.`,
      },
    ],
    longTailKeywords: [
      "minimax 2.5 api proxy",
      "openclaw-api minimax endpoint",
      "minimax model integration",
    ],
  },
  {
    slug: "deepseek-r1",
    name: "DeepSeek R1",
    headline: `DeepSeek R1 ${crabApi} Access Page`,
    keyword: `openclaw-api ${crabApi} DeepSeek R1 API`,
    intro:
      `OpenClaw API unifies DeepSeek R1 with the same auth and payload shape used by other models. ` +
      `Ideal for reasoning-heavy and developer workflows.`,
    image: "/models/deepseek-r1.svg",
    quote: {
      text: "DeepSeek R1 works better in our reasoning tasks, and OpenClaw API removed migration friction.",
      author: "Engineering Team",
      role: "AI Platform Engineer",
    },
    features: [
      "Unified gateway across vendors",
      "Lower migration cost when model strategy changes",
      "Standard metrics and logs for multi-model operations",
      "Smooth fit for existing backend service patterns",
    ],
    faqs: [
      {
        question: "What is DeepSeek R1 best for?",
        answer: "It is suitable for reasoning, analysis, and code-related assistant tasks.",
      },
      {
        question: "Can I switch from another model quickly?",
        answer: "Yes. Keep your integration shape, then tune prompts and sampling params.",
      },
    ],
    longTailKeywords: [
      "deepseek r1 api integration",
      "deepseek r1 api proxy",
      "openclaw-api deepseek",
    ],
  },
  {
    slug: "qwen2-5-max",
    name: "Qwen2.5-Max",
    headline: `Qwen2.5-Max ${crabApi} API Page`,
    keyword: `openclaw-api ${crabApi} Qwen2.5-Max API`,
    intro:
      `Qwen2.5-Max on OpenClaw API supports unified management, request routing, and analytics. ` +
      `Useful for content automation and assistant operations.`,
    image: "/models/qwen2-5-max.svg",
    quote: {
      text: "Qwen2.5-Max with OpenClaw API increased our content throughput while keeping one backend path.",
      author: "Growth Team",
      role: "Content Ops Manager",
    },
    features: [
      "Single gateway token strategy for multiple models",
      "Structured responses for workflow automation",
      "Lower maintenance cost with one API pattern",
      "Built for SEO-ready model pages and internal linking",
    ],
    faqs: [
      {
        question: "Why create a dedicated Qwen2.5-Max page?",
        answer: "Dedicated pages capture model-specific search intent and return authority to parent pages.",
      },
      {
        question: "Can Qwen and MiniMax share one integration?",
        answer: "Yes. Most of the API structure can stay the same on OpenClaw API.",
      },
    ],
    longTailKeywords: [
      "qwen2.5-max api gateway",
      "qwen model api page",
      "openclaw-api qwen",
    ],
  },
  {
    slug: "glm-4-5",
    name: "GLM-4.5",
    headline: `GLM-4.5 ${crabApi} Unified Endpoint`,
    keyword: `openclaw-api ${crabApi} GLM-4.5 API`,
    intro:
      `GLM-4.5 can be delivered through OpenClaw API with standardized auth, payloads, and tracking. ` +
      `This supports resilient multi-model deployment.`,
    image: "/models/glm-4-5.svg",
    quote: {
      text: "Model replacement became much faster once we moved GLM traffic into OpenClaw API.",
      author: "Infra Team",
      role: "Backend Architect",
    },
    features: [
      "Unified signature and payload styles",
      "Consistent audit logs for compliance workflows",
      "Easy source segmentation for business attribution",
      "Useful fallback option in multi-model routing",
    ],
    faqs: [
      {
        question: "Is GLM-4.5 suitable for production usage?",
        answer: "Yes, with retry, timeout, and caching controls in your app layer.",
      },
      {
        question: "Do I need a separate backend service for GLM?",
        answer: "No. OpenClaw API lets you keep one integration surface.",
      },
    ],
    longTailKeywords: [
      "glm-4.5 api proxy",
      "glm api unified endpoint",
      "openclaw-api glm",
    ],
  },
  {
    slug: "claude-3-7-sonnet",
    name: "Claude 3.7 Sonnet",
    headline: `Claude 3.7 Sonnet ${crabApi} Page`,
    keyword: `openclaw-api ${crabApi} Claude 3.7 Sonnet API`,
    intro:
      `Claude 3.7 Sonnet via OpenClaw API is optimized for long-context and high-quality generation use cases. ` +
      `It stays within the same integration contract as your other models.`,
    image: "/models/claude-3-7-sonnet.svg",
    quote: {
      text: "We routed quality-critical tasks to Claude 3.7 Sonnet without changing our integration contract.",
      author: "AI Product Team",
      role: "Content Intelligence Lead",
    },
    features: [
      "Great fit for long-context text tasks",
      "Same integration contract as other models",
      "Lower cross-model QA and rollout overhead",
      "Strong support for model-specific SEO pages",
    ],
    faqs: [
      {
        question: "What tasks fit Claude 3.7 Sonnet?",
        answer: "Long-form writing, complex QA, and high-quality generation workflows.",
      },
      {
        question: "What is the OpenClaw API advantage?",
        answer: "One integration, multiple models, and lower engineering overhead.",
      },
    ],
    longTailKeywords: [
      "claude 3.7 sonnet api access",
      "claude api proxy",
      "openclaw-api claude",
    ],
  },
  {
    slug: "gpt-4-1",
    name: "GPT-4.1",
    headline: `GPT-4.1 ${crabApi} API Hub`,
    keyword: `openclaw-api ${crabApi} GPT-4.1 API`,
    intro:
      `OpenClaw API exposes GPT-4.1 with unified routing and payload design for production integrations. ` +
      `Suitable for assistant, knowledge, and tool-enabled workflows.`,
    image: "/models/gpt-4-1.svg",
    quote: {
      text: "We run GPT-4.1 and other models together through OpenClaw API with better control over quality and cost.",
      author: "Platform Team",
      role: "AI Application Engineer",
    },
    features: [
      "Fast model strategy switching by route-level config",
      "Reduced vendor lock-in in backend architecture",
      "Reusable SEO model-page template at scale",
      "Supports authority flow from detail pages to homepage",
    ],
    faqs: [
      {
        question: "How should I place keywords on GPT-4.1 page?",
        answer: `Use openclaw-api + ${crabApi} + GPT-4.1 as primary keyword clusters.`,
      },
      {
        question: "Why does each model need its own page?",
        answer: "Dedicated pages capture specific search intents and improve topical relevance.",
      },
    ],
    longTailKeywords: [
      "gpt-4.1 api route",
      "gpt api integration",
      "openclaw-api gpt",
    ],
  },
];

export const modelMap = new Map(models.map((model) => [model.slug, model]));
