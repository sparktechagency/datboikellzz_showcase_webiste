import React from 'react'

function TitleBar({ title }: Readonly<{ title: string }>) {
    return (
        <div className='bg-gradient-to-bl from-[#F8FAFC] via-[#F8FAFC] to-green-300/40 mb-4 p-2'>
            <h1 className='text-3xl font-bold'>{title}</h1>
        </div>
    )
}

export default TitleBar