'use client';

import Link from 'next/link';
import { FaArrowRight, FaUsers, FaDollarSign, FaWarehouse, FaLeaf, FaChartLine, FaShieldAlt, FaHandshake, FaMobileAlt } from 'react-icons/fa';
import { useEffect, useRef } from 'react';

export default function AboutPage() {
  const countersRef = useRef([]);

  useEffect(() => {
    const counters = document.querySelectorAll('.animated-counter');

    const animateCounter = (counter) => {
      const target = parseInt(counter.dataset.target);
      const suffix = counter.dataset.suffix || '';
      const prefix = counter.dataset.prefix || '';
      const duration = 2000; // 2 seconds
      const increment = target / (duration / 16); // 60fps
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }

        if (suffix === '+' && current >= 1000) {
          counter.textContent = prefix + Math.floor(current / 1000) + 'K' + suffix;
        } else {
          counter.textContent = prefix + Math.floor(current) + suffix;
        }
      }, 16);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCounter(entry.target);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    counters.forEach((counter) => {
      observer.observe(counter);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-800 via-green-700 to-green-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">About Us</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Empowering smallholder farmers across Nigeria through inclusive finance and structured market access
          </p>
        </div>
      </section>

      {/* Company Description */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Heabron Farm Limited</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Heabron Farm Limited is an agritech company empowering smallholder farmers across Nigeria through inclusive finance and structured market access. We use technology and data to solve one of agriculture&apos;s biggest challenges—access to reliable capital and fair buyers.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Mission</h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  To raise the consciousness of agriculture, promote financial inclusion, one community at a time in Africa.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Vision</h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  To serve one million farmers in accessing resources by 2030
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">What We Do</h2>
              <p className="text-xl text-gray-600">
                We offer smart input financing and guaranteed markets to farming groups
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaDollarSign className="text-green-600 text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Asset Financing</h3>
                <p className="text-gray-600 mb-4">
                  We make it easy for farmers to get uncollaterised asset financing to grow high yielding crops.
                </p>
                <Link
                  href="/asset-financing"
                  className="inline-flex items-center text-green-600 hover:text-green-700 font-semibold"
                >
                  View Now
                  <FaArrowRight className="ml-2" />
                </Link>
              </div>

              <div className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaWarehouse className="text-blue-600 text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Warehousing</h3>
                <p className="text-gray-600 mb-4">
                  Heabron provide warehouse for the farmers produce
                </p>
                <Link
                  href="/warehousing"
                  className="inline-flex items-center text-green-600 hover:text-green-700 font-semibold"
                >
                  View Now
                  <FaArrowRight className="ml-2" />
                </Link>
              </div>

              <div className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaLeaf className="text-purple-600 text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Extension Service</h3>
                <p className="text-gray-600 mb-4">
                  Farmers in the communities within our reach have their problems being solved by researchers via Heabron network.
                </p>
                <Link
                  href="/extension-service"
                  className="inline-flex items-center text-green-600 hover:text-green-700 font-semibold"
                >
                  View Now
                  <FaArrowRight className="ml-2" />
                </Link>
              </div>

              <div className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
                <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaChartLine className="text-yellow-600 text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Market Access</h3>
                <p className="text-gray-600 mb-4">
                  We help off-takers and agro-processors focus on their core activities - by providing a platform to purchase their grains easier and faster.
                </p>
                <Link
                  href="/market-access"
                  className="inline-flex items-center text-green-600 hover:text-green-700 font-semibold"
                >
                  View Now
                  <FaArrowRight className="ml-2" />
                </Link>
              </div>
            </div>

            <div className="mt-16 bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Our Unique Approach</h3>
              <p className="text-gray-700 text-lg leading-relaxed text-center">
                We transform cooperatives into creditworthy units. Our cooperative credit scoring system tracks key indicators like repayment behavior, productivity levels, and governance structure—making smarter, low-risk funding possible at scale.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Animated Milestones */}
      <section className="py-16 bg-green-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-12">Our Milestones</h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-5xl font-bold mb-2">
                  <span
                    className="animated-counter"
                    data-target="1200"
                    data-suffix=""
                    ref={(el) => {
                      if (el && !countersRef.current.includes(el)) {
                        countersRef.current.push(el);
                      }
                    }}
                  >
                    0
                  </span>
                </div>
                <p className="text-xl">Trained and Partnered Farmers</p>
              </div>

              <div className="text-center">
                <div className="text-5xl font-bold mb-2">
                  <span
                    className="animated-counter"
                    data-target="8000"
                    data-suffix="+"
                    data-prefix="$"
                    ref={(el) => {
                      if (el && !countersRef.current.includes(el)) {
                        countersRef.current.push(el);
                      }
                    }}
                  >
                    $0
                  </span>
                </div>
                <p className="text-xl">Worth of Farmer Input</p>
              </div>

              <div className="text-center">
                <div className="text-5xl font-bold mb-2">
                  <span
                    className="animated-counter"
                    data-target="5"
                    data-suffix=""
                    ref={(el) => {
                      if (el && !countersRef.current.includes(el)) {
                        countersRef.current.push(el);
                      }
                    }}
                  >
                    0
                  </span>
                </div>
                <p className="text-xl">Warehouses Across Nigeria</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
