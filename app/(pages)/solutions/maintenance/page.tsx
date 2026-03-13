'use client'

import React from 'react'
import Header from '@/components/sections/Header'
import Footer from '@/components/sections/Footer'
import { 
  Wrench, 
  Clock, 
  TrendingUp, 
  CheckCircle, 
  Play,
  ArrowRight,
  Star,
  Shield,
  Globe,
  Smartphone,
  Database,
  BarChart3,
  AlertTriangle,
  Users,
  Zap,
  Calendar
} from 'lucide-react'

export default function MaintenancePage() {
  const features = [
    {
      title: 'Preventive Maintenance',
      description: 'Schedule maintenance before issues occur',
      icon: <Wrench className="w-8 h-8" />,
      benefits: ['Service scheduling', 'Parts management', 'Cost tracking']
    },
    {
      title: 'Predictive Analytics',
      description: 'AI-powered maintenance prediction',
      icon: <BarChart3 className="w-8 h-8" />,
      benefits: ['Issue prediction', 'Failure prevention', 'Optimized scheduling']
    },
    {
      title: 'Work Order Management',
      description: 'Streamlined maintenance workflow',
      icon: <Calendar className="w-8 h-8" />,
      benefits: ['Digital work orders', 'Technician assignment', 'Progress tracking']
    },
    {
      title: 'Parts Inventory',
      description: 'Manage spare parts and supplies',
      icon: <Database className="w-8 h-8" />,
      benefits: ['Stock monitoring', 'Reorder alerts', 'Cost optimization']
    }
  ]

  const benefits = [
    {
      title: 'Reduce Downtime',
      description: 'Prevent unexpected breakdowns',
      icon: <Clock className="w-6 h-6" />,
      metric: '60%'
    },
    {
      title: 'Lower Costs',
      description: 'Prevent expensive repairs',
      icon: <TrendingUp className="w-6 h-6" />,
      metric: '40%'
    },
    {
      title: 'Extend Vehicle Life',
      description: 'Proper maintenance increases longevity',
      icon: <Shield className="w-6 h-6" />,
      metric: '35%'
    },
    {
      title: 'Improve Safety',
      description: 'Well-maintained vehicles are safer',
      icon: <AlertTriangle className="w-6 h-6" />,
      metric: '100%'
    }
  ]

  const maintenanceTypes = [
    {
      title: 'Scheduled Maintenance',
      description: 'Regular service intervals based on time or mileage',
      icon: <Calendar className="w-6 h-6" />
    },
    {
      title: 'Condition-Based',
      description: 'Maintenance triggered by vehicle condition',
      icon: <Wrench className="w-6 h-6" />
    },
    {
      title: 'Predictive Maintenance',
      description: 'AI-powered maintenance scheduling',
      icon: <BarChart3 className="w-6 h-6" />
    },
    {
      title: 'Emergency Repairs',
      description: 'Quick response to unexpected issues',
      icon: <AlertTriangle className="w-6 h-6" />
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
                  <span>Preventive Solution</span>
                </div>
                <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                  Maintenance Scheduling
                  <span className="block text-primary-600">That Prevents Problems</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Comprehensive maintenance management system that prevents breakdowns, 
                  reduces costs, and keeps your fleet running smoothly with predictive analytics.
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
                    src="https://img.freepik.com/free-photo/african-american-female-worker-checking-products-before-shipment-taking-notes-warehouse_637285-4030.jpg?t=st=1757534379~exp=1757537979~hmac=91a9ec3bd4aec3735f2fdc9b8851995a26ceee0bb41d119124b13c269761f541&w=2000"
                    alt="Maintenance Dashboard"
                    className="w-full h-96 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4">
                      <h3 className="font-semibold text-gray-900 mb-2">Maintenance Dashboard</h3>
                      <p className="text-sm text-gray-600">Schedule and track all maintenance activities</p>
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
                Complete Maintenance Management
              </h2>
              <p className="text-xl text-gray-600">
                Everything you need to schedule, track, and optimize fleet maintenance
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
                Transform Your Fleet Maintenance
              </h2>
              <p className="text-xl text-gray-600">
                See immediate improvements in reliability, safety, and cost management
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

        {/* Maintenance Types */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Multiple Maintenance Strategies
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Our system supports various maintenance approaches to fit your business needs 
                  and optimize your fleet&apos;s performance and reliability.
                </p>
                
                <div className="grid grid-cols-2 gap-6">
                  {maintenanceTypes.map((type, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center text-primary-600 flex-shrink-0">
                        {type.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">{type.title}</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">{type.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="relative">
                <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1574613811779-06907b5d82ce?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Maintenance Strategies"
                    className="w-full h-96 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Workflow Section */}
        <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
          <div className="container-custom">
            <div className="text-center max-w-4xl mx-auto mb-16">
              <h2 className="text-4xl font-bold mb-6">
                Streamlined Maintenance Workflow
              </h2>
              <p className="text-xl text-gray-300">
                From scheduling to completion, our system manages the entire maintenance process
              </p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-primary-500/20 rounded-3xl flex items-center justify-center text-primary-400 mx-auto mb-6">
                  <Calendar className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-semibold mb-3">1. Schedule</h3>
                <p className="text-gray-400 text-sm">Plan maintenance based on time, mileage, or condition</p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-primary-500/20 rounded-3xl flex items-center justify-center text-primary-400 mx-auto mb-6">
                  <Users className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-semibold mb-3">2. Assign</h3>
                <p className="text-gray-400 text-sm">Assign work orders to qualified technicians</p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-primary-500/20 rounded-3xl flex items-center justify-center text-primary-400 mx-auto mb-6">
                  <Wrench className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-semibold mb-3">3. Execute</h3>
                <p className="text-gray-400 text-sm">Complete maintenance with digital work orders</p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-primary-500/20 rounded-3xl flex items-center justify-center text-primary-400 mx-auto mb-6">
                  <CheckCircle className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-semibold mb-3">4. Verify</h3>
                <p className="text-gray-400 text-sm">Quality checks and completion documentation</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-primary-500 to-primary-600">
          <div className="container-custom">
            <div className="text-center max-w-4xl mx-auto text-white">
              <h2 className="text-4xl font-bold mb-6">
                Ready to Optimize Your Maintenance?
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Join companies across Tanzania who trust FleetCo for maintenance management.
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
                  <Wrench className="w-4 h-4" />
                  <span>Predictive maintenance</span>
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
