export interface ImageAsset {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

export interface HeroSection {
  _type: 'hero';
  title: string[]; // For line-by-line animation
  subtitle: string;
  badgeText?: string;
  primaryCta: {
    label: string;
    href: string;
  };
  secondaryCta: {
    label: string;
    href: string;
  };
  dashboardImage: ImageAsset;
}

export interface FeatureItem {
  _type: 'feature';
  title: string;
  description: string;
  iconName: string; // We'll map string names to Lucide icons
  colSpan?: number; // For Bento grid layout (1, 2, or 3)
  bgGradient?: boolean;
  accentColor?: string; // Optional accent color for styling
}

export interface FeaturesSection {
  _type: 'features';
  heading: string;
  subHeading: string;
  items: FeatureItem[];
}

export interface LandingPage {
  hero: HeroSection;
  features: FeaturesSection;
}
