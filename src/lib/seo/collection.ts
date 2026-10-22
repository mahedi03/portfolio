// ItemList + CollectionPage schemas — collection pages (services hub,
// portfolio grid, case-studies index, …).

import { absoluteSiteUrl } from "./site";

export interface ListItem {
  name: string;
  path: string;
}

export function itemListSchema(items: ListItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      url: absoluteSiteUrl(item.path),
    })),
  };
}

export function collectionPageSchema(
  name: string,
  path: string,
  description: string,
) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name,
    description,
    url: absoluteSiteUrl(path),
  };
}
