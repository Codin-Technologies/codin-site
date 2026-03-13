import { ArrowRight, Database, Cloud, Brain, ShieldCheck, Layers, Workflow } from 'lucide-react'
import Link from 'next/link'

export default function Services() {
  const services = [
    {
      title: 'AI and Data',
      description: 'Unlock enterprise value with predictive models, data engineering, and generative AI integrations.',
      icon: Database,
      href: '/services/ai-data'
    },
    {
      title: 'Cloud Systems',
      description: 'Architecting scalable, secure, and resilient infrastructure for mission-critical applications.',
      icon: Cloud,
      href: '/services/cloud'
    },
    {
      title: 'Cognitive Operations',
      description: 'Automating complex business workflows with intelligent automation and machine learning.',
      icon: Brain,
      href: '/services/cognitive'
    },
    {
      title: 'Enterprise Architecture Consulting',
      description: 'Strategic planning for global digital transformation, IT modernization, and platform adoption.',
      icon: Workflow,
      href: '/services/consulting'
    },
    {
      title: 'Cybersecurity & Compliance',
      description: 'Securing digital assets, ensuring data privacy, and managing regulatory compliance.',
      icon: ShieldCheck,
      href: '/services/cybersecurity'
    },
    {
      title: 'Custom Platform Engineering',
      description: 'End-to-end development of bespoke enterprise solutions and interoperable microservices.',
      icon: Layers,
      href: '/services/enterprise'
    }
  ]

  return (
    <section className="py-20 bg-gray-50 border-t border-gray-200" id="services">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-block bg-primary-100 text-primary-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Enterprise Services
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Digital Transformation Solutions
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive technical consulting, engineering, and operational support to scale your digital initiatives.
            </p>
          </div>
          <Link 
            href="/services" 
            className="inline-flex items-center justify-center space-x-2 bg-white text-gray-900 px-6 py-3 rounded-xl font-medium border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-colors shadow-sm whitespace-nowrap"
          >
            <span>View All Services</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group bg-white rounded-2xl p-6 border border-gray-100 shadow-soft hover:shadow-medium transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center flex-shrink-0 group-hover:bg-primary-50 group-hover:text-primary-600 transition-colors">
                  <service.icon className="w-6 h-6 text-gray-400 group-hover:text-primary-600 transition-colors" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <Link 
                    href={service.href}
                    className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-primary-600 transition-colors"
                  >
                    <span>Learn more</span>
                    <ArrowRight className="w-4 h-4 ml-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
