import Navbar from '@/components/default/Navbar';

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div>
        <Navbar />
        {children}
      </div>
    </>
  );
}
