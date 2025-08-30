'use client'
import { useProfileQuery } from '@/app/provider/redux/services/profileApis'
import React from 'react'
import { useRouter } from 'next/navigation'
import LottieAnimation from '@/components/shared/LottieAnimation'

function PrivateRoutes({ children }: any) {
    const { data, isLoading } = useProfileQuery(undefined)
    console.log("isSubscribed",data?.data?.isSubscribed)
    const router = useRouter()
    if (isLoading) {
        return <LottieAnimation />
    }

    if (!data?.data?.isSubscribed) {
        return router.push('/subscription')
    }

    return children
}

export default PrivateRoutes