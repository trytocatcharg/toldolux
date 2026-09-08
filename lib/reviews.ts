import { unstable_cache } from "next/cache";

export interface Review {
  author: string;
  avatar: string | null;
  rating: number;
  timestamp: number; // Unix seconds
  text: string;
}

export interface ReviewsData {
  rating: number;
  count: number;
  reviews: Review[];
  profileUrl: string;
  writeReviewUrl: string;
  source: "live" | "fallback";
}

export const GOOGLE_PROFILE_URL =
  "https://www.google.com/maps/place/Toldo+Lux/@41.2029918,1.5966474,17z/data=!4m6!3m5!1s0x12a389af06241ee9:0x3a1b49d083767071!8m2!3d41.2029878!4d1.5992223!16s%2Fg%2F11x6q4n7y9";

export const GOOGLE_WRITE_REVIEW_URL =
  "https://www.google.com/maps/place/Toldo+Lux/data=!4m8!3m7!1s0x12a389af06241ee9:0x3a1b49d083767071!8m2!3d41.2029878!4d1.5992223!9m1!1b1";

// Static snapshot of real Google reviews, extracted from the previous site's
// Trustindex widget. Used as fallback when GOOGLE_MAPS_API_KEY is not set or
// the Places API call fails. Review texts remain in Spanish (source language).
const fallbackReviews: Review[] = [
  {
    author: "Enrique Gonzalez Contreras",
    avatar:
      "https://lh3.googleusercontent.com/a-/ALV-UjUy3Ovork9CgfvsTK7gwMQLFSYaw5pDM8xzix9q0pziaPFHCNj3dw=w80-h80-c-rp-mo-ba2-br100",
    rating: 5,
    timestamp: 1773273600,
    text: "Un gran trabajo cumpliendo sobradamente las expectativas y especialmente siempre teniendo en cuenta tus deseo u opiniones para realizar su trabajo. Muchas gracias y espero que continuen en esta buena línea. Felicidades!!!",
  },
  {
    author: "Anna C Ortego",
    avatar:
      "https://lh3.googleusercontent.com/a-/ALV-UjVrMO_8dWRawFMWCVqwcMxgotI6T-W1j3IjLUHImqo9hDmluJrpdA=w80-h80-c-rp-mo-br100",
    rating: 5,
    timestamp: 1773014400,
    text: "Me instalaron un toldo y desde el primer momento fueron muy amables y profesionales. Me aconsejaron sobre el tipo de toldo y en pocos días lo tenía colocado. La instalación fue rápida y me lo dejaron todo limpio. Ha quedado genial. Sin duda los recomendaría!!",
  },
  {
    author: "Gregoria Cañada Ortega",
    avatar:
      "https://lh3.googleusercontent.com/a/ACg8ocJWTGdQaR8vrOqACGqsJm7vsgo9IOB5s-65w8Mmfe1xhSTMCw=w80-h80-c-rp-mo-br100",
    rating: 5,
    timestamp: 1772841600,
    text: "Javi y Carlos unos grandes profesionales, cumplen la 3 B (Bueno, Bonito, Barato) además de ser meticuloso en su trabajo para dejar la colocación de 10!!! Recomendables 100x100😄😄😄😄",
  },
  {
    author: "Claudia Ruth Vizcaíno Rubio",
    avatar:
      "https://lh3.googleusercontent.com/a-/ALV-UjWAQ93bwzAhWPeTxgsaKy3k_Jo18DJCkRWZJKqbF8ZeqsSWpeU=w80-h80-c-rp-mo-br100",
    rating: 5,
    timestamp: 1772064000,
    text: "Muy buen trabajo ,buen trabajador . Te da buena sugerencias que puedo hacer en mi terraza de ariba. Volvere a llamarles tela toldos de calidad y tornillos de calidad en fin material de calidad total .",
  },
  {
    author: "La Forja Barbershop",
    avatar:
      "https://lh3.googleusercontent.com/a-/ALV-UjVbPSsUl2PlgrMfX5CH3ADMbZwybf2k1gZw9iT4EWzQUTZ8cas=w80-h80-c-rp-mo-br100",
    rating: 5,
    timestamp: 1771977600,
    text: "La verdad que espectacular todo, colocamos dos toldos, uno corredero y el enrollable renovamos la lona y la verdad que superaron las expectativas, calidad-precio perfecta y el servicio rápido y muy pro, gracias Carlos y sin duda te recomendaremos",
  },
  {
    author: "Nati Vilà",
    avatar:
      "https://lh3.googleusercontent.com/a/ACg8ocLGtORlK-1V5XMu3GzPQTvPDAM8l-4UwYnHxNvIeXyqpB7HHQ=w80-h80-c-rp-mo-br100",
    rating: 5,
    timestamp: 1762819200,
    text: "Todo genial!!! Carlos y hermano son grandes profesionales. Me han instalado toldos en las terrazas y muy contenta. Trato muy cercano, servicio y montaje muy rapido. Los recomiendo al 100%.",
  },
  {
    author: "Nacho Tinta",
    avatar:
      "https://lh3.googleusercontent.com/a/ACg8ocIVHdhiQisQP7skgWt1odThZXr2RdAFoDPhR4FCFZrIkH7OUA=w80-h80-c-rp-mo-br100",
    rating: 5,
    timestamp: 1761868800,
    text: "El trabajador muy profesional y agradable, trato genial, persona seria con el trabajo",
  },
  {
    author: "eric hornero baños",
    avatar:
      "https://lh3.googleusercontent.com/a-/ALV-UjVINuhS9y0zYf-oB6jzN7tLLmZ6lazGPxtN63CtI6XcYMGW28i50A=w80-h80-c-rp-mo-ba5-br100",
    rating: 5,
    timestamp: 1758844800,
    text: "Nos han instalado los toldos en la terraza y genial, 100% recomendable. Gran trato y muy profesionales.",
  },
  {
    author: "Maria Luisa Abellan",
    avatar:
      "https://lh3.googleusercontent.com/a/ACg8ocItmqEmjur7opcyrtP6PSzefv5-WTgzAGlmwSwyO21MJeSQiw=w80-h80-c-rp-mo-br100",
    rating: 5,
    timestamp: 1757116800,
    text: "Fantastico servicio. Gracias por todo",
  },
];

const fallbackData: ReviewsData = {
  rating: 4.8,
  count: 49,
  reviews: fallbackReviews,
  profileUrl: GOOGLE_PROFILE_URL,
  writeReviewUrl: GOOGLE_WRITE_REVIEW_URL,
  source: "fallback",
};

const PLACE_TEXT_QUERY = "Toldo Lux, Carrer Rumania 22, Segur de Calafell";

interface GooglePlaceReview {
  rating?: number;
  text?: { text?: string };
  originalText?: { text?: string };
  publishTime?: string;
  authorAttribution?: { displayName?: string; photoUri?: string };
}

interface GooglePlace {
  rating?: number;
  userRatingCount?: number;
  googleMapsUri?: string;
  reviews?: GooglePlaceReview[];
}

async function fetchPlaceId(apiKey: string): Promise<string | null> {
  const res = await fetch(
    "https://places.googleapis.com/v1/places:searchText",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Goog-Api-Key": apiKey,
        "X-Goog-FieldMask": "places.id,places.displayName",
      },
      body: JSON.stringify({ textQuery: PLACE_TEXT_QUERY, maxResultCount: 1 }),
    },
  );
  if (!res.ok) return null;
  const json = await res.json();
  return json?.places?.[0]?.id ?? null;
}

async function fetchLiveReviews(apiKey: string): Promise<ReviewsData> {
  const placeId = await fetchPlaceId(apiKey);
  if (!placeId) throw new Error("Toldo Lux place not found via Text Search");

  const fields = "id,displayName,rating,userRatingCount,reviews,googleMapsUri";
  const res = await fetch(
    `https://places.googleapis.com/v1/places/${placeId}`,
    {
      headers: {
        "X-Goog-Api-Key": apiKey,
        "X-Goog-FieldMask": fields,
      },
    },
  );
  if (!res.ok)
    throw new Error(`Place Details failed with status ${res.status}`);

  const place = (await res.json()) as GooglePlace;
  const reviews: Review[] = (place.reviews ?? [])
    .map((r) => ({
      author: r.authorAttribution?.displayName ?? "",
      avatar: r.authorAttribution?.photoUri ?? null,
      rating: r.rating ?? 5,
      timestamp: r.publishTime
        ? Math.floor(Date.parse(r.publishTime) / 1000)
        : 0,
      text: r.text?.text ?? r.originalText?.text ?? "",
    }))
    .filter((r) => r.text.length > 0);

  if (reviews.length === 0)
    throw new Error("Place Details returned no reviews");

  return {
    rating: place.rating ?? 0,
    count: place.userRatingCount ?? reviews.length,
    reviews,
    profileUrl: place.googleMapsUri ?? GOOGLE_PROFILE_URL,
    writeReviewUrl: GOOGLE_WRITE_REVIEW_URL,
    source: "live",
  };
}

// Revalidated once a day: new Google reviews appear on the site automatically
// within 24h. At ~30 Place Details (Pro SKU) requests/month, cost is under $1.
const cachedLiveReviews = unstable_cache(
  async (): Promise<ReviewsData> => {
    const apiKey = process.env.GOOGLE_MAPS_API_KEY;
    if (!apiKey) return fallbackData;
    try {
      return await fetchLiveReviews(apiKey);
    } catch (error) {
      console.warn(
        "[reviews] Google Places API unavailable, using static fallback:",
        error,
      );
      return fallbackData;
    }
  },
  ["toldolux-google-reviews"],
  { revalidate: 86400, tags: ["google-reviews"] },
);

export async function getReviews(): Promise<ReviewsData> {
  if (!process.env.GOOGLE_MAPS_API_KEY) return fallbackData;
  return cachedLiveReviews();
}
