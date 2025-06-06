
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MapPin, Clock, CheckCircle, XCircle } from "lucide-react";
import Header from "@/components/Header";
import BookingWizard from "@/components/BookingWizard";

interface Coach {
  id: string;
  name: string;
  profilePic: string;
  activityType: string;
  isAvailable: boolean;
  location: string;
  rating: number;
  experience: string;
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
    experience: "5+ years"
  },
  {
    id: "2",
    name: "Mike Chen",
    profilePic: "/placeholder.svg",
    activityType: "Piano",
    isAvailable: false,
    location: "Manhattan Music Studio",
    rating: 4.8,
    experience: "10+ years"
  },
  {
    id: "3",
    name: "Dr. Emily Rodriguez",
    profilePic: "/placeholder.svg",
    activityType: "Math Tutoring",
    isAvailable: true,
    location: "Online & Home visits",
    rating: 4.95,
    experience: "8+ years"
  },
  {
    id: "4",
    name: "David Kim",
    profilePic: "/placeholder.svg",
    activityType: "Swimming",
    isAvailable: true,
    location: "Aquatic Center Downtown",
    rating: 4.7,
    experience: "6+ years"
  },
  {
    id: "5",
    name: "Jessica Martinez",
    profilePic: "/placeholder.svg",
    activityType: "Guitar",
    isAvailable: true,
    location: "Music Academy West Side",
    rating: 4.85,
    experience: "7+ years"
  }
];

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const [selectedCoach, setSelectedCoach] = useState<Coach | null>(null);
  const [isWizardOpen, setIsWizardOpen] = useState(false);
  
  const searchQuery = searchParams.get('q') || '';

  const filteredCoaches = mockCoaches.filter(coach =>
    coach.activityType.toLowerCase().includes(searchQuery.toLowerCase()) ||
    coach.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleBookingRequest = (coach: Coach) => {
    setSelectedCoach(coach);
    setIsWizardOpen(true);
  };

  const handleWizardClose = () => {
    setIsWizardOpen(false);
    setSelectedCoach(null);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Search Results for "{searchQuery}"
          </h1>
          <p className="text-gray-600">
            Found {filteredCoaches.length} coach{filteredCoaches.length !== 1 ? 'es' : ''} matching your search
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCoaches.map((coach) => (
            <Card key={coach.id} className="hover:shadow-lg transition-shadow">
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-4">
                  <Avatar className="h-16 w-16">
                    <AvatarImage src={coach.profilePic} alt={coach.name} />
                    <AvatarFallback>{coach.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <CardTitle className="text-lg">{coach.name}</CardTitle>
                    <p className="text-blue-600 font-medium">{coach.activityType}</p>
                    <div className="flex items-center space-x-1 mt-1">
                      <span className="text-yellow-500">★</span>
                      <span className="text-sm text-gray-600">{coach.rating} • {coach.experience}</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  {coach.isAvailable ? (
                    <CheckCircle className="h-4 w-4 text-green-500" />
                  ) : (
                    <XCircle className="h-4 w-4 text-red-500" />
                  )}
                  <span className={coach.isAvailable ? "text-green-600" : "text-red-600"}>
                    {coach.isAvailable ? "Available" : "Busy"}
                  </span>
                </div>
                
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <MapPin className="h-4 w-4" />
                  <span>{coach.location}</span>
                </div>
                
                <div className="pt-2">
                  <Button
                    onClick={() => handleBookingRequest(coach)}
                    disabled={!coach.isAvailable}
                    className="w-full"
                  >
                    {coach.isAvailable ? "Request Booking" : "Not Available"}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredCoaches.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No coaches found</h3>
            <p className="text-gray-600">Try adjusting your search terms or browse all available coaches.</p>
          </div>
        )}
      </div>

      <BookingWizard
        isOpen={isWizardOpen}
        onClose={handleWizardClose}
        coach={selectedCoach}
      />
    </div>
  );
};

export default SearchResults;
