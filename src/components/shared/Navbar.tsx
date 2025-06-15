'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { X, Menu } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

type NavItem = {
  label: string;
  href: string;
  disabled?: boolean;
};

const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Browse Properties', href: '/browse-properties' },
  { label: 'About Us', href: '/about-us' },
  { label: 'Rental Guides', href: '/rental-guides' },
  { label: 'Contact Us', href: '/contact-us' },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) =>
    pathname === href || (href !== '/' && pathname.startsWith(href));


  return (
    <nav className="fixed top-0 left-0 w-full bg-[#999999] backdrop-blur-sm border-b  z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-auto h-12 relative">
              <Image
                src="/icons/brand.svg"
                alt="Logo"
                width={1500}
                height={1500}
                className="w-auto h-full"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'text-sm font-medium transition-colors border-[var(--primary-color)] px-6 py-3 hover:text-blue-600',
                  isActive(item.href)
                    ? 'text-black bg-white '
                    : 'text-gray-700',
                  item.disabled && 'cursor-not-allowed opacity-50'
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>


          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden overflow-hidden"
          >
            <div className="px-4 pb-4 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    'block px-3 py-2 rounded-md text-base font-medium',
                    isActive(item.href)
                      ? 'bg-blue-50 text-blue-600'
                      : 'text-gray-700 hover:bg-gray-100',
                    item.disabled && 'cursor-not-allowed opacity-50'
                  )}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
