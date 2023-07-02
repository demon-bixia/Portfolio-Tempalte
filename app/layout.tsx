import './globals.css'
import Navbar from '@/components/navbar/navbar';

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
        <Navbar />

        {children}
      </body>
    </html>
  )
}
