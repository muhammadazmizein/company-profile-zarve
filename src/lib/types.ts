import type { LucideIcon } from "lucide-react";

export interface NavLink {
  href: string;
  key: "home" | "products" | "plans" | "contact";
}

export interface Feature {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface ProductModule {
  code: string;
  name: string;
  brand: string;
  tagline: string;
  description: string;
  points: string[];
  icon: LucideIcon;
}

export interface JourneyStep {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface PricingPlan {
  name: string;
  audience: string;
  features: string[];
  highlighted?: boolean;
}

export interface ComparisonColumn {
  heading: string;
  subheading: string;
  items: string[];
  tone: "neutral" | "brand";
}

export interface ContactDetail {
  label: string;
  value: string;
  icon: LucideIcon;
  href?: string;
}

export interface IndustryItem {
  title: string;
  description: string;
  icon: LucideIcon;
  image: string;
}
