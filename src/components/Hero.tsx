
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Calendar, CreditCard, Users } from "lucide-react";

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-green-50 py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Consumer Search */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Find Your Perfect
                <span className="text-blue-600 block">Coach or Instructor</span>
              </h1>
              <p className="text-xl text-gray-600">
                Discover, book, and pay for sports lessons, tutoring, and activities in your area.
              </p>
            </div>

            {/* Search Bar */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900">Search for Coaches</h3>
                <div className="flex gap-2">
                  <div className="flex-1 relative">
                    <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input 
                      placeholder="Sport, activity, or skill..." 
                      className="pl-10"
                    />
                  </div>
                  <Button className="bg-blue-600 hover:bg-blue-700 px-8">
                    Search
                  </Button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {["Tennis", "Piano", "Math Tutoring", "Swimming", "Guitar"].map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200 cursor-pointer transition-colors">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Provider Benefits */}
          <div className="bg-white rounded-xl shadow-xl p-8">
            <div className="space-y-6">
              <div className="text-center">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Are You a Coach or Instructor?
                </h2>
                <p className="text-gray-600 mb-6">
                  Join thousands of providers who use Skedy to manage their business and grow their client base.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Calendar className="h-6 w-6 text-green-600" />
                  <span className="text-gray-700">Easy scheduling & calendar management</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CreditCard className="h-6 w-6 text-green-600" />
                  <span className="text-gray-700">Secure payments & billing automation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="h-6 w-6 text-green-600" />
                  <span className="text-gray-700">Client management & invitations</span>
                </div>
              </div>

              <Button className="w-full bg-green-600 hover:bg-green-700 text-lg py-3">
                Join as a Provider
              </Button>

              <p className="text-sm text-gray-500 text-center">
                Free to start • No setup fees • Cancel anytime
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
