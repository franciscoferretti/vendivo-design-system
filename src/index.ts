import raw from '../tokens.json';

export const vendivoDesignSystem = raw;
export const SELLER_THEMES = { light: raw.light, dark: raw.dark } as const;
export const GEOMETRY = raw.geometry;
export type SellerTheme = keyof typeof SELLER_THEMES;
export type SemanticColors = (typeof raw.light);
export type DesignSystemTokens = typeof raw;

export const INTERACTIVE_CONTRACTS = {
  selectable: 'surfaceSelected + border primary + primary indicator',
  checkable: 'solid primary control + white check or dot',
  tab: 'primary text or icon + indicator',
  chip: 'surfaceSelected + primary border and text',
  cta: 'solid primary + onBrand text',
} as const;
