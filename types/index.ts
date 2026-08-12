export interface NavItem {
  label: string;
  href: string;
}

export interface ButtonData {
  label: string;
  href: string;
}

export interface HeroData {
  badge?: string;
  title: string;
  description: string;
  button: ButtonData;
  image: string;
  imageAlt: string;
}

export interface Client {
  name: string;
  logo: string;
  logoAlt: string;
}

export interface CommunityItem {
  title: string;
  description: string;
  icon: string;
}

export interface Feature {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  button: ButtonData;
  reverse?: boolean;
}

export interface Stat {
  value: string;
  label: string;
  icon: string;
}

export interface BlogPost {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  href: string;
}

export interface FooterColumn {
  title: string;
  links: NavItem[];
}
