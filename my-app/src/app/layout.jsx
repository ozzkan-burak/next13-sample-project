import { Inter } from 'next/font/google'
import '@/styles/global.scss';

import Header from '@/components/Header';
import Footer from '@/components/Footer';


// export const metadata = {
//   title: 'Create Next App',
//   description: 'Generated by create next app',
// }

const interFontFamily = Inter({ subsets: ['latin'] })

const RootLayout = ({ children }) => {
  return (
    <html lang="tr" className={interFontFamily.className}>
      <body className="container">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}

export default RootLayout;

