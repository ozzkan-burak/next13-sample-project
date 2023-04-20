import { Inter } from 'next/font/google'
import '@/app/styles/global.scss';


export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

const interFontFamily = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <html lang="tr" className={interFontFamily.className}>
      <body className="container">{children}</body>
    </html>
  )
}
