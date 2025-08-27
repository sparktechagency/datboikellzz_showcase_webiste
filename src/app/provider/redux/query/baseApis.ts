
import { url } from '@/lib/server';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import Cookies from 'js-cookie';
const baseApis = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: url,
        headers: {
            Authorization: `Bearer ${Cookies.get('accessToken')}`,
        },
    }),
    tagTypes: [
        'termsAndConditions',
        'privacyPolicy',
        'faq',
        'post',
        'profile',
        'subscription'
    ],
    endpoints: () => ({}),
});

export default baseApis;
