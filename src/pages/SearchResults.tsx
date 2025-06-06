
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Clock, CheckCircle, XCircle, Search, Filter } from "lucide-react";
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
  const [nameFilter, setNameFilter] = useState("");
  const [availabilityFilter, setAvailabilityFilter] = useState<string>("all");
  const [locationFilter, setLocationFilter] = useState("");
  
  const searchQuery = searchParams.get('q') || '';

  const filteredCoaches = mockCoaches.filter(coach => {
    const matchesSearch = coach.activityType.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         coach.name.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesNameFilter = coach.name.toLowerCase().includes(nameFilter.toLowerCase());
    
    const matchesAvailability = availabilityFilter === "all" ||
                               (availabilityFilter === "available" && coach.isAvailable) ||
                               (availabilityFilter === "busy" && !coach.isAvailable);
    
    const matchesLocation = coach.location.toLowerCase().includes(locationFilter.toLowerCase());
    
    return matchesSearch && matchesNameFilter && matchesAvailability && matchesLocation;
  });

  const handleBookingRequest = (coach: Coach) => {
    setSelectedCoach(coach);
    setIsWizardOpen(true);
  };

  const handleWizardClose = () => {
    setIsWizardOpen(false);
    setSelectedCoach(null);
  };

  const clearFilters = () => {
    setNameFilter("");
    setAvailabilityFilter("all");
    setLocationFilter("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <Header />
      
      {/* Hero Section with Background Pattern */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
        <div className="relative container mx-auto px-4 py-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Search Results for "{searchQuery}"
          </h1>
          <p className="text-xl text-blue-100">
            Found {filteredCoaches.length} coach{filteredCoaches.length !== 1 ? 'es' : ''} matching your search
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Filters Section */}
        <Card className="mb-8 shadow-lg border-0 bg-white/80 backdrop-blur-sm">
          <CardHeader className="pb-4">
            <div className="flex items-center space-x-2">
              <Filter className="h-5 w-5 text-primary" />
              <CardTitle className="text-lg">Filter Coaches</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Coach Name</label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Search by name..."
                    value={nameFilter}
                    onChange={(e) => setNameFilter(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Availability</label>
                <Select value={availabilityFilter} onValueChange={setAvailabilityFilter}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select availability" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Coaches</SelectItem>
                    <SelectItem value="available">Available Only</SelectItem>
                    <SelectItem value="busy">Busy Only</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Location</label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Search location..."
                    value={locationFilter}
                    onChange={(e) => setLocationFilter(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              
              <div className="flex items-end">
                <Button 
                  variant="outline" 
                  onClick={clearFilters}
                  className="w-full"
                >
                  Clear Filters
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Results Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCoaches.map((coach) => (
            <Card key={coach.id} className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-0 bg-white/90 backdrop-blur-sm">
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-4">
                  <Avatar className="h-16 w-16 ring-4 ring-white shadow-lg">
                    <AvatarImage src={coach.profilePic} alt={coach.name} />
                    <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-500 text-white font-semibold">
                      {coach.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <CardTitle className="text-lg text-gray-900">{coach.name}</CardTitle>
                    <p className="text-blue-600 font-medium">{coach.activityType}</p>
                    <div className="flex items-center space-x-1 mt-1">
                      <span className="text-yellow-500">★</span>
                      <span className="text-sm text-gray-600">{coach.rating} • {coach.experience}</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-2 text-sm">
                  {coach.isAvailable ? (
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-green-600 font-medium">Available</span>
                    </div>
                  ) : (
                    <div className="flex items-center space-x-2">
                      <XCircle className="h-4 w-4 text-red-500" />
                      <span className="text-red-600 font-medium">Busy</span>
                    </div>
                  )}
                </div>
                
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <MapPin className="h-4 w-4" />
                  <span>{coach.location}</span>
                </div>
                
                <div className="pt-2">
                  <Button
                    onClick={() => handleBookingRequest(coach)}
                    disabled={!coach.isAvailable}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300"
                  >
                    {coach.isAvailable ? "Request Booking" : "Not Available"}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredCoaches.length === 0 && (
          <div className="text-center py-16">
            <div className="max-w-md mx-auto">
              <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center">
                <Search className="h-12 w-12 text-gray-400" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">No coaches found</h3>
              <p className="text-gray-600 mb-6">Try adjusting your search terms or filters to find more coaches.</p>
              <Button onClick={clearFilters} variant="outline">
                Clear All Filters
              </Button>
            </div>
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
