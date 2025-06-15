import BookIcon from '@/components/ui/iconSvg/BookIcon'
import PlaneSvg from '@/components/ui/iconSvg/PlaneSvg'
import SmartSvg from '@/components/ui/iconSvg/SmartSvg'
import Image from 'next/image'
import React from 'react'

function WorkSystem() {
    const workFlow = [
        {
            title: 'Get the App',
            description: 'Download BetWise and sign up in seconds to get started.',
            icon: <BookIcon />
        },
        {
            title: 'Pick a Plan',
            description: 'Choose the subscription that fits your betting style.',
            icon: <PlaneSvg />
        },
        {
            title: 'Bet Smarter',
            description: 'Access expert tips, explore insights, and start winning.',
            icon: <SmartSvg />
        }
    ]
    return (
        <div className='container mx-auto py-28'>
            <div>
                <h1 className="font-poppins font-semibold text-5xl text-center tracking-normal leading-none">How BetWise Works</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-7 px-3">
                {
                    workFlow.map((item, index) => (
                        <div key={index} className='relative p-6 md:p-12 rounded-md overflow-hidden shadow-sm md:shadow-2xl flex flex-col md:items-start'>
                            <div className='absolute -z-1 top-0 left-0 w-full h-full'>
                                <Image
                                    src="/work-bg.png"
                                    alt="work-system-bg"
                                    fill
                                    className='object-bottom-right'
                                />
                            </div>
                            <div className='w-20 h-20  flex items-start justify-center rounded-full'>
                                {item.icon}
                            </div>
                            <h1 className='text-2xl font-bold mt-4'>{item.title}</h1>
                            <p className='md:text-start text-center mt-4'>{item.description}</p>
                        </div>
                    ))
                }
            </div>
        </div >
    )
}

export default WorkSystem