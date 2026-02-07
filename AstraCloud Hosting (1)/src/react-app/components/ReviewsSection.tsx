import { useState, useEffect } from "react";
import { Star, Send } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/react-app/components/ui/card";
import { Button } from "@/react-app/components/ui/button";
import { Input } from "@/react-app/components/ui/input";
import { Textarea } from "@/react-app/components/ui/textarea";

interface Review {
  id: number;
  customer_name: string;
  rating: number;
  review_text: string;
  service_type: string | null;
  created_at: string;
}

export default function ReviewsSection() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [name, setName] = useState("");
  const [rating, setRating] = useState(5);
  const [reviewText, setReviewText] = useState("");
  const [serviceType, setServiceType] = useState("");
  const [hoveredStar, setHoveredStar] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = async () => {
    try {
      const response = await fetch("/api/reviews");
      const data = await response.json();
      setReviews(data);
    } catch (error) {
      console.error("Error fetching reviews:", error);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/reviews", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          customer_name: name,
          rating,
          review_text: reviewText,
          service_type: serviceType || null,
        }),
      });

      if (response.ok) {
        setName("");
        setRating(5);
        setReviewText("");
        setServiceType("");
        fetchReviews();
      }
    } catch (error) {
      console.error("Error submitting review:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderStars = (count: number, interactive = false) => {
    return (
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`w-5 h-5 ${
              star <= (interactive ? (hoveredStar || rating) : count)
                ? "fill-yellow-500 text-yellow-500"
                : "text-slate-600"
            } ${interactive ? "cursor-pointer transition-colors" : ""}`}
            onClick={interactive ? () => setRating(star) : undefined}
            onMouseEnter={interactive ? () => setHoveredStar(star) : undefined}
            onMouseLeave={interactive ? () => setHoveredStar(0) : undefined}
          />
        ))}
      </div>
    );
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Customer Reviews</h2>
          <p className="text-slate-300 text-lg">
            See what our customers are saying about AstraCloud Hosting
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Submit Review Form */}
          <Card className="bg-slate-900/50 backdrop-blur border-white/10">
            <CardHeader>
              <CardTitle className="text-white">Write a Review</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="text-sm text-slate-300 mb-2 block">Your Name</label>
                  <Input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="John Doe"
                    required
                    className="bg-slate-800/50 border-white/10 text-white"
                  />
                </div>

                <div>
                  <label className="text-sm text-slate-300 mb-2 block">Service Type (Optional)</label>
                  <Input
                    value={serviceType}
                    onChange={(e) => setServiceType(e.target.value)}
                    placeholder="e.g., Minecraft Hosting, VPS"
                    className="bg-slate-800/50 border-white/10 text-white"
                  />
                </div>

                <div>
                  <label className="text-sm text-slate-300 mb-2 block">Rating</label>
                  {renderStars(rating, true)}
                </div>

                <div>
                  <label className="text-sm text-slate-300 mb-2 block">Your Review</label>
                  <Textarea
                    value={reviewText}
                    onChange={(e) => setReviewText(e.target.value)}
                    placeholder="Share your experience with AstraCloud Hosting..."
                    required
                    rows={4}
                    className="bg-slate-800/50 border-white/10 text-white resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                >
                  <Send className="w-4 h-4 mr-2" />
                  {isSubmitting ? "Submitting..." : "Submit Review"}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Display Reviews */}
          <div className="space-y-4 max-h-[600px] overflow-y-auto pr-2 custom-scrollbar">
            {reviews.length === 0 ? (
              <Card className="bg-slate-900/50 backdrop-blur border-white/10">
                <CardContent className="pt-6">
                  <p className="text-slate-400 text-center">
                    No reviews yet. Be the first to share your experience!
                  </p>
                </CardContent>
              </Card>
            ) : (
              reviews.map((review) => (
                <Card key={review.id} className="bg-slate-900/50 backdrop-blur border-white/10">
                  <CardContent className="pt-6">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h4 className="text-white font-semibold">{review.customer_name}</h4>
                        {review.service_type && (
                          <p className="text-sm text-slate-400">{review.service_type}</p>
                        )}
                      </div>
                      <div className="text-right">
                        {renderStars(review.rating)}
                        <p className="text-xs text-slate-500 mt-1">
                          {formatDate(review.created_at)}
                        </p>
                      </div>
                    </div>
                    <p className="text-slate-300 leading-relaxed">{review.review_text}</p>
                  </CardContent>
                </Card>
              ))
            )}
          </div>
        </div>
      </div>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.2);
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.3);
        }
      `}</style>
    </section>
  );
}
