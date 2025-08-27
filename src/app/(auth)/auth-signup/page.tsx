'use client'
import React from 'react'
import Image from 'next/image'
import AuthInFo from '@/components/default/Sections/AuthInFo'
import { ConfigProvider, Divider } from 'antd'
import RegisterFrom from '@/components/default/Sections/RegisterFrom'
function SignUpPage() {
    return (
        <div className='relative flex items-center justify-center h-screen'>
            <Image
                src="/BWP.svg"
                alt="BWP"
                width={500}
                height={300}
                placeholder='blur'
                blurDataURL='/BWP.svg'
                className='w-[90vw] h-auto object-cover'
            />
            <div className='absolute backdrop-blur-xl h-screen inset-0 flex items-center justify-center'>
                <div className='p-4 md:p-[40px] border rounded-xl w-[1000px] h-[600px] flex gap-2'>
                    <div className='hidden md:!block flex-1 bg-[#ffffff85] rounded-md'>
                        <AuthInFo />
                    </div>
                    <ConfigProvider theme={{
                        components: {
                            Divider: {
                                colorSplit: "rgb(0,0,0)"
                            }
                        }
                    }}>
                        <Divider
                            className='!hidden md:!block'
                            style={{ height: '100%' }}
                            variant='dashed'
                            type='vertical'
                            size='large'
                            orientation="center"
                        />
                    </ConfigProvider>
                    <div className='flex-1 flex items-center justify-center bg-white p-4 overflow-hidden rounded-md'>
                        <RegisterFrom />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUpPage