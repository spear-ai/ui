declare module "tailwindcss-animate" {
  type Plugin = { handler: () => void };
  const plugin: Plugin;
  export default plugin;
}
