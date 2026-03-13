'use client'

import React from 'react'
import Header from '@/components/sections/Header'
import Footer from '@/components/sections/Footer'
import { 
  Fuel, 
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
  MapPin,
  Users,
  Shield,
  AlertTriangle,
  Zap
} from 'lucide-react'

export default function FuelManagementPage() {
  const features = [
    {
      title: 'Real-time Fuel Monitoring',
      description: 'Track fuel consumption and levels in real-time',
      icon: <Fuel className="w-8 h-8" />,
      benefits: ['Live fuel levels', 'Consumption tracking', 'Refuel alerts']
    },
    {
      title: 'Fuel Cost Analysis',
      description: 'Comprehensive cost tracking and reporting',
      icon: <BarChart3 className="w-8 h-8" />,
      benefits: ['Cost per kilometer', 'Fuel efficiency metrics', 'Budget tracking']
    },
    {
      title: 'Driver Behavior Insights',
      description: 'Identify fuel-efficient and wasteful driving patterns',
      icon: <Users className="w-8 h-8" />,
      benefits: ['Eco-driving scores', 'Behavior analysis', 'Training recommendations']
    },
    {
      title: 'Predictive Maintenance',
      description: 'Prevent fuel-related issues before they occur',
      icon: <AlertTriangle className="w-8 h-8" />,
      benefits: ['Maintenance alerts', 'Issue prediction', 'Cost prevention']
    }
  ]

  const benefits = [
    {
      title: 'Reduce Fuel Costs',
      description: 'Identify and eliminate fuel waste',
      icon: <TrendingUp className="w-6 h-6" />,
      metric: '25%'
    },
    {
      title: 'Improve Efficiency',
      description: 'Optimize fuel consumption patterns',
      icon: <Fuel className="w-6 h-6" />,
      metric: '30%'
    },
    {
      title: 'Prevent Theft',
      description: 'Detect unauthorized fuel usage',
      icon: <Shield className="w-6 h-6" />,
      metric: '100%'
    },
    {
      title: 'Better Planning',
      description: 'Accurate fuel budgeting and forecasting',
      icon: <BarChart3 className="w-6 h-6" />,
      metric: '40%'
    }
  ]

  const monitoringFeatures = [
    {
      title: 'Fuel Level Sensors',
      description: 'Accurate real-time fuel level monitoring',
      icon: <Fuel className="w-6 h-6" />
    },
    {
      title: 'Consumption Tracking',
      description: 'Detailed fuel usage analytics',
      icon: <BarChart3 className="w-6 h-6" />
    },
    {
      title: 'Geolocation Integration',
      description: 'Track fuel usage by location',
      icon: <MapPin className="w-6 h-6" />
    },
    {
      title: 'Driver Attribution',
      description: 'Assign fuel costs to specific drivers',
      icon: <Users className="w-6 h-6" />
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
                  <span>Cost Control Solution</span>
                </div>
                <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                  Fuel Management
                  <span className="block text-primary-600">That Saves Money</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Comprehensive fuel monitoring and management system that helps you track consumption, 
                  reduce costs, and improve efficiency across your entire fleet.
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
                    src="https://img.freepik.com/free-photo/different-colours-gas-station-pumps_23-2150697545.jpg?t=st=1757534152~exp=1757537752~hmac=1ccfdb386ff2eb557f7e398822a531e8744d84107ab6d48c9ee2bea29b302cba&w=2000"
                    alt="Fuel Management Dashboard"
                    className="w-full h-96 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4">
                      <h3 className="font-semibold text-gray-900 mb-2">Fuel Analytics Dashboard</h3>
                      <p className="text-sm text-gray-600">Monitor consumption and costs in real-time</p>
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
                Complete Fuel Oversight
              </h2>
              <p className="text-xl text-gray-600">
                Everything you need to monitor, analyze, and optimize fuel usage
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
                Transform Your Fuel Costs
              </h2>
              <p className="text-xl text-gray-600">
                See immediate improvements in fuel efficiency and cost management
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

        {/* Monitoring Features */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Advanced Monitoring Capabilities
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Our fuel management system provides comprehensive monitoring and analytics 
                  that give you complete visibility into your fleet&apos;s fuel consumption.
                </p>
                
                <div className="grid grid-cols-2 gap-6">
                  {monitoringFeatures.map((feature, index) => (
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
                    src="https://images.unsplash.com/photo-1574613811779-06907b5d82ce?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Fuel Monitoring"
                    className="w-full h-96 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Analytics Section */}
        <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
          <div className="container-custom">
            <div className="text-center max-w-4xl mx-auto mb-16">
              <h2 className="text-4xl font-bold mb-6">
                Powerful Analytics & Reporting
              </h2>
              <p className="text-xl text-gray-300">
                Data-driven insights to optimize your fuel management strategy
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-primary-500/20 rounded-3xl flex items-center justify-center text-primary-400 mx-auto mb-6">
                  <BarChart3 className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Real-time Analytics</h3>
                <p className="text-gray-400 text-sm">Live fuel consumption and cost data</p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-primary-500/20 rounded-3xl flex items-center justify-center text-primary-400 mx-auto mb-6">
                  <TrendingUp className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Trend Analysis</h3>
                <p className="text-gray-400 text-sm">Identify patterns and optimize efficiency</p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-primary-500/20 rounded-3xl flex items-center justify-center text-primary-400 mx-auto mb-6">
                  <Zap className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Instant Alerts</h3>
                <p className="text-gray-400 text-sm">Get notified of fuel-related issues</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-primary-500 to-primary-600">
          <div className="container-custom">
            <div className="text-center max-w-4xl mx-auto text-white">
              <h2 className="text-4xl font-bold mb-6">
                Ready to Control Your Fuel Costs?
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Join companies across Tanzania who trust FleetCo for fuel management.
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
                  <Fuel className="w-4 h-4" />
                  <span>Real-time monitoring</span>
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
