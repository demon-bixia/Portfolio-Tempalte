import footerData from '@/data/footer';

import Footer from '@/components/shared/footer/footer';
import Navbar from '@/components/shared/navbar/navbar';

import './globals.css';


// **** Types **** //

interface IProps {
  children: React.ReactNode
}


// **** Variables **** //

export const metadata = {
  title: 'Portfolio',
  description: 'Web development portfolio website.',
}


// **** Component **** //

const RootLayout = ({
  children,
}: IProps) => {
  return (
    <html lang='en'>
      <body>
        {/* Navigation Menu  */}
        <Navbar />

        {/* Main Section  */}
        <main id='mainContent'>
          {children}
        </main>

        {/* Footer  */}
        <Footer data={footerData} />
      </body>
    </html>
  )
}


// **** Default export **** //

export default RootLayout;
