export interface LedgerEntry {
  date: string;
  title: string;
  section: string;
  readTime: string;
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
    entries: [
      { date: '15-03-2026', title: 'What 51 Street Vendors Taught Me About UPI', section: 'Research', readTime: '4 min' },
      { date: '05-10-2025', title: 'Why Ind AS Feels Harder for SMEs Than It Should', section: 'Policy', readTime: '3 min' },
      { date: '12-12-2024', title: 'What a Dividend Yield Does Not Tell You', section: 'Markets', readTime: '3 min' },
      { date: '24-11-2024', title: 'When a TV Show Moves a Demand Curve', section: 'Markets', readTime: '2 min' },
      { date: '28-10-2024', title: 'The Ozone Treaty Worked. Almost Nobody Knows.', section: 'Policy', readTime: '2 min' },
    ],
  },
  {
    id: 'emi-calculator',
    name: 'EMI Calculator',
    tagline: 'Where every rupee of a loan payment goes.',
    status: 'in-development',
    summary:
      'A loan calculator that shows where each instalment actually goes: how much is interest, how the balance falls, and what one early payment changes.',
  },
];
