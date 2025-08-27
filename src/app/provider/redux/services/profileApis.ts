import baseApis from "../query/baseApis";

const profileApis = baseApis.injectEndpoints({
    endpoints: (builder) => ({
        profile: builder.query({
            query: () => ({
                url: '/user/profile',
                method: 'GET',
            }),
            providesTags: ['profile'],
        })
    })
})

export const { useProfileQuery } = profileApis