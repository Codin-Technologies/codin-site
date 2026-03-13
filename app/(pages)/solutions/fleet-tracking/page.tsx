'use client'

import React from 'react'
import Header from '@/components/sections/Header'
import Footer from '@/components/sections/Footer'
import { 
  Navigation, 
  MapPin, 
  Clock, 
  Shield, 
  TrendingUp, 
  Zap, 
  CheckCircle, 
  Play,
  ArrowRight,
  Star,
  Users,
  Globe,
  Smartphone,
  Database,
  BarChart3
} from 'lucide-react'

export default function FleetTrackingPage() {
  const features = [
    {
      title: 'Real-time GPS Tracking',
      description: 'Monitor vehicle locations with 10-second updates',
      icon: <Navigation className="w-8 h-8" />,
      benefits: ['Live vehicle positions', 'Historical route playback', 'Geofencing alerts']
    },
    {
      title: 'Advanced Telematics',
      description: 'Comprehensive vehicle and driver data collection',
      icon: <Database className="w-8 h-8" />,
      benefits: ['Engine diagnostics', 'Fuel consumption', 'Driver behavior']
    },
    {
      title: 'Smart Notifications',
      description: 'Instant alerts for important events',
      icon: <Zap className="w-8 h-8" />,
      benefits: ['Speed violations', 'Route deviations', 'Maintenance alerts']
    },
    {
      title: 'Mobile Access',
      description: 'Track your fleet from anywhere',
      icon: <Smartphone className="w-8 h-8" />,
      benefits: ['iOS & Android apps', 'Real-time updates', 'Offline capability']
    }
  ]

  const benefits = [
    {
      title: 'Reduce Fuel Costs',
      description: 'Optimize routes and reduce unnecessary mileage',
      icon: <TrendingUp className="w-6 h-6" />,
      metric: '25%'
    },
    {
      title: 'Improve Safety',
      description: 'Monitor driver behavior and prevent accidents',
      icon: <Shield className="w-6 h-6" />,
      metric: '40%'
    },
    {
      title: 'Better Customer Service',
      description: 'Provide accurate ETAs and real-time updates',
      icon: <Clock className="w-6 h-6" />,
      metric: '90%'
    },
    {
      title: 'Prevent Theft',
      description: 'Immediate alerts for unauthorized vehicle use',
      icon: <MapPin className="w-6 h-6" />,
      metric: '100%'
    }
  ]

  const useCases = [
    {
      industry: 'Logistics & Transportation',
      description: 'Track delivery trucks and optimize routes for faster deliveries',
      icon: '🚛'
    },
    {
      industry: 'Construction',
      description: 'Monitor heavy equipment and ensure proper utilization',
      icon: '🏗️'
    },
    {
      industry: 'Agriculture',
      description: 'Track farming vehicles and optimize field operations',
      icon: '🚜'
    },
    {
      industry: 'Utilities',
      description: 'Monitor service vehicles and respond quickly to emergencies',
      icon: '⚡'
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
                  <span>Most Popular Solution</span>
                </div>
                <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                  Fleet Tracking
                  <span className="block text-primary-600">Made Simple</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Get complete visibility into your fleet operations with our advanced GPS tracking and telematics solutions. 
                  Monitor vehicle locations, routes, and performance in real-time from anywhere in the world.
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
                    src="https://images.unsplash.com/photo-1574613811779-06907b5d82ce?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Fleet Tracking Dashboard"
                    className="w-full h-96 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4">
                      <h3 className="font-semibold text-gray-900 mb-2">Live Tracking Dashboard</h3>
                      <p className="text-sm text-gray-600">See your entire fleet in real-time</p>
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
                Powerful Tracking Features
              </h2>
              <p className="text-xl text-gray-600">
                Everything you need to monitor and manage your fleet effectively
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
                Transform Your Fleet Operations
              </h2>
              <p className="text-xl text-gray-600">
                See measurable improvements in efficiency, safety, and cost management
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

        {/* Use Cases */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <div className="text-center max-w-4xl mx-auto mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Perfect for Every Industry
              </h2>
              <p className="text-xl text-gray-600">
                Our fleet tracking solution adapts to your specific business needs
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="text-center group">
                  <div className="w-24 h-24 bg-primary-100 rounded-3xl flex items-center justify-center text-4xl mx-auto mb-6 group-hover:bg-primary-200 transition-colors">
                    {useCase.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{useCase.industry}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{useCase.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technology */}
        <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <h2 className="text-4xl font-bold mb-6">
                  Built with Enterprise Technology
                </h2>
                <p className="text-xl text-gray-300 leading-relaxed">
                  Our fleet tracking platform leverages cutting-edge technology to deliver reliable, 
                  scalable, and secure solutions for businesses of all sizes.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary-500/20 rounded-xl flex items-center justify-center text-primary-400">
                      <Globe className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">Global Coverage</h3>
                      <p className="text-gray-400 text-sm">Worldwide GPS coverage with 99.9% uptime</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary-500/20 rounded-xl flex items-center justify-center text-primary-400">
                      <Shield className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">Enterprise Security</h3>
                      <p className="text-gray-400 text-sm">End-to-end encryption and SOC 2 compliance</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary-500/20 rounded-xl flex items-center justify-center text-primary-400">
                      <BarChart3 className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">Advanced Analytics</h3>
                      <p className="text-gray-400 text-sm">AI-powered insights and predictive analytics</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Technology Dashboard"
                    className="w-full h-96 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-primary-500 to-primary-600">
          <div className="container-custom">
            <div className="text-center max-w-4xl mx-auto text-white">
              <h2 className="text-4xl font-bold mb-6">
                Ready to Start Tracking Your Fleet?
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Join thousands of companies who trust FleetCo for their fleet tracking needs.
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
                  <Globe className="w-4 h-4" />
                  <span>Global coverage</span>
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
