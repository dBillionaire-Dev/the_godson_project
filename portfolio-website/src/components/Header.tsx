import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-primary shadow-md"> {/* Use bg-primary */}
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-secondary"> {/* Use text-secondary */}
          <Link href="/">BlessingGodson</Link>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li><Link href="/" className="text-gray-700 hover:text-secondary">Home</Link></li> {/* Use hover:text-secondary */}
            <li><Link href="/portfolio" className="text-gray-700 hover:text-secondary">Portfolio</Link></li> {/* Use hover:text-secondary */}
            <li><Link href="/about" className="text-gray-700 hover:text-secondary">About</Link></li> {/* Use hover:text-secondary */}
            <li><Link href="/contact" className="text-gray-700 hover:text-secondary">Contact</Link></li> {/* Use hover:text-secondary */}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
