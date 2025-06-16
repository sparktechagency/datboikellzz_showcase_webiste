import PageHeader from '@/components/shared/PageHeader';
import React from 'react';

function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen">
      <PageHeader title="Privacy Policy" />

      <div className="container mx-auto px-4 py-8">
        <div className="prose prose-gray max-w-none">
          <p className="text-gray-600 mb-6">
            Welcome to our healthcare appointment booking app ("App"). This
            privacy policy explains how we collect, use, disclose, and safeguard
            your information when you use our App. By accessing or using the
            App, you agree to comply with and be bound by these Terms.
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">
              Information We Collect
            </h2>
            <p className="mb-4">
              We collect users to book appointments with healthcare providers.
              We facilitate the booking process but are not responsible for the
              medical services provided by healthcare professionals. All medical
              services are provided by independent healthcare practitioners.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">
              User Responsibilities
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium mb-2">
                  1. Account Information
                </h3>
                <p>
                  You must provide accurate, current, and complete information
                  about yourself as prompted by the App's registration forms.
                  You agree to provide accurate, current, and complete
                  information during the registration process and to update such
                  information to keep it accurate, current, and complete.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">2. Confidentiality</h3>
                <p>
                  You are responsible for safeguarding your account password and
                  for all activities that occur under your account. You agree to
                  notify us immediately of any unauthorized use of your account
                  or any other breach of security.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">3. Use of Services</h3>
                <p>
                  You agree to use the App only for lawful purposes and in
                  accordance with these Terms. You will not use the App in any
                  way that could damage, disable, overburden, or impair the App
                  or interfere with any other party's use of the App.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">
              Appointments and Cancellations
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium mb-2">
                  4. Booking Appointments
                </h3>
                <p>
                  When booking appointments through the App, you agree to
                  provide accurate information. The healthcare provider has the
                  right to accept or decline your appointment request.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">5. Cancellations</h3>
                <p>
                  If you need to cancel an appointment, you must do so according
                  to the cancellation policy of the healthcare provider. Failure
                  to cancel within the stipulated time may result in a
                  consultation fee.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">
              Payments
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium mb-2">6. Fees</h3>
                <p>
                  Any fees for services provided through the App are set by the
                  healthcare providers. The App may facilitate the payment
                  process but is not responsible for refunding payments.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">
                  7. Payment Information
                </h3>
                <p>
                  You agree to provide valid payment information and authorize
                  the App to charge your payment method for the services
                  provided by the healthcare provider.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">
              Privacy
            </h2>
            <p>Your use of the App is also governed by our Privacy Policy.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">
              Disclaimers and Limitation of Liability
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium mb-2">
                  8. Medical Disclaimer
                </h3>
                <p>
                  The App does not provide medical advice. Any content accessed
                  through the App is for informational purposes only and is not
                  a substitute for professional medical advice, diagnosis, or
                  treatment.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">9. No Warranties</h3>
                <p>
                  The App is provided on an "as is" and "as available" basis
                  without any warranties of any kind.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">
                  10. Limitation of Liability
                </h3>
                <p>
                  To the maximum extent permitted by law, we shall not be liable
                  for any indirect, incidental, special, consequential, or
                  punitive damages, or any loss of profits or revenues, whether
                  incurred directly or indirectly, or any loss of data, use,
                  goodwill, or other intangible losses, resulting from your use
                  or inability to use the App; (ii) any unauthorized access to
                  or use of our servers and/or any personal information stored
                  therein.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">
              Changes to Terms
            </h2>
            <p>
              We may update these Terms from time to time. If we make material
              changes, we will notify you by posting the updated Terms in the
              App or through other communications. Your continued use of the App
              after the effective date constitutes your acceptance of the
              updated Terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">
              Contact Information
            </h2>
            <p>
              If you have any questions about this Privacy Policy, please
              contact us at:
            </p>
            <div className="mt-4 p-4 bg-gray-50 rounded-lg">
              <p>
                <strong>Email:</strong> privacy@healthcareapp.com
              </p>
              <p>
                <strong>Phone:</strong> +1 (555) 123-4567
              </p>
              <p>
                <strong>Address:</strong> 123 Healthcare St, Medical City, MC
                12345
              </p>
            </div>
          </section>

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

export default PrivacyPolicyPage;
