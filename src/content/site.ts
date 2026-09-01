import {
  BarChart3,
  Battery,
  Boxes,
  Building2,
  Car,
  ChartNoAxesCombined,
  Check,
  CircleCheck,
  Clock3,
  CreditCard,
  FileText,
  Gauge,
  Globe,
  Handshake,
  HandCoins,
  HandHelping,
  Landmark,
  Layers,
  Lightbulb,
  MapPin,
  Mail,
  Monitor,
  Network,
  Phone,
  PiggyBank,
  Radar,
  Receipt,
  Route,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Target,
  Truck,
  Users,
  Wallet,
  Wrench,
  X,
} from "lucide-react";

import vehiclesCars from "@/assets/vehicles/vehicles-1.png";
import vehiclesVanBus from "@/assets/vehicles/vehicles-2.png";
import vehiclesBoxTruck from "@/assets/vehicles/vehicles-3.png";
import vehiclesTaxi from "@/assets/vehicles/vehicles-4.png";
import vehiclesCorporateSuv from "@/assets/vehicles/vehicles-5.png";
import vehiclesEv from "@/assets/vehicles/vehicles-6.png";

import type {
  ComparisonColumn,
  ContactDetail,
  Feature,
  IndustryItem,
  JourneyStep,
  NavLink,
  PricingPlan,
  ProductModule,
} from "@/lib/types";

/**
 * Minimal shape shared by `useTranslations()` and `getTranslations()` —
 * only `.raw()` is needed here since all content below is list/array data.
 */
interface ContentTranslator {
  raw: (key: string) => unknown;
}

export const siteMeta = {
  name: "ZARVE",
  legalName: "PT Riline Velocity Express",
};

export const navLinks: NavLink[] = [
  { href: "/", key: "home" },
  { href: "/products", key: "products" },
  { href: "/plans", key: "plans" },
  { href: "/contact", key: "contact" },
];

export const iconsCheckX = { Check, X };

export function getHeroBenefits(t: ContentTranslator): Feature[] {
  const items = t.raw("heroBenefits") as { title: string; description: string }[];
  const icons = [Monitor, Lightbulb, ShieldCheck, ChartNoAxesCombined];
  return items.map((item, index) => ({ ...item, icon: icons[index] }));
}

export function getChallengeCards(
  t: ContentTranslator,
): { code: string; title: string; description: string; icon: Feature["icon"] }[] {
  const items = t.raw("challengeCards") as { title: string; description: string }[];
  const codes = ["01", "02", "03", "04", "05", "06", "07", "08"];
  const icons = [Car, Users, Route, Wrench, Landmark, Boxes, CreditCard, Target];
  return items.map((item, index) => ({ ...item, code: codes[index], icon: icons[index] }));
}

export function getProductModules(t: ContentTranslator): ProductModule[] {
  const items = t.raw("productModules") as Omit<ProductModule, "code" | "icon">[];
  const codes = ["01", "02", "03", "04", "05", "06", "07", "08"];
  const icons = [Car, Route, Users, Wrench, Boxes, Landmark, Wallet, CreditCard];
  return items.map((item, index) => ({ ...item, code: codes[index], icon: icons[index] }));
}

export function getPaymentSteps(t: ContentTranslator): Feature[] {
  const items = t.raw("paymentSteps") as { title: string; description: string }[];
  const icons = [CreditCard, Receipt, FileText, PiggyBank, Landmark, BarChart3];
  return items.map((item, index) => ({ ...item, icon: icons[index] }));
}

export function getManagementFeatures(t: ContentTranslator): Feature[] {
  const items = t.raw("managementFeatures") as { title: string; description: string }[];
  const icons = [Car, Gauge, HandCoins, ChartNoAxesCombined, Receipt, Landmark, Wrench, Users, Target, Layers];
  return items.map((item, index) => ({ ...item, icon: icons[index] }));
}

export function getIntelligenceTimeline(t: ContentTranslator): { title: string; description: string }[] {
  return t.raw("intelligenceTimeline") as { title: string; description: string }[];
}

export function getIntelligenceUseCases(t: ContentTranslator): Feature[] {
  const items = t.raw("intelligenceUseCases") as { title: string; description: string }[];
  const icons = [Wrench, ChartNoAxesCombined, ShieldCheck, Radar, PiggyBank, Sparkles];
  return items.map((item, index) => ({ ...item, icon: icons[index] }));
}

export function getCommercialItems(t: ContentTranslator): Feature[] {
  const items = t.raw("commercialItems") as { title: string; description: string }[];
  const icons = [Monitor, Car, Boxes, CreditCard, Building2];
  return items.map((item, index) => ({ ...item, icon: icons[index] }));
}

export function getComparisonColumns(t: ContentTranslator): ComparisonColumn[] {
  const items = t.raw("comparisonColumns") as { heading: string; subheading: string; items: string[] }[];
  const tones: ComparisonColumn["tone"][] = ["neutral", "brand"];
  return items.map((item, index) => ({ ...item, tone: tones[index] }));
}

export function getIndustries(t: ContentTranslator): IndustryItem[] {
  const items = t.raw("industries") as { title: string; description: string }[];
  const icons = [Car, Truck, Boxes, Route, Building2, Battery];
  const images = [vehiclesCars, vehiclesVanBus, vehiclesBoxTruck, vehiclesTaxi, vehiclesCorporateSuv, vehiclesEv];
  return items.map((item, index) => ({ ...item, icon: icons[index], image: images[index].src }));
}

export function getDifferentiators(t: ContentTranslator): string[] {
  return t.raw("differentiators") as string[];
}

export function getDifferenceJourney(t: ContentTranslator): JourneyStep[] {
  const items = t.raw("differenceJourney") as { title: string; description: string }[];
  const icons = [Smartphone, Network, Handshake, CircleCheck, ChartNoAxesCombined, HandCoins];
  return items.map((item, index) => ({ ...item, icon: icons[index] }));
}

export function getPricingPlans(t: ContentTranslator): PricingPlan[] {
  const items = t.raw("pricingPlans") as Omit<PricingPlan, "highlighted">[];
  const highlighted = [false, false, false, true];
  return items.map((item, index) => ({ ...item, highlighted: highlighted[index] }));
}

export function getPlanBenefits(t: ContentTranslator): Feature[] {
  const items = t.raw("planBenefits") as { title: string; description: string }[];
  const icons = [Clock3, ChartNoAxesCombined, ShieldCheck, HandHelping];
  return items.map((item, index) => ({ ...item, icon: icons[index] }));
}

export function getContactDetails(t: ContentTranslator): ContactDetail[] {
  const items = t.raw("contactDetails") as { label: string; value: string }[];
  const icons = [Phone, Mail, Globe, MapPin];
  const hrefs = ["https://wa.me/62812595599", "mailto:rvetrans@rilingroup.com", "https://www.zarve.id", undefined];
  return items.map((item, index) => ({ ...item, icon: icons[index], href: hrefs[index] }));
}
