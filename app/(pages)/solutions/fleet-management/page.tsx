'use client'

import React from 'react'
import Header from '@/components/sections/Header'
import Footer from '@/components/sections/Footer'
import { 
  Truck, 
  Users, 
  Shield, 
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
  Wrench,
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

export default function FleetManagementPage() {
  const coreFeatures = [
    {
      title: 'Comprehensive Fleet Oversight',
      description: 'Get complete visibility into every aspect of your fleet operations',
      icon: <Truck className="w-8 h-8" />,
      benefits: [
        'Real-time vehicle tracking and monitoring',
        'Driver performance and behavior analysis',
        'Fleet utilization and efficiency metrics',
        'Centralized management dashboard'
      ]
    },
    {
      title: 'Advanced Analytics & Reporting',
      description: 'Data-driven insights to optimize your fleet performance',
      icon: <BarChart3 className="w-8 h-8" />,
      benefits: [
        'Customizable dashboards and reports',
        'Performance trends and benchmarking',
        'Predictive analytics and forecasting',
        'Export capabilities (PDF, Excel, CSV)'
      ]
    },
    {
      title: 'Integrated Operations Management',
      description: 'Streamline all fleet operations from a single platform',
      icon: <Settings className="w-8 h-8" />,
      benefits: [
        'Maintenance scheduling and tracking',
        'Fuel consumption monitoring',
        'Expense tracking and budgeting',
        'Document management and storage'
      ]
    },
    {
      title: 'Mobile-First Experience',
      description: 'Manage your fleet on-the-go with powerful mobile applications',
      icon: <Smartphone className="w-8 h-8" />,
      benefits: [
        'iOS and Android applications',
        'Real-time notifications and alerts',
        'Offline capability with data sync',
        'Intuitive mobile interface'
      ]
    }
  ]

  const businessBenefits = [
    {
      title: 'Reduce Operational Costs',
      description: 'Optimize routes, reduce fuel consumption, and minimize maintenance expenses',
      icon: <TrendingUp className="w-6 h-6" />,
      metric: '25-35%',
      details: 'Average cost reduction across fleet operations'
    },
    {
      title: 'Improve Fleet Efficiency',
      description: 'Better utilization, reduced downtime, and optimized performance',
      icon: <Target className="w-6 h-6" />,
      metric: '40%',
      details: 'Improvement in fleet utilization and productivity'
    },
    {
      title: 'Enhance Safety & Compliance',
      description: 'Proactive safety monitoring and regulatory compliance management',
      icon: <Shield className="w-6 h-6" />,
      metric: '60%',
      details: 'Reduction in safety incidents and violations'
    },
    {
      title: 'Better Customer Service',
      description: 'Accurate ETAs, real-time updates, and improved delivery performance',
      icon: <Users className="w-6 h-6" />,
      metric: '90%',
      details: 'Improvement in customer satisfaction scores'
    }
  ]

  const industrySolutions = [
    {
      industry: 'Logistics & Transportation',
      icon: '🚛',
      description: 'Optimize delivery routes, reduce fuel costs, and improve customer satisfaction',
      features: ['Route optimization', 'Real-time tracking', 'Delivery management', 'Performance analytics']
    },
    {
      industry: 'Construction',
      icon: '🏗️',
      description: 'Monitor heavy equipment, ensure proper utilization, and track project progress',
      features: ['Equipment tracking', 'Project management', 'Resource allocation', 'Safety monitoring']
    },
    {
      industry: 'Agriculture',
      icon: '🚜',
      description: 'Track farming vehicles, optimize field operations, and manage agricultural logistics',
      features: ['Field mapping', 'Harvest tracking', 'Equipment monitoring', 'Seasonal planning']
    },
    {
      industry: 'Utilities & Services',
      icon: '⚡',
      description: 'Manage service vehicles, respond quickly to emergencies, and optimize field operations',
      features: ['Emergency response', 'Service scheduling', 'Field crew management', 'Asset tracking']
    },
    {
      industry: 'Delivery Services',
      icon: '📦',
      description: 'Streamline last-mile delivery, optimize routes, and improve delivery accuracy',
      features: ['Last-mile optimization', 'Real-time updates', 'Customer notifications', 'Performance tracking']
    },
    {
      industry: 'Mining & Resources',
      icon: '⛏️',
      description: 'Monitor mining vehicles, ensure safety compliance, and optimize resource extraction',
      features: ['Safety compliance', 'Resource tracking', 'Environmental monitoring', 'Efficiency optimization']
    }
  ]

  const technologyFeatures = [
    {
      title: 'Cloud-Based Architecture',
      description: 'Scalable, secure, and always-available fleet management platform',
      icon: <Cloud className="w-6 h-6" />,
      details: 'AWS-powered infrastructure with 99.9% uptime guarantee'
    },
    {
      title: 'AI & Machine Learning',
      description: 'Intelligent insights and predictive analytics for better decision making',
      icon: <Cpu className="w-6 h-6" />,
      details: 'Advanced algorithms for route optimization and predictive maintenance'
    },
    {
      title: 'Real-Time Data Processing',
      description: 'Instant updates and live monitoring across your entire fleet',
      icon: <Zap className="w-6 h-6" />,
      details: 'Sub-second data processing with live GPS tracking updates'
    },
    {
      title: 'Enterprise Security',
      description: 'Bank-level security with end-to-end encryption and compliance',
      icon: <Lock className="w-6 h-6" />,
      details: 'SOC 2 compliance, GDPR ready, and enterprise-grade security protocols'
    }
  ]

  const integrationCapabilities = [
    {
      title: 'ERP Systems',
      description: 'Seamlessly integrate with SAP, Oracle, Microsoft Dynamics, and more',
      icon: <Database className="w-6 h-6" />
    },
    {
      title: 'Accounting Software',
      description: 'Connect with QuickBooks, Xero, Sage, and other financial systems',
      icon: <BarChart className="w-6 h-6" />
    },
    {
      title: 'CRM Platforms',
      description: 'Integrate with Salesforce, HubSpot, and customer relationship systems',
      icon: <Users className="w-6 h-6" />
    },
    {
      title: 'Telematics Devices',
      description: 'Support for all major GPS and telematics hardware providers',
      icon: <Navigation className="w-6 h-6" />
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
                  <span>Enterprise Fleet Solution</span>
                </div>
                <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                  Fleet Management
                  <span className="block text-primary-600">Reimagined</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Transform your fleet operations with our comprehensive, AI-powered fleet management platform. 
                  Get complete visibility, optimize performance, and drive business growth across Tanzania and East Africa.
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
                    <span>Global coverage</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1574613811779-06907b5d82ce?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Fleet Management Dashboard"
                    className="w-full h-96 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4">
                      <h3 className="font-semibold text-gray-900 mb-2">Enterprise Fleet Dashboard</h3>
                      <p className="text-sm text-gray-600">Complete fleet visibility and control</p>
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

        {/* Core Features */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <div className="text-center max-w-4xl mx-auto mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Complete Fleet Management Platform
              </h2>
              <p className="text-xl text-gray-600">
                Everything you need to manage, monitor, and optimize your fleet operations in one powerful platform
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {coreFeatures.map((feature, index) => (
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
                Transform Your Business Results
              </h2>
              <p className="text-xl text-gray-600">
                See measurable improvements across all aspects of your fleet operations
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

        {/* Industry Solutions */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <div className="text-center max-w-4xl mx-auto mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Solutions for Every Industry
              </h2>
              <p className="text-xl text-gray-600">
                Our fleet management platform adapts to your specific business needs and industry requirements
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industrySolutions.map((solution, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl p-8 hover:border-primary-300 hover:shadow-lg transition-all duration-300 group">
                  <div className="text-4xl mb-4">{solution.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{solution.industry}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{solution.description}</p>
                  <ul className="space-y-2">
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
                  fleet management solutions for businesses of all sizes.
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

        {/* Integration Capabilities */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <div className="text-center max-w-4xl mx-auto mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Seamless Integrations
              </h2>
              <p className="text-xl text-gray-600">
                Connect with your existing business systems and software for a unified experience
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {integrationCapabilities.map((integration, index) => (
                <div key={index} className="text-center group">
                  <div className="w-20 h-20 bg-primary-100 rounded-3xl flex items-center justify-center text-primary-600 mx-auto mb-6 group-hover:bg-primary-200 transition-colors">
                    {integration.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{integration.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{integration.description}</p>
                </div>
              ))}
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
