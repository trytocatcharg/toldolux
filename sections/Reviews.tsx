import { getReviews } from "@/lib/reviews";
import { ReviewsPresentation } from "@/components/ReviewsPresentation";

export async function Reviews() {
  const data = await getReviews();

  if (data.reviews.length === 0) return null;

  return <ReviewsPresentation data={data} />;
}
