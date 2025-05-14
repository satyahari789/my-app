// components/Footer.tsx
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="footer bg-gray-100 text-gray-700 py-8 mt-16">
      <div className="Brand max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand */}
        <div>
          <h2 className="text-xl font-semibold mb-2">SIRIS APPS</h2>
          <p className="text-sm">
            Making modern web apps easier, faster, and cleaner.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-md font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/contact">Contact</Link></li>
            <li><Link href="/careers">Careers</Link></li>
            <li><Link href="/blog">Blog</Link></li>
            <Link href="/product">Products</Link>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className=" text-md font-semibold mb-2">Contact Us</h3>
          <p className="text-sm">Email: support@myapp.com</p>
          <p className="text-sm">Phone: +1 (123) 456-7890</p>
        </div>
      </div>

      <div className="mt-8 border-t border-gray-300 pt-4 text-center text-sm">
        &copy; {new Date().getFullYear()} MyApp. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
