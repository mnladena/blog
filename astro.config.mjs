import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import vercel from "@astrojs/vercel/serverless";
import sitemap from "@astrojs/sitemap";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://myblog-kappa-roan.vercel.app/",
  integrations: [mdx(), sitemap(), tailwind()],
  output: "server",
  adapter: vercel()
});