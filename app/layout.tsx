import footerData from '@/data/footer';

import Footer from '@/components/footer/footer';
import Navbar from '@/components/navbar/navbar';

import './globals.css';


export const metadata = {
  title: 'Portfolio',
  description: 'Web development portfolio website.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body>
        {/* Navigation Menu  */}
        <Navbar />

        {/* Main Section  */}
        {children}

        {/* Footer  */}
        <Footer data={footerData} />
      </body>
    </html>
  )
}
