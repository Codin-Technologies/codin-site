import { Tractor, Plane, Truck, GraduationCap, Stethoscope, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function Industries() {
  const industries = [
    {
      icon: Tractor,
      title: 'Agriculture',
      description: 'Smart farming logistics, supply chain digitization, and asset tracking.',
      features: ['Smart farming logistics', 'Supply chain digitization', 'Asset tracking'],
      href: '/industries/agriculture',
      color: 'bg-green-50 text-green-600',
      hoverColor: 'group-hover:bg-green-500'
    },
    {
      icon: Plane,
      title: 'Tourism & Hospitality',
      description: 'Transport coordination, guest service digitalization, and fleet management.',
      features: ['Transport coordination', 'Guest service digitalization', 'Asset management'],
      href: '/industries/tourism',
      color: 'bg-blue-50 text-blue-600',
      hoverColor: 'group-hover:bg-blue-500'
    },
    {
      icon: Truck,
      title: 'Logistics & Transport',
      description: 'Fleet intelligence, dispatch optimization, and real-time monitoring.',
      features: ['Fleet intelligence', 'Dispatch optimization', 'Real-time monitoring'],
      href: '/industries/logistics',
      color: 'bg-indigo-50 text-indigo-600',
      hoverColor: 'group-hover:bg-indigo-500'
    },
    {
      icon: Truck,
      title: 'Retail & Commerce',
      description: 'Omnichannel logistics, inventory visibility, and last-mile delivery orchestration.',
      features: ['Store & e-commerce integration', 'Inventory & order visibility', 'Last-mile delivery intelligence'],
      href: '/industries/retail-commerce',
      color: 'bg-amber-50 text-amber-600',
      hoverColor: 'group-hover:bg-amber-500'
    },
    {
      icon: GraduationCap,
      title: 'Education',
      description: 'Campus fleet tracking, digital administration, and data reporting systems.',
      features: ['Campus fleet tracking', 'Digital administration', 'Data reporting systems'],
      href: '/industries/education',
      color: 'bg-purple-50 text-purple-600',
      hoverColor: 'group-hover:bg-purple-500'
    },
    {
      icon: Stethoscope,
      title: 'Healthcare',
      description: 'Medical logistics, cold chain monitoring, and compliance tracking.',
      features: ['Medical logistics', 'Cold chain monitoring', 'Compliance tracking'],
      href: '/industries/healthcare',
      color: 'bg-rose-50 text-rose-600',
      hoverColor: 'group-hover:bg-rose-500'
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-black via-gray-950 to-black" id="industries">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-white/5 border border-red-500/40 text-red-100 px-4 py-2 rounded-full text-xs font-semibold tracking-wide uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
            Industry Ecosystem Applications
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mt-5 mb-4">
            Where our platforms create impact
          </h2>
          <p className="text-lg text-gray-300">
            Deep, industry-specific applications that connect physical operations with digital intelligence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <Link
              key={industry.title}
              href={industry.href}
              className="relative overflow-hidden group rounded-3xl border border-white/10 bg-white/5 backdrop-blur-custom px-7 py-8 flex flex-col justify-between transition-all duration-300 hover:border-red-500/60 hover:bg-white/10 hover:-translate-y-1"
            >
              {/* subtle corner accent */}
              <div className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-red-500/10 blur-3xl group-hover:bg-red-500/20 transition-colors" />

              <div className="flex items-start justify-between mb-6 relative z-10">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full border border-red-400/60 bg-black/40 flex items-center justify-center text-red-400 group-hover:bg-red-500 group-hover:text-white transition-colors">
                    <industry.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">
                      {industry.title}
                    </h3>
                    <p className="text-xs uppercase tracking-wide text-gray-400 mt-1">
                      Industry ecosystem application
                    </p>
                  </div>
                </div>
                <span className="text-xs text-gray-500">
                  0{index + 1}
                </span>
              </div>

              <p className="text-sm text-gray-300 mb-6 relative z-10">
                {industry.description}
              </p>

              <div className="relative z-10 space-y-2 mb-6">
                {industry.features.map((feature, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between text-xs text-gray-300/90 rounded-full border border-white/10 bg-black/40 px-3 py-2"
                  >
                    <span className="truncate">{feature}</span>
                    <span className="ml-3 h-1.5 w-1.5 rounded-full bg-red-500/70" />
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between text-xs text-red-100 font-medium relative z-10">
                <span className="inline-flex items-center gap-1">
                  View industry details
                  <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                </span>
                <span className="text-[10px] tracking-wide uppercase text-gray-400">
                  Ecosystem • Platform-ready
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
