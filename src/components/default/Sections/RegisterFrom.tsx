"use client";
import React, { useState } from 'react';
import { Button, Form, Input } from 'antd';
import FormTitle from './FormTitle';
import { useRegisterMutation } from '@/app/provider/redux/services/registerApis';
import ToastMessage from '@/components/ui/ToastMessage';
import { useRouter } from 'next/navigation';

export interface RegisterFormValues {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
    phoneNumber: string;
    role: string;
}

const RegisterFrom: React.FC = () => {
    const [open, setOpen] = useState(false)
    const [message, setMessage] = useState('')
    const [type, setType] = useState<'success' | 'error' | 'warning' | 'info'>('success')
    const router = useRouter()
    const [register, { isLoading }] = useRegisterMutation()
    const onFinish = async (values: RegisterFormValues) => {
        const data: RegisterFormValues = {
            name: values.name,
            email: values.email,
            password: values.password,
            confirmPassword: values.confirmPassword,
            phoneNumber: values.phoneNumber,
            role: 'USER',
        }
        try {
            await register(data).unwrap().then((res) => {
                console.log(res);
                if (res?.success) {
                    setMessage(res?.message || "Account created successfully. Please check your email")
                    setType('success')
                    setOpen(true)
                    router.push(`/auth-email?email=${encodeURIComponent(values.email)}`);
                }
            })
        } catch (error: any) {
            console.log(error);
            setMessage(error?.data?.message || "Something went wrong")
            setType('error')
            setOpen(true)
            if (error?.data?.message === "Already have an account. Please activate") {
                router.push(`/auth-email?email=${encodeURIComponent(values.email)}`);
            }
        }
    };

    return (
        <Form className='hide-scrollbar h-full overflow-y-scroll'
            layout='vertical'
            requiredMark={false}
            name="login"
            onFinish={onFinish}>
            <ToastMessage
                open={open}
                setOpen={setOpen}
                message={message}
                icon={type}
                timer={1500}
                postion='top-center'
            />
            <FormTitle title="Create Your Account" description="Join BetWise Picks today. Get expert insights, win smarter, and stay ahead of the game!" />
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <Form.Item
                    label="Name"
                    name="name"
                    rules={[{ required: true, message: 'Please input your Name!' }]}
                >
                    <Input size='large' placeholder="Name" />
                </Form.Item>
                <Form.Item
                    label="Email"
                    name="email"
                    rules={[{ required: true, message: 'Please input your Email!' }]}
                >
                    <Input size='large' placeholder="Email" />
                </Form.Item>
            </div>
            <Form.Item
                label="Phone number"
                name="phoneNumber"
                rules={[{ required: true, message: 'Please input your Phone number!' }]}
            >
                <Input size='large' placeholder="Phone number" />
            </Form.Item>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <Form.Item
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: 'Please input your Password!' }]}
                >
                    <Input size='large' type="password" placeholder="Password" />
                </Form.Item>
                <Form.Item
                    label="Confirm Password"
                    name="confirmPassword"
                    rules={[{ required: true, message: 'Please input your Confirm Password!' }]}
                >
                    <Input size='large' type="password" placeholder="Confirm Password" />
                </Form.Item>
            </div>
            <Form.Item>
                <Button loading={isLoading} block style={{ backgroundColor: '#022C22', color: 'white' }} htmlType="submit" size='large'>
                    Continue
                </Button>
            </Form.Item>
            <h1 className='text-center mb-3 flex items-center md:text-base text-sm justify-center gap-2'>Already have an account?<span className='text-blue-500 cursor-pointer'>Log in</span></h1>
        </Form>
    );
};

export default RegisterFrom