import type { Metadata } from 'next'
import Header from '@/components/sections/Header'
import Footer from '@/components/sections/Footer'
import { MapPin, Fuel, Settings, FileText, BarChart3, Users } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Fleet Management Solutions | FleetCo',
  description: 'Comprehensive fleet management solutions including GPS tracking, fuel monitoring, maintenance scheduling, and compliance management.',
}

export default function SolutionsPage() {
  const solutions = [
    {
      icon: MapPin,
      title: 'GPS Fleet Tracking',
      description: 'Real-time location monitoring with geofencing, route optimization, and historical reporting for complete fleet visibility.',
      features: ['Live GPS tracking', 'Geofencing alerts', 'Route optimization', 'Historical reports']
    },
    {
      icon: Fuel,
      title: 'Fuel Management System',
      description: 'Monitor fuel consumption, detect theft, and optimize routes to reduce operational costs by up to 25%.',
      features: ['Fuel consumption tracking', 'Theft detection', 'Cost optimization', 'Usage analytics']
    },
    {
      icon: Settings,
      title: 'Maintenance Scheduling',
      description: 'Automated maintenance alerts and scheduling based on mileage, engine hours, and diagnostic data.',
      features: ['Predictive maintenance', 'Automated alerts', 'Service scheduling', 'Parts inventory']
    },
    {
      icon: FileText,
      title: 'Compliance & ELD',
      description: 'Stay compliant with DOT regulations, ELD mandates, and safety requirements with automated logging.',
      features: ['DOT compliance', 'ELD logging', 'Safety reporting', 'Document management']
    },
    {
      icon: BarChart3,
      title: 'Advanced Analytics',
      description: 'Comprehensive dashboards and reports providing actionable insights into fleet performance.',
      features: ['Performance dashboards', 'Custom reports', 'KPI tracking', 'Predictive analytics']
    },
    {
      icon: Users,
      title: 'Driver Management',
      description: 'Monitor driver performance with safety scoring, real-time coaching, and behavior analytics.',
      features: ['Safety scoring', 'Driver coaching', 'Behavior monitoring', 'Training programs']
    }
  ]

  return (
    <>
      <Header />
      <main className="pt-18">
        {/* Hero Section */}
        <section className="section-padding bg-gradient-light">
          <div className="container-custom">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Fleet Management Solutions
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Comprehensive solutions tailored for every industry and fleet size. 
                From GPS tracking to predictive maintenance, we have everything you need.
              </p>
            </div>
          </div>
        </section>

        {/* Solutions Grid */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {solutions.map((solution, index) => (
                <div
                  key={index}
                  className="bg-white p-8 rounded-2xl border border-gray-200 shadow-soft hover:shadow-strong transition-all duration-300 hover:-translate-y-1 group"
                >
                  <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <solution.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {solution.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {solution.description}
                  </p>
                  
                  <ul className="space-y-2">
                    {solution.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Contact our team to learn which solutions are right for your fleet.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/demo" className="btn-primary">
                  Schedule Demo
                </a>
                <a href="/contact" className="btn-outline">
                  Contact Sales
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}