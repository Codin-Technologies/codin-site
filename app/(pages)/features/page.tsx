'use client'

import React, { useState } from 'react'
import Header from '@/components/sections/Header'
import Footer from '@/components/sections/Footer'
import { 
  Shield, 
  BarChart3, 
  Truck, 
  Navigation, 
  TrendingUp,
  Users,
  Settings,
  Zap,
  Clock,
  Play,
  ArrowRight,
  CheckCircle,
  Star,
  Award,
  Smartphone,
  Globe,
  Lock,
  Database
} from 'lucide-react'

export default function FeaturesPage() {
  const [activeFeature, setActiveFeature] = useState('tracking')

  const features = [
    {
      id: 'tracking',
      title: 'Advanced GPS Tracking & Telematics',
      subtitle: 'Real-time visibility into every vehicle and driver',
      icon: <Navigation className="w-12 h-12" />,
      description: 'Get complete visibility into your fleet operations with our advanced GPS tracking and telematics solutions. Monitor vehicle locations, routes, and performance in real-time.',
      heroImage: 'https://images.unsplash.com/photo-1574613811779-06907b5d82ce?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      highlights: [
        'Real-time GPS tracking with 10-second updates',
        'Historical route playback and analysis',
        'Geofencing and boundary alerts',
        'Multi-vehicle tracking dashboard',
        'Offline tracking with data sync',
        'Custom tracking intervals and alerts'
      ],
      benefits: [
        'Reduce fuel costs by optimizing routes',
        'Improve customer service with accurate ETAs',
        'Prevent unauthorized vehicle use',
        'Enhance driver accountability',
        'Streamline dispatch operations'
      ],
      stats: [
        { label: 'Real-time Updates', value: '10s', unit: 'intervals' },
        { label: 'GPS Accuracy', value: '3-5', unit: 'meters' },
        { label: 'Coverage', value: '99.9%', unit: 'uptime' }
      ]
    },
    {
      id: 'safety',
      title: 'Safety & Compliance Management',
      subtitle: 'Protect your drivers, vehicles, and business',
      icon: <Shield className="w-12 h-12" />,
      description: 'Ensure the safety of your drivers and compliance with regulations through comprehensive monitoring, alerts, and reporting systems designed for the African market.',
      heroImage: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      highlights: [
        'Driver behavior monitoring and scoring',
        'Real-time safety alerts and notifications',
        'Compliance reporting for regulatory bodies',
        'Incident recording and documentation',
        'Driver training and certification tracking',
        'Vehicle maintenance and safety checks'
      ],
      benefits: [
        'Reduce insurance premiums through better safety records',
        'Comply with Tanzanian transport regulations',
        'Protect your business from liability',
        'Improve driver safety awareness',
        'Maintain fleet safety standards'
      ],
      stats: [
        { label: 'Safety Score', value: '95%', unit: 'improvement' },
        { label: 'Incident Reduction', value: '40%', unit: 'decrease' },
        { label: 'Compliance Rate', value: '100%', unit: 'achievement' }
      ]
    },
    {
      id: 'analytics',
      title: 'Analytics & Business Intelligence',
      subtitle: 'Transform data into actionable insights',
      icon: <BarChart3 className="w-12 h-12" />,
      description: 'Leverage powerful analytics and reporting tools to make data-driven decisions that improve efficiency, reduce costs, and optimize your fleet operations.',
      heroImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      highlights: [
        'Customizable dashboards and reports',
        'Performance metrics and KPIs',
        'Cost analysis and optimization',
        'Predictive analytics and forecasting',
        'Export capabilities (PDF, Excel, CSV)',
        'Real-time data visualization'
      ],
      benefits: [
        'Identify cost-saving opportunities',
        'Optimize fleet utilization',
        'Improve operational efficiency',
        'Make informed business decisions',
        'Track ROI on fleet investments'
      ],
      stats: [
        { label: 'Cost Reduction', value: '25%', unit: 'average' },
        { label: 'Efficiency Gain', value: '35%', unit: 'improvement' },
        { label: 'ROI Timeline', value: '6', unit: 'months' }
      ]
    },
    {
      id: 'management',
      title: 'Comprehensive Fleet Management',
      subtitle: 'Complete control over your entire fleet operation',
      icon: <Truck className="w-12 h-12" />,
      description: 'Manage every aspect of your fleet operations from a single platform, including maintenance, fuel, drivers, and administrative tasks.',
      heroImage: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      highlights: [
        'Vehicle and driver management',
        'Maintenance scheduling and tracking',
        'Fuel consumption monitoring',
        'Expense tracking and reporting',
        'Document management and storage',
        'Multi-location fleet support'
      ],
      benefits: [
        'Centralize all fleet operations',
        'Reduce administrative overhead',
        'Improve vehicle maintenance',
        'Better cost control and budgeting',
        'Streamline fleet operations'
      ],
      stats: [
        { label: 'Admin Time Saved', value: '60%', unit: 'reduction' },
        { label: 'Maintenance Cost', value: '30%', unit: 'decrease' },
        { label: 'Fleet Utilization', value: '85%', unit: 'optimization' }
      ]
    }
  ]

  const additionalFeatures = [
    {
      title: 'Mobile App Access',
      description: 'Manage your fleet on-the-go with our mobile applications for iOS and Android',
      icon: <Smartphone className="w-8 h-8" />,
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'API Integration',
      description: 'Seamlessly integrate with your existing business systems and software',
      icon: <Settings className="w-8 h-8" />,
      color: 'from-purple-500 to-purple-600'
    },
    {
      title: 'Cloud-Based Solution',
      description: 'Access your data anywhere, anytime with our secure cloud infrastructure',
      icon: <Globe className="w-8 h-8" />,
      color: 'from-green-500 to-green-600'
    },
    {
      title: '24/7 Support',
      description: 'Round-the-clock technical support and customer service',
      icon: <Clock className="w-8 h-8" />,
      color: 'from-orange-500 to-orange-600'
    },
    {
      title: 'Data Security',
      description: 'Enterprise-grade security with encryption and regular backups',
      icon: <Lock className="w-8 h-8" />,
      color: 'from-red-500 to-red-600'
    },
    {
      title: 'Scalable Platform',
      description: 'Grow your fleet without worrying about system limitations',
      icon: <TrendingUp className="w-8 h-8" />,
      color: 'from-indigo-500 to-indigo-600'
    }
  ]

  const currentFeature = features.find(f => f.id === activeFeature)

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-20 pb-16 bg-gradient-to-br from-primary-50 via-white to-primary-100">
          <div className="container-custom">
            <div className="text-center max-w-5xl mx-auto">
              <div className="inline-flex items-center space-x-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Star className="w-4 h-4" />
                <span>Trusted by 500+ companies across East Africa</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Fleet Management
                <span className="block text-primary-600">Reimagined</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-8 max-w-4xl mx-auto">
                Discover how FleetCo&apos;s comprehensive suite of tools can transform your fleet operations, 
                improve efficiency, and drive business growth across Tanzania and East Africa.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
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
          </div>
        </section>

        {/* Feature Navigation */}
        <section className="py-8 bg-white border-b border-gray-200 sticky top-0 z-10">
          <div className="container-custom">
            <div className="flex items-center justify-center space-x-1">
              {features.map((feature) => (
                <button
                  key={feature.id}
                  onClick={() => setActiveFeature(feature.id)}
                  className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                    activeFeature === feature.id
                      ? 'bg-primary-600 text-white shadow-lg'
                      : 'text-gray-600 hover:text-primary-600 hover:bg-primary-50'
                  }`}
                >
                  {feature.title.split(' ')[0]}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Dynamic Feature Showcase */}
        {currentFeature && (
          <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
            <div className="container-custom">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                {/* Content */}
                <div className="space-y-8">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-primary-600 rounded-3xl flex items-center justify-center text-white shadow-xl">
                      {currentFeature.icon}
                    </div>
                    <div>
                      <h2 className="text-4xl font-bold text-gray-900 mb-2">
                        {currentFeature.title}
                      </h2>
                      <p className="text-xl text-primary-600 font-medium">
                        {currentFeature.subtitle}
                      </p>
                    </div>
                  </div>
                  
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {currentFeature.description}
                  </p>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-6 py-6">
                    {currentFeature.stats.map((stat, idx) => (
                      <div key={idx} className="text-center">
                        <div className="text-3xl font-bold text-primary-600 mb-1">{stat.value}</div>
                        <div className="text-sm text-gray-500">{stat.unit}</div>
                        <div className="text-xs text-gray-400">{stat.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Features Grid */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                        <Zap className="w-5 h-5 text-primary-500 mr-2" />
                        Key Features
                      </h3>
                      <ul className="space-y-3">
                        {currentFeature.highlights.slice(0, 3).map((highlight, idx) => (
                          <li key={idx} className="flex items-start space-x-3">
                            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                        <TrendingUp className="w-5 h-5 text-primary-500 mr-2" />
                        Business Benefits
                      </h3>
                      <ul className="space-y-3">
                        {currentFeature.benefits.slice(0, 3).map((benefit, idx) => (
                          <li key={idx} className="flex items-start space-x-3">
                            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <button className="bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-700 transition-all duration-300 transform hover:scale-105 flex items-center space-x-2">
                    <span>Learn More</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>

                {/* Hero Image */}
                <div className="relative">
                  <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                    <img
                      src={currentFeature.heroImage}
                      alt={currentFeature.title}
                      className="w-full h-96 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4">
                        <h3 className="font-semibold text-gray-900 mb-2">See it in Action</h3>
                        <p className="text-sm text-gray-600">Experience how {currentFeature.title.toLowerCase()} transforms your operations</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Additional Features */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <div className="text-center max-w-4xl mx-auto mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Everything You Need to Succeed
              </h2>
              <p className="text-xl text-gray-600">
                Our platform includes additional features and capabilities that make FleetCo 
                the complete solution for modern fleet management.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {additionalFeatures.map((feature, index) => (
                <div key={index} className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-200 hover:border-transparent transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
                  <div className={`absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${feature.color}`}></div>
                  <div className="relative p-8">
                    <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-primary-600 mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-white transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 group-hover:text-white/90 transition-colors duration-300 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technology Stack */}
        <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
          <div className="container-custom">
            <div className="text-center max-w-4xl mx-auto mb-16">
              <h2 className="text-4xl font-bold mb-6">
                Built with Enterprise-Grade Technology
              </h2>
              <p className="text-xl text-gray-300">
                FleetCo leverages cutting-edge technology to deliver reliable, scalable, 
                and secure fleet management solutions.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center group">
                <div className="w-24 h-24 bg-primary-500/20 rounded-3xl flex items-center justify-center text-primary-400 mx-auto mb-6 group-hover:bg-primary-500/30 transition-all duration-300 group-hover:scale-110">
                  <Database className="w-12 h-12" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Cloud Infrastructure</h3>
                <p className="text-gray-400 text-sm">AWS-powered cloud platform with 99.9% uptime</p>
              </div>
              
              <div className="text-center group">
                <div className="w-24 h-24 bg-primary-500/20 rounded-3xl flex items-center justify-center text-primary-400 mx-auto mb-6 group-hover:bg-primary-500/30 transition-all duration-300 group-hover:scale-110">
                  <Shield className="w-12 h-12" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Enterprise Security</h3>
                <p className="text-gray-400 text-sm">End-to-end encryption and SOC 2 compliance</p>
              </div>
              
              <div className="text-center group">
                <div className="w-24 h-24 bg-primary-500/20 rounded-3xl flex items-center justify-center text-primary-400 mx-auto mb-6 group-hover:bg-primary-500/30 transition-all duration-300 group-hover:scale-110">
                  <Zap className="w-12 h-12" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Real-time Processing</h3>
                <p className="text-gray-400 text-sm">Sub-second data processing and updates</p>
              </div>
              
              <div className="text-center group">
                <div className="w-24 h-24 bg-primary-500/20 rounded-3xl flex items-center justify-center text-primary-400 mx-auto mb-6 group-hover:bg-primary-500/30 transition-all duration-300 group-hover:scale-110">
                  <Globe className="w-12 h-12" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Global Coverage</h3>
                <p className="text-gray-400 text-sm">Worldwide GPS coverage and support</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-primary-500 to-primary-600">
          <div className="container-custom">
            <div className="text-center max-w-4xl mx-auto text-white">
              <h2 className="text-4xl font-bold mb-6">
                Ready to Transform Your Fleet?
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Join hundreds of companies across East Africa who trust FleetCo to manage their fleet operations.
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
                  <Award className="w-4 h-4" />
                  <span>Enterprise-grade security</span>
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

