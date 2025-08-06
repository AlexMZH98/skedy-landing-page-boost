
import { Calendar, CreditCard, Users, Search, Bell, Shield, Play } from "lucide-react";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const Features = () => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [currentVideoUrl, setCurrentVideoUrl] = useState("");

  const providerFeatures = [
    {
      icon: Calendar,
      title: "Smart Scheduling",
      description: "Automated calendar management with conflict detection and availability optimization.",
      youtubeUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
      icon: CreditCard,
      title: "Secure Billing",
      description: "Automated payments, invoicing, and financial reporting. Get paid on time, every time.",
      youtubeUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
      icon: Users,
      title: "Client Management",
      description: "Send invitations, track progress, and maintain detailed client profiles effortlessly.",
      youtubeUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    }
  ];

  const consumerFeatures = [
    {
      icon: Search,
      title: "Find & Book",
      description: "Discover qualified coaches and instructors in your area. Book sessions instantly.",
      youtubeUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
      icon: Bell,
      title: "Smart Notifications",
      description: "Get reminders for upcoming sessions, schedule changes, and important updates.",
      youtubeUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
      icon: Shield,
      title: "Secure Payments",
      description: "Pay safely with encrypted transactions and automatic receipt generation.",
      youtubeUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    }
  ];

  const handleFeatureClick = (url: string) => {
    setCurrentVideoUrl(url);
    setIsVideoModalOpen(true);
  };

  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Download Buttons */}
        <div className="text-center mb-12">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="#" 
              className="inline-flex items-center px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
            >
              <svg className="w-6 h-6 mr-3" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.523 15.3414c-.5511 0-.9993-.4482-.9993-.9993s.4482-.9993.9993-.9993.9993.4482.9993.9993-.4482.9993-.9993.9993zm-11.046 0c-.5511 0-.9993-.4482-.9993-.9993s.4482-.9993.9993-.9993.9993.4482.9993.9993-.4482.9993-.9993.9993z"/>
                <path d="M22.362 9.1747c-.24-.4718-.7264-.7695-1.2767-.7695H2.9147c-.5503 0-1.0367.2977-1.2767.7695-.24.4718-.1859 1.0419.1421 1.4947l8.085 11.1669c.3146.4346.8213.6934 1.3587.6934s1.044-.2588 1.3587-.6934l8.085-11.1669c.328-.4528.3821-1.0229.1421-1.4947z"/>
              </svg>
              <div className="text-left">
                <div className="text-xs">Download on the</div>
                <div className="text-sm font-semibold">App Store</div>
              </div>
            </a>
            <a 
              href="#" 
              className="inline-flex items-center px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
            >
              <svg className="w-6 h-6 mr-3" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3.609 1.814L13.792 12 3.61 22.186c-.405-.087-.61-.23-.61-.576V2.39c0-.347.205-.49.61-.576z"/>
                <path d="M14.5 12l3.608-3.608c.563-.563.867-1.312.867-2.11s-.304-1.547-.867-2.11L14.5 12z"/>
                <path d="M20.392 10.172l-2.685-1.54L14.5 12l3.207 3.368 2.685-1.54c.789-.453 1.289-1.312 1.289-2.328s-.5-1.875-1.289-2.328z"/>
                <path d="M3.609 1.814l10.891 10.186L17.707 8.632 3.61 22.186l10.89-10.186L17.707 15.368z"/>
              </svg>
              <div className="text-left">
                <div className="text-xs">Get it on</div>
                <div className="text-sm font-semibold">Google Play</div>
              </div>
            </a>
          </div>
        </div>

        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Built for Everyone
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Whether you're a coach building your business or a student looking for instruction, 
            Skedy has the features you need to succeed.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Provider Features */}
          <div>
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-green-600 mb-2">For Providers</h3>
              <p className="text-gray-600">Grow your business with powerful tools</p>
            </div>
            <div className="space-y-6">
              {providerFeatures.map((feature, index) => (
                <div 
                  key={index} 
                  className="relative flex items-start space-x-4 p-4 rounded-lg hover:bg-green-50 transition-colors cursor-pointer transform hover:scale-105 duration-200 group"
                  onClick={() => handleFeatureClick(feature.youtubeUrl)}
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <feature.icon className="h-6 w-6 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h4>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                  <div className="flex-shrink-0 w-10 h-10 bg-green-600 rounded-full flex items-center justify-center md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-200">
                    <Play className="h-5 w-5 text-white fill-white ml-0.5" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Consumer Features */}
          <div>
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-blue-600 mb-2">For Students & Parents</h3>
              <p className="text-gray-600">Find and book the perfect instructor</p>
            </div>
            <div className="space-y-6">
              {consumerFeatures.map((feature, index) => (
                <div 
                  key={index} 
                  className="relative flex items-start space-x-4 p-4 rounded-lg hover:bg-blue-50 transition-colors cursor-pointer transform hover:scale-105 duration-200 group"
                  onClick={() => handleFeatureClick(feature.youtubeUrl)}
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <feature.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h4>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-200">
                    <Play className="h-5 w-5 text-white fill-white ml-0.5" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      <Dialog open={isVideoModalOpen} onOpenChange={setIsVideoModalOpen}>
        <DialogContent className="max-w-4xl w-full p-0 bg-transparent border-none shadow-none">
          <DialogHeader className="sr-only">
            <DialogTitle>Feature Demo Video</DialogTitle>
          </DialogHeader>
          <div className="relative w-full aspect-video">
            <iframe
              src={currentVideoUrl}
              title="Feature Demo Video"
              className="w-full h-full rounded-lg"
              allowFullScreen
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            />
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Features;
