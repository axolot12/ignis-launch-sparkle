import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Ignis Launcher — Free Minecraft Launcher by IgnisTeam" },
      { name: "description", content: "Ignis Launcher — the fastest free Minecraft launcher. Multi-version support, built-in Modrinth mods, friends system, cracked & premium accounts. Download Ignis Launcher by IgnisTeam." },
      { name: "keywords", content: "Ignis Launcher, IgnisLauncher, Minecraft launcher, free Minecraft launcher, cracked Minecraft launcher, Modrinth launcher, IgnisTeam, download Minecraft launcher" },
      { name: "author", content: "IgnisTeam" },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: "Ignis Launcher" },
      { property: "og:description", content: "The fastest, most beautiful Minecraft launcher. Built by IgnisTeam." },
      { property: "og:image", content: "/og-image.png" },
      { property: "og:site_name", content: "Ignis Launcher" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Ignis Launcher" },
      { name: "twitter:description", content: "The fastest, most beautiful Minecraft launcher. Built by IgnisTeam." },
      { name: "twitter:image", content: "/og-image.png" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "icon", type: "image/png", href: "/favicon.png" },
      { rel: "apple-touch-icon", href: "/favicon.png" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: "Ignis Launcher",
          alternateName: "IgnisLauncher",
          applicationCategory: "GameApplication",
          operatingSystem: "Windows",
          description:
            "Ignis Launcher — free Minecraft launcher with multi-version support, built-in Modrinth, friends system, and cracked & premium accounts.",
          author: { "@type": "Organization", name: "IgnisTeam" },
          offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return <Outlet />;
}
