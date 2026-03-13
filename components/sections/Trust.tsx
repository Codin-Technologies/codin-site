export default function Trust() {
    const companies = [
      'GlobalLogistics Inc.',
      'AgroTech Solutions', 
      'City Transit Auth',
      'MedChain Logistics',
      'EcoEnergy Corp'
    ]
  
    return (
      <section className="py-16 bg-white border-t border-gray-200">
        <div className="container-custom">
          <div className="text-center">
            <p className="text-sm font-semibold text-gray-600 uppercase tracking-wider mb-8">
              Empowering Digital Operations for Industry Leaders
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12">
              {companies.map((company, index) => (
                <div
                  key={company}
                  className="text-xl font-bold text-gray-400 hover:text-primary-500 transition-colors duration-300 px-4 py-2 border border-gray-200 rounded-lg hover:border-primary-500 cursor-pointer"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {company}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    )
  }