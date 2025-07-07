'use client';
import { useGetTermsAndConditionsQuery } from '@/app/provider/redux/services/termsAndConditionsApis';
import PageHeader from '@/components/shared/PageHeader';
import React from 'react';

interface TermsAndConditions {
  data: {
    description: string;
  };
}

interface QueryResult {
  data?: TermsAndConditions | null;
  isLoading: boolean;
  isError: boolean;
}

function Page() {
  const { data, isLoading, isError } = useGetTermsAndConditionsQuery(
    undefined
  ) as QueryResult;

  if (isLoading)
    return (
      <div className="min-h-screen">
        <div className="bg-gray-500/40 h-96 animate-pulse"></div>
        <div className="flex flex-col gap-4 container mx-auto px-4 py-8">
          {Array.from({ length: 10 }).map((_, index) => (
            <div key={index} className="bg-gray-500/40 h-6 animate-pulse"></div>
          ))}
        </div>
        <div className="bg-gray-500/40 h-96 animate-pulse"></div>
      </div>
    );
  if (isError) return <div className="min-h-screen">Error fetching data</div>;
  return (
    <div className="min-h-screen">
      <PageHeader title="Terms and Conditions" />

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
