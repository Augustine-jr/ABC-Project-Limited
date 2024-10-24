declare module "*.png" {
  const content: any;
  export default content;
}

declare module "*.jpg" {
  const content: any;
  export default content;
}

declare module "*.jpeg" {
  const content: any;
  export default content;
}

declare module "*.gif" {
  const content: any;
  export default content;
}

declare module "*.svg" {
  const content: any;
  export default content;
}

// This code tells TypeScript that when you import an image file with those extensions, it should treat it as a module with a default export.