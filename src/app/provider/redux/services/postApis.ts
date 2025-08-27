import baseApis from "../query/baseApis";

const postApis = baseApis.injectEndpoints({
    endpoints: (builder) => ({
        allPost: builder.query({
            query: (targetUser: string) => ({
                url: '/post/get-all-posts',
                method: 'GET',
                params: {
                    targetUser: targetUser
                }
            }),
            providesTags: ['post'],
        })
    }),
})

export const { useAllPostQuery } = postApis