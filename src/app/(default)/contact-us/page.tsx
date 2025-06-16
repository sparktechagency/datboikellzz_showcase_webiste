'use client';
import PageHeader from '@/components/shared/PageHeader';
import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import SocialIcons from './SocialIcons';

function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    description: '',
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Form submitted successfully!');
  };
  return (
    <div className="min-h-dvh">
      <PageHeader title="Contact Us" />
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        {/* Main Content */}
        <div className="container mx-auto px-4 py-8">
          <div className="grid bg-white shadow-lg rounded-2xl lg:grid-cols-12 gap-8 max-w-6xl mx-auto">
            {/* Left Sidebar - Green Section */}
            <div className="lg:col-span-4 p-8 rounded-l-lg lg:rounded-r-none rounded-r-lg relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full">
                <Image
                  src="/contact-bg.png"
                  alt="Contact Background"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
                />
              </div>
              <div className="absolute bottom-6 left-6">
                <h1 className="text-white text-xl mb-3 font-semibold">
                  Follow Us On
                </h1>
                <SocialIcons />
              </div>
            </div>

            {/* Right Content - Form Section */}
            <div className="lg:col-span-8 bg-white p-8 rounded-r-lg lg:rounded-l-none rounded-l-lg">
              <div className="max-w-2xl">
                <h2 className="text-3xl font-bold text-gray-800 mb-2">
                  Get in Touch with{' '}
                  <span className="text-[#E5B92E]">BetWise</span>
                </h2>
                <p className="text-gray-600 mb-8">
                  Reach out to our team anytime — whether it&lsquo;s a query
                  about subscriptions, technical support, or partnership
                  opportunities.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Fields */}
                  <div className="grid gap-4">
                    <div>
                      <label
                        htmlFor="fullName"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Full Name
                      </label>
                      <Input
                        id="fullName"
                        name="fullName"
                        type="text"
                        placeholder="First Name"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        required
                      />
                    </div>
                  </div>

                  {/* Email Field */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Email Address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      required
                    />
                  </div>

                  {/* Phone Field */}
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                  </div>

                  {/* Description Field */}
                  <div>
                    <label
                      htmlFor="description"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Description
                    </label>
                    <textarea
                      id="description"
                      name="description"
                      rows={4}
                      placeholder="Type Your Message"
                      value={formData.description}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none"
                      required
                    />
                  </div>

                  {/* Submit Button */}
                  <div>
                    <Button
                      type="submit"
                      className="bg-green-700 cursor-pointer hover:bg-green-800 text-white px-8 py-3 rounded-md font-medium transition-colors duration-200 focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                    >
                      Submit
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
