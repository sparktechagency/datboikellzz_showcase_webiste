'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface AuthInfoItem {
    img: string
    title: string
    description: string
}

function AuthInfo() {
    const [currentIndex, setCurrentIndex] = useState(0)

    const data: AuthInfoItem[] = [
        {
            img: "/auth/Frame1.svg",
            title: 'Welcome to Bet Wise Easy Money Picks!',
            description: 'Your journey to smarter sports betting starts here. Follow top cappers, get winning tips, and stay ahead!'
        },
        {
            img: "/auth/Frame2.svg",
            title: 'Follow Trusted Cappers',
            description: 'Subscribe to expert bettors, access their premium picks, and increase your winning chances!'
        },
        {
            img: "/auth/Frame3.svg",
            title: 'Get Real-Time Winning Tips',
            description: 'Stay notified with instant betting predictions, updates, and game-day insights, wherever you are.'
        }
    ]

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length)
        }, 3000)

        return () => clearInterval(interval)
    }, [data.length])

    return (
        <div className='flex items-center w-full justify-center overflow-hidden gap-2 relative h-[400px]'>
            <AnimatePresence mode='wait'>
                <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, x: 300 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -300 }}
                    transition={{ duration: 0.5 }}
                    className='flex items-center justify-center flex-col absolute'
                >
                    <Image
                        src={data[currentIndex].img}
                        alt="BWP"
                        width={250}
                        height={250}
                        placeholder='blur'
                        blurDataURL={data[currentIndex].img}
                        className='w-[250px] h-[250px] object-contain'
                    />
                    <div className='text-center px-6'>
                        <h1 className='text-2xl font-semibold text-black'>{data[currentIndex].title}</h1>
                        <p className='text-gray-600 mt-2 text-sm'>{data[currentIndex].description}</p>
                    </div>
                </motion.div>
            </AnimatePresence>
        </div>
    )
}

export default AuthInfo