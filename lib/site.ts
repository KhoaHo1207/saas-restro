function resolveSiteUrl() {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL;
  if (explicit) return explicit.replace(/\/$/, "");

  const vercelProd = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  if (vercelProd) {
    return `https://${vercelProd.replace(/^https?:\/\//, "")}`;
  }

  const vercel = process.env.VERCEL_URL;
  if (vercel) return `https://${vercel.replace(/^https?:\/\//, "")}`;

  return "http://localhost:3000";
}

export const siteConfig = {
  name: "Restro Premium Restaurant",
  shortName: "Restro",
  description:
    "Fine dining with fresh local ingredients, signature recipes, and table reservations in a warm Restro setting.",
  url: resolveSiteUrl(),
  email: "khoaho120703@gmail.com",
  phoneDisplay: "+84 987 654 3210",
  phoneTel: "+84987654321",
  locale: "en_US",
};
