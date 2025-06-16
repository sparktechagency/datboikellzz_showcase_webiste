'use client'
import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.3,
        },
    },
};

export const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
            ease: "easeOut"
        },
    },
};

const imageVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
        scale: 1,
        opacity: 1,
        transition: {
            duration: 0.5,
            ease: "easeOut"
        },
    },
};

function AppFeature() {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className='relative container mx-auto px-4 py-16 md:py-28'
        >
            {/* Background */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.2 }}
                transition={{ duration: 1 }}
                className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 w-3/4 h-3/4 z-0"
            >
                <Image
                    src="/feature-section-bg.png"
                    alt="Background"
                    fill
                    objectFit="cover"
                />
            </motion.div>

            {/* Title */}
            <motion.div
                variants={itemVariants}
                className='relative z-10 text-center mb-12'
            >
                <h1 className="font-poppins font-semibold text-3xl md:text-5xl">
                    <span className='text-[#E5B92E]'>BetWise</span> App Features
                </h1>
                <p className="mt-3 text-gray-700">Unlock a seamless sports betting experience designed to help you win more with less guesswork.</p>
            </motion.div>

            {/* Feature Grid */}
            <motion.div
                variants={containerVariants}
                className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-8 items-center"
            >
                {/* Left Side Features */}
                <motion.div variants={containerVariants} className="space-y-12">
                    <Feature
                        icon="/icons/crown.svg"
                        title="Expert Betting Tips"
                        description="All tips are posted directly by vetted expert cappers through the admin dashboard — no guesswork, just strategy."
                    />
                    <Feature
                        icon="/icons/daily-update.svg"
                        title="Daily Tip Updates"
                        description="Stay updated with new tips added regularly so you're always in tune with the latest opportunities."
                    />
                    <Feature
                        icon="/icons/navigation.svg"
                        title="Easy Tip Navigation"
                        description="Find the tips that matter to you with quick filters and intuitive sorting for a seamless experience."
                    />
                </motion.div>

                {/* Center Image */}
                <motion.div
                    variants={imageVariants}
                    className="flex justify-center w-full h-full"
                >
                    <Image
                        src="/mobile-hand.png"
                        alt="Mobile in Hand"
                        width={300}
                        height={400}
                        className="max-w-full object-cover h-auto"
                    />
                </motion.div>

                {/* Right Side Features */}
                <motion.div variants={containerVariants} className="space-y-6">
                    <Feature
                        icon="/icons/notification.svg"
                        title="Instant Notifications"
                        description="Get real-time alerts the moment a new tip is published under your subscription — stay one step ahead."
                    />
                    <Feature
                        icon="/icons/subscription.svg"
                        title="Subscription-Based Access"
                        description="Choose from multiple subscription packages to view tips tailored to your betting level and needs."
                    />
                    <Feature
                        icon="/icons/secure.svg"
                        title="Secure & Private Experience"
                        description="Enjoy a safe and secure platform with encrypted access — no personal data sharing, ever."
                    />
                </motion.div>
            </motion.div>
        </motion.div>
    );
}

const Feature = ({ icon, title, description }: { icon: string; title: string; description: string }) => (
    <motion.div
        variants={itemVariants}
        className="flex items-start gap-4"
    >
        <motion.div
            className="shrink-0">
            <Image src={icon} alt={title} width={40} height={40} />
        </motion.div>
        <div>
            <h3 className="text-xl font-semibold">{title}</h3>
            <p className="mt-2 leading-relaxed text-md text-gray-700">{description}</p>
        </div>
    </motion.div>
);

export default AppFeature;