export function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Toldo Lux",
    description: "Empresa especializada en toldos, pérgolas bioclimáticas y protección solar a medida en Segur de Calafell.",
    url: "https://toldo-lux.com",
    telephone: "+34 680 787 990",
    email: "info@toldo-lux.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Segur de Calafell",
      addressRegion: "Tarragona",
      addressCountry: "ES",
    },
    areaServed: {
      "@type": "City",
      name: "Segur de Calafell",
    },
    serviceType: ["Toldos", "Pérgolas bioclimáticas", "Protección solar"],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
