import type { APIRoute } from "astro";

export const GET: APIRoute = ({ site }) => {
  return new Response(
    `User-agent: *
Allow: /

Sitemap: ${site}sitemap-index.xml`,
    { status: 200 }
  );
};
