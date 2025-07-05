
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MapPin, CheckCircle, XCircle, ArrowLeft, Share2 } from "lucide-react";
import Header from "@/components/Header";
import BookingWizard from "@/components/BookingWizard";
import CustomerReviews from "@/components/CustomerReviews";
import { useToast } from "@/hooks/use-toast";

interface Coach {
  id: string;
  name: string;
  profilePic: string;
  activityType: string;
  isAvailable: boolean;
  location: string;
  rating: number;
  experience: string;
  description: string;
}

const mockCoaches: Coach[] = [
  {
    id: "1",
    name: "Sarah Johnson",
    profilePic: "/placeholder.svg",
    activityType: "Tennis",
    isAvailable: true,
    location: "Central Park, NYC",
    rating: 4.9,
    experience: "5+ years",
    description: "Professional tennis coach with 5+ years of experience. Specializes in beginner to intermediate level training with focus on proper technique and game strategy. I believe in creating a supportive and encouraging environment where students can develop their skills at their own pace while building confidence on the court."
  },
  {
    id: "2",
    name: "Mike Chen",
    profilePic: "/placeholder.svg",
    activityType: "Piano",
    isAvailable: false,
    location: "Manhattan Music Studio",
    rating: 4.8,
    experience: "10+ years",
    description: "Classically trained pianist and music educator with over 10 years of teaching experience. Expert in classical, jazz, and contemporary styles. Patient instructor perfect for all skill levels, from complete beginners to advanced students preparing for competitions or recitals."
  },
  {
    id: "3",
    name: "Dr. Emily Rodriguez",
    profilePic: "/placeholder.svg",
    activityType: "Math Tutoring",
    isAvailable: true,
    location: "Online & Home visits",
    rating: 4.95,
    experience: "8+ years",
    description: "PhD in Mathematics with extensive tutoring experience across all levels. Specializes in algebra, calculus, statistics, and test preparation (SAT, ACT, GRE). I have a proven track record of helping students overcome math anxiety and achieve significant improvements in their grades and test scores."
  },
  {
    id: "4",
    name: "David Kim",
    profilePic: "/placeholder.svg",
    activityType: "Swimming",
    isAvailable: true,
    location: "Aquatic Center Downtown",
    rating: 4.7,
    experience: "6+ years",
    description: "Former competitive swimmer and certified swim instructor with 6+ years of coaching experience. Expert in stroke technique, endurance training, and water safety for all ages. Whether you're learning to swim for the first time or training for competition, I'll help you achieve your goals safely and effectively."
  },
  {
    id: "5",
    name: "Jessica Martinez",
    profilePic: "/placeholder.svg",
    activityType: "Guitar",
    isAvailable: true,
    location: "Music Academy West Side",
    rating: 4.85,
    experience: "7+ years",
    description: "Professional guitarist with 7+ years of teaching experience in rock, blues, classical, and acoustic styles. Passionate about helping students discover their unique musical voice while building solid fundamentals. I customize lessons to match each student's musical interests and goals."
  }
];

const CoachDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [coach, setCoach] = useState<Coach | null>(null);
  const [isWizardOpen, setIsWizardOpen] = useState(false);

  useEffect(() => {
    const foundCoach = mockCoaches.find(c => c.id === id);
    setCoach(foundCoach || null);
  }, [id]);

  const handleBookingRequest = () => {
    if (coach) {
      setIsWizardOpen(true);
    }
  };

  const handleWizardClose = () => {
    setIsWizardOpen(false);
  };

  const handleCopyLink = () => {
    const currentUrl = window.location.href;
    navigator.clipboard.writeText(currentUrl).then(() => {
      toast({
        title: "Link copied!",
        description: "Coach profile link has been copied to clipboard.",
      });
    });
  };

  const handleBack = () => {
    navigate(-1);
  };

  if (!coach) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <Header />
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Coach not found</h1>
            <Button onClick={handleBack} variant="outline">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Go Back
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <div className="mb-6">
          <Button onClick={handleBack} variant="outline" className="mb-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Search
          </Button>
        </div>

        {/* Coach Card - Large Version */}
        <div className="max-w-2xl mx-auto">
          <Card className="shadow-xl border-0 bg-white/90 backdrop-blur-sm">
            <CardHeader className="pb-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-6">
                  <Avatar className="h-24 w-24 ring-4 ring-white shadow-lg">
                    <AvatarImage src={coach.profilePic} alt={coach.name} />
                    <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-500 text-white font-semibold text-xl">
                      {coach.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <CardTitle className="text-2xl text-gray-900 mb-2">{coach.name}</CardTitle>
                    <p className="text-blue-600 font-medium text-lg">{coach.activityType}</p>
                    <div className="flex items-center space-x-2 mt-2">
                      <span className="text-yellow-500 text-lg">★</span>
                      <span className="text-gray-600">{coach.rating} • {coach.experience}</span>
                    </div>
                  </div>
                </div>
                <Button onClick={handleCopyLink} variant="outline" size="icon">
                  <Share2 className="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-6">
              {/* Description Section */}
              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">About</h3>
                <p className="text-gray-700 leading-relaxed">{coach.description}</p>
              </div>
              
              <div className="flex items-center space-x-3">
                {coach.isAvailable ? (
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-green-600 font-medium text-lg">Available for booking</span>
                  </div>
                ) : (
                  <div className="flex items-center space-x-3">
                    <XCircle className="h-5 w-5 text-red-500" />
                    <span className="text-red-600 font-medium text-lg">Currently busy</span>
                  </div>
                )}
              </div>
              
              <div className="flex items-center space-x-3 text-gray-600">
                <MapPin className="h-5 w-5" />
                <span className="text-lg">{coach.location}</span>
              </div>
              
              <div className="pt-4">
                <Button
                  onClick={handleBookingRequest}
                  disabled={!coach.isAvailable}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 text-lg"
                  size="lg"
                >
                  {coach.isAvailable ? "Request Booking" : "Not Available"}
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Customer Reviews Section */}
          <CustomerReviews coachId={coach.id} />
        </div>
      </div>

      <BookingWizard
        isOpen={isWizardOpen}
        onClose={handleWizardClose}
        coach={coach}
      />
    </div>
  );
};

export default CoachDetail;
