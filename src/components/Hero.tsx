import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const searchRef = useRef<HTMLDivElement>(null);

  // Close suggestions when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Fetch suggestions from API
  const fetchSuggestions = async (query: string) => {
    if (query.length < 2) {
      setSuggestions([]);
      setShowSuggestions(false);
      return;
    }

    setIsLoading(true);
    try {
      // TODO: Replace this URL with your actual API endpoint
      const response = await fetch(`/api/activities/suggestions?q=${encodeURIComponent(query)}`);
      if (response.ok) {
        const data = await response.json();
        setSuggestions(data.suggestions || []);
        setShowSuggestions(true);
      } else {
        // Fallback to mock data when API is not available
        const mockSuggestions = [
          "Tennis", "Piano", "Math Tutoring", "Swimming", "Guitar", 
          "Basketball", "Violin", "English Tutoring", "Soccer", "Drums"
        ].filter(item => item.toLowerCase().includes(query.toLowerCase()));
        setSuggestions(mockSuggestions);
        setShowSuggestions(true);
      }
    } catch (error) {
      // Fallback to mock data on error
      const mockSuggestions = [
        "Tennis", "Piano", "Math Tutoring", "Swimming", "Guitar", 
        "Basketball", "Violin", "English Tutoring", "Soccer", "Drums"
      ].filter(item => item.toLowerCase().includes(query.toLowerCase()));
      setSuggestions(mockSuggestions);
      setShowSuggestions(true);
    } finally {
      setIsLoading(false);
    }
  };

  // Debounce search input
  useEffect(() => {
    const timer = setTimeout(() => {
      fetchSuggestions(searchQuery);
    }, 300);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  const handleSearch = (query?: string) => {
    const searchTerm = query || searchQuery;
    if (searchTerm.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchTerm.trim())}`);
      setShowSuggestions(false);
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    setSearchQuery(suggestion);
    handleSearch(suggestion);
  };

  const handleTagClick = (tag: string) => {
    navigate(`/search?q=${encodeURIComponent(tag)}`);
  };

  const handleCategoryClick = (category: string) => {
    const categoryActivities = {
      "Sports": ["Tennis", "Swimming", "Basketball", "Soccer", "Golf", "Baseball", "Volleyball", "Running"],
      "Education": ["Math Tutoring", "English Tutoring", "Science Tutoring", "Piano", "Guitar", "Violin", "Art", "Language"]
    };
    
    const activities = categoryActivities[category as keyof typeof categoryActivities] || [];
    const searchTerm = activities.join(" OR ");
    navigate(`/search?category=${encodeURIComponent(category)}`);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && searchQuery.trim()) {
      handleSearch();
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleInputFocus = () => {
    if (suggestions.length > 0) {
      setShowSuggestions(true);
    }
  };

  return (
    <section className="bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-tr from-pink-500/20 via-purple-500/20 to-cyan-500/20"></div>
      <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-yellow-400/30 to-orange-500/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-green-400/30 to-blue-500/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-gradient-to-br from-indigo-400/20 to-purple-600/20 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      
      <div className="relative z-10 py-20">
        <div className="container mx-auto px-4">
          {/* Full Width Search Section */}
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                Find Your Perfect
                <span className="text-yellow-300 block">Coach or Instructor or Teacher</span>
              </h1>
            </div>

            {/* Categories - More Dedicated Section */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <div className="text-center space-y-6">
                <h2 className="text-2xl font-bold text-white">Browse by Category</h2>
                <div className="flex justify-center gap-6">
                  <Button
                    onClick={() => handleCategoryClick("Sports")}
                    className="bg-white/20 hover:bg-white/30 text-white border border-white/30 backdrop-blur-sm px-8 py-4 rounded-lg transition-all duration-200 transform hover:scale-105 text-lg"
                    variant="outline"
                  >
                    🏈 Sports
                  </Button>
                  <Button
                    onClick={() => handleCategoryClick("Education")}
                    className="bg-white/20 hover:bg-white/30 text-white border border-white/30 backdrop-blur-sm px-8 py-4 rounded-lg transition-all duration-200 transform hover:scale-105 text-lg"
                    variant="outline"
                  >
                    📚 Education
                  </Button>
                </div>
              </div>
            </div>

            {/* Search Bar - Full Width */}
            <div className="bg-white/95 backdrop-blur-sm rounded-lg shadow-xl p-8">
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-1 relative" ref={searchRef}>
                    <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input 
                      placeholder="Sport, activity, or skill..." 
                      className="pl-10 h-12 text-lg"
                      value={searchQuery}
                      onChange={handleInputChange}
                      onKeyPress={handleKeyPress}
                      onFocus={handleInputFocus}
                    />
                    
                    {/* Suggestions Dropdown */}
                    {showSuggestions && suggestions.length > 0 && (
                      <div className="absolute top-full left-0 right-0 bg-white border border-gray-200 rounded-md shadow-lg z-50 mt-1 max-h-48 overflow-y-auto">
                        {isLoading && (
                          <div className="px-4 py-2 text-gray-500 text-sm">
                            Loading suggestions...
                          </div>
                        )}
                        {suggestions.map((suggestion, index) => (
                          <div
                            key={index}
                            className="px-4 py-2 hover:bg-gray-50 cursor-pointer text-gray-900 border-b border-gray-100 last:border-b-0"
                            onClick={() => handleSuggestionClick(suggestion)}
                          >
                            <div className="flex items-center space-x-2">
                              <Search className="h-4 w-4 text-gray-400" />
                              <span>{suggestion}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                  <Button 
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-12 py-3 h-12 text-lg shadow-lg"
                    onClick={() => handleSearch()}
                    disabled={!searchQuery.trim()}
                  >
                    Search
                  </Button>
                </div>
                <div className="flex flex-wrap justify-center gap-3">
                  {["Tennis", "Piano", "Math Tutoring", "Swimming", "Guitar"].map((tag) => (
                    <span 
                      key={tag} 
                      className="px-4 py-2 bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 rounded-full text-sm hover:from-purple-200 hover:to-blue-200 cursor-pointer transition-all duration-200 transform hover:scale-105"
                      onClick={() => handleTagClick(tag)}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
