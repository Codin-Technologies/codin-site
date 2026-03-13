'use client'

import React from 'react'
import Header from '@/components/sections/Header'
import Footer from '@/components/sections/Footer'
import { 
  Truck, 
  Wrench, 
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

export default function AgriculturePage() {
  const industryFeatures = [
    {
      title: 'Farm Equipment Tracking',
      description: 'Monitor agricultural machinery and equipment in real-time',
      icon: <Truck className="w-8 h-8" />,
      benefits: [
        'Real-time equipment locations',
        'Utilization monitoring',
        'Maintenance scheduling',
        'Fuel consumption tracking'
      ]
    },
    {
      title: 'Crop Management',
      description: 'Optimize farming operations and crop yields',
      icon: <BarChart className="w-8 h-8" />,
      benefits: [
        'Field mapping and planning',
        'Crop monitoring',
        'Harvest optimization',
        'Yield analysis'
      ]
    },
    {
      title: 'Supply Chain Management',
      description: 'Streamline agricultural supply chain operations',
      icon: <Navigation className="w-8 h-8" />,
      benefits: [
        'Transportation optimization',
        'Storage management',
        'Distribution tracking',
        'Quality control'
      ]
    },
    {
      title: 'Precision Agriculture',
      description: 'Data-driven farming decisions and automation',
      icon: <Target className="w-8 h-8" />,
      benefits: [
        'GPS-guided operations',
        'Variable rate application',
        'Soil monitoring',
        'Weather integration'
      ]
    }
  ]

  const businessBenefits = [
    {
      title: 'Increase Crop Yields',
      description: 'Optimize farming operations for better results',
      icon: <TrendingUp className="w-6 h-6" />,
      metric: '20-30%',
      details: 'Improvement in crop yields and quality'
    },
    {
      title: 'Reduce Operational Costs',
      description: 'Optimize resource usage and reduce waste',
      icon: <Target className="w-6 h-6" />,
      metric: '25-35%',
      details: 'Reduction in farming operational costs'
    },
    {
      title: 'Improve Efficiency',
      description: 'Better resource management and scheduling',
      icon: <BarChart3 className="w-6 h-6" />,
      metric: '40%',
      details: 'Improvement in farming efficiency'
    },
    {
      title: 'Enhance Sustainability',
      description: 'Environmentally conscious farming practices',
      icon: <Shield className="w-6 h-6" />,
      metric: '50%',
      details: 'Reduction in environmental impact'
    }
  ]

  const agricultureSolutions = [
    {
      title: 'Equipment Management',
      description: 'Comprehensive tracking of farm machinery',
      icon: <Wrench className="w-6 h-6" />,
      features: ['GPS tracking', 'Utilization monitoring', 'Maintenance alerts', 'Performance analytics']
    },
    {
      title: 'Fleet Operations',
      description: 'Optimize agricultural vehicle operations',
      icon: <Truck className="w-6 h-6" />,
      features: ['Route optimization', 'Fuel monitoring', 'Driver safety', 'Cost tracking']
    },
    {
      title: 'Crop Monitoring',
      description: 'Real-time crop health and growth tracking',
      icon: <BarChart className="w-6 h-6" />,
      features: ['Field mapping', 'Growth monitoring', 'Disease detection', 'Yield prediction']
    },
    {
      title: 'Supply Chain',
      description: 'End-to-end agricultural supply chain management',
      icon: <Navigation className="w-6 h-6" />,
      features: ['Transportation', 'Storage', 'Distribution', 'Quality control']
    }
  ]

  const technologyFeatures = [
    {
      title: 'IoT Sensors',
      description: 'Connect with agricultural sensors and equipment',
      icon: <Cpu className="w-6 h-6" />,
      details: 'Real-time data from soil, weather, and crop sensors'
    },
    {
      title: 'Cloud-Based Platform',
      description: 'Access data from anywhere, anytime',
      icon: <Cloud className="w-6 h-6" />,
      details: 'Secure cloud infrastructure with mobile access'
    },
    {
      title: 'Advanced Analytics',
      description: 'Data-driven insights for better farming decisions',
      icon: <BarChart3 className="w-6 h-6" />,
      details: 'AI-powered analytics for crop and equipment optimization'
    },
    {
      title: 'Mobile Applications',
      description: 'Manage farming operations on-the-go',
      icon: <Smartphone className="w-6 h-6" />,
      details: 'Mobile apps for farmers and field workers'
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
                  <span>Agriculture Industry</span>
                </div>
                <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                  Agriculture
                  <span className="block text-primary-600">Digitized</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Transform your agricultural operations with our comprehensive fleet and equipment management platform. 
                  Monitor farm machinery, optimize crop management, and increase yields across Tanzania and East Africa.
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
                    src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Agriculture Dashboard"
                    className="w-full h-96 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4">
                      <h3 className="font-semibold text-gray-900 mb-2">Agriculture Dashboard</h3>
                      <p className="text-sm text-gray-600">Equipment and crop management</p>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary-500/20 rounded-full flex items-center justify-center">
                  <BarChart className="w-12 h-12 text-primary-600" />
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
                Agriculture Solutions Built for Success
              </h2>
              <p className="text-xl text-gray-600">
                Everything you need to optimize your agricultural operations and increase yields
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
                Transform Your Agricultural Operations
              </h2>
              <p className="text-xl text-gray-600">
                See measurable improvements across all aspects of your farming business
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

        {/* Agriculture Solutions */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <div className="text-center max-w-4xl mx-auto mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Comprehensive Agriculture Solutions
              </h2>
              <p className="text-xl text-gray-600">
                From equipment tracking to crop monitoring, we have you covered
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {agricultureSolutions.map((solution, index) => (
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
                  agricultural management solutions for businesses of all sizes.
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
                    src="https://images.unsplash.com/photo-1574613811779-06907b5d82ce?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
                Ready to Transform Your Agriculture?
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Join agricultural companies across East Africa who trust FleetCo for their operations.
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
