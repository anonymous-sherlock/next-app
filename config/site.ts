export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "WebsCrush",
  description:
    "Beautifully designed components built with Radix UI and Tailwind CSS.",
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Analyze",
      href: "/analyze",
    },
    {
      title: "Documentation",
      href: "/documentation",
    },
    {
      title: "Report",
      href: "/report",
    },
    {
      title: "API",
      href: "/Api",
    },
  ],
  links: {
    twitter: "https://twitter.com/shadcn",
    github: "https://github.com/shadcn/ui",
    docs: "https://ui.shadcn.com",
  },
  API_URL : "https://localhost/api/v1"
}
