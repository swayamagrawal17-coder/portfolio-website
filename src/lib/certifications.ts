export interface Certification {
  id: number;
  title: string;
  provider: string;
  providerMeta: string;
  image: string;
  imageAlt: string;
  description: string;
  tags: string[];
  verifyUrl: string;
}

export const certifications: Certification[] = [
  {
    id: 0,
    title: 'Google Project Management Certificate',
    provider: 'Coursera',
    providerMeta: 'Coursera · Google Career Certificates',
    image: '/assets/cert-google-pm.png',
    imageAlt: 'Google Project Management Certificate',
    description:
      'Covered how to run a project end to end: scoping and planning, budgeting, risk tracking, and keeping stakeholders aligned as the work moves. Structured around both Agile and traditional project management approaches.',
    tags: ['Agile', 'Risk tracking', 'Stakeholder management'],
    verifyUrl: 'https://coursera.org/verify/professional-cert/S0D34S0S622I',
  },
  {
    id: 1,
    title: 'Finance & Quantitative Modeling for Analysts',
    provider: 'Coursera',
    providerMeta: 'Coursera · University of Pennsylvania',
    image: '/assets/cert-upenn.png',
    imageAlt: 'Finance & Quantitative Modeling for Analysts certificate',
    description:
      'A specialization on how financial decisions actually get modeled: time value of money, forecasting, and building the spreadsheet models analysts use to size a decision rather than just describe it.',
    tags: ['Financial modeling', 'Forecasting', 'Valuation'],
    verifyUrl: 'https://coursera.org/verify/specialization/CQDQZX94NSF0',
  },
  {
    id: 2,
    title: 'Citi Investment Banking Job Simulation',
    provider: 'Job simulation',
    providerMeta: 'Job simulation · Citi via Forage',
    image: '/assets/cert-citi.png',
    imageAlt: 'Citi Investment Banking Job Simulation certificate',
    description:
      'A self-paced simulation of a real analyst task at Citi, working from source materials through to a client-ready recommendation.',
    tags: ['Analyst workflow', 'Financial analysis', 'Client deliverables'],
    verifyUrl:
      'https://www.theforage.com/completion-certificates/8eNRcRqBZM9HLvwGw/amBSJDTDDFcYiKq9Z_8eNRcRqBZM9HLvwGw_6970670f782c5fa28079b893_1769595981927_completion_certificate.pdf',
  },
  {
    id: 3,
    title: 'Deloitte Data Analytics Job Simulation',
    provider: 'Job simulation',
    providerMeta: 'Job simulation · Deloitte via Forage',
    image: '/assets/cert-deloitte.png',
    imageAlt: 'Deloitte Data Analytics Job Simulation certificate',
    description:
      'A self-paced simulation of a real analyst task at Deloitte, working through data analysis and forensic technology exercises using real-world scenarios.',
    tags: ['Data analysis', 'Forensic technology'],
    verifyUrl:
      'https://www.theforage.com/completion-certificates/9PBTqmSxAf6zZTseP/io9DzWKe3PTsiS6GG_9PBTqmSxAf6zZTseP_6970670f782c5fa28079b893_1768979393582_completion_certificate.pdf',
  },
  {
    id: 4,
    title: 'Google AI Essentials',
    provider: 'Coursera',
    providerMeta: 'Coursera · Google',
    image: '/assets/cert-google-ai-essentials.png',
    imageAlt: 'Google AI Essentials certificate',
    description:
      'A practical introduction to using generative AI tools responsibly at work: writing effective prompts, evaluating AI output critically, and knowing where automation helps versus where judgment still matters.',
    tags: ['Prompt writing', 'AI literacy', 'Responsible use'],
    verifyUrl: 'https://coursera.org/verify/specialization/7391ZSPQ5788',
  },
];
