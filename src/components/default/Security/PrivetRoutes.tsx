'use client'
import { useProfileQuery } from '@/app/provider/redux/services/profileApis'
import ToastMessage from '@/components/ui/ToastMessage'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

function PrivateRoutes({ children }: { children: React.ReactNode }) {
    const { data, isLoading, error } = useProfileQuery(undefined)
    const [showToast, setShowToast] = useState(false)
    const router = useRouter()

    useEffect(() => {
        if (!isLoading && data && !data?.data?.isSubscribed) {
            setShowToast(true)
            const timer = setTimeout(() => {
                router.push('/auth-signin')
            }, 2000)

            return () => clearTimeout(timer)
        }
    }, [data, isLoading, router])

    if (isLoading) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
            </div>
        )
    }

    if (error || !data?.data?.isSubscribed) {
        return (
            <>
                {showToast && (
                    <ToastMessage
                        open={showToast}
                        setOpen={setShowToast}
                        message="You need to be subscribed to access this content"
                        icon="error"
                        timer={2000}
                        postion="top-center"
                    />
                )}
                <div className="flex items-center justify-center min-h-screen">
                    <div className="text-center">
                        <h2 className="text-xl font-semibold text-gray-800">Access Restricted</h2>
                        <p className="text-gray-600 mt-2">Please subscribe to continue</p>
                    </div>
                </div>
            </>
        )
    }

    return <>{children}</>
}

export default PrivateRoutes