'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import CtaButton from '@/components/ui/CtaButton';

const HeroBanner = () => {
  return (
    <div className="relative min-h-dvh md:min-h-dvh py-20 md:py-28 w-full">
      {/* Background Image */}
      <div className="absolute  inset-0 z-0">
        <Image
          src="/hero-banner.png"
          alt="Heritage landscape"
          fill
          className="object-cover brightness-[0.65]"
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
        />
        {/* <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/70" /> */}
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 py-8 md:py-12 flex items-center flex-col md:flex-row justify-center md:justify-between h-full">
        {/* Left: Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="w-full  md:w-1/2 text-white flex flex-col items-center md:items-start md:text-left text-center"
        >
          <h1 className="text-2xl max-w-2xl xs:text-3xl sm:text-4xl md:text-4xl xl:text-6xl font-bold leading-tight">
            Bet Smarter, Win Bigger — Only with{' '}
            <span className="text-[#E5B92E]">BetWise</span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl lg:text-2xl text-white/80"
          >
            Get exclusive access to expert predictions, real-time betting tips,
            and a winning strategy — all in one sleek, intuitive app.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-6 sm:mt-8"
          >
            <Link href="/auth/sign-in">
              <CtaButton text="Download The App Now" />
            </Link>
          </motion.div>
        </motion.div>

        {/* Right: Hero Image */}
        <motion.div
          animate={{
            x: [0, 20, 30, 20, 0],
            y: [0, 5, 0, -5, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="w-full flex md:w-1/2 h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-[70vh] mt-6 sm:mt-8 md:mt-0  justify-center"
        >
          <Image
            src="/hero-model.png"
            alt="App Preview"
            width={500}
            height={500}
            className="w-3/4 md:w-full h-auto object-contain"
            priority
          />
        </motion.div>
      </div>

      {/* Decorative Gradient Overlays */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute left-0 top-0 h-full w-1/3 bg-gradient-to-r from-blue-500/10 to-transparent"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute right-0 top-0 h-full w-1/3 bg-gradient-to-l from-purple-500/10 to-transparent"
      />
    </div>
  );
};

export default HeroBanner;
