export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  badge?: string;
  iconName: string;
  image: string;
  features: string[];
  isPrimaryFocus?: boolean;
}

export interface BeforeAfterItem {
  id: string;
  title: string;
  location: string;
  description: string;
  category: string;
  beforeImage: string;
  afterImage: string;
  stats: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: 'all' | 'renovation' | 'construction' | 'annex' | 'sandwich' | 'hangars';
  categoryLabel: string;
  location: string;
  image: string;
  description: string;
  highlights: string[];
}

export interface ProcessStep {
  stepNumber: number;
  title: string;
  description: string;
  details: string;
  iconName: string;
}

export interface TrustBadge {
  title: string;
  desc: string;
  iconName: string;
}
