'use client'

import React, { useState } from 'react'
import Header from '@/components/sections/Header'
import Footer from '@/components/sections/Footer'
import { 
  Check, 
  X, 
  Star, 
  Zap, 
  Shield, 
  Users, 
  Truck, 
  MapPin,
  Clock,
  Phone,
  Mail,
  MessageCircle
} from 'lucide-react'

export default function PricingPage() {
  const [isAnnual, setIsAnnual] = useState(true)
  const [selectedPlan, setSelectedPlan] = useState('professional')

  const plans = [
    {
      id: 'starter',
      name: 'Growth',
      description: 'Perfect for startups scaling their data pipelines',
      price: { monthly: 850, annual: 8500 },
      currency: 'USD',
      features: [
        'Up to 10M API requests/mo',
        'Basic telemetry tracking',
        'Single Platform selection',
        'Admin dashboard',
        'Standard reporting',
        'Email support',
        'Mobile app access',
        '99.9% uptime SLA'
      ],
      notIncluded: [
        'Advanced predictive analytics',
        'Custom ERP integrations',
        'Dedicated TAM support',
        'White-label portal'
      ],
      popular: false,
      icon: <Truck className="w-8 h-8" />
    },
    {
      id: 'professional',
      name: 'Business',
      description: 'Ideal for mid-market operations',
      price: { monthly: 2150, annual: 21500 },
      currency: 'USD',
      features: [
        'Up to 50M API requests/mo',
        'Access up to 3 Core Platforms',
        'IoT/Edge processing',
        'Predictive intelligence models',
        'Advanced analytics',
        'Custom dashboards',
        'Full REST/GraphQL access',
        'Priority 24/7 support',
        'Identity SSO integration',
        'Automated workflows',
        'Data localization',
        'Multi-tenant management'
      ],
      notIncluded: [
        'White-label portal',
        'Custom hardware engineering',
        'Dedicated Enterprise TAM'
      ],
      popular: true,
      icon: <Star className="w-8 h-8" />
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      description: 'For Fortune 500 and global deployments',
      price: { monthly: 5500, annual: 55000 },
      currency: 'USD',
      features: [
        'Unlimited API bandwidth',
        'All 6 Core Platforms & Suites',
        'Custom microservice integrations',
        'Full White-label operations',
        'Dedicated Technical Account Manager',
        '24/7/365 priority phone/Slack support',
        'Custom compliance reporting',
        'Zero-trust security modeling',
        'Multi-region high availability',
        'On-premise deployment options',
        'Predictive AI tuning',
        'SOC2 & HIPAA BAA'
      ],
      notIncluded: [],
      popular: false,
      icon: <Shield className="w-8 h-8" />
    }
  ]

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US').format(price)
  }

  const getCurrentPrice = (plan: { price: { annual: number; monthly: number } }) => {
    return isAnnual ? plan.price.annual : plan.price.monthly
  }

  const getSavings = (plan: { price: { annual: number; monthly: number } }) => {
    if (isAnnual) {
      const monthlyTotal = plan.price.monthly * 12
      const annualPrice = plan.price.annual
      return Math.round(((monthlyTotal - annualPrice) / monthlyTotal) * 100)
    }
    return 0
  }

  const additionalServices = [
    {
      name: 'Implementation Services',
      description: 'Professional legacy system migration and deployment',
      price: 'Custom quote per SOW',
      icon: <Zap className="w-6 h-6" />
    },
    {
      name: 'Change Management',
      description: 'Comprehensive enterprise training and digital adoption',
      price: 'From $5,000 / engagement',
      icon: <Users className="w-6 h-6" />
    },
    {
      name: 'Custom Development',
      description: 'Tailored headless integrations for bespoke workflows',
      price: 'From $15,000 / sprint',
      icon: <Shield className="w-6 h-6" />
    },
    {
      name: 'Cloud Migrations',
      description: 'Moving on-prem datasets into secure resilient environments',
      price: 'From $5,000 / TB',
      icon: <MapPin className="w-6 h-6" />
    }
  ]

  const faqs = [
    {
      question: 'Can I change plans anytime?',
      answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing cycle.'
    },
    {
      question: 'Is there a setup fee?',
      answer: 'No setup fees for our cloud-based solution. Hardware installation is available as an additional service.'
    },
    {
      question: 'Do you offer discounts for NGOs?',
      answer: 'Yes, we offer special pricing for non-governmental organizations and educational institutions. Contact us for details.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept bank transfers, mobile money (M-Pesa, Airtel Money), and major credit cards for international clients.'
    },
    {
      question: 'Is there a free trial?',
      answer: 'Yes, we offer a 14-day free trial for all plans. No credit card required to start.'
    },
    {
      question: 'What happens if I exceed my usage limits?',
      answer: 'We provide soft limits with automated tier notifications. Enterprise plans include continuous scale buffering.'
    }
  ]

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-20">
          <div className="container-custom">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Simple, Transparent Pricing
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Choose the perfect licensing model for your cloud architecture needs. 
                All enterprise tiers include deep API access and continuous integration support.
              </p>
              
              {/* Billing Toggle */}
              <div className="flex items-center justify-center space-x-4 mb-8">
                <span className={`text-sm font-medium ${!isAnnual ? 'text-gray-900' : 'text-gray-500'}`}>
                  Monthly
                </span>
                <button
                  onClick={() => setIsAnnual(!isAnnual)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    isAnnual ? 'bg-primary-500' : 'bg-gray-200'
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      isAnnual ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
                <span className={`text-sm font-medium ${isAnnual ? 'text-gray-900' : 'text-gray-500'}`}>
                  Annual
                  {isAnnual && <span className="ml-2 text-sm text-primary-600 font-semibold">Save up to 20%</span>}
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="py-20 bg-gray-50">
          <div className="container-custom">
            <div className="grid lg:grid-cols-3 gap-8">
              {plans.map((plan) => (
                <div
                  key={plan.id}
                  className={`relative bg-white rounded-2xl p-8 shadow-soft border-2 transition-all duration-300 hover:shadow-lg ${
                    plan.popular 
                      ? 'border-primary-500 scale-105' 
                      : 'border-gray-100 hover:border-primary-200'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-primary-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}

                  <div className="text-center mb-8">
                    <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center text-primary-600 mx-auto mb-4">
                      {plan.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                    <p className="text-gray-600 mb-6">{plan.description}</p>
                    
                    <div className="mb-4">
                      <span className="text-4xl font-bold text-gray-900">
                        {formatPrice(getCurrentPrice(plan))}
                      </span>
                      <span className="text-gray-500 ml-2">
                        {isAnnual ? '/year' : '/month'}
                      </span>
                    </div>
                    
                    {isAnnual && getSavings(plan) > 0 && (
                      <div className="text-sm text-primary-600 font-semibold">
                        Save {getSavings(plan)}% vs monthly
                      </div>
                    )}
                  </div>

                  <div className="space-y-4 mb-8">
                    <h4 className="font-semibold text-gray-900 mb-3">What&apos;s included:</h4>
                    {plan.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                    
                    {plan.notIncluded.length > 0 && (
                      <>
                        <h4 className="font-semibold text-gray-900 mt-6 mb-3">Not included:</h4>
                        {plan.notIncluded.map((feature, index) => (
                          <div key={index} className="flex items-center space-x-3">
                            <X className="w-5 h-5 text-red-500 flex-shrink-0" />
                            <span className="text-gray-500">{feature}</span>
                          </div>
                        ))}
                      </>
                    )}
                  </div>

                  <button
                    onClick={() => setSelectedPlan(plan.id)}
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-primary-500 text-white hover:bg-primary-600 transform hover:scale-105'
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    }`}
                  >
                    {plan.popular ? 'Get Started' : 'Choose Plan'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Services */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <div className="text-center max-w-4xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Additional Services
              </h2>
              <p className="text-xl text-gray-600">
                Enhance your ecosystem deployments with our dedicated global engineering pods.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {additionalServices.map((service, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-6 text-center hover:bg-gray-100 transition-colors">
                  <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center text-primary-600 mx-auto mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.name}</h3>
                  <p className="text-gray-600 text-sm mb-3">{service.description}</p>
                  <div className="text-primary-600 font-semibold">{service.price}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-gray-50">
          <div className="container-custom">
            <div className="text-center max-w-4xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-600">
                Get answers to common questions about our pricing and services.
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <div key={index} className="bg-white rounded-xl p-6 shadow-soft">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-20 bg-gradient-to-r from-primary-500 to-primary-600">
          <div className="container-custom">
            <div className="text-center max-w-4xl mx-auto text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Start your 14-day free trial today. No credit card required.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
                <a href="/contact" className="bg-white text-primary-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                  Start Free Trial
                </a>
                <a href="/demo" className="border-2 border-white text-white hover:bg-white hover:text-primary-600 px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                  Schedule Demo
                </a>
              </div>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-white/80">
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4" />
                  <span>14-day free trial</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MessageCircle className="w-4 h-4" />
                  <span>24/7 support</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Shield className="w-4 h-4" />
                  <span>No setup fees</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
