
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
            {/* App Store Button */}
            <a 
              href="#" 
              className="group inline-flex items-center px-6 py-3 bg-gradient-to-r from-gray-900 to-black text-white rounded-lg hover:from-gray-800 hover:to-gray-900 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
            >
              <svg className="w-8 h-8 mr-3 group-hover:animate-pulse" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              <div className="text-left">
                <div className="text-xs opacity-90">Download on the</div>
                <div className="text-lg font-semibold">App Store</div>
              </div>
            </a>

            {/* Google Play Store Button */}
            <a 
              href="#" 
              className="group inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-500 via-blue-500 to-purple-600 text-white rounded-lg hover:from-green-400 hover:via-blue-400 hover:to-purple-500 transition-all duration-300 transform hover:scale-105 hover:shadow-xl animate-pulse hover:animate-none"
            >
              <svg className="w-8 h-8 mr-3 group-hover:rotate-12 transition-transform duration-300" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
              </svg>
              <div className="text-left">
                <div className="text-xs opacity-90">Get it on</div>
                <div className="text-lg font-semibold">Google Play</div>
              </div>
            </a>
          </div>
          
          {/* Decorative elements */}
          <div className="flex justify-center mt-6 space-x-2">
            <div className="w-2 h-2 bg-red-500 rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-yellow-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
            <div className="w-2 h-2 bg-green-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.3s' }}></div>
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
