import Image from 'next/image'; // For potential images like a profile picture

export const metadata = {
  title: 'About Me - BlessingGodson',
  description: 'Learn more about BlessingGodson, a passionate graphic designer, her skills, experience, and creative journey.',
};

export default function AboutPage() {
  return (
    <div className="bg-primary py-12 px-4 sm:px-6 lg:px-8"> {/* Use bg-primary */}
      <div className="container mx-auto">
        {/* Hero/Intro Section */}
        <section className="text-center mb-16">
          <div className="w-32 h-32 md:w-40 md:h-40 bg-gray-300 rounded-full mx-auto mb-6 flex items-center justify-center shadow-lg">
            {/* Placeholder for Profile Image - <Image src="/path-to-profile.jpg" alt="BlessingGodson" width={160} height={160} className="rounded-full" /> */}
            <span className="text-gray-500">Profile Pic</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-3">
            About <span className="text-secondary">BlessingGodson</span> {/* Use text-secondary */}
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A creative soul passionate about transforming ideas into compelling visual stories.
          </p>
        </section>

        {/* Detailed Biography Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-gray-700 mb-6 text-center md:text-left">My Journey</h2>
          <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
            <p className="text-gray-700 leading-relaxed mb-4">
              Hello! I'm BlessingGodson, a graphic designer with a deep-seated passion for aesthetics and communication. My journey into design began [mention origin story - e.g., with a sketchbook and a dream, during a specific course, etc.]. I believe that great design is not just about looking good, but about solving problems and connecting with people on an emotional level.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Over the years, I've honed my skills in [mention key areas like branding, typography, illustration, web design]. I thrive on collaboration and enjoy working closely with clients to understand their vision and translate it into designs that are both beautiful and effective. My approach is rooted in [mention design philosophy - e.g., empathy, research, iteration], ensuring that every project is thoughtfully crafted and purposefully executed.
            </p>
            <p className="text-gray-700 leading-relaxed">
              When I'm not designing, you can find me [mention hobbies or interests - e.g., exploring art galleries, learning new creative software, hiking in nature]. I'm constantly seeking inspiration and new ways to grow both personally and professionally.
            </p>
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-gray-700 mb-8 text-center">My Skills</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-center">
            {['Branding & Identity', 'Logo Design', 'Web Design (UI/UX)', 'Illustration', 'Print Design', 'Typography', 'Adobe Creative Suite', 'Figma'].map((skill) => (
              <div key={skill} className="bg-secondary/10 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"> {/* Lighter secondary bg */}
                <p className="font-semibold text-secondary">{skill}</p> {/* text-secondary */}
              </div>
            ))}
          </div>
        </section>

        {/* Experience Section (Placeholder) */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-gray-700 mb-6 text-center md:text-left">Experience</h2>
          <div className="space-y-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-800">Senior Graphic Designer - Creative Agency Inc.</h3>
              <p className="text-sm text-gray-500 mb-2">Jan 2020 - Present</p>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Led design projects from concept to completion for diverse clients.</li>
                <li>Developed brand identities, marketing materials, and web graphics.</li>
                <li>Collaborated with cross-functional teams to deliver high-quality work.</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-800">Junior Designer - Design Studio Co.</h3>
              <p className="text-sm text-gray-500 mb-2">June 2018 - Dec 2019</p>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Assisted senior designers on various projects.</li>
                <li>Gained experience in print and digital design.</li>
                <li>Contributed to brainstorming and concept development.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Achievements/Awards Section (Placeholder) */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-gray-700 mb-6 text-center">Achievements</h2>
          <div className="bg-blue-50 p-6 rounded-lg shadow-sm">
            <ul className="list-disc list-inside text-blue-700 space-y-2">
              <li>Winner, "Best Portfolio Design" - Local Design Awards 2023 (Example)</li>
              <li>Featured Designer - Design Magazine Monthly (Example)</li>
              <li>Successfully launched 50+ branding projects for satisfied clients. (Example)</li>
            </ul>
          </div>
        </section>

        {/* Testimonials Section (Placeholder) */}
        {/*
        <section>
          <h2 className="text-3xl font-semibold text-gray-700 mb-8 text-center">What Clients Say</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <p className="text-gray-700 italic mb-4">"BlessingGodson is a true professional and a delight to work with. Her designs exceeded our expectations!"</p>
              <p className="font-semibold text-pink-500">- Client Name, CEO of Company</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <p className="text-gray-700 italic mb-4">"The creativity and attention to detail were outstanding. Highly recommend!"</p>
              <p className="font-semibold text-pink-500">- Another Client, Project Manager</p>
            </div>
          </div>
        </section>
        */}
      </div>
    </div>
  );
}
