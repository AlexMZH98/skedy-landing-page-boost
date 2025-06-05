
import { Calendar, CreditCard, Users, Search, Bell, Shield } from "lucide-react";

const Features = () => {
  const providerFeatures = [
    {
      icon: Calendar,
      title: "Smart Scheduling",
      description: "Automated calendar management with conflict detection and availability optimization.",
      youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    },
    {
      icon: CreditCard,
      title: "Secure Billing",
      description: "Automated payments, invoicing, and financial reporting. Get paid on time, every time.",
      youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    },
    {
      icon: Users,
      title: "Client Management",
      description: "Send invitations, track progress, and maintain detailed client profiles effortlessly.",
      youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    }
  ];

  const consumerFeatures = [
    {
      icon: Search,
      title: "Find & Book",
      description: "Discover qualified coaches and instructors in your area. Book sessions instantly.",
      youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    },
    {
      icon: Bell,
      title: "Smart Notifications",
      description: "Get reminders for upcoming sessions, schedule changes, and important updates.",
      youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    },
    {
      icon: Shield,
      title: "Secure Payments",
      description: "Pay safely with encrypted transactions and automatic receipt generation.",
      youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    }
  ];

  const handleFeatureClick = (url: string) => {
    window.open(url, '_blank', 'width=800,height=600,scrollbars=yes,resizable=yes');
  };

  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4">
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
                  className="flex items-start space-x-4 p-4 rounded-lg hover:bg-green-50 transition-colors cursor-pointer transform hover:scale-105 duration-200"
                  onClick={() => handleFeatureClick(feature.youtubeUrl)}
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <feature.icon className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h4>
                    <p className="text-gray-600">{feature.description}</p>
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
                  className="flex items-start space-x-4 p-4 rounded-lg hover:bg-blue-50 transition-colors cursor-pointer transform hover:scale-105 duration-200"
                  onClick={() => handleFeatureClick(feature.youtubeUrl)}
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <feature.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h4>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
