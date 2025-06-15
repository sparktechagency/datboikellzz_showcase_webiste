'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { X, Menu } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';
import Cookies from 'js-cookie';
import { Button } from 'antd';

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
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const token = Cookies.get('token');
    setIsLoggedIn(!!token);
  }, [pathname]);

  const isActive = (href: string) =>
    pathname === href || (href !== '/' && pathname.startsWith(href));

  const handleLogout = () => {
    Cookies.remove('token');
    setIsLoggedIn(false);
    window.location.href = '/';
  };

  if (!isClient) return null;

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-sm border-b border-gray-100 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-auto h-12 relative">
              <Image
                src="/brand.svg"
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

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center gap-3">
            {isLoggedIn ? (
              <>
                <Link href="/profile">
                  <Button className="text-gray-700 hover:bg-gray-100">
                    Profile
                  </Button>
                </Link>
                <Button
                  onClick={handleLogout}
                  className="border-gray-300 hover:bg-gray-50"
                >
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Link href="/auth/sign-up">
                  <Button className="bg-pink text-white">Sign Up</Button>
                </Link>
              </>
            )}
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

              <div className="pt-4 border-t border-gray-200 space-y-2">
                {isLoggedIn ? (
                  <>
                    <Link href="/profile">
                      <Button
                        className="w-full justify-start bg-white hover:bg-gray-50"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Profile
                      </Button>
                    </Link>
                    <Button
                      className="w-full justify-start bg-white hover:bg-gray-50 text-red-600 hover:text-red-700"
                      onClick={() => {
                        handleLogout();
                        setIsMenuOpen(false);
                      }}
                    >
                      Logout
                    </Button>
                  </>
                ) : (
                  <>
                    <Link href="/auth/sign-in">
                      <Button
                        className="w-full justify-start bg-white hover:bg-gray-50"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Sign In
                      </Button>
                    </Link>
                    <Link href="/auth/sign-up">
                      <Button
                        className="w-full justify-start bg-blue-600 hover:bg-blue-700 text-white"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Sign Up
                      </Button>
                    </Link>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
