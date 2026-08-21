export type BlogPost = {
  id: number;
  title: string;
  subtitle?: string;
  date: string;
  readTime: string;
  category: string[];
  summary: string;
  keyTakeaways?: string[];
  linkedinUrl: string;
  featured?: boolean;
};

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Building Rate-Shield: Pluggable Rate Limiting in Node.js",
    subtitle: "Why the rate limiting algorithm you choose matters at scale",
    date: "Dec 2024",
    readTime: "3 min read",
    category: ["System Design", "Rate Limiting", "Node.js", "NPM"],
    summary:
      "A deep dive into why picking the wrong rate-limiting algorithm creates memory & computation bottlenecks at scale, and how Rate-Shield empowers developers to select algorithms dynamically based on real traffic requirements.",
    keyTakeaways: [
      "Dynamic algorithm selection: Fixed Window, Sliding Window, Token Bucket, and Leaky Bucket.",
      "Pluggable Redis backend with atomic transaction support.",
      "Built-in circuit breaker fallback to maintain API uptime during Redis outages.",
    ],
    linkedinUrl:
      "https://www.linkedin.com/posts/krushna-raut-347a3b27b_i-built-a-npm-package-for-rate-limiting-activity-7443879952799649793-4dch",
    featured: true,
  },
  {
    id: 2,
    title: "System Design Breakdown: Why Token Bucket Isn't Always the Answer",
    subtitle: "Fixed Window vs. Leaky Bucket vs. Sliding Window counter algorithms at scale",
    date: "Dec 2024",
    readTime: "4 min read",
    category: ["System Design", "Rate Limiting", "Backend Engineering", "Scalability"],
    summary:
      "Everyone defaults to Token Bucket because AWS and Stripe use it—but every algorithm has memory & CPU trade-offs. Token bucket adds floating-point math overhead for admin panels, whereas Leaky Bucket enforces zero-burst payment processing, and Sliding Window scales up to 100M timestamps unless bounded.",
    keyTakeaways: [
      "Internal Admin Panels: Fixed Window is sufficient; Token Bucket is engineering theater.",
      "Payment Processing: Leaky Bucket enforces constant drain rate (controlled burst is a liability).",
      "Memory Footprint: Sliding Window stores 1 timestamp per request; Fixed Window stores only 2 counters per user.",
      "Industry Usage: NGINX defaults to Leaky Bucket, Cloudflare uses Sliding Window at the edge, AWS uses Token Bucket for API Gateway.",
    ],
    linkedinUrl:
      "https://www.linkedin.com/posts/krushna-raut-347a3b27b_systemdesign-ratelimiting-backendengineering-activity-7443542522586472448-mzbM",
    featured: true,
  },
  {
    id: 3,
    title: "The 3-Second Problem That's Costing Companies Millions",
    subtitle: "Understanding Caching Architecture, Cache Miss vs. Hit & Twitter's Fail Whale",
    date: "Aug 2024",
    readTime: "4 min read",
    category: ["System Design", "Caching", "Performance", "Backend"],
    summary:
      "Fetching static or un-cached data repeatedly from your database stalls performance and burns infrastructure budgets. An architectural breakdown of how in-memory RAM caching reduces response times from 3 seconds to 0.01 seconds (300x faster) and offloads 99% of DB stress.",
    keyTakeaways: [
      "The Root Cause: Querying the DB 1,000 times for identical data is like driving to the store for every glass of milk.",
      "Historical Lesson: Twitter's early 'Fail Whale' wasn't caused by bad engineers, but missing cache layers under celebrity traffic spikes.",
      "Performance Impact: Cache hits return from RAM in ~0.01s vs slow 3s disk database queries.",
      "Architectural Triad: Multi-Tenancy (Cost), Load Balancers (Availability), Caching (Performance).",
    ],
    linkedinUrl:
      "https://www.linkedin.com/posts/krushna-raut-347a3b27b_the-3-second-problem-thats-costing-companies-activity-7406408042835218432-XFBx",
  },
  {
    id: 4,
    title: "Demystifying Load Balancers: The McDonald's Cashier Analogy",
    subtitle: "How reverse proxies & load balancers scale web application traffic",
    date: "Aug 2024",
    readTime: "3 min read",
    category: ["System Design", "DevOps", "Infrastructure", "Scalability"],
    summary:
      "Understanding load balancers through a simple cashier & manager analogy. A single server handling all requests creates long queues and single points of failure, while a load balancer routes traffic across healthy worker nodes seamlessly.",
    keyTakeaways: [
      "Redundancy: Server 1 crashes? Traffic instantly reroutes to servers 2, 3, and 4 without downtime.",
      "Scalability: Handle traffic spikes (e.g. Black Friday) by spinning up nodes without altering application code.",
      "High Availability: Continuous health checks ensure requests only hit operational, responsive servers.",
      "Performance: Distributing load across 4 servers at 25% capacity is drastically faster than 1 server at 100%.",
    ],
    linkedinUrl:
      "https://www.linkedin.com/posts/krushna-raut-347a3b27b_load-balancer-imagine-a-mcdonalds-with-activity-7406018306316394496-H4cK",
  },
  {
    id: 5,
    title: "The Multi-Tenancy Mistake That Cost a Startup $2M",
    subtitle: "Shared Row-Level Multi-Tenancy vs. Dedicated Database Per Tenant",
    date: "Aug 2024",
    readTime: "4 min read",
    category: ["System Design", "SaaS", "Multi-Tenancy", "Database"],
    summary:
      "Evaluating multi-tenant database designs for modern SaaS. Explaining how row-level isolation with tenant_id cuts infrastructure costs by $540,000/yr compared to dedicated per-tenant databases, while examining security and compliance trade-offs.",
    keyTakeaways: [
      "Shared Database (Row-Level): Single database separated by tenant_id. Cost-efficient and scalable (used by Shopify), but requires careful query scoping.",
      "Database Per Tenant: Dedicated isolated DB per customer. Offers maximum compliance and security (used by SAP/Oracle), but incurs high cost and maintenance overhead.",
      "Financial Reality: Multi-tenancy architecture is often the difference between a profitable SaaS and burning capital on idle infrastructure.",
    ],
    linkedinUrl:
      "https://www.linkedin.com/posts/krushna-raut-347a3b27b_multi-tenancy-systemdesign-saas-activity-7406408042835218432-XFBx",
  },
];

export const blogCategories = [
  "All",
  "System Design",
  "Rate Limiting",
  "Caching",
  "Infrastructure",
  "SaaS",
  "Node.js",
];
