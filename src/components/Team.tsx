
import { Linkedin, Twitter } from "lucide-react";

const Team = () => {
  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "CEO & Co-founder",
      bio: "Former tennis coach with 10+ years experience building sports businesses.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b2e5?w=300&h=300&fit=crop&crop=face",
      linkedin: "#",
      twitter: "#"
    },
    {
      name: "Mike Chen",
      role: "CTO & Co-founder",
      bio: "Tech entrepreneur passionate about connecting coaches with students.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      linkedin: "#",
      twitter: "#"
    },
    {
      name: "Emily Rodriguez",
      role: "Head of Product",
      bio: "Product designer focused on creating intuitive scheduling experiences.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
      linkedin: "#",
      twitter: "#"
    },
    {
      name: "David Park",
      role: "Head of Growth",
      bio: "Marketing expert helping coaches grow their businesses through technology.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      linkedin: "#",
      twitter: "#"
    }
  ];

  return (
    <section id="team" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Meet Our Team
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We're a passionate team of coaches, athletes, and tech enthusiasts building the future of sports instruction.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center group">
              <div className="relative mb-6">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto object-cover shadow-lg group-hover:shadow-xl transition-shadow"
                />
                <div className="absolute inset-0 rounded-full bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all flex items-center justify-center">
                  <div className="flex space-x-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    <a 
                      href={member.linkedin} 
                      className="p-2 bg-white rounded-full shadow-lg hover:bg-blue-600 hover:text-white transition-colors"
                    >
                      <Linkedin size={16} />
                    </a>
                    <a 
                      href={member.twitter} 
                      className="p-2 bg-white rounded-full shadow-lg hover:bg-blue-400 hover:text-white transition-colors"
                    >
                      <Twitter size={16} />
                    </a>
                  </div>
                </div>
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
              <p className="text-blue-600 font-medium mb-3">{member.role}</p>
              <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
