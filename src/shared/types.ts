export enum SelectedPage {
  MyURLs = "home",
  Features = "features",
  Pricing = "pricing",
  Analytics = "analytics",
  FAQs = "faq",
  ContactUs = "ContactUs",
  Home = "Home"
}

export interface BenefitType {
  icon: JSX.Element;
  title: string;
  description: string;
}

export interface ClassType {
  name: string;
  description?: string;
  image: string;
}