'use client';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import CtaButton from '../CtaButton';
import { Link } from 'react-scroll';

function HeroButton() {
  const [windowWidth, setWindowWidth] = useState(0);
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setWindowWidth(window.innerWidth);
    }
  }, []);
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="mt-6 sm:mt-8"
      >
        <Link
          activeClass="active"
          to="download-app"
          spy={true}
          smooth={true}
          hashSpy={true}
          offset={windowWidth >= 768 ? -90 : 0}
          duration={500}
          isDynamic={true}
          ignoreCancelEvents={false}
          spyThrottle={500}
        >
          <CtaButton text="Download The App Now" />
        </Link>
      </motion.div>
    </div>
  );
}

export default HeroButton;
