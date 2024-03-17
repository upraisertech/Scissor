export enum SelectedPage {
  MyURLs = "home",
  // Home = "home",
  Features = "features",
  Pricing = "pricing",
  Analytics = "analytics",
  FAQs = "faq",
  Home = "Home"
}

export interface BenefitType {
  title: string;
  price: string;
  sub_title: string;
  description: string;
}

export interface ClassType {
  name: string;
  description?: string;
  image: string;
}