/// <reference types="vite/client" />

// vite-imagetools: optimized image imports with query params (e.g. ?format=webp&as=srcset)
declare module "*&as=srcset" {
  const srcset: string;
  export default srcset;
}
declare module "*?w=720&format=webp&quality=72" {
  const src: string;
  export default src;
}
declare module "*?w=900&format=webp&quality=78" {
  const src: string;
  export default src;
}
