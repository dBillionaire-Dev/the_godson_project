import Link from 'next/link';
import Image from 'next/image'; // For project images later

// Sample project data - in a real app, this would come from a CMS or database
const projects = [
  {
    id: 'project-1',
    title: 'Branding for Startup X',
    category: 'Branding',
    imageUrl: '/placeholders/project-placeholder.png', // Replace with actual image path
    description: 'A complete branding package for a new tech startup, including logo, color palette, and typography.',
  },
  {
    id: 'project-2',
    title: 'Website Redesign for Agency Y',
    category: 'Web Design',
    imageUrl: '/placeholders/project-placeholder.png',
    description: 'Modern and responsive website redesign focusing on user experience and visual appeal.',
  },
  {
    id: 'project-3',
    title: 'Illustrations for Children\'s Book Z',
    category: 'Illustration',
    imageUrl: '/placeholders/project-placeholder.png',
    description: 'A series of vibrant and engaging illustrations for an upcoming children\'s book.',
  },
  {
    id: 'project-4',
    title: 'Social Media Campaign for Product A',
    category: 'Branding',
    imageUrl: '/placeholders/project-placeholder.png',
    description: 'Eye-catching visuals and templates for a social media marketing campaign.',
  },
  {
    id: 'project-5',
    title: 'E-commerce Platform UI/UX',
    category: 'Web Design',
    imageUrl: '/placeholders/project-placeholder.png',
    description: 'User interface and experience design for a new online retail platform.',
  },
  {
    id: 'project-6',
    title: 'Character Design for Animation Short',
    category: 'Illustration',
    imageUrl: '/placeholders/project-placeholder.png',
    description: 'Original character designs for an independent animated short film.',
  },
];

export const metadata = {
  title: 'Portfolio - BlessingGodson',
  description: 'Explore the graphic design projects by BlessingGodson, including branding, web design, and illustration work.',
};

export default function PortfolioPage() {
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-4">
        My <span className="text-secondary">Work</span> {/* Use text-secondary */}
      </h1>
      <p className="text-lg text-gray-600 text-center mb-12">
        Here's a selection of projects that showcase my skills in graphic design.
      </p>

      {/* TODO: Implement filtering/categorization controls here later */}
      {/* <div className="mb-8 text-center">
        <button className="bg-secondary text-white px-4 py-2 rounded-md mr-2 hover:opacity-90">All</button> // Example use of bg-secondary
        <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md mr-2 hover:bg-gray-300">Branding</button>
        <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md mr-2 hover:bg-gray-300">Web Design</button>
        <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300">Illustration</button>
      </div> */}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div key={project.id} className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
            {/* In a real app, use Next/Image here */}
            <div className="w-full h-56 bg-gray-300 flex items-center justify-center">
              {/* <Image src={project.imageUrl} alt={project.title} width={400} height={224} className="object-cover" /> */}
              <span className="text-gray-500 text-sm">(Placeholder: {project.title})</span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-1">{project.title}</h3>
              <p className="text-sm text-secondary font-medium mb-3">{project.category}</p> {/* Use text-secondary */}
              <p className="text-gray-600 text-sm mb-4 line-clamp-3">{project.description}</p>
              <Link
                href={`/portfolio/${project.id}`} // This will link to individual project pages (to be created)
                className="inline-block bg-accent hover:opacity-90 text-white font-semibold py-2 px-4 rounded-md text-sm transition duration-300" // Use bg-accent
              >
                View Project
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
