'use client'

import React from 'react'
import Header from '@/components/sections/Header'
import Footer from '@/components/sections/Footer'
import { 
  Truck, 
  Route, 
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
  Fuel,
  Users,
  Shield,
  Zap,
  Award,
  Target,
  BarChart,
  PieChart,
  Activity,
  Navigation,
  Settings,
  FileText,
  AlertTriangle,
  Calendar,
  Lock,
  Globe2,
  Cpu,
  Cloud
} from 'lucide-react'

export default function LogisticsPage() {
  const industryFeatures = [
    {
      title: 'Route Optimization',
      description: 'AI-powered route planning for maximum efficiency',
      icon: <Route className="w-8 h-8" />,
      benefits: [
        'Multi-stop route optimization',
        'Real-time traffic integration',
        'Fuel cost minimization',
        'Delivery time optimization'
      ]
    },
    {
      title: 'Real-Time Tracking',
      description: 'Complete visibility into your delivery fleet',
      icon: <Navigation className="w-8 h-8" />,
      benefits: [
        'Live vehicle locations',
        'ETA accuracy',
        'Customer notifications',
        'Delivery confirmation'
      ]
    },
    {
      title: 'Fleet Management',
      description: 'Comprehensive fleet oversight and control',
      icon: <Truck className="w-8 h-8" />,
      benefits: [
        'Vehicle utilization tracking',
        'Maintenance scheduling',
        'Driver performance monitoring',
        'Cost analysis and reporting'
      ]
    },
    {
      title: 'Customer Experience',
      description: 'Enhanced delivery experience and satisfaction',
      icon: <Users className="w-8 h-8" />,
      benefits: [
        'Real-time delivery updates',
        'Automated notifications',
        'Delivery tracking portal',
        'Customer feedback system'
      ]
    }
  ]

  const businessBenefits = [
    {
      title: 'Reduce Delivery Costs',
      description: 'Optimize routes and reduce fuel consumption',
      icon: <TrendingUp className="w-6 h-6" />,
      metric: '25-35%',
      details: 'Average cost reduction in delivery operations'
    },
    {
      title: 'Improve Delivery Speed',
      description: 'Faster deliveries with optimized routes',
      icon: <Clock className="w-6 h-6" />,
      metric: '30%',
      details: 'Improvement in delivery times'
    },
    {
      title: 'Enhance Customer Satisfaction',
      description: 'Better delivery experience and communication',
      icon: <Target className="w-6 h-6" />,
      metric: '90%',
      details: 'Improvement in customer satisfaction scores'
    },
    {
      title: 'Increase Fleet Efficiency',
      description: 'Better utilization and reduced downtime',
      icon: <BarChart3 className="w-6 h-6" />,
      metric: '40%',
      details: 'Improvement in fleet utilization'
    }
  ]

  const logisticsSolutions = [
    {
      title: 'Last-Mile Delivery',
      description: 'Optimize final delivery leg for maximum efficiency',
      icon: <MapPin className="w-6 h-6" />,
      features: ['Route optimization', 'Real-time tracking', 'Customer notifications', 'Delivery confirmation']
    },
    {
      title: 'Long-Haul Transportation',
      description: 'Efficient management of long-distance freight',
      icon: <Globe className="w-6 h-6" />,
      features: ['Fuel monitoring', 'Driver safety', 'Route planning', 'Cost tracking']
    },
    {
      title: 'Warehouse Management',
      description: 'Streamline warehouse operations and inventory',
      icon: <Database className="w-6 h-6" />,
      features: ['Inventory tracking', 'Order management', 'Picking optimization', 'Shipping coordination']
    },
    {
      title: 'Supply Chain Visibility',
      description: 'End-to-end supply chain transparency',
      icon: <BarChart className="w-6 h-6" />,
      features: ['Real-time monitoring', 'Performance analytics', 'Risk management', 'Compliance tracking']
    }
  ]

  const technologyFeatures = [
    {
      title: 'AI-Powered Analytics',
      description: 'Intelligent insights for better decision making',
      icon: <Cpu className="w-6 h-6" />,
      details: 'Machine learning algorithms for route optimization and demand forecasting'
    },
    {
      title: 'Cloud-Based Platform',
      description: 'Scalable and secure logistics management',
      icon: <Cloud className="w-6 h-6" />,
      details: 'AWS-powered infrastructure with 99.9% uptime guarantee'
    },
    {
      title: 'Mobile Applications',
      description: 'Manage logistics on-the-go',
      icon: <Smartphone className="w-6 h-6" />,
      details: 'iOS and Android apps for drivers, managers, and customers'
    },
    {
      title: 'Real-Time Integration',
      description: 'Seamless data flow across systems',
      icon: <Zap className="w-6 h-6" />,
      details: 'API integrations with ERP, WMS, and TMS systems'
    }
  ]

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-20 pb-16 bg-gradient-to-br from-primary-50 via-white to-primary-100 relative overflow-hidden">
          <div className="absolute inset-0 bg-primary-50/20 opacity-30"></div>
          <div className="container-custom relative">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <div className="inline-flex items-center space-x-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium">
                  <Star className="w-4 h-4" />
                  <span>Logistics & Transportation</span>
                </div>
                <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                  Logistics
                  <span className="block text-primary-600">Reimagined</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Transform your logistics and transportation operations with our comprehensive fleet management platform. 
                  Optimize routes, reduce costs, and deliver exceptional customer experiences across Tanzania and East Africa.
                </p>
                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <button className="bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-700 transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 shadow-lg">
                    <Play className="w-5 h-5" />
                    <span>Watch Demo</span>
                  </button>
                  <button className="border-2 border-primary-600 text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-primary-50 transition-all duration-300 flex items-center space-x-2">
                    <span>Start Free Trial</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
                <div className="flex items-center space-x-6 text-sm text-gray-600">
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4" />
                    <span>14-day free trial</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="w-4 h-4" />
                    <span>500+ companies trust us</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Globe2 className="w-4 h-4" />
                    <span>East Africa coverage</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1574613811779-06907b5d82ce?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Logistics Dashboard"
                    className="w-full h-96 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4">
                      <h3 className="font-semibold text-gray-900 mb-2">Logistics Dashboard</h3>
                      <p className="text-sm text-gray-600">Complete visibility and control</p>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary-500/20 rounded-full flex items-center justify-center">
                  <Truck className="w-12 h-12 text-primary-600" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Industry Features */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <div className="text-center max-w-4xl mx-auto mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Logistics Solutions Built for Success
              </h2>
              <p className="text-xl text-gray-600">
                Everything you need to optimize your logistics and transportation operations
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {industryFeatures.map((feature, index) => (
                <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:bg-gray-100 transition-all duration-300 hover:shadow-lg">
                  <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center text-primary-600 mb-6">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {feature.description}
                  </p>
                  <ul className="space-y-3">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Business Benefits */}
        <section className="py-20 bg-gray-50">
          <div className="container-custom">
            <div className="text-center max-w-4xl mx-auto mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Transform Your Logistics Operations
              </h2>
              <p className="text-xl text-gray-600">
                See measurable improvements across all aspects of your logistics business
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {businessBenefits.map((benefit, index) => (
                <div key={index} className="text-center bg-white rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
                  <div className="w-20 h-20 bg-primary-100 rounded-3xl flex items-center justify-center text-primary-600 mx-auto mb-6">
                    {benefit.icon}
                  </div>
                  <div className="text-3xl font-bold text-primary-600 mb-2">{benefit.metric}</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-3">{benefit.description}</p>
                  <p className="text-xs text-primary-600 font-medium">{benefit.details}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Logistics Solutions */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <div className="text-center max-w-4xl mx-auto mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Comprehensive Logistics Solutions
              </h2>
              <p className="text-xl text-gray-600">
                From last-mile delivery to long-haul transportation, we have you covered
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {logisticsSolutions.map((solution, index) => (
                <div key={index} className="text-center group">
                  <div className="w-20 h-20 bg-primary-100 rounded-3xl flex items-center justify-center text-primary-600 mx-auto mb-6 group-hover:bg-primary-200 transition-colors">
                    {solution.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{solution.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{solution.description}</p>
                  <ul className="space-y-2 text-left">
                    {solution.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2 text-sm text-gray-700">
                        <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technology & Security */}
        <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <h2 className="text-4xl font-bold mb-6">
                  Enterprise-Grade Technology
                </h2>
                <p className="text-xl text-gray-300 leading-relaxed">
                  Built with cutting-edge technology to deliver reliable, scalable, and secure 
                  logistics management solutions for businesses of all sizes.
                </p>
                
                <div className="space-y-6">
                  {technologyFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary-500/20 rounded-xl flex items-center justify-center text-primary-400 flex-shrink-0">
                        {feature.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-1">{feature.title}</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
                        <p className="text-primary-400 text-xs mt-1">{feature.details}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="relative">
                <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Technology Platform"
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
                Ready to Transform Your Logistics?
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Join logistics companies across East Africa who trust FleetCo for their operations.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
                <a href="/contact" className="bg-white text-primary-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 shadow-lg">
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
                  <Award className="w-4 h-4" />
                  <span>Enterprise-grade platform</span>
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
