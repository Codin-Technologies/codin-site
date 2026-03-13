'use client'

import React from 'react'
import Header from '@/components/sections/Header'
import Footer from '@/components/sections/Footer'
import { 
  Users, 
  Shield, 
  Award, 
  TrendingUp, 
  CheckCircle, 
  Play,
  ArrowRight,
  Star,
  Clock,
  Globe,
  Smartphone,
  Database,
  BarChart3,
  AlertTriangle,
  FileText,
  Zap
} from 'lucide-react'

export default function DriverManagementPage() {
  const features = [
    {
      title: 'Driver Behavior Monitoring',
      description: 'Track driving patterns and identify risky behaviors',
      icon: <Users className="w-8 h-8" />,
      benefits: ['Speed monitoring', 'Harsh braking detection', 'Idle time tracking']
    },
    {
      title: 'Safety Scoring System',
      description: 'Comprehensive driver performance evaluation',
      icon: <Award className="w-8 h-8" />,
      benefits: ['Real-time scoring', 'Performance trends', 'Safety benchmarks']
    },
    {
      title: 'Training Management',
      description: 'Track certifications and training requirements',
      icon: <FileText className="w-8 h-8" />,
      benefits: ['License tracking', 'Training schedules', 'Compliance alerts']
    },
    {
      title: 'Incident Reporting',
      description: 'Document and analyze safety incidents',
      icon: <AlertTriangle className="w-8 h-8" />,
      benefits: ['Accident reports', 'Near-miss tracking', 'Investigation tools']
    }
  ]

  const benefits = [
    {
      title: 'Reduce Accidents',
      description: 'Proactive safety monitoring prevents incidents',
      icon: <Shield className="w-6 h-6" />,
      metric: '40%'
    },
    {
      title: 'Lower Insurance',
      description: 'Better safety records reduce premiums',
      icon: <TrendingUp className="w-6 h-6" />,
      metric: '25%'
    },
    {
      title: 'Improve Compliance',
      description: 'Meet regulatory requirements easily',
      icon: <CheckCircle className="w-6 h-6" />,
      metric: '100%'
    },
    {
      title: 'Driver Retention',
      description: 'Better working conditions improve retention',
      icon: <Users className="w-6 h-6" />,
      metric: '60%'
    }
  ]

  const safetyFeatures = [
    {
      title: 'Real-time Alerts',
      description: 'Instant notifications for safety violations',
      icon: <Zap className="w-6 h-6" />
    },
    {
      title: 'Geofencing',
      description: 'Set boundaries and get unauthorized movement alerts',
      icon: <Globe className="w-6 h-6" />
    },
    {
      title: 'Fatigue Detection',
      description: 'Monitor driving patterns for signs of fatigue',
      icon: <Clock className="w-6 h-6" />
    },
    {
      title: 'Weather Integration',
      description: 'Adjust safety parameters based on conditions',
      icon: <Shield className="w-6 h-6" />
    }
  ]

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-20 pb-16 bg-gradient-to-br from-primary-50 via-white to-primary-100">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <div className="inline-flex items-center space-x-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium">
                  <Star className="w-4 h-4" />
                  <span>Safety First Solution</span>
                </div>
                <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                  Driver Management
                  <span className="block text-primary-600">That Protects</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Comprehensive driver oversight and safety management system designed to protect your drivers, 
                  reduce accidents, and ensure compliance with Tanzanian transport regulations.
                </p>
                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <button className="bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-700 transition-all duration-300 transform hover:scale-105 flex items-center space-x-2">
                    <Play className="w-5 h-5" />
                    <span>Watch Demo</span>
                  </button>
                  <button className="border-2 border-primary-600 text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-primary-50 transition-all duration-300 flex items-center space-x-2">
                    <span>Start Free Trial</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
              <div className="relative">
                <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Driver Management Dashboard"
                    className="w-full h-96 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4">
                      <h3 className="font-semibold text-gray-900 mb-2">Driver Safety Dashboard</h3>
                      <p className="text-sm text-gray-600">Monitor driver performance in real-time</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <div className="text-center max-w-4xl mx-auto mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Comprehensive Driver Oversight
              </h2>
              <p className="text-xl text-gray-600">
                Everything you need to manage, monitor, and protect your drivers
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:bg-gray-100 transition-all duration-300">
                  <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center text-primary-600 mb-6">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {feature.description}
                  </p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-gray-50">
          <div className="container-custom">
            <div className="text-center max-w-4xl mx-auto mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Protect Your Business & Drivers
              </h2>
              <p className="text-xl text-gray-600">
                See measurable improvements in safety, compliance, and operational efficiency
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="w-20 h-20 bg-primary-100 rounded-3xl flex items-center justify-center text-primary-600 mx-auto mb-6">
                    {benefit.icon}
                  </div>
                  <div className="text-3xl font-bold text-primary-600 mb-2">{benefit.metric}</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Safety Features */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Advanced Safety Features
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Our driver management system includes cutting-edge safety features that go beyond 
                  basic monitoring to actively prevent accidents and protect your drivers.
                </p>
                
                <div className="grid grid-cols-2 gap-6">
                  {safetyFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center text-primary-600 flex-shrink-0">
                        {feature.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="relative">
                <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                  <img
                    src="https://img.freepik.com/free-photo/pinpoints-compass-map_23-2148232397.jpg?t=st=1757533574~exp=1757537174~hmac=d7ed4aad826d72a6c72ebec933e724053df09abd8680493cdf78ea4ffedd29a8&w=2000"
                    alt="Safety Features"
                    className="w-full h-96 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Compliance Section */}
        <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
          <div className="container-custom">
            <div className="text-center max-w-4xl mx-auto mb-16">
              <h2 className="text-4xl font-bold mb-6">
                Tanzanian Transport Compliance
              </h2>
              <p className="text-xl text-gray-300">
                Meet all regulatory requirements and maintain proper documentation
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-primary-500/20 rounded-3xl flex items-center justify-center text-primary-400 mx-auto mb-6">
                  <FileText className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Driver Records</h3>
                <p className="text-gray-400 text-sm">Complete driver history and documentation</p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-primary-500/20 rounded-3xl flex items-center justify-center text-primary-400 mx-auto mb-6">
                  <Shield className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Safety Reports</h3>
                <p className="text-gray-400 text-sm">Regulatory compliance reporting</p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-primary-500/20 rounded-3xl flex items-center justify-center text-primary-400 mx-auto mb-6">
                  <BarChart3 className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Performance Analytics</h3>
                <p className="text-gray-400 text-sm">Data-driven insights for improvement</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-primary-500 to-primary-600">
          <div className="container-custom">
            <div className="text-center max-w-4xl mx-auto text-white">
              <h2 className="text-4xl font-bold mb-6">
                Ready to Protect Your Drivers?
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Join companies across Tanzania who trust FleetCo for driver safety and management.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
                <a href="/contact" className="bg-white text-primary-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center space-x-2">
                  <span>Start Free Trial</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a href="/demo" className="border-2 border-white text-white hover:bg-white hover:text-primary-600 px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center space-x-2">
                  <Play className="w-5 h-5" />
                  <span>Schedule Demo</span>
                </a>
              </div>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-white/80">
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4" />
                  <span>14-day free trial</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="w-4 h-4" />
                  <span>500+ companies trust us</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Shield className="w-4 h-4" />
                  <span>Regulatory compliance</span>
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
