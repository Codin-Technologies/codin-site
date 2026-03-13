'use client'

import React from 'react'
import { 
  Shield, 
  Zap, 
  TrendingUp, 
  Clock, 
  BarChart3, 
  Smartphone, 
  Globe,
  Database,
  Lock,
  Workflow,
  Cpu
} from 'lucide-react'
import Button from '../ui/Button'

const Features = () => {
  const features = [
    {
      icon: <Workflow className="w-8 h-8" />,
      title: 'Global Systems Integration',
      description: 'Unified ecosystem architecture connecting platforms, legacy systems, and external data sources.',
      benefits: ['API-first architecture', 'Microservices design', 'Cross-platform workflows', 'Data synchronization']
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Enterprise-Grade Security',
      description: 'Zero-trust architecture framework ensuring intellectual property and customer data safety.',
      benefits: ['End-to-end encryption', 'Role-based access', 'SOC2/ISO compliance', 'Audit logging']
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'High-Performance Cloud',
      description: 'Resilient and scalable infrastructure designed for mission-critical reliability and ultra-low latency.',
      benefits: ['Multi-region redundancy', 'Auto-scaling infrastructure', 'Edge computing', '99.99% uptime SLA']
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: 'Predictive Intelligence',
      description: 'Transforming operational data into foresight using machine learning and advanced analytics.',
      benefits: ['Predictive modeling', 'Real-time dashboards', 'Actionable insights', 'Big data processing']
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: 'Rapid Deployment',
      description: 'Accelerated go-to-market strategies with standardized frameworks and continuous integration.',
      benefits: ['Automated CI/CD', 'Infrastructure as Code', 'Accelerated timelines', 'Agile delivery']
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: 'Regulatory Compliance',
      description: 'Built-in governance mechanisms to ensure compliance with global data localization and industry standards.',
      benefits: ['GDPR & CCPA compliance', 'Data sovereignty', 'Automated reporting', 'Risk management']
    }
  ]

  const additionalFeatures = [
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: 'Omnichannel Access',
      description: 'Seamless experiences across web, progressive mobile applications, and IoT devices.'
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: 'Global Delivery Network',
      description: 'Distributed content and edge processing for regional compliance and speed.'
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: 'Master Data Management',
      description: 'Centralized governance and consolidation of distributed operational data.'
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      title: 'Hardware Integration',
      description: 'Bridging physical assets with digital twins through secure protocols.'
    },
    {
      icon: <Workflow className="w-6 h-6" />,
      title: 'Custom API Layers',
      description: 'Extensible headless architectures built to connect with third-party vendors.'
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: 'Scalable Growth',
      description: 'Platform architectures designed to scale from startups to Fortune 500 enterprises.'
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Cpu className="w-4 h-4" />
            <span>Digital Engineering Capabilities</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Architecting the
            <span className="text-primary-500"> Enterprise of the Future</span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Codin Technologies provides robust, scalable, and secure engineering foundations to support the most demanding global digital operations.
          </p>
        </div>

        {/* Main Features Grid */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-soft border border-gray-100 hover:shadow-medium transition-all duration-300 card-hover group"
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center text-primary-600 mb-6 group-hover:bg-primary-500 group-hover:text-white transition-all duration-300">
                {feature.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {feature.description}
              </p>

              {/* Benefits */}
              <ul className="space-y-2">
                {feature.benefits.map((benefit, benefitIndex) => (
                  <li key={benefitIndex} className="flex items-center space-x-2 text-sm text-gray-600">
                    <div className="w-1.5 h-1.5 bg-primary-400 rounded-full"></div>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Additional Features */}
        <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-soft border border-gray-100">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Comprehensive Technology Ecosystem
            </h3>
            <p className="text-gray-600 text-lg">
              Our engineering philosophy ensures reliability and connectivity across the stack.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {additionalFeatures.map((feature, index) => (
              <div key={index} className="flex items-start space-x-4 group">
                <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center text-gray-600 group-hover:bg-primary-100 group-hover:text-primary-600 transition-all duration-300 flex-shrink-0">
                  {feature.icon}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                    {feature.title}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl p-8 lg:p-12 text-white">
            <h3 className="text-3xl lg:text-4xl font-bold mb-4">
              Partner with Codin Technologies
            </h3>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Accelerate your digital transformation and build resilient operations with our enterprise expertise.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button 
                size="lg" 
                className="bg-white text-primary-600 hover:bg-gray-100 transform hover:scale-105"
              >
                Discuss a Partnership
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-white text-white hover:bg-white hover:text-primary-600 transform hover:scale-105"
              >
                Explore Technology
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features