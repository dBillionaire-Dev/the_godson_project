import Link from 'next/link';
import Image from 'next/image'; // We might use this later for images

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-primary text-center py-20 px-4">
        <h1 className="text-5xl font-bold text-gray-800 mb-4">
          Welcome to <span className="text-secondary">BlessingGodson</span>'s Portfolio
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Creative Graphic Designer specializing in Branding, Web & Illustration.
        </p>
        <Link
          href="/portfolio"
          className="bg-secondary hover:opacity-90 text-white font-bold py-3 px-8 rounded-lg text-lg transition duration-300" // Use bg-secondary
        >
          View My Work
        </Link>
      </section>

      {/* Featured Work Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Placeholder Project Cards - These would ideally be dynamic */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              {/* Replace with actual image */}
              <div className="w-full h-48 bg-gray-300 flex items-center justify-center">
                <span className="text-gray-500">Project Image 1</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Project Title 1</h3>
                <p className="text-gray-600 text-sm mb-4">A short description of the project.</p>
                <Link
                  href="/portfolio/project-1" // Example link
                  className="text-accent hover:opacity-80 font-semibold text-sm" // Use text-accent
                >
                  View Details
                </Link>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="w-full h-48 bg-gray-300 flex items-center justify-center">
                <span className="text-gray-500">Project Image 2</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Project Title 2</h3>
                <p className="text-gray-600 text-sm mb-4">A short description of the project.</p>
                <Link
                  href="/portfolio/project-2" // Example link
                  className="text-accent hover:opacity-80 font-semibold text-sm" // Use text-accent
                >
                  View Details
                </Link>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="w-full h-48 bg-gray-300 flex items-center justify-center">
                <span className="text-gray-500">Project Image 3</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Project Title 3</h3>
                <p className="text-gray-600 text-sm mb-4">A short description of the project.</p>
                <Link
                  href="/portfolio/project-3" // Example link
                  className="text-accent hover:opacity-80 font-semibold text-sm" // Use text-accent
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
          <div className="text-center mt-12">
            <Link
              href="/portfolio"
              className="bg-secondary hover:opacity-90 text-white font-bold py-3 px-8 rounded-lg text-lg transition duration-300" // Use bg-secondary
            >
              Explore All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* About Me Snippet Section */}
      <section className="bg-primary py-16">
        <div className="container mx-auto px-6 text-center md:text-left md:flex md:items-center">
          <div className="md:w-1/2 md:pr-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              A Little About Me
            </h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Hi, I'm BlessingGodson, a passionate graphic designer with a keen eye for detail and a love for creating visually compelling designs. I help businesses and individuals bring their visions to life through thoughtful and impactful visual solutions.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              With experience in branding, web design, and illustration, I'm dedicated to crafting unique and memorable experiences.
            </p>
            <Link
              href="/about"
              className="text-accent hover:opacity-80 font-semibold text-lg" // Use text-accent
            >
              Learn More About Me &rarr;
            </Link>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
            {/* Placeholder for an image of the designer or a relevant graphic */}
            <div className="w-64 h-64 md:w-80 md:h-80 bg-gray-300 rounded-full flex items-center justify-center shadow-lg">
              <span className="text-gray-500">Designer's Image</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
