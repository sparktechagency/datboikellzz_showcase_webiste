'use client';
import { useGetPrivacyPolicyQuery } from '@/app/provider/redux/services/privacyPolicyApis';
import PageHeader from '@/components/shared/PageHeader';
import React from 'react';

interface PrivacyPolicy {
  data: {
    description: string;
  };
}

interface QueryResult {
  data?: PrivacyPolicy | null;
  isLoading: boolean;
  isError: boolean;
}

function Page() {
  const { data, isLoading, isError } = useGetPrivacyPolicyQuery(
    undefined
  ) as QueryResult;

  if (isLoading)
    return (
      <div className="min-h-screen">
        <div className="bg-gray-500/40 h-96 animate-pulse"></div>
        <div className="flex flex-col gap-4 container mx-auto px-4 py-8">
          {Array.from({ length: 10 }).map((_, index) => (
            <div key={index} className="bg-gray-500/40 rounded h-6 animate-pulse"></div>
          ))}
        </div>
        <div className="bg-gray-500/40 h-96 animate-pulse"></div>
      </div>
    );
  if (isError) return <div className="min-h-screen">Error fetching data</div>;
  return (
    <div className="min-h-screen">
      <PageHeader title="Privacy Policy" />

      <div className="container mx-auto px-4 py-8">
        <div className="prose prose-gray max-w-none">
          <p
            className="text-gray-600 mb-6"
            dangerouslySetInnerHTML={{
              __html: (data?.data?.description || '') as string,
            }}
          />
          <div className="border-t pt-6 mt-8">
            <p className="text-sm text-gray-500">
              Last updated:{' '}
              {new Date().toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
