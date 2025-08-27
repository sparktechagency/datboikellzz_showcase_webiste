import React from 'react'

function FormTitle({ title, description }: { title: string, description: string }) {
    return (
        <div className='flex items-center justify-center flex-col gap-2'>
            <h1 className='text-center text-xl md:text-3xl font-semibold mt-4 mb-2'>{title}</h1>
            <p className='text-center text-gray-600 text-sm md:text-md mb-3'>{description}</p>
        </div>
    )
}

export default FormTitle