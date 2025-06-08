
import { Users, UserCheck, Clock } from "lucide-react";

const Statistics = () => {
  const stats = [
    {
      icon: Users,
      number: "2,500+",
      label: "Verified Providers",
      description: "Professional coaches and instructors"
    },
    {
      icon: UserCheck,
      number: "15,000+",
      label: "Happy Customers",
      description: "Students achieving their goals"
    },
    {
      icon: Clock,
      number: "50,000+",
      label: "Sessions Tracked",
      description: "Successful learning sessions completed"
    }
  ];

  return (
    <section id="statistics" className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Growing Community of Learners
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of students and professionals who trust Skedy for their learning journey
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 text-white rounded-full mb-6">
                <stat.icon size={28} />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">
                {stat.number}
              </div>
              <div className="text-xl font-semibold text-gray-800 mb-2">
                {stat.label}
              </div>
              <div className="text-gray-600">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;
