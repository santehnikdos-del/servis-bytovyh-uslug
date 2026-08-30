import { createClient } from "@supabase/supabase-js";

export default async function ReviewSchema() {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  );

  const { data: reviews, error } = await supabase
    .from("reviews")
    .select("rating")
    .eq("approved", true);

  if (error || !reviews || reviews.length === 0) {
    return null;
  }

  const total = reviews.reduce(
    (sum, review) => sum + Number(review.rating || 5),
    0
  );

  const average = total / reviews.length;

  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://home-services.kz/#organization",
    name: "Сервис бытовых услуг",
    url: "https://home-services.kz",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: Number(average.toFixed(1)),
      reviewCount: reviews.length,
      bestRating: 5,
      worstRating: 1,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
      }}
    />
  );
}