export interface LedgerEntry {
  date: string;
  title: string;
  section: string;
  readTime: string;
}

/** Numbers for a worked EMI example, used to drive the "loan pays itself down" demo. */
export interface AmortizationDemo {
  principalLabel: string;
  rateLabel: string;
  tenureLabel: string;
  /** Animated by the demo's scroll hook. */
  emi: number;
  emiLabel: string;
  totalInterestLabel: string;
  totalRepaymentLabel: string;
  principalPct: number;
  interestPct: number;
}

export interface Build {
  id: string;
  name: string;
  /** The project's own one-line description. */
  tagline: string;
  status: 'live' | 'in-development';
  url?: string;
  urlLabel?: string;
  /** One or two sentences in Swayam's voice, for the portfolio. */
  summary: string;
  /** Recent entries, used to drive the "ledger writes itself" scroll demo. */
  entries?: LedgerEntry[];
  /** A worked example, used to drive the "loan pays itself down" scroll demo. */
  demo?: AmortizationDemo;
  /** Small print shown next to the call-to-action. */
  note?: string;
}

export const builds: Build[] = [
  {
    id: 'bahi-khaata',
    name: 'Bahi Khaata',
    tagline: 'Notes on markets, money, and policy, written while learning it.',
    status: 'live',
    url: 'https://bahi-khaata.vercel.app',
    urlLabel: 'bahi-khaata.vercel.app',
    summary:
      'A bilingual ledger of what I am learning about markets, money, and policy. Each entry is field research or a financial model, written while I work through it rather than after.',
    note: 'English, हिन्दी, and Hinglish. No cookies, no trackers.',
    // Static by design: the site exposes no feed. Keep in sync if it gains entries.
    // Kept short (3, one per section) on purpose — a shorter panel means less
    // pinned scroll distance on phones, which is also part of what fixes the
    // Bahi Khaata/Horizon overlap below.
    entries: [
      { date: '15-03-2026', title: 'What 51 Street Vendors Taught Me About UPI', section: 'Research', readTime: '4 min' },
      { date: '05-10-2025', title: 'Why Ind AS Feels Harder for SMEs Than It Should', section: 'Policy', readTime: '3 min' },
      { date: '12-12-2024', title: 'What a Dividend Yield Does Not Tell You', section: 'Markets', readTime: '3 min' },
    ],
  },
  {
    id: 'horizon',
    name: 'Horizon',
    tagline: 'Money changes value over its horizon.',
    status: 'live',
    url: 'https://horizon-calc.vercel.app',
    urlLabel: 'horizon-calc.vercel.app',
    summary:
      'Three linked calculators for EMI, future value, and present value. Every result is a balance drawn over time, with the amortization schedule underneath and a link, CSV, or PDF to take it with you.',
    note: 'Shareable result links. CSV and PDF export. No backend.',
    // A real worked example from the calculator's own default state. Keep in
    // sync if that default changes.
    demo: {
      principalLabel: '₹10,00,000',
      rateLabel: '6.50% p.a.',
      tenureLabel: '5 yr',
      emi: 19566,
      emiLabel: '₹19,566',
      totalInterestLabel: '₹1,73,969',
      totalRepaymentLabel: '₹11,73,969',
      principalPct: 85.2,
      interestPct: 14.8,
    },
  },
];
