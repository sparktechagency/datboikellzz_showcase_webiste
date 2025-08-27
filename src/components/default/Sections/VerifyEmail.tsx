'use client'
import { Button, Form, Input } from 'antd'
import React, { useEffect, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import FormTitle from './FormTitle'
import { useVerifyEmailMutation } from '@/app/provider/redux/services/registerApis'
import ToastMessage from '@/components/ui/ToastMessage'

function VerifyEmail() {
    const [form] = Form.useForm()
    const searchParams = useSearchParams()
    const email = searchParams.get('email')
    const [verifyEmail] = useVerifyEmailMutation()
    const [open, setOpen] = useState(false)
    const [message, setMessage] = useState('')
    const [type, setType] = useState<'success' | 'error' | 'warning' | 'info'>('success')
    const router = useRouter()

    useEffect(() => {
        if (email) {
            form.setFieldsValue({ email: decodeURIComponent(email) })
        }
    }, [email, form])

    const onFinish = async (values: any) => {
        try {
            const data = {
                email: values.email
            }
            await verifyEmail(data).unwrap().then((res) => {
                if (res?.success) {
                    setMessage(res?.message || "Verification code sent successfully")
                    setType('success')
                    setOpen(true)
                    router.push(`/auth-otp?email=${encodeURIComponent(values.email)}`);
                }
            })
        } catch (error: any) {
            setMessage(error?.data?.message || "Something went wrong")
            setType('error')
            setOpen(true)
        }
    }

    return (
        <Form
            form={form}
            layout='vertical'
            requiredMark={false}
            name="login"
            onFinish={onFinish}
        >
            <ToastMessage
                open={open}
                setOpen={setOpen}
                message={message}
                icon={type}
                timer={1500}
                postion='top-center'
            />
            <FormTitle
                title="Verify Your Email"
                description="We'll send a verification code to this email to confirm your account."
            />

            <Form.Item
                label="Email"
                name="email"
                rules={[{ required: true, message: 'Please input your Email!' }]}
            >
                <Input size='large' placeholder="Email" />
            </Form.Item>

            <Form.Item>
                <Button
                    block
                    style={{ backgroundColor: '#022C22', color: 'white' }}
                    htmlType="submit"
                    size='large'
                >
                    Verify
                </Button>
            </Form.Item>
        </Form>
    )
}

export default VerifyEmail
