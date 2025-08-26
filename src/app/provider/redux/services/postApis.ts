import baseApis from "../query/baseApis";

const postApis = baseApis.injectEndpoints({
    endpoints: (builder) => ({
        allPost: builder.query({
            query: () => ({
                url: '/post/get-all-posts',
                method: 'POST',
            }),
            providesTags: ['post'],
        })
    }),
})

export const { useAllPostQuery } = postApis