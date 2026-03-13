'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, ChevronDown, MapPin, Phone, Mail } from 'lucide-react'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  type DropdownItem = {
    href: string;
    label: string;
    description?: string;
    icon?: string;
  };

  const whatWeDoDropdown: DropdownItem[] = [
    { href: '/industries', label: 'Industries' },
    { href: '/services', label: 'Services' },
    { href: '/platforms', label: 'Products and Platforms' },
    { href: '/research', label: 'Research & Innovation' },
    { href: '/alliances', label: 'Alliances' },
  ]

  const whoAreWeDropdown: DropdownItem[] = [
    { 
      href: '/about', 
      label: 'About Us', 
      description: 'We deliver excellence and create value for customers and communities - everyday. With the best talent and the latest technology we help customers turn complexity into opportunities and create meaningful change.' 
    },
    { href: '/difference', label: 'Discover the difference' },
    { href: '/aspiration', label: 'Our Aspiration' },
    { href: '/brand', label: 'Brand' },
    { href: '/leadership', label: 'Leadership' },
    { href: '/community', label: 'Community' },
    { href: '/sustainability', label: 'Sustainability' },
    { href: '/inclusion', label: 'Inclusion' },
    { href: '/values', label: 'Values' },
  ]

  type NavLink = {
    href: string;
    label: string;
    hasDropdown?: boolean;
    dropdown?: DropdownItem[];
  };

  const navLinks: NavLink[] = [
    { href: '#what-we-do', label: 'What We Do', hasDropdown: true, dropdown: whatWeDoDropdown },
    { href: '#who-are-we', label: 'Who Are We', hasDropdown: true, dropdown: whoAreWeDropdown },
    { href: '/insights', label: 'Insights' },
    { href: '/work-with-us', label: 'Work With Us' },
  ]

  const handleDropdownToggle = (label: string) => {
    setActiveDropdown(activeDropdown === label ? null : label)
  }

  return (
    <>
      {/* Top bar for contact info */}
      <div className="bg-primary-600 text-white text-sm py-2 hidden lg:block">
        <div className="container-custom flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <MapPin className="w-4 h-4" />
              <span>Global Enterprise Headquarters</span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4" />
              <span>+1 (800) Enterprise</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4" />
              <span>contact@codin.com</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <span>24/7 Support</span>
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Main header */}
      <header 
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-white/98 backdrop-blur-custom shadow-medium top-8' 
            : 'bg-white/95 backdrop-blur-custom top-0'
        }`}
      >
        <nav className="container-custom">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3 group py-2">
              <img 
                src="/codin logo - black.png" 
                alt="Codin Technologies" 
                className="h-16 w-auto object-contain" 
              />
              <span className="text-xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors">
                Codin Technologies
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => (
                <div key={link.href} className="relative group">
                  {link.hasDropdown ? (
                    <button
                      className="flex items-center space-x-1 text-gray-700 hover:text-primary-500 font-medium transition-colors py-2"
                      onClick={() => handleDropdownToggle(link.label)}
                    >
                      <span>{link.label}</span>
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === link.label ? 'rotate-180' : ''}`} />
                    </button>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-gray-700 hover:text-primary-500 font-medium transition-colors py-2"
                    >
                      {link.label}
                    </Link>
                  )}

                  {/* Dropdown Menu */}
                  {link.hasDropdown && activeDropdown === link.label && (
                    <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-xl shadow-lg border border-gray-100 py-4 animate-fade-in-down">
                      <div className="grid grid-cols-1 gap-1">
                        {link.dropdown?.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className="flex items-start space-x-3 px-4 py-3 hover:bg-primary-50 rounded-lg transition-colors group"
                            onClick={() => setActiveDropdown(null)}
                          >
                            {item.icon && <span className="text-lg">{item.icon}</span>}
                            <div>
                              <div className="font-medium text-gray-900 group-hover:text-primary-600">
                                {item.label}
                              </div>
                              {item.description && (
                                <div className="text-sm text-gray-500 mt-1">
                                  {item.description}
                                </div>
                              )}
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center space-x-4">
              <Link href="/contact" className="btn-primary btn-animate">
                Contact Us
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-gray-700 hover:text-primary-500 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-200 shadow-lg animate-fade-in-down">
              <div className="px-4 py-6 space-y-4">
                {navLinks.map((link) => (
                  <div key={link.href}>
                    {link.hasDropdown ? (
                      <div>
                        <button
                          className="flex items-center justify-between w-full px-4 py-3 text-gray-700 hover:text-primary-500 hover:bg-gray-50 rounded-lg transition-colors font-medium"
                          onClick={() => handleDropdownToggle(link.label)}
                        >
                          {link.label}
                          <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === link.label ? 'rotate-180' : ''}`} />
                        </button>
                        {activeDropdown === link.label && (
                          <div className="ml-4 mt-2 space-y-2">
                            {link.dropdown?.map((item) => (
                              <Link
                                key={item.href}
                                href={item.href}
                                className="block px-4 py-2 text-gray-600 hover:text-primary-500 hover:bg-gray-50 rounded-lg transition-colors"
                                onClick={() => setIsMobileMenuOpen(false)}
                              >
                                {item.label}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : (
                      <Link
                        href={link.href}
                        className="block px-4 py-3 text-gray-700 hover:text-primary-500 hover:bg-gray-50 rounded-lg transition-colors font-medium"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {link.label}
                      </Link>
                    )}
                  </div>
                ))}
                <div className="pt-4 space-y-3">
                  <Link 
                    href="/contact" 
                    className="block w-full btn-primary text-center"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          )}
        </nav>
      </header>
    </>
  )
}