
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MapPin, Star, X } from "lucide-react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface Coach {
  id: string;
  name: string;
  profilePic: string;
  activityType: string;
  isAvailable: boolean;
  location: string;
  rating: number;
  lat: number;
  lng: number;
  price: number;
}

interface MapModalProps {
  isOpen: boolean;
  onClose: () => void;
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
    lat: 40.7829,
    lng: -73.9654,
    price: 75
  },
  {
    id: "2",
    name: "Mike Chen",
    profilePic: "/placeholder.svg",
    activityType: "Piano",
    isAvailable: false,
    location: "Manhattan Music Studio",
    rating: 4.8,
    lat: 40.7614,
    lng: -73.9776,
    price: 90
  },
  {
    id: "3",
    name: "Dr. Emily Rodriguez",
    profilePic: "/placeholder.svg",
    activityType: "Math Tutoring",
    isAvailable: true,
    location: "Online & Home visits",
    rating: 4.95,
    lat: 40.7505,
    lng: -73.9934,
    price: 65
  },
  {
    id: "4",
    name: "David Kim",
    profilePic: "/placeholder.svg",
    activityType: "Swimming",
    isAvailable: true,
    location: "Aquatic Center Downtown",
    rating: 4.7,
    lat: 40.7282,
    lng: -74.0776,
    price: 80
  },
  {
    id: "5",
    name: "Jessica Martinez",
    profilePic: "/placeholder.svg",
    activityType: "Guitar",
    isAvailable: true,
    location: "Music Academy West Side",
    rating: 4.85,
    lat: 40.7589,
    lng: -73.9851,
    price: 70
  }
];

const MapModal = ({ isOpen, onClose }: MapModalProps) => {
  const [selectedCoach, setSelectedCoach] = useState<Coach | null>(null);
  const [mapLoaded, setMapLoaded] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen && !mapLoaded) {
      // Simulate map loading
      setTimeout(() => setMapLoaded(true), 1000);
    }
  }, [isOpen, mapLoaded]);

  const handleCoachClick = (coach: Coach) => {
    setSelectedCoach(coach);
  };

  const handleViewProfile = (coachId: string) => {
    onClose();
    navigate(`/coach/${coachId}`);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-6xl h-[80vh] p-0 overflow-hidden">
        <DialogHeader className="p-6 pb-0">
          <DialogTitle className="flex items-center space-x-2">
            <MapPin className="h-5 w-5 text-blue-600" />
            <span>Find Coaches Near You</span>
          </DialogTitle>
        </DialogHeader>
        
        <div className="flex h-full">
          {/* Map Area */}
          <div className="flex-1 relative bg-gradient-to-br from-blue-100 to-green-100">
            {!mapLoaded ? (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                  <p className="text-gray-600">Loading map...</p>
                </div>
              </div>
            ) : (
              <div className="absolute inset-0 p-4">
                {/* Mock Google Map with pins */}
                <div className="w-full h-full bg-gray-200 rounded-lg relative overflow-hidden">
                  {/* Map background pattern */}
                  <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23e5e7eb' fill-opacity='0.4'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E")`
                  }}></div>
                  
                  {/* Coach pins */}
                  {mockCoaches.map((coach, index) => (
                    <button
                      key={coach.id}
                      onClick={() => handleCoachClick(coach)}
                      className={`absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-200 hover:scale-110 ${
                        selectedCoach?.id === coach.id ? 'scale-110 z-10' : ''
                      }`}
                      style={{
                        left: `${20 + (index * 15)}%`,
                        top: `${30 + (index * 10)}%`
                      }}
                    >
                      <div className={`w-8 h-8 rounded-full border-2 border-white shadow-lg flex items-center justify-center ${
                        coach.isAvailable ? 'bg-green-500' : 'bg-red-500'
                      }`}>
                        <MapPin className="h-4 w-4 text-white" />
                      </div>
                    </button>
                  ))}
                  
                  {/* Map controls */}
                  <div className="absolute top-4 right-4 flex flex-col space-y-2">
                    <Button variant="outline" size="icon" className="bg-white">
                      <span className="text-lg">+</span>
                    </Button>
                    <Button variant="outline" size="icon" className="bg-white">
                      <span className="text-lg">-</span>
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Coach Details Sidebar */}
          <div className="w-80 border-l bg-white flex flex-col">
            {selectedCoach ? (
              <div className="p-6 h-full flex flex-col">
                <div className="flex items-center space-x-4 mb-4">
                  <Avatar className="h-16 w-16">
                    <AvatarImage src={selectedCoach.profilePic} alt={selectedCoach.name} />
                    <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-500 text-white font-semibold">
                      {selectedCoach.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900">{selectedCoach.name}</h3>
                    <p className="text-blue-600 font-medium">{selectedCoach.activityType}</p>
                    <div className="flex items-center space-x-1 mt-1">
                      <Star className="h-4 w-4 text-yellow-500 fill-current" />
                      <span className="text-sm text-gray-600">{selectedCoach.rating}</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-4 w-4 text-gray-400" />
                    <span className="text-sm text-gray-600">{selectedCoach.location}</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-semibold text-green-600">${selectedCoach.price}/hr</span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      selectedCoach.isAvailable 
                        ? 'bg-green-100 text-green-700' 
                        : 'bg-red-100 text-red-700'
                    }`}>
                      {selectedCoach.isAvailable ? 'Available' : 'Busy'}
                    </span>
                  </div>
                </div>

                <div className="mt-auto space-y-3">
                  <Button 
                    onClick={() => handleViewProfile(selectedCoach.id)}
                    className="w-full bg-blue-600 hover:bg-blue-700"
                  >
                    View Profile
                  </Button>
                  <Button 
                    variant="outline" 
                    disabled={!selectedCoach.isAvailable}
                    className="w-full"
                  >
                    {selectedCoach.isAvailable ? 'Request Booking' : 'Not Available'}
                  </Button>
                </div>
              </div>
            ) : (
              <div className="p-6 h-full flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <MapPin className="h-12 w-12 mx-auto mb-3 text-gray-300" />
                  <p className="text-lg font-medium mb-2">Select a pin on the map</p>
                  <p className="text-sm">Click on any coach pin to view their details</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default MapModal;
