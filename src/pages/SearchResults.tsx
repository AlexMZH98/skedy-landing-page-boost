import { useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Clock, CheckCircle, XCircle, Search, Filter, Share2, Check, ChevronsUpDown, DollarSign } from "lucide-react";
import { cn } from "@/lib/utils";
import Header from "@/components/Header";
import BookingWizard from "@/components/BookingWizard";
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
  price: number;
  logo?: string;
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
    price: 75,
    logo: "https://images.unsplash.com/photo-1493962853295-0fd70327578a?w=100&h=100&fit=crop&crop=center",
    description: "Professional tennis coach with 5+ years of experience. Specializes in beginner to intermediate level training with focus on proper technique and game strategy."
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
    price: 90,
    logo: "https://images.unsplash.com/photo-1466721591366-2d5fba72006d?w=100&h=100&fit=crop&crop=center",
    description: "Classically trained pianist and music educator. Expert in classical, jazz, and contemporary styles. Patient instructor perfect for all skill levels."
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
    price: 65,
    logo: "https://images.unsplash.com/photo-1452378174528-3090a4bba7b2?w=100&h=100&fit=crop&crop=center",
    description: "PhD in Mathematics with extensive tutoring experience. Specializes in algebra, calculus, and test preparation. Makes complex concepts easy to understand."
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
    price: 80,
    logo: "https://images.unsplash.com/photo-1485833077593-4278bba3f11f?w=100&h=100&fit=crop&crop=center",
    description: "Former competitive swimmer and certified swim instructor. Expert in stroke technique, endurance training, and water safety for all ages."
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
    price: 70,
    logo: "https://images.unsplash.com/photo-1441057206919-63d19fac2369?w=100&h=100&fit=crop&crop=center",
    description: "Professional guitarist with experience in rock, blues, and acoustic styles. Passionate about teaching music theory and helping students find their unique sound."
  }
];

// Get unique activity types for the filter
const activityTypes = [...new Set(mockCoaches.map(coach => coach.activityType))];

// Activity logo mapping
const getActivityLogo = (activityType: string) => {
  const logoMap: { [key: string]: string } = {
    "Piano": "https://images.unsplash.com/photo-1466721591366-2d5fba72006d?w=200&h=200&fit=crop&crop=center",
    "Tennis": "https://images.unsplash.com/photo-1493962853295-0fd70327578a?w=200&h=200&fit=crop&crop=center",
    "Math Tutoring": "https://images.unsplash.com/photo-1452378174528-3090a4bba7b2?w=200&h=200&fit=crop&crop=center",
    "Swimming": "https://images.unsplash.com/photo-1485833077593-4278bba3f11f?w=200&h=200&fit=crop&crop=center",
    "Guitar": "https://images.unsplash.com/photo-1441057206919-63d19fac2369?w=200&h=200&fit=crop&crop=center"
  };
  return logoMap[activityType] || "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=200&h=200&fit=crop&crop=center";
};

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const { toast } = useToast();
  const [selectedCoach, setSelectedCoach] = useState<Coach | null>(null);
  const [isWizardOpen, setIsWizardOpen] = useState(false);
  const [nameFilter, setNameFilter] = useState("");
  const [availabilityFilter, setAvailabilityFilter] = useState<string>("all");
  const [locationFilter, setLocationFilter] = useState("");
  const [activityFilter, setActivityFilter] = useState<string>("all");
  const [activityOpen, setActivityOpen] = useState(false);
  
  const searchQuery = searchParams.get('q') || '';
  const categoryQuery = searchParams.get('category') || '';
  
  // Category-based activity mapping
  const categoryActivities = {
    "Sports": ["Tennis", "Swimming", "Basketball", "Soccer"],
    "Education": ["Math Tutoring", "English Tutoring", "Piano", "Guitar", "Violin"]
  };

  const filteredCoaches = mockCoaches.filter(coach => {
    let matchesSearch = true;
    
    if (searchQuery) {
      matchesSearch = coach.activityType.toLowerCase().includes(searchQuery.toLowerCase()) ||
                     coach.name.toLowerCase().includes(searchQuery.toLowerCase());
    } else if (categoryQuery) {
      const activitiesInCategory = categoryActivities[categoryQuery as keyof typeof categoryActivities] || [];
      matchesSearch = activitiesInCategory.includes(coach.activityType);
    }
    
    const matchesNameFilter = coach.name.toLowerCase().includes(nameFilter.toLowerCase());
    
    const matchesAvailability = availabilityFilter === "all" ||
                               (availabilityFilter === "available" && coach.isAvailable) ||
                               (availabilityFilter === "busy" && !coach.isAvailable);
    
    const matchesLocation = coach.location.toLowerCase().includes(locationFilter.toLowerCase());
    
    const matchesActivity = activityFilter === "all" || coach.activityType === activityFilter;
    
    return matchesSearch && matchesNameFilter && matchesAvailability && matchesLocation && matchesActivity;
  });

  const handleBookingRequest = (coach: Coach) => {
    setSelectedCoach(coach);
    setIsWizardOpen(true);
  };

  const handleWizardClose = () => {
    setIsWizardOpen(false);
    setSelectedCoach(null);
  };

  const handleCopyLink = (coach: Coach, event: React.MouseEvent) => {
    event.preventDefault();
    event.stopPropagation();
    const coachUrl = `${window.location.origin}/coach/${coach.id}`;
    navigator.clipboard.writeText(coachUrl).then(() => {
      toast({
        title: "Link copied!",
        description: `${coach.name}'s profile link has been copied to clipboard.`,
      });
    });
  };

  const clearFilters = () => {
    setNameFilter("");
    setAvailabilityFilter("all");
    setLocationFilter("");
    setActivityFilter("all");
  };

  const displayTitle = () => {
    if (searchQuery) {
      return `Search Results for "${searchQuery}"`;
    } else if (categoryQuery) {
      return `${categoryQuery} Coaches`;
    }
    return "All Coaches";
  };

  const displayQuery = searchQuery || categoryQuery;

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
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                {displayTitle()}
              </h1>
              <p className="text-xl text-blue-100">
                Found {filteredCoaches.length} coach{filteredCoaches.length !== 1 ? 'es' : ''} matching your search
              </p>
            </div>
            {displayQuery && (
              <div className="hidden md:flex items-center justify-center">
                <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl">
                  <img 
                    src={getActivityLogo(displayQuery)} 
                    alt={`${displayQuery} activity`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            )}
          </div>
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
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
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
                <label className="text-sm font-medium text-gray-700">Activity Type</label>
                <Popover open={activityOpen} onOpenChange={setActivityOpen}>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      role="combobox"
                      aria-expanded={activityOpen}
                      className="w-full justify-between"
                    >
                      {activityFilter === "all" 
                        ? "All Activities" 
                        : activityTypes.find((activity) => activity === activityFilter) ?? "Select activity..."}
                      <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-full p-0">
                    <Command>
                      <CommandInput placeholder="Search activities..." />
                      <CommandList>
                        <CommandEmpty>No activity found.</CommandEmpty>
                        <CommandGroup>
                          <CommandItem
                            value="all"
                            onSelect={() => {
                              setActivityFilter("all");
                              setActivityOpen(false);
                            }}
                          >
                            <Check
                              className={cn(
                                "mr-2 h-4 w-4",
                                activityFilter === "all" ? "opacity-100" : "opacity-0"
                              )}
                            />
                            All Activities
                          </CommandItem>
                          {activityTypes.map((activity) => (
                            <CommandItem
                              key={activity}
                              value={activity}
                              onSelect={(value) => {
                                setActivityFilter(value);
                                setActivityOpen(false);
                              }}
                            >
                              <Check
                                className={cn(
                                  "mr-2 h-4 w-4",
                                  activityFilter === activity ? "opacity-100" : "opacity-0"
                                )}
                              />
                              {activity}
                            </CommandItem>
                          ))}
                        </CommandGroup>
                      </CommandList>
                    </Command>
                  </PopoverContent>
                </Popover>
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
            <Link key={coach.id} to={`/coach/${coach.id}`} className="block">
              <Card className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-0 bg-white/90 backdrop-blur-sm h-full">
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-4">
                    <div className="relative">
                      <Avatar className="h-16 w-16 ring-4 ring-white shadow-lg">
                        <AvatarImage src={coach.profilePic} alt={coach.name} />
                        <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-500 text-white font-semibold">
                          {coach.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      {coach.logo && (
                        <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full overflow-hidden border-2 border-white">
                          <img src={coach.logo} alt={`${coach.activityType} logo`} className="w-full h-full object-cover" />
                        </div>
                      )}
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-lg text-gray-900">{coach.name}</CardTitle>
                      <p className="text-blue-600 font-medium">{coach.activityType}</p>
                      <div className="flex items-center space-x-1 mt-1">
                        <span className="text-yellow-500">★</span>
                        <span className="text-sm text-gray-600">{coach.rating} • {coach.experience}</span>
                      </div>
                    </div>
                    <Button
                      onClick={(e) => handleCopyLink(coach, e)}
                      variant="outline"
                      size="icon"
                      className="h-8 w-8"
                    >
                      <Share2 className="h-3 w-3" />
                    </Button>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  {/* Description */}
                  <div className="text-sm text-gray-600 line-clamp-3">
                    {coach.description}
                  </div>
                  
                  <div className="flex items-center justify-between">
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
                    <div className="flex items-center space-x-1 text-lg font-semibold text-green-600">
                      <DollarSign className="h-4 w-4" />
                      <span>{coach.price}/hr</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <MapPin className="h-4 w-4" />
                    <span>{coach.location}</span>
                  </div>
                  
                  <div className="pt-2">
                    <Button
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        handleBookingRequest(coach);
                      }}
                      disabled={!coach.isAvailable}
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300"
                    >
                      {coach.isAvailable ? "Request Booking" : "Not Available"}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </Link>
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
