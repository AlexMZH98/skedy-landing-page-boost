
import { Button } from "@/components/ui/button";
import { Check, X } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";

const Pricing = () => {
  const { t } = useTranslation();

  const parentFeatures = [
    t('pricing.features.bookSession'),
    t('pricing.features.trackSessions'), 
    t('pricing.features.historyOfSessions'),
    t('pricing.features.manageBills'),
    t('pricing.features.manageClasses'),
    t('pricing.features.writeReviews'),
    t('pricing.features.makePayments')
  ];

  const coachPlans = [
    {
      name: "Advance",
      price: "$25",
      period: t('pricing.perMonth'),
      description: t('pricing.mostPopular'),
      features: [
        { text: t('pricing.features.unlimitedClients'), included: true },
        { text: t('pricing.features.advanceScheduling'), included: true },
        { text: t('pricing.features.alertsReminders'), included: true },
        { text: t('pricing.features.upToClasses'), included: true },
        { text: t('pricing.features.finance'), included: true },
        { text: t('pricing.features.manualPayments'), included: true },
        { text: t('pricing.features.publicProfile'), included: false },
        { text: t('pricing.features.leadGeneration'), included: false },
        { text: t('pricing.features.playerProgress'), included: false }
      ],
      buttonText: t('pricing.startAdvance'),
      popular: true
    },
    {
      name: "Free",
      price: "$0",
      period: t('pricing.forever'),
      description: "Perfect for getting started",
      features: [
        { text: t('pricing.features.upToClients'), included: true },
        { text: t('pricing.features.basicScheduling'), included: true },
        { text: t('pricing.features.alertsReminders'), included: true },
        { text: t('pricing.features.classManagement'), included: false },
        { text: t('pricing.features.finance'), included: false },
        { text: t('pricing.features.payments'), included: false },
        { text: t('pricing.features.publicProfile'), included: false },
        { text: t('pricing.features.leadGeneration'), included: false },
        { text: t('pricing.features.playerProgress'), included: false }
      ],
      buttonText: t('pricing.getStartedFree'),
      popular: false
    }
  ];

  const proFeatures = [
    t('pricing.features.unlimited'),
    t('pricing.features.advanceScheduling'),
    t('pricing.features.alertsReminders'), 
    t('pricing.features.classManagement'),
    t('pricing.features.finance'),
    t('pricing.features.automaticPayments'),
    t('pricing.features.publicProfile'),
    t('pricing.features.leadGeneration'),
    t('pricing.features.playerProgress')
  ];

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {t('pricing.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t('pricing.subtitle')}
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-8">
            {/* Parents & Students */}
            <div className="lg:col-span-3">
              <div className="border-2 border-blue-500 rounded-xl bg-white p-8 h-full shadow-lg">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-blue-600 mb-2">{t('pricing.parentsStudents')}</h3>
                  <div className="mb-6">
                    <span className="text-5xl font-bold text-gray-900">$0</span>
                    <span className="text-gray-600 text-sm block mt-1">{t('pricing.forever')}</span>
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  {parentFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700 leading-relaxed">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button className="w-full bg-blue-600 hover:bg-blue-700 py-3 text-base font-semibold">
                  {t('pricing.joinNow')}
                </Button>
              </div>
            </div>

            {/* Large gap between sections */}
            <div className="lg:col-span-2"></div>

            {/* Coaches or Instructors */}
            <div className="lg:col-span-4">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-teal-600">{t('pricing.coachesInstructors')}</h3>
              </div>

              <div className="space-y-6">
                {coachPlans.map((plan, index) => (
                  <div key={index} className={`border-2 rounded-xl p-8 relative bg-white shadow-lg ${
                    plan.popular ? 'border-teal-500 ring-4 ring-teal-100' : 'border-gray-300'
                  }`}>
                    {plan.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <span className="bg-teal-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                          {t('pricing.mostPopular')}
                        </span>
                      </div>
                    )}

                    <div className="text-center mb-6">
                      <h4 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h4>
                      <div className="mb-2">
                        <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                        <span className="text-gray-600 text-sm block mt-1">/{plan.period}</span>
                      </div>
                    </div>

                    <div className="space-y-3 mb-8">
                      {plan.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start space-x-3">
                          {feature.included ? (
                            <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                          ) : (
                            <X className="h-5 w-5 text-gray-400 flex-shrink-0 mt-0.5" />
                          )}
                          <span className={`text-sm leading-relaxed ${
                            feature.included ? 'text-gray-700' : 'text-gray-400'
                          }`}>
                            {feature.text}
                          </span>
                        </div>
                      ))}
                    </div>

                    <Button 
                      className={`w-full py-3 text-base font-semibold ${
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
            <div className="lg:col-span-3">
              <div className="border-2 border-gray-500 rounded-xl bg-white p-8 h-full shadow-lg">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{t('pricing.pro')}</h3>
                  <div className="mb-6">
                    <span className="text-5xl font-bold text-gray-900">$35</span>
                    <span className="text-gray-600 text-sm block mt-1">/{t('pricing.perMonth')}</span>
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  {proFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700 leading-relaxed">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button className="w-full bg-gray-900 hover:bg-gray-800 py-3 text-base font-semibold">
                  {t('pricing.joinAsPro')}
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-16">
          <p className="text-gray-600 text-lg">
            {t('pricing.contactSales')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
