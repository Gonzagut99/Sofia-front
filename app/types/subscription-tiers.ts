export type Tier = {
  id: string;
  name: string;
  href: string;
  isExternal: boolean;
  originalPrice: number;
  discountedPrice: number;
  disccount?: number;
  features: string[];
  featured: boolean;
};
