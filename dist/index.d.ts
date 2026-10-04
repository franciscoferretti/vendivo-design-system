export declare const vendivoDesignSystem: {
  readonly version: "0.1.0";
  readonly geometry: { readonly radiusXs: 2; readonly radiusSm: 3; readonly radiusMd: 4; readonly radiusLg: 4; readonly radiusPill: 999; readonly borderThin: 1; readonly borderStrong: 2; readonly spacing: { readonly xs: 4; readonly sm: 8; readonly md: 12; readonly lg: 16; readonly xl: 24; readonly xxl: 32; readonly section: 40; readonly sectionLg: 48; } };
  readonly light: Record<string, string>;
  readonly dark: Record<string, string>;
};
export declare const SELLER_THEMES: { readonly light: Record<string, string>; readonly dark: Record<string, string> };
export declare const GEOMETRY: typeof vendivoDesignSystem.geometry;
export declare const INTERACTIVE_CONTRACTS: { readonly selectable: "surfaceSelected + border primary + primary indicator"; readonly checkable: "solid primary control + white check or dot"; readonly tab: "primary text or icon + indicator"; readonly chip: "surfaceSelected + primary border and text"; readonly cta: "solid primary + onBrand text" };
