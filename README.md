# @vendivo/design-system

Fuente compartida de tokens semánticos, geometría y contratos de estados del Seller web y Seller mobile.

También exporta `marketplace-sections.css`, que contiene los tokens responsivos y el shell compartido de secciones comerciales del Marketplace. Los consumidores deben usar el componente `MarketplaceSection` de Vendivo para mantener el mismo fondo, padding, radio y ritmo interno.

## Desarrollo local

Ambos consumidores usan `file:../vendivo-design-system` durante esta consolidación. Para publicar una versión, actualizar `version`, ejecutar las verificaciones de cada consumidor y reemplazar la dependencia por la versión publicada.

Después de cambiar `tokens.json`, ejecutar `npm run build` en este package y volver a instalar la dependencia local en ambos consumidores.
