import Image from 'next/image';
import React from 'react';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '../ui/breadcrumb';

function PageHeader({ title }: Readonly<{ title: string }>) {
  return (
    <div className="relative w-full py-48">
      <div className="absolute -z-1 top-0 left-0 w-full h-full">
        <Image
          src="/hero-banner.png"
          alt="Hero Banner"
          fill
          className="object-cover brightness-[0.65]"
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
        />
      </div>
      <div className="container mx-auto">
        <h1 className="font-medium text-[42px] leading-[100%] text-white tracking-[0%]">
          {title}
        </h1>
        <Breadcrumb className="mt-4">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink className='text-white hover:text-[#E5B92E]' href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className='text-[#E5B92E]'>{title}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
    </div>
  );
}

export default PageHeader;
