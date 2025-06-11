import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Share2, Star, Clock, MapPin, DollarSign, Calendar } from "lucide-react";
import { useState } from "react";
import BookingWizard from "@/components/BookingWizard";
import { useToast } from "@/hooks/use-toast";

// Mock coach data - in a real app this would come from an API
const mockCoaches = [
  {
    id: 1,
    name: "Sarah Johnson",
    activityType: "Tennis",
    rating: 4.9,
    reviews: 127,
    price: 85,
    location: "Downtown Sports Center",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b2e5?w=400&h=400&fit=crop&crop=face",
    bio: "Professional tennis coach with 10+ years of experience training players of all levels. Former collegiate player with expertise in technique refinement and mental game development.",
    specialties: ["Beginner Friendly", "Competition Prep", "Technique Analysis"],
    availability: "Mon-Fri 6AM-8PM",
    experience: "10+ years",
    certifications: ["USPTA Certified", "Mental Performance Coach"],
    isAvailable: true
  },
  {
    id: 2,
    name: "Mike Rodriguez",
    activityType: "Basketball",
    rating: 4.8,
    reviews: 89,
    price: 75,
    location: "City Basketball Academy",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    bio: "Former college basketball player turned coach. Specializes in fundamentals, shooting technique, and game strategy for youth and adult players.",
    specialties: ["Youth Training", "Shooting Technique", "Game Strategy"],
    availability: "Tue-Sun 3PM-9PM",
    experience: "8 years",
    certifications: ["USA Basketball Certified", "Youth Development Specialist"],
    isAvailable: true
  },
  {
    id: 3,
    name: "Emily Chen",
    activityType: "Swimming",
    rating: 4.9,
    reviews: 156,
    price: 90,
    location: "Aquatic Center",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
    bio: "Competitive swimmer and certified instructor with expertise in all strokes. Focuses on technique improvement and endurance building for swimmers of all levels.",
    specialties: ["Stroke Technique", "Competitive Swimming", "Triathlon Training"],
    availability: "Daily 5AM-10AM, 6PM-9PM",
    experience: "12 years",
    certifications: ["Red Cross Certified", "Masters Swimming Coach"],
    isAvailable: true
  }
];

const CoachDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [showBooking, setShowBooking] = useState(false);

  const coach = mockCoaches.find(c => c.id === Number(id));

  if (!coach) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Coach not found</h1>
          <Button onClick={() => navigate('/search')} variant="outline">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Search
          </Button>
        </div>
      </div>
    );
  }

  const handleShare = async () => {
    const url = window.location.href;
    try {
      await navigator.clipboard.writeText(url);
      toast({
        title: "Link copied!",
        description: "Coach profile link has been copied to your clipboard.",
      });
    } catch (err) {
      toast({
        title: "Failed to copy link",
        description: "Please copy the URL manually from your browser.",
        variant: "destructive",
      });
    }
  };

  const handleBooking = () => {
    setShowBooking(true);
  };

  if (showBooking) {
    return (
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-8">
          <Button 
            onClick={() => setShowBooking(false)} 
            variant="outline" 
            className="mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Coach Profile
          </Button>
          <BookingWizard coach={coach} />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Header with back button and share */}
        <div className="flex items-center justify-between mb-8">
          <Button 
            onClick={() => navigate('/search')} 
            variant="outline"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Search
          </Button>
          <Button onClick={handleShare} variant="outline" size="sm">
            <Share2 className="w-4 h-4 mr-2" />
            Share Profile
          </Button>
        </div>

        {/* Coach Profile Card */}
        <Card className="bg-card border-border">
          <CardHeader className="pb-6">
            <div className="flex flex-col md:flex-row gap-6">
              <img
                src={coach.image}
                alt={coach.name}
                className="w-32 h-32 md:w-48 md:h-48 rounded-full object-cover mx-auto md:mx-0"
              />
              <div className="flex-1 text-center md:text-left">
                <CardTitle className="text-3xl text-card-foreground mb-2">{coach.name}</CardTitle>
                <CardDescription className="text-xl text-muted-foreground mb-4">{coach.activityType} Coach</CardDescription>
                
                {/* Rating and Reviews */}
                <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
                  <div className="flex items-center">
                    <Star className="w-5 h-5 fill-primary text-primary mr-1" />
                    <span className="font-semibold text-card-foreground">{coach.rating}</span>
                  </div>
                  <span className="text-muted-foreground">({coach.reviews} reviews)</span>
                </div>

                {/* Price */}
                <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
                  <DollarSign className="w-5 h-5 text-primary" />
                  <span className="text-2xl font-bold text-card-foreground">${coach.price}</span>
                  <span className="text-muted-foreground">per session</span>
                </div>

                {/* Specialties */}
                <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                  {coach.specialties.map((specialty, index) => (
                    <Badge key={index} variant="secondary">{specialty}</Badge>
                  ))}
                </div>
              </div>
            </div>
          </CardHeader>

          <CardContent className="space-y-6">
            {/* Bio */}
            <div>
              <h3 className="text-xl font-semibold text-card-foreground mb-3">About {coach.name}</h3>
              <p className="text-muted-foreground leading-relaxed">{coach.bio}</p>
            </div>

            {/* Details Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-medium text-card-foreground">Location</p>
                    <p className="text-muted-foreground">{coach.location}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-medium text-card-foreground">Availability</p>
                    <p className="text-muted-foreground">{coach.availability}</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-medium text-card-foreground">Experience</p>
                    <p className="text-muted-foreground">{coach.experience}</p>
                  </div>
                </div>

                <div>
                  <p className="font-medium text-card-foreground mb-2">Certifications</p>
                  <div className="space-y-1">
                    {coach.certifications.map((cert, index) => (
                      <Badge key={index} variant="outline">{cert}</Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </CardContent>

          <CardFooter className="pt-6">
            <div className="w-full flex flex-col sm:flex-row gap-4">
              <Button onClick={handleBooking} className="flex-1 bg-primary hover:bg-primary/90">
                Book a Session
              </Button>
              <Button variant="outline" className="flex-1">
                Message Coach
              </Button>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default CoachDetail;
