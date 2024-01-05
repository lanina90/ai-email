import type { Metadata } from 'next'
import { Lato } from 'next/font/google'
import "@/app/globals.scss";
import "styles/base/_normalize.scss";
import Header from "@/Components/Header/Header";

const lato = Lato({
  variable: '--lato-font',
  weight: ['100' , '300' , '400' , '700' , '900'],
  style: 'normal',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${lato.variable}`}>
      <body className={lato.className}>
      <Header/>
      <main>
        {children}
      </main>
      </body>
    </html>
  )
}
