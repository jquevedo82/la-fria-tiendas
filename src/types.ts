export interface DirectoryStore {
  slug: string;
  name: string;
  profileImage: string | null;
  description: string | null;
  category: string | null;
  whatsappPhone: string | null;
  hours: string | null;
  address: string | null;
  mapsUrl: string | null;
  tags: string[] | null;
  websiteUrl: string | null;
  hasStoreEnabled: boolean;
}

export interface DirectoryResponse {
  group: {
    slug: string;
    name: string;
    description: string | null;
    logo: string | null;
    bannerImage: string | null;
  };
  stores: DirectoryStore[];
}
