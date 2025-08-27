import { RegisterFormValues } from "@/components/default/Sections/RegisterFrom";
import baseApis from "../query/baseApis";

const registerApis = baseApis.injectEndpoints({
    endpoints: (builder) => ({
        register: builder.mutation({
            query: (data: RegisterFormValues) => ({
                url: '/auth/register',
                method: 'POST',
                body: data,
            }),
        }),
        verifyEmail: builder.mutation({
            query: (data: { email: string }) => ({
                url: '/auth/activation-code-resend',
                method: 'POST',
                body: data,
            }),
        }),
        verifyOtp: builder.mutation({
            query: (data) => ({
                url: '/auth/activate-account',
                method: 'POST',
                body: data,
            }),
        }),
    })
})

export const { useRegisterMutation, useVerifyEmailMutation, useVerifyOtpMutation } = registerApis