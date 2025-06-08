
import { Star, Play } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Thompson",
      role: "Parent",
      image: "/placeholder.svg",
      rating: 5,
      quote: "My daughter found an amazing piano teacher through Skedy. The booking process was so simple, and the teacher is incredibly patient and skilled.",
      hasVideo: false
    },
    {
      id: 2,
      name: "Michael Rodriguez",
      role: "Tennis Student",
      image: "/placeholder.svg",
      rating: 5,
      quote: "I've improved my tennis game dramatically since finding my coach on Skedy. The platform made it easy to find someone who fits my schedule and skill level.",
      hasVideo: true
    },
    {
      id: 3,
      name: "Emma Chen",
      role: "Math Tutor",
      image: "/placeholder.svg",
      rating: 5,
      quote: "As an instructor, Skedy has connected me with wonderful students. The booking system is efficient and the students are genuinely motivated to learn.",
      hasVideo: false
    },
    {
      id: 4,
      name: "David Kumar",
      role: "Adult Learner",
      image: "/placeholder.svg",
      rating: 5,
      quote: "Learning guitar as an adult seemed daunting, but Skedy helped me find a teacher who understood my goals and learning style. Highly recommend!",
      hasVideo: true
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What People Say About Us
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from our community of learners, parents, and instructors who have found success through Skedy
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="relative overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Avatar className="h-12 w-12 mr-4">
                    <AvatarImage src={testimonial.image} alt={testimonial.name} />
                    <AvatarFallback className="bg-blue-100 text-blue-600 font-semibold">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                  {testimonial.hasVideo && (
                    <Button size="sm" variant="outline" className="ml-2">
                      <Play size={16} className="mr-1" />
                      Video
                    </Button>
                  )}
                </div>
                
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} className="text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <blockquote className="text-gray-700 italic leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
              </CardContent>
              
              {testimonial.hasVideo && (
                <div className="absolute top-4 right-4">
                  <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                </div>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
