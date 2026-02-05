import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-950 to-black text-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('/hero-bg.jpg')] bg-cover bg-center opacity-40" /> {/* Replace with your image */}
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-6">
            Baraka Residence
          </h1>
          <p className="text-2xl md:text-4xl mb-10 font-light">
            Premium cottages in Tashkent. Modern design, full finish, dream lifestyle.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              href="#projects"
              className="px-10 py-5 bg-white text-black font-semibold rounded-full text-xl hover:bg-gray-200 transition"
            >
              View Projects
            </Link>
            <Link
              href="#contact"
              className="px-10 py-5 border-2 border-white font-semibold rounded-full text-xl hover:bg-white hover:text-black transition"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="projects" className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-4">Modern Architecture</h3>
            <p className="text-gray-400">
              Contemporary design with smart home integration and energy efficiency.
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-4">Full Finish</h3>
            <p className="text-gray-400">
              Ready to move in — premium materials, landscaping included.
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-4">Prime Location</h3>
            <p className="text-gray-400">
              Tashkent outskirts, nature + city access in one place.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section id="contact" className="py-20 bg-white/5 text-center">
        <h2 className="text-5xl font-bold mb-8">Ready for Your Dream Home?</h2>
        <p className="text-xl mb-10 text-gray-300">
          Contact us for details, pricing, and virtual tour.
        </p>
        <Link
          href="https://instagram.com/baraka.residence"
          target="_blank"
          className="px-12 py-6 bg-gradient-to-r from-blue-600 to-purple-600 font-bold text-xl rounded-full hover:opacity-90 transition"
        >
          DM on Instagram
        </Link>
      </section>
    </main>
  );
}
