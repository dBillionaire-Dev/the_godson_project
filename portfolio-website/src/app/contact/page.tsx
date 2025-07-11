// TODO: Consider using react-hook-form for more robust form handling in the future.

export const metadata = {
  title: 'Contact Me - BlessingGodson',
  description: 'Get in touch with BlessingGodson for project inquiries, collaborations, or any questions.',
};

// Simple social link component - can be expanded
const SocialLink = ({ href, children, platform }: { href: string, children: React.ReactNode, platform: string }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-500 hover:text-secondary transition-colors duration-300" // Use hover:text-secondary
    aria-label={`BlessingGodson on ${platform}`}
  >
    {children}
  </a>
);

export default function ContactPage() {
  // Basic form submission handler (logs to console for now)
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData.entries());
    console.log('Form submitted:', data);
    // Here you would typically send the data to a backend API endpoint
    // For example: await fetch('/api/contact', { method: 'POST', body: JSON.stringify(data) });
    alert('Thank you for your message! (This is a demo - form data logged to console)');
    (event.target as HTMLFormElement).reset();
  };

  return (
    <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <section className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-3">
            Let's <span className="text-secondary">Connect</span> {/* Use text-secondary */}
          </h1>
          <p className="text-lg text-gray-600 max-w-xl mx-auto">
            Have a project in mind, a question, or just want to say hello? I'd love to hear from you!
          </p>
        </section>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Form Section */}
          <section className="bg-primary p-8 rounded-lg shadow-lg"> {/* Use bg-primary */}
            <h2 className="text-2xl font-semibold text-gray-700 mb-6">Send Me a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-secondary focus:border-secondary sm:text-sm" // Use focus:ring-secondary focus:border-secondary
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-secondary focus:border-secondary sm:text-sm" // Use focus:ring-secondary focus:border-secondary
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-secondary focus:border-secondary sm:text-sm" // Use focus:ring-secondary focus:border-secondary
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-secondary focus:border-secondary sm:text-sm" // Use focus:ring-secondary focus:border-secondary
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-secondary hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary transition duration-300" // Use bg-secondary, hover:opacity-90, focus:ring-secondary
                >
                  Send Message
                </button>
              </div>
            </form>
          </section>

          {/* Contact Information & Social Links Section */}
          <section className="space-y-8">
            <div className="bg-primary p-8 rounded-lg shadow-lg"> {/* Use bg-primary */}
              <h2 className="text-2xl font-semibold text-gray-700 mb-4">Contact Details</h2>
              <p className="text-gray-600 mb-2">
                Feel free to reach out via email or connect with me on social media.
              </p>
              <div className="mb-4">
                <span className="font-semibold text-gray-700">Email:</span>
                <a href="mailto:hello@blessinggodson.design" className="ml-2 text-accent hover:opacity-80"> {/* Use text-accent */}
                  hello@blessinggodson.design {/* Placeholder Email */}
                </a>
              </div>
              {/* Optionally add Phone Number:
              <div className="mb-4">
                <span className="font-semibold text-gray-700">Phone:</span>
                <a href="tel:+1234567890" className="ml-2 text-blue-500 hover:text-blue-700">
                  +1 (234) 567-890 {/* Placeholder Phone * /}
                </a>
              </div>
              */}
              <p className="text-gray-600">
                I aim to respond to all inquiries within 24-48 hours.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold text-gray-700 mb-6">Follow Me</h2>
              <div className="flex space-x-6">
                <SocialLink href="https://behance.net/blessinggodson" platform="Behance">
                  {/* Placeholder for Behance Icon - e.g., an SVG or FontAwesome icon */}
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.94 11.75h-3.07v-1.3c0-.69.47-1.04 1.18-1.04.69 0 1.13.33 1.13.99v1.35zm-5.87 0H7.79V9.12h2.79c1.67 0 2.62.96 2.62 2.31 0 1.36-.95 2.32-2.62 2.32zm6.78.88c0 .76-.61 1.37-1.37 1.37h-1.7c-.76 0-1.37-.61-1.37-1.37V9.12h-1.1v4.51c0 .76-.61 1.37-1.37 1.37h-1.7c-.76 0-1.37-.61-1.37-1.37V9.12H8.26V7.75h8.59v1.37h-1.1v3.48c0 .77.62 1.39 1.39 1.39h.93c.77 0 1.39-.62 1.39-1.39v-3.48h-1.1V7.75h3.07v4.88z"/></svg>
                </SocialLink>
                <SocialLink href="https://dribbble.com/blessinggodson" platform="Dribbble">
                  {/* Placeholder for Dribbble Icon */}
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 1.5a8.5 8.5 0 100 17 8.5 8.5 0 000-17zm4.46 5.043c.18-.52.014-1.096-.41-1.456a.971.971 0 00-1.456.409c-1.017 2.95-3.933 4.986-7.335 4.986A7.004 7.004 0 014.5 12c0-1.64.564-3.137 1.51-4.31.188-.23.53-.29.78-.12a.587.587 0 01.31.719A5.494 5.494 0 006 12c0 2.612 1.815 4.807 4.259 5.366.405.094.81-.16.904-.566.096-.406-.16-.81-.566-.904A4.004 4.004 0 017.5 12c0-1.02.38-1.956 1.007-2.707.09-.104.19-.198.298-.282.292-.23.68-.205.94.07.26.274.23.68-.06.94-.48.42-.79.99-.79 1.62 0 1.24 1.01 2.25 2.25 2.25s2.25-1.01 2.25-2.25c0-.61-.23-1.16-.62-1.57a.971.971 0 01.38-1.452c.52-.18 1.096.014 1.456.41.823.753 1.324 1.793 1.324 2.942 0 2.205-1.795 4-4 4s-4-1.795-4-4c0-1.73.943-3.323 2.46-3.84.39-.13.58-.55.45-.94a.65.65 0 00-.94-.45C7.002 9.02 5.5 10.62 5.5 12.5 5.5 15.533 7.967 18 11 18s5.5-2.467 5.5-5.5c0-1.268-.52-2.41-1.356-3.264l-.184-.193z" clipRule="evenodd" /></svg>
                </SocialLink>
                <SocialLink href="https://linkedin.com/in/blessinggodson" platform="LinkedIn">
                  {/* Placeholder for LinkedIn Icon */}
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 3a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14zm-.5 15.5v-5.3a3.26 3.26 0 00-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-3.18v8.37h3.18v-4.74c0-.98.6-1.93 1.93-1.93s1.93.95 1.93 1.93v4.74h3.02zM6.88 8.56a1.68 1.68 0 001.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 00-1.69 1.69c0 .93.76 1.68 1.69 1.68zm1.57 9.94V10.4h-3.14v8.1h3.14z"/></svg>
                </SocialLink>
                 {/* Add more social links as needed, e.g., Instagram, Twitter */}
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
