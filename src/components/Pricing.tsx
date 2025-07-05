
import { Button } from "@/components/ui/button";
import { Check, X } from "lucide-react";
import { useState } from "react";

const Pricing = () => {
  const [selectedRegion, setSelectedRegion] = useState<"georgia" | "global">("georgia");

  const parentFeatures = [
    "Book class session",
    "Track sessions", 
    "History of sessions",
    "Manage bills",
    "Manage Classes",
    "Write reviews",
    "Make payments"
  ];

  const getRegionalPricing = (georgiaPrice: number, globalPrice: number) => {
    return selectedRegion === "georgia" ? georgiaPrice : globalPrice;
  };

  const coachPlans = [
    {
      name: "Free",
      georgiaPrice: 0,
      globalPrice: 0,
      period: "forever",
      description: "Perfect for getting started",
      features: [
        { text: "Up to 10 clients", included: true },
        { text: "Basic scheduling", included: true },
        { text: "Alerts and Reminders", included: true },
        { text: "Class management", included: false },
        { text: "Finance", included: false },
        { text: "Payments", included: false },
        { text: "Public profile", included: false },
        { text: "Lead generation", included: false },
        { text: "Player Progress Management", included: false }
      ],
      buttonText: "Get Started Free",
      popular: false
    },
    {
      name: "Advance",
      georgiaPrice: 15,
      globalPrice: 25,
      period: "per month",
      description: "",
      features: [
        { text: "Unlimited clients", included: true },
        { text: "Advance scheduling", included: true },
        { text: "Alerts and Reminders", included: true },
        { text: "Up to 10 classes", included: true },
        { text: "Finance", included: true },
        { text: "Manual Payments", included: true },
        { text: "Public profile", included: false },
        { text: "Lead generation", included: false },
        { text: "Player Progress Management", included: false }
      ],
      buttonText: "Start Advance",
      popular: true
    }
  ];

  const proFeatures = [
    "Unlimited",
    "Advance scheduling",
    "Alerts and Reminders", 
    "Class Management",
    "Finance",
    "Automatic payments",
    "Public profile",
    "Lead generation",
    "Player progress Management"
  ];

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Choose the plan that works for your business. All plans include secure payments and basic features.
          </p>
          
          {/* Region Switcher */}
          <div className="inline-flex items-center bg-white rounded-lg p-1 border-2 border-blue-100">
            <button
              onClick={() => setSelectedRegion("georgia")}
              className={`px-4 py-2 rounded-md font-medium transition-all ${
                selectedRegion === "georgia"
                  ? "bg-blue-600 text-white shadow-sm"
                  : "text-gray-600 hover:text-blue-600"
              }`}
            >
              Georgia
            </button>
            <button
              onClick={() => setSelectedRegion("global")}
              className={`px-4 py-2 rounded-md font-medium transition-all ${
                selectedRegion === "global"
                  ? "bg-blue-600 text-white shadow-sm"
                  : "text-gray-600 hover:text-blue-600"
              }`}
            >
              Global
            </button>
          </div>
        </div>

        <div className="max-w-6xl mx-auto border-2 border-blue-400 rounded-lg bg-white p-8">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Parents & Students */}
            <div className="lg:col-span-1">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-blue-600 mb-4">Parents & Students</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-gray-900">$0</span>
                  <span className="text-gray-600 text-sm block">forever</span>
                </div>
              </div>

              <div className="space-y-3 mb-8">
                {parentFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Check className="h-4 w-4 text-green-600 flex-shrink-0" />
                    <span className="text-sm text-gray-900">{feature}</span>
                  </div>
                ))}
              </div>

              <Button className="w-full bg-blue-600 hover:bg-blue-700">
                Join Now
              </Button>
            </div>

            {/* Coaches or Instructors */}
            <div className="lg:col-span-2">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-teal-600 mb-6">Coaches or Instructors</h3>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {coachPlans.map((plan, index) => (
                  <div key={index} className={`border rounded-lg p-6 relative ${plan.popular ? 'border-teal-400' : 'border-gray-200'}`}>
                    {plan.popular && (
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                        <span className="bg-teal-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                          Most Popular
                        </span>
                      </div>
                    )}

                    <div className="text-center mb-6">
                      <h4 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h4>
                      <div className="mb-2">
                        <span className="text-3xl font-bold text-gray-900">
                          ${getRegionalPricing(plan.georgiaPrice, plan.globalPrice)}
                        </span>
                        <span className="text-gray-600 text-sm block">/{plan.period}</span>
                      </div>
                    </div>

                    <div className="space-y-2 mb-6">
                      {plan.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          {feature.included ? (
                            <Check className="h-4 w-4 text-green-600 flex-shrink-0" />
                          ) : (
                            <X className="h-4 w-4 text-gray-400 flex-shrink-0" />
                          )}
                          <span className={`text-sm ${feature.included ? 'text-gray-900' : 'text-gray-400'}`}>
                            {feature.text}
                          </span>
                        </div>
                      ))}
                    </div>

                    <Button 
                      className={`w-full ${
                        plan.popular 
                          ? 'bg-teal-600 hover:bg-teal-700' 
                          : 'bg-gray-900 hover:bg-gray-800'
                      }`}
                    >
                      {plan.buttonText}
                    </Button>
                  </div>
                ))}
              </div>
            </div>

            {/* Pro */}
            <div className="lg:col-span-1">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Pro</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-gray-900">
                    ${getRegionalPricing(20, 35)}
                  </span>
                  <span className="text-gray-600 text-sm block">/per month</span>
                </div>
              </div>

              <div className="space-y-3 mb-8">
                {proFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Check className="h-4 w-4 text-green-600 flex-shrink-0" />
                    <span className="text-sm text-gray-900">{feature}</span>
                  </div>
                ))}
              </div>

              <Button className="w-full bg-gray-900 hover:bg-gray-800">
                Join as Pro
              </Button>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600">
            Need a custom solution? 
            <a href="#" className="text-blue-600 hover:underline ml-1">Contact our sales team</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
