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
  outcomeBg?: 'marigold' | 'paper';
}

export const projects: Project[] = [
  {
    id: 0,
    category: 'Field research',
    title: 'Impact of Digital Payments on Street Vendors',
    shortDescription:
      'Field survey across 9 locations in Pimpri-Chinchwad, analysing UPI adoption and transaction behaviour among 51 street vendors.',
    readMoreCtaText: 'Read more ↓',
    expandedDate: 'Feb–Mar 2026 · Field research',
    fullDescription:
      'Designed the questionnaire and ran a field survey across 9 commercial locations in Pimpri-Chinchwad, collecting primary data from 51 vendors across 8 business categories, then analysed UPI adoption and transaction behaviour.',
    tags: ['Survey design', 'Likert analysis', 'Excel'],
    outcome: {
      highlight: '96.1% had adopted UPI. 74.5% still hit connectivity failures.',
      details: 'Compiled into a 33-page report naming 7 barriers to financial inclusion.',
    },
    outcomeBg: 'marigold',
  },
  {
    id: 1,
    category: 'GTM strategy',
    title: 'DUO product launch: market research & GTM',
    shortDescription:
      'Led market research and go-to-market analysis end to end for a new product launch, working directly on the client engagement.',
    readMoreCtaText: 'Read more ↓',
    expandedDate: 'Jul–Oct 2026 · BIIOS Startup Consulting',
    fullDescription:
      "Led market research and go-to-market analysis end to end for Briomagic Pvt. Ltd.'s new product launch, working directly on the client engagement.",
    tags: ['Market research', 'GTM strategy', 'Benchmarking'],
    outcome: {
      highlight: 'A launch-stage GTM recommendation delivered to the client team.',
    },
    outcomeBg: 'paper',
  },
  {
    id: 2,
    category: 'Digital audit',
    title: 'Sixwalls Capital: market research & digital audit',
    shortDescription:
      "Traced lead costs for a capital advisory client and audited a second client's site structure and positioning against peers.",
    readMoreCtaText: 'Read more ↓',
    expandedDate: 'Jul–Oct 2026 · BIIOS Startup Consulting',
    fullDescription:
      'Traced where leads were lost and what they cost for a capital advisory client. Also authored a full website audit for Blockphrase, benchmarking structure and positioning against industry peers.',
    tags: ['Funnel analysis', 'Digital audit', 'Positioning'],
    outcome: {
      highlight: 'Diagnosed high lead costs and named the funnel drop-off points.',
      details: 'The Blockphrase audit identified key gaps in site structure and positioning.',
    },
    outcomeBg: 'paper',
  },
  {
    id: 3,
    category: 'Compliance',
    title: 'SMEs and Ind AS 10 compliance',
    shortDescription:
      "Reviewed a company's PP&E disclosures against the standard, then wrote up the financial and operational implications.",
    readMoreCtaText: 'Read more ↓',
    expandedDate: 'Sep–Oct 2025 · Financial reporting',
    fullDescription:
      "Reviewed Mittal Sales Corporation's disclosures against the standard's reporting requirements for Property, Plant & Equipment, then wrote up the financial and operational implications.",
    tags: ['Ind AS / IFRS', 'Disclosure review', 'PP&E'],
    outcome: {
      highlight: '5+ recurring compliance gaps found in PP&E reporting.',
    },
    outcomeBg: 'paper',
  },
  {
    id: 4,
    category: 'CRM',
    title: 'CRM analysis: Cetaphil & CeraVe',
    shortDescription:
      'Compared social presence, site structure and reviews across two competing skincare brands into concrete recommendations.',
    readMoreCtaText: 'Read more ↓',
    expandedDate: 'Jan–Feb 2025 · Competitive analysis',
    fullDescription:
      'Compared social presence, website structure and customer reviews across two competing skincare brands, then wrote concrete recommendations from the differences.',
    tags: ['CRM', 'Social listening', 'Review analysis'],
    outcome: {
      highlight: '8+ specific CRM gaps per brand across response rate, reply time and loyalty.',
    },
    outcomeBg: 'paper',
  },
];
