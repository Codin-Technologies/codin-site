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

export default function ConstructionPage() {
  const industryFeatures = [
    {
      title: 'Equipment Tracking',
      description: 'Monitor heavy equipment and machinery in real-time',
      icon: <Truck className="w-8 h-8" />,
      benefits: [
        'Real-time equipment locations',
        'Utilization monitoring',
        'Maintenance scheduling',
        'Theft prevention'
      ]
    },
    {
      title: 'Project Management',
      description: 'Streamline construction project operations',
      icon: <Settings className="w-8 h-8" />,
      benefits: [
        'Project timeline tracking',
        'Resource allocation',
        'Cost monitoring',
        'Progress reporting'
      ]
    },
    {
      title: 'Safety Compliance',
      description: 'Ensure safety standards and regulatory compliance',
      icon: <Shield className="w-8 h-8" />,
      benefits: [
        'Safety monitoring',
        'Incident reporting',
        'Compliance tracking',
        'Training management'
      ]
    },
    {
      title: 'Fleet Optimization',
      description: 'Optimize construction vehicle operations',
      icon: <Navigation className="w-8 h-8" />,
      benefits: [
        'Route optimization',
        'Fuel management',
        'Driver monitoring',
        'Cost control'
      ]
    }
  ]

  const businessBenefits = [
    {
      title: 'Reduce Equipment Costs',
      description: 'Optimize utilization and prevent breakdowns',
      icon: <TrendingUp className="w-6 h-6" />,
      metric: '30-40%',
      details: 'Reduction in equipment operational costs'
    },
    {
      title: 'Improve Project Efficiency',
      description: 'Better resource management and scheduling',
      icon: <Target className="w-6 h-6" />,
      metric: '25%',
      details: 'Improvement in project completion times'
    },
    {
      title: 'Enhance Safety',
      description: 'Proactive safety monitoring and compliance',
      icon: <Shield className="w-6 h-6" />,
      metric: '50%',
      details: 'Reduction in safety incidents'
    },
    {
      title: 'Better Resource Allocation',
      description: 'Optimize equipment and vehicle usage',
      icon: <BarChart3 className="w-6 h-6" />,
      metric: '35%',
      details: 'Improvement in resource utilization'
    }
  ]

  const constructionSolutions = [
    {
      title: 'Heavy Equipment Management',
      description: 'Comprehensive tracking and monitoring of construction machinery',
      icon: <Wrench className="w-6 h-6" />,
      features: ['GPS tracking', 'Utilization monitoring', 'Maintenance alerts', 'Performance analytics']
    },
    {
      title: 'Fleet Operations',
      description: 'Optimize construction vehicle fleet operations',
      icon: <Truck className="w-6 h-6" />,
      features: ['Route optimization', 'Fuel monitoring', 'Driver safety', 'Cost tracking']
    },
    {
      title: 'Project Tracking',
      description: 'Monitor project progress and resource allocation',
      icon: <BarChart className="w-6 h-6" />,
      features: ['Timeline tracking', 'Resource management', 'Cost monitoring', 'Progress reporting']
    },
    {
      title: 'Safety Management',
      description: 'Ensure safety compliance and incident prevention',
      icon: <Shield className="w-6 h-6" />,
      features: ['Safety monitoring', 'Incident reporting', 'Compliance tracking', 'Training management']
    }
  ]

  const technologyFeatures = [
    {
      title: 'IoT Integration',
      description: 'Connect with construction equipment and sensors',
      icon: <Cpu className="w-6 h-6" />,
      details: 'Real-time data from equipment and machinery sensors'
    },
    {
      title: 'Cloud-Based Platform',
      description: 'Access data from anywhere, anytime',
      icon: <Cloud className="w-6 h-6" />,
      details: 'Secure cloud infrastructure with mobile access'
    },
    {
      title: 'Advanced Analytics',
      description: 'Data-driven insights for better decision making',
      icon: <BarChart3 className="w-6 h-6" />,
      details: 'AI-powered analytics for equipment and project optimization'
    },
    {
      title: 'Mobile Applications',
      description: 'Manage operations on construction sites',
      icon: <Smartphone className="w-6 h-6" />,
      details: 'Mobile apps for field workers and project managers'
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
                  <span>Construction Industry</span>
                </div>
                <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                  Construction
                  <span className="block text-primary-600">Optimized</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Transform your construction operations with our comprehensive fleet and equipment management platform. 
                  Monitor heavy machinery, optimize resources, and ensure project success across Tanzania and East Africa.
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
                    src="https://img.freepik.com/free-photo/young-black-race-man-with-blueprint-stading-near-glass-building_1157-50906.jpg?t=st=1757534583~exp=1757538183~hmac=d1cf0fc70b41c008e9f887b9415a776cc0b187f47d5a01599824e496a17ddc0f&w=2000"
                    alt="Construction Dashboard"
                    className="w-full h-96 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4">
                      <h3 className="font-semibold text-gray-900 mb-2">Construction Dashboard</h3>
                      <p className="text-sm text-gray-600">Equipment and project management</p>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary-500/20 rounded-full flex items-center justify-center">
                  <Wrench className="w-12 h-12 text-primary-600" />
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
                Construction Solutions Built for Success
              </h2>
              <p className="text-xl text-gray-600">
                Everything you need to optimize your construction operations and equipment management
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
                Transform Your Construction Operations
              </h2>
              <p className="text-xl text-gray-600">
                See measurable improvements across all aspects of your construction business
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

        {/* Construction Solutions */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <div className="text-center max-w-4xl mx-auto mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Comprehensive Construction Solutions
              </h2>
              <p className="text-xl text-gray-600">
                From equipment tracking to project management, we have you covered
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {constructionSolutions.map((solution, index) => (
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
                  construction management solutions for businesses of all sizes.
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
                Ready to Transform Your Construction?
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Join construction companies across East Africa who trust FleetCo for their operations.
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
