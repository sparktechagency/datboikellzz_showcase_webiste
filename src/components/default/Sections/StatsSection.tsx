'use client'
import React from 'react'
import { motion } from 'framer-motion'
import AnimatedCounter from '@/components/ui/AnimatedCounter'
import Image from 'next/image'

interface StatItem {
    number: number
    suffix?: string
    title: string
    subtitle: string
}

const StatsSection: React.FC = () => {
    const stats: StatItem[] = [
        {
            number: 250,
            suffix: 'k+',
            title: 'Total Active Users Betting Smarter',
            subtitle: 'With BetWise'
        },
        {
            number: 180,
            suffix: 'k+',
            title: 'App Downloads Across Google Play',
            subtitle: '& App Store'
        },
        {
            number: 98,
            suffix: '%',
            title: 'User Satisfaction Rate Based on',
            subtitle: 'Feedback'
        }
    ]

    return (
        <div className="relative w-full flex items-center justify-center md:h-[400px] bg-[#022C22] overflow-hidden">
            <div className='absolute top-0 left-0 w-full h-full'>
                <Image
                    src="/stat-bg.png"
                    alt="Mobile in Hand"
                    width={2000}
                    height={2000}
                    className="w-full h-full object-fill"
                />
            </div>

            <div className="relative z-10 flex items-center justify-center px-4 py-16">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                    >
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                className="text-center group"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.6,
                                    delay: index * 0.2,
                                    ease: 'easeOut'
                                }}
                            >
                                <motion.div
                                    className="mb-6"
                                    transition={{ duration: 0.2 }}
                                >
                                    <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#E5B92E] mb-2 drop-shadow-lg">
                                        <AnimatedCounter
                                            end={stat.number}
                                            suffix={stat.suffix}
                                            duration={2.5}
                                        />
                                    </h2>
                                </motion.div>

                                <motion.div
                                    className="space-y-1"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: (index * 0.2) + 0.5, duration: 0.6 }}
                                >
                                    <p className="text-white text-sm md:text-base lg:text-lg font-medium leading-relaxed">
                                        {stat.title}
                                    </p>
                                    <p className="text-white text-sm md:text-base lg:text-lg font-medium">
                                        {stat.subtitle}
                                    </p>
                                </motion.div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default StatsSection
