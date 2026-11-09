import raw from '../tokens.json';
export declare const vendivoDesignSystem: typeof raw;
export declare const SELLER_THEMES: { readonly light: typeof raw.light; readonly dark: typeof raw.dark };
export declare const GEOMETRY: typeof raw.geometry;
export type SellerTheme = keyof typeof SELLER_THEMES;
export type SemanticColors = typeof raw.light;
export type DesignSystemTokens = typeof raw;
export declare const INTERACTIVE_CONTRACTS: { readonly selectable: 'surfaceSelected + border primary + primary indicator'; readonly checkable: 'solid primary control + white check or dot'; readonly tab: 'primary text or icon + indicator'; readonly chip: 'surfaceSelected + primary border and text'; readonly cta: 'solid primary + onBrand text' };
