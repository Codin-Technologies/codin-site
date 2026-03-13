'use client'

import { useState } from 'react'
import type { Metadata } from 'next'
import Header from '@/components/sections/Header'
import Footer from '@/components/sections/Footer'
import { Calendar, CheckCircle, Users, BarChart3, Shield, Zap } from 'lucide-react'

export default function DemoPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    fleetSize: '',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    setIsSubmitted(true)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const demoFeatures = [
    {
      icon: BarChart3,
      title: 'Real-time Dashboard',
      description: 'See live fleet data and analytics'
    },
    {
      icon: Users,
      title: 'Driver Management',
      description: 'Monitor driver performance and safety'
    },
    {
      icon: Shield,
      title: 'Compliance Tools',
      description: 'ELD logging and DOT compliance'
    },
    {
      icon: Zap,
      title: 'Predictive Maintenance',
      description: 'AI-powered maintenance scheduling'
    }
  ]

  if (isSubmitted) {
    return (
      <>
        <Header />
        <main className="pt-18 min-h-screen flex items-center justify-center bg-gradient-light">
          <div className="container-custom">
            <div className="max-w-2xl mx-auto text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
                <CheckCircle className="w-10 h-10 text-green-600" />
              </div>
              <h1 className="text-4xl font-bold text-gray-900 mb-6">
                Demo Scheduled Successfully!
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Thank you for your interest in FleetCo. Our team will contact you within 24 hours 
                to schedule your personalized demo.
              </p>
              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-soft">
                <h3 className="font-semibold text-gray-900 mb-2">What happens next?</h3>
                <ul className="text-left space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Our sales team will contact you within 24 hours
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    We&apos;ll schedule a 30-minute personalized demo
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Get answers to all your fleet management questions
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Header />
      <main className="pt-18">
        {/* Hero Section */}
        <section className="section-padding bg-gradient-light">
          <div className="container-custom">
            <div className="text-center max-w-4xl mx-auto mb-16">
              <div className="inline-flex items-center bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <Calendar className="w-4 h-4 mr-2" />
                Schedule Your Demo
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                See FleetCo in Action
              </h1>
              <p className="text-xl text-gray-600">
                Get a personalized demo tailored to your fleet&apos;s specific needs and requirements. 
                See how FleetCo can transform your operations.
              </p>
            </div>

            {/* Demo Features */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {demoFeatures.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Demo Form Section */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="max-w-2xl mx-auto">
              <div className="bg-white rounded-2xl border border-gray-200 shadow-strong p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                  Schedule Your Free Demo
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="fullName" className="block text-sm font-semibold text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        required
                        value={formData.fullName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                        placeholder="Your full name"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                        Business Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                        placeholder="your@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                        placeholder="(555) 123-4567"
                      />
                    </div>

                    <div>
                      <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
                        Company Name *
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        required
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                        placeholder="Your company"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="fleetSize" className="block text-sm font-semibold text-gray-700 mb-2">
                      Fleet Size *
                    </label>
                    <select
                      id="fleetSize"
                      name="fleetSize"
                      required
                      value={formData.fleetSize}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                    >
                      <option value="">Select fleet size</option>
                      <option value="1-10">1-10 vehicles</option>
                      <option value="11-25">11-25 vehicles</option>
                      <option value="26-50">26-50 vehicles</option>
                      <option value="51-100">51-100 vehicles</option>
                      <option value="100+">100+ vehicles</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                      Tell us about your needs (Optional)
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                      placeholder="Tell us about your fleet management challenges and what you&apos;d like to see in the demo..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full btn-primary text-lg py-4"
                  >
                    Schedule My Demo
                  </button>

                  <p className="text-sm text-gray-500 text-center">
                    By submitting this form, you agree to receive communications from FleetCo. 
                    We respect your privacy and will never share your information.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}