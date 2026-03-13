import { Truck, BarChart, Package, Leaf, Repeat, Cpu, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function Solutions() {
  const platforms = [
    {
      icon: Truck,
      title: 'Fleet & Mobility Platform',
      description: 'Real-time tracking, telematics integration, driver analytics, and trip intelligence.',
      href: '/platforms/fleet-mobility'
    },
    {
      icon: BarChart,
      title: 'Digital Marketing Intelligence',
      description: 'Campaign analytics, performance dashboards, and AI-based targeting.',
      href: '/platforms/digital-marketing'
    },
    {
      icon: Package,
      title: 'Supply Chain Management',
      description: 'Procurement workflows, inventory intelligence, and vendor performance tracking.',
      href: '/platforms/supply-chain'
    },
    {
      icon: Leaf,
      title: 'Sustainability Management',
      description: 'Carbon accounting, ESG dashboards, energy optimization, and compliance reporting.',
      href: '/platforms/sustainability'
    },
    {
      icon: Repeat,
      title: 'Integrated Logistics System',
      description: 'Dispatch optimization, route intelligence, and cross-border tracking.',
      href: '/platforms/integrated-logistics'
    },
    {
      icon: Cpu,
      title: 'AI & ML Transformation Suite',
      description: 'Predictive analytics, custom ML model deployment, and data engineering pipelines.',
      href: '/platforms/ai-ml'
    }
  ]

  return (
    <section className="py-20 bg-gray-50 border-t border-gray-200" id="platforms">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-primary-100 text-primary-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Core Platforms
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Enterprise Platforms & Solutions
          </h2>
          <p className="text-xl text-gray-600">
            A unified ecosystem of specialized platforms driving digital transformation across global operations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {platforms.map((platform, index) => (
            <div
              key={platform.title}
              className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-medium hover:border-primary-100 transition-all duration-300 group flex flex-col h-full animate-fade-in-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="w-14 h-14 bg-primary-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary-500 transition-colors">
                <platform.icon className="w-7 h-7 text-primary-600 group-hover:text-white transition-colors" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors">
                {platform.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed mb-8 flex-grow">
                {platform.description}
              </p>
              
              <Link 
                href={platform.href}
                className="inline-flex items-center space-x-2 text-primary-600 font-medium hover:text-primary-700 transition-colors mt-auto"
              >
                <span>Explore Platform</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}