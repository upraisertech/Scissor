export enum SelectedPage {
  MyURLs = "home",
  Features = "features",
  Pricing = "pricing",
  Analytics = "analytics",
  FAQs = "faq",
  Home = "home",
  ContactUs = "ContactUs"
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