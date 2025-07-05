
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";

interface Review {
  id: string;
  customerName: string;
  customerImage: string;
  rating: number;
  comment: string;
  date: string;
}

interface CustomerReviewsProps {
  coachId: string;
}

const mockReviews: { [key: string]: Review[] } = {
  "1": [
    {
      id: "1",
      customerName: "Emma Thompson",
      customerImage: "/placeholder.svg",
      rating: 5,
      comment: "I liked Sarah, as she is a great coach! Her tennis techniques really improved my game. She's patient and explains everything clearly.",
      date: "2024-06-15"
    },
    {
      id: "2",
      customerName: "Michael Chen",
      customerImage: "/placeholder.svg",
      rating: 5,
      comment: "Sarah transformed my tennis skills completely. Professional, punctual, and incredibly knowledgeable. Highly recommend!",
      date: "2024-06-10"
    },
    {
      id: "3",
      customerName: "Lisa Rodriguez",
      customerImage: "/placeholder.svg",
      rating: 4,
      comment: "Great coach with excellent technique. My daughter loves her tennis lessons with Sarah.",
      date: "2024-06-05"
    }
  ],
  "2": [
    {
      id: "4",
      customerName: "David Kim",
      customerImage: "/placeholder.svg",
      rating: 5,
      comment: "Mike is an exceptional piano teacher. His classical training really shows, and he makes complex pieces manageable for beginners.",
      date: "2024-06-12"
    },
    {
      id: "5",
      customerName: "Anna Wilson",
      customerImage: "/placeholder.svg",
      rating: 5,
      comment: "I've been taking lessons with Mike for 6 months. His patience and expertise have helped me progress faster than I ever imagined.",
      date: "2024-06-08"
    }
  ],
  "3": [
    {
      id: "6",
      customerName: "Robert Johnson",
      customerImage: "/placeholder.svg",
      rating: 5,
      comment: "Dr. Emily is amazing! She helped my son improve his math grades from C to A+. Her teaching methods are outstanding.",
      date: "2024-06-14"
    },
    {
      id: "7",
      customerName: "Maria Garcia",
      customerImage: "/placeholder.svg",
      rating: 5,
      comment: "Emily makes math fun and understandable. My daughter actually looks forward to her tutoring sessions now!",
      date: "2024-06-11"
    }
  ],
  "4": [
    {
      id: "8",
      customerName: "James Miller",
      customerImage: "/placeholder.svg",
      rating: 5,
      comment: "David is a fantastic swimming instructor. He helped me overcome my fear of water and now I swim confidently.",
      date: "2024-06-13"
    }
  ],
  "5": [
    {
      id: "9",
      customerName: "Sophie Brown",
      customerImage: "/placeholder.svg",
      rating: 5,
      comment: "Jessica is an incredible guitar teacher. She adapted her teaching style to match my learning pace perfectly.",
      date: "2024-06-16"
    }
  ]
};

const CustomerReviews = ({ coachId }: CustomerReviewsProps) => {
  const reviews = mockReviews[coachId] || [];

  if (reviews.length === 0) {
    return (
      <div id="reviews" className="mt-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Customer Reviews</h3>
        <div className="text-center py-8 text-gray-500">
          <p>No reviews yet. Be the first to leave a review!</p>
        </div>
      </div>
    );
  }

  return (
    <div id="reviews" className="mt-8">
      <h3 className="text-2xl font-bold text-gray-900 mb-6">Customer Reviews</h3>
      <div className="space-y-4">
        {reviews.map((review) => (
          <Card key={review.id} className="border-0 bg-white/80 backdrop-blur-sm shadow-sm">
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <Avatar className="h-12 w-12">
                  <AvatarImage src={review.customerImage} alt={review.customerName} />
                  <AvatarFallback className="bg-gradient-to-br from-green-500 to-blue-500 text-white font-semibold">
                    {review.customerName.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <h4 className="font-semibold text-gray-900">{review.customerName}</h4>
                      <p className="text-sm text-gray-500">{new Date(review.date).toLocaleDateString()}</p>
                    </div>
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`h-4 w-4 ${
                            i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                          }`} 
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed">"{review.comment}"</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CustomerReviews;
