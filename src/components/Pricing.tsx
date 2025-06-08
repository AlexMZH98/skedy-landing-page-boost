
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
      name: t('pricing.features.advance'),
      price: "$25",
      period: t('pricing.perMonth'),
      description: "",
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
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Parents & Students */}
            <div className="lg:col-span-1">
              <div className="border-2 border-blue-400 rounded-lg bg-white p-6 h-full">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-blue-600 mb-4">{t('pricing.parentsStudents')}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-gray-900">$0</span>
                    <span className="text-gray-600 text-sm block">{t('pricing.forever')}</span>
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
                  {t('pricing.joinNow')}
                </Button>
              </div>
            </div>

            {/* Gap between Parents & Students and Coaches */}
            <div className="lg:col-span-1"></div>

            {/* Coaches or Instructors */}
            <div className="lg:col-span-1">
              <div className="space-y-6">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-teal-600 mb-6">{t('pricing.coachesInstructors')}</h3>
                </div>

                {coachPlans.map((plan, index) => (
                  <div key={index} className={`border-2 rounded-lg p-6 relative bg-white ${plan.popular ? 'border-teal-400' : 'border-gray-200'}`}>
                    {plan.popular && (
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                        <span className="bg-teal-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                          {t('pricing.mostPopular')}
                        </span>
                      </div>
                    )}

                    <div className="text-center mb-6">
                      <h4 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h4>
                      <div className="mb-2">
                        <span className="text-3xl font-bold text-gray-900">{plan.price}</span>
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
              <div className="border-2 border-gray-400 rounded-lg bg-white p-6 h-full">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('pricing.pro')}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-gray-900">$35</span>
                    <span className="text-gray-600 text-sm block">/{t('pricing.perMonth')}</span>
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
                  {t('pricing.joinAsPro')}
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600">
            {t('pricing.contactSales')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
