import baseApis from "../query/baseApis";

const loginApis = baseApis.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (data: any) => ({
                url: '/auth/login',
                method: 'POST',
                body: data,
            }),
            invalidatesTags: ['profile'],
        }),
    })
})

export const { useLoginMutation } = loginApis