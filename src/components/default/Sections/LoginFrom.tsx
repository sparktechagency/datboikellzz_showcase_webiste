"use client";
import React, { useCallback, useState } from 'react';
import { Button, Form, Input, Divider } from 'antd';
import Link from 'next/link';
import FormTitle from './FormTitle';
import { useLoginMutation } from '@/app/provider/redux/services/loginApis';
import ToastMessage from '@/components/ui/ToastMessage';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
const LoginFrom: React.FC = () => {
    const router = useRouter()
    const [login, { isLoading }] = useLoginMutation()
    const [open, setOpen] = useState(false)
    const [message, setMessage] = useState('')
    const [type, setType] = useState<'success' | 'error' | 'warning' | 'info'>('success')
    const onFinish = useCallback(async (values: any) => {
        try {
            await login(values).unwrap().then((res) => {
                if (res?.success) {
                    setMessage(res?.message || "Login successfully")
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
    }, []);

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
            <FormTitle title=" Welcome Back! " description="Access your account and stay ahead with expert picks." />
            <Form.Item
                label="Email"
                name="email"
                rules={[{ required: true, message: 'Please input your Email!' }]}
            >
                <Input size='large' placeholder="Email" />
            </Form.Item>
            <Form.Item
                label="Password"
                name="password"
                rules={[{ required: true, message: 'Please input your Password!' }]}
            >
                <Input size='large' type="password" placeholder="Password" />
            </Form.Item>
            <Form.Item>
                <Button loading={isLoading} disabled={isLoading} block style={{ backgroundColor: '#022C22', color: 'white' }} htmlType="submit" size='large'>
                    Log in
                </Button>
            </Form.Item>
            <Divider orientation="center">Or</Divider>
            <h1 className='text-center mb-3'>Don't have an account?</h1>
            <Link href='/auth-signup'>
                <Button block style={{ backgroundColor: '#022C22', color: 'white' }} size='large'>
                    Sign up
                </Button>
            </Link>
        </Form>
    );
};

export default LoginFrom;