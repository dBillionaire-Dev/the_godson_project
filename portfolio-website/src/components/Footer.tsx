const Footer = () => {
  return (
    <footer className="bg-gray-100 text-center py-8 mt-12">
      <div className="container mx-auto px-6">
        <p className="text-gray-600">
          &copy; {new Date().getFullYear()} BlessingGodson. All rights reserved.
        </p>
        <p className="text-sm text-gray-500 mt-2">
          Designed with <span className="text-secondary">&hearts;</span> by BlessingGodson {/* Use text-secondary */}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
