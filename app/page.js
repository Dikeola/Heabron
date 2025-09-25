import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-800 via-green-700 to-green-600 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Transforming farmers into{' '}
              <span className="text-green-300">creditworthy communities</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Heabron is fueling food systems with trust, technology and capital
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/cooperative"
                className="bg-white text-green-800 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl"
              >
                Join as a Cooperative
              </Link>
              <Link
                href="/market"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-green-800 transition-all duration-300"
              >
                Get Access to Market
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">About Us</h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Heabron is redefining agricultural finance for Africa&apos;s smallholder farmers.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              We provide smart, data-driven credit and guaranteed market access to farming cooperatives that have long been excluded from traditional finance systems. Our innovation, the Cooperative Scoring System, transforms how lenders perceive risk by using behavioral data and group accountability to unlock financing where it&apos;s needed most.
            </p>
            <p className="text-lg text-gray-700 mt-6 leading-relaxed">
              In a country where less than 5% of rural farmers can access formal credit, Heabron is changing the story bridging the agricultural financing gap with trust, technology, and capital.
            </p>
            <p className="text-lg text-gray-700 mt-6 font-semibold">
              We don&apos;t just fund farmers. We build systems of trust, grow communities, and power food systems.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
