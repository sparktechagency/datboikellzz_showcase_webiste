'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { X, Menu } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';
import { useProfileQuery } from '@/app/provider/redux/services/profileApis';
import { imageUrl } from '@/lib/server';

type NavItem = {
  label: string;
  href: string;
  disabled?: boolean;
};

const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Browse Predictions', href: '/browse-Predictions' },
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Terms of Condition', href: '/terms-of-condition' },
  // { label: 'Contact Us', href: '/contact-us' },
];



export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { data: profileData, isLoading: profileDataLoading } = useProfileQuery(undefined);
  console.log(profileData?.data?.profile_image)
  const pathname = usePathname();

  const isActive = (href: string) =>
    pathname === href || (href !== '/' && pathname.startsWith(href));


  return (
    <nav className="fixed top-0 left-0 w-full backdrop-blur-3xl py-3 bg-gray-900/40  z-50">
      <div className="container mx-auto px-2 md:px-0">
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
          <div className='flex items-center gap-2'>
            <div className="hidden lg:flex items-center space-x-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    'text-sm font-medium transition-colors border-[var(--primary-color)] px-6 py-3 ',
                    isActive(item.href)
                      ? 'text-white rounded-full bg-[#022C22] hover:text-[#FBBF24] '
                      : 'text-[#FBBF24]',
                    item.disabled && 'cursor-not-allowed opacity-50'
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className='!text-[#E5B92E]' size={20} /> : <Menu className="!text-[#E5B92E]" size={20} />}
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
            className="lg:hidden overflow-hidden"
          >
            <div className="px-4 pb-4 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    'block px-3 py-2  rounded-md text-base font-medium',
                    isActive(item.href)
                      ? 'bg-blue-50 !text-black'
                      : '!text-white hover:bg-gray-100',
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
