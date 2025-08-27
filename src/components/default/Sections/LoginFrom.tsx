"use client";
import React, { useCallback } from 'react';
import { Button, Form, Input, Divider } from 'antd';
import Link from 'next/link';
import FormTitle from './FormTitle';

const LoginFrom: React.FC = () => {
    const onFinish = useCallback((values: any) => {
        console.log('Received values of form: ', values);
    }, []);

    return (
        <Form layout='vertical' requiredMark={false} name="login" initialValues={{ remember: true }} onFinish={onFinish}>
            <FormTitle title=" Welcome Back! " description="Access your account and stay ahead with expert picks." />
            <Form.Item
                label="Email"
                name="Email"
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
                <Button block style={{ backgroundColor: '#022C22', color: 'white' }} htmlType="submit" size='large'>
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