"use client"
import React, { useCallback, useState } from 'react'
import { Form, Input, Button } from 'antd'
import FormTitle from './FormTitle';
import { useRouter, useSearchParams } from 'next/navigation';
import { useVerifyOtpMutation } from '@/app/provider/redux/services/registerApis';
import ToastMessage from '@/components/ui/ToastMessage';

function VerifyOtp() {
    const router = useRouter()
    const [verifyOtp] = useVerifyOtpMutation()
    const [open, setOpen] = useState(false)
    const searchParams = useSearchParams()
    const email = searchParams.get('email')
    const [message, setMessage] = useState('')
    const [type, setType] = useState<'success' | 'error' | 'warning' | 'info'>('success')
    const Cookies = require('js-cookie');

    const onFinish = async (values: any) => {
        try {
            const data = {
                email: decodeURIComponent(email as string),
                activationCode: values.otp
            }
            await verifyOtp(data).unwrap().then((res) => {
                if (res?.success) {
                    setMessage(res?.message || "Account created successfully. Please check your email")
                    setType('success')
                    setOpen(true)
                    Cookies.set('accessToken', res?.data?.accessToken as string)
                    if (res?.data?.accessToken) {
                        router.push('/browse-Predictions')
                    }
                }
            })
        } catch (error: any) {
            setMessage(error?.data?.message || "Something went wrong")
            setType('error')
            setOpen(true)
        }
    }
    return (
        <Form layout='vertical' requiredMark={false} name="login" initialValues={{ remember: true }} onFinish={onFinish}>
            <ToastMessage
                open={open}
                setOpen={setOpen}
                message={message}
                icon={type}
                timer={1500}
                postion='top-center'
            />
            <FormTitle title="6-digit code" description="Please enter the code we've sent to michelle.rivera@example.com" />
            <Form.Item
                name="otp"
                rules={[{ required: true, message: 'Please input your otp!' }]}
                style={{ display: 'flex', justifyContent: 'center' }}
            >
                <Input.OTP length={6} size='large' />
            </Form.Item>
            <Form.Item>
                <Button block style={{ backgroundColor: '#022C22', color: 'white' }} htmlType="submit" size='large'>
                    Verify
                </Button>
            </Form.Item>
        </Form>
    )
}

export default VerifyOtp