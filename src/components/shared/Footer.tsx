import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <div className="bg-gradient-to-tr from-[#022C22]/70 to-[#022C22]">
      <div className="py-12 container mx-auto">
        <div className="grid grid-cols-1  md:grid-cols-3 gap-3 ">
          <Image
            className="md:text-start text-center"
            src="/icons/brand.svg"
            alt="logo"
            width={100}
            height={100}
          />
          <p className="text-center border-r border-l border-[#E5B92E] text-white text-sm mt-4">
            Copyright &copy; {currentYear} BetWise. All rights reserved.
          </p>
          <div className="flex items-center justify-center gap-2">
            <Link
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:cursor-pointer"
            >
              <Image
                src="/icons/social/fb.svg"
                alt="logo"
                width={50}
                height={50}
                className="w-4 md:w-8"
              />
            </Link>
            <Link
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:cursor-pointer"
            >
              <Image
                src="/icons/social/x.svg"
                alt="logo"
                width={50}
                height={50}
                className="w-4 md:w-8"
              />
            </Link>
            <Link
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:cursor-pointer"
            >
              <Image
                src="/icons/social/l-din.svg"
                alt="logo"
                width={50}
                height={50}
                className="w-4 md:w-8"
              />
            </Link>
            <Link
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:cursor-pointer"
            >
              <Image
                src="/icons/social/instagram.svg"
                alt="logo"
                width={50}
                height={50}
                className="w-4 md:w-8"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
