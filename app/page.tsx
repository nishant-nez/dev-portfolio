import { PortfolioShell } from "@/app/components/PortfolioShell";
import { siteData } from "@/app/lib/content";

export default function Home() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteData.name,
    jobTitle: siteData.title,
    description: siteData.tagline,
    email: siteData.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: siteData.location,
    },
    sameAs: siteData.socials.map((social) => social.url),
    knowsAbout: [".NET", "Java", "Node.js", "Software Engineering"],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <PortfolioShell />
    </>
  );
}
