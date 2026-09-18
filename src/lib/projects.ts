export interface Project {
  id: number;
  category: string;
  title: string;
  shortDescription: string;
  readMoreCtaText: string;
  expandedDate: string;
  organization?: string;
  fullDescription: string;
  tags: string[];
  outcome: {
    highlight: string;
    details?: string;
  };
  /** Link to the full write-up/report. Omit for confidential client work (e.g. BIIOS engagements). */
  reportUrl?: string;
}

export const projects: Project[] = [
  {
    id: 0,
    category: 'Field research',
    title: 'When a UPI payment fails: 51 vendors, surveyed',
    shortDescription:
      'Fifty-one street vendors across nine Pimpri-Chinchwad markets, surveyed on how digital payments hold up at a working stall.',
    readMoreCtaText: 'Read more ↓',
    expandedDate: 'Feb–Mar 2026 · Field research',
    fullDescription:
      'I wrote the questionnaire and ran the fieldwork across nine commercial areas, covering vendors in eight trades. The analysis looked at adoption, what vendors do when a transaction fails, and where the payment system leaves them stuck.',
    tags: ['Survey design', 'Likert analysis', 'Excel'],
    outcome: {
      highlight: '96.1% had adopted UPI. 74.5% still hit connectivity failures.',
      details: 'The write-up ran to 33 pages and named seven barriers to financial inclusion.',
    },
    // Independent field research, not client work — the full write-up is public.
    reportUrl: 'https://bahi-khaata.vercel.app/posts/51-vendors-upi-adoption',
  },
  {
    id: 1,
    category: 'GTM strategy',
    title: 'Go-to-market for a first product launch',
    shortDescription:
      'A client taking its first product to market with no clear picture of the buyer or the channel. I ran the research and built the plan.',
    readMoreCtaText: 'Read more ↓',
    expandedDate: 'Jul–Sep 2026 · BIIOS Startup Consulting',
    fullDescription:
      'Sized the market, mapped the competition, and worked out where the product had room to win. That became a positioning and channel plan the client used to launch.',
    tags: ['Market research', 'GTM strategy', 'Benchmarking'],
    outcome: {
      highlight: "Delivered as the client's launch-stage go-to-market plan.",
    },
  },
  {
    id: 2,
    category: 'Digital audit',
    title: 'Two audits: a lead funnel and a website',
    shortDescription:
      'Two client accounts at once. One was paying too much for leads that never converted; the other needed its website measured against its competitors.',
    readMoreCtaText: 'Read more ↓',
    expandedDate: 'Jul–Sep 2026 · BIIOS Startup Consulting',
    fullDescription:
      'For a capital advisory firm, I traced the lead funnel from first contact to close and worked out the cost sitting at each stage. For the second account, a full website audit: structure, positioning, and how it compared with competitors.',
    tags: ['Funnel analysis', 'Digital audit', 'Positioning'],
    outcome: {
      highlight: 'Identified the funnel stages losing the advisory firm its leads, with the cost attached to each.',
      details: 'The website audit came back with a specific list of structure and positioning fixes.',
    },
  },
  {
    id: 3,
    category: 'Compliance',
    title: 'Where Ind AS 10 quietly breaks',
    shortDescription:
      "One SME's fixed-asset disclosures, read line by line against what the standard requires.",
    readMoreCtaText: 'Read more ↓',
    expandedDate: 'Sep–Oct 2025 · Financial reporting',
    fullDescription:
      "Checked Mittal Sales Corporation's Property, Plant & Equipment disclosures against Ind AS 10, then wrote up what the gaps meant for the accounts and for the way the business is run.",
    tags: ['Ind AS / IFRS', 'Disclosure review', 'PP&E'],
    outcome: {
      highlight: '5+ recurring gaps in how PP&E was reported.',
    },
  },
  {
    id: 4,
    category: 'CRM',
    title: 'Cetaphil vs CeraVe: two rivals, one customer base',
    shortDescription:
      'Two skincare brands competing for the same buyer, compared on how they actually handle the people who buy from them.',
    readMoreCtaText: 'Read more ↓',
    expandedDate: 'Jan–Feb 2025 · Competitive analysis',
    fullDescription:
      'Went through both brands’ social accounts, websites and customer reviews, looking at reply speed, what gets a response, and whether buyers come back. The differences between the two became the recommendations.',
    tags: ['CRM', 'Social listening', 'Review analysis'],
    outcome: {
      highlight: '8+ CRM gaps for each brand, across response rate, reply time and repeat business.',
    },
  },
];
