import "./globals.css"
import { Roboto, Lobster_Two } from "next/font/google"
import Nav from "./components/Nav"
import Hydrate from "./components/Hydrate"
//Define main font
const roboto = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-robot",
})
const lobster = Lobster_Two({
  weight: "700",
  subsets: ["latin"],
  variable: "--font-lobster",
})

export const metadata = {
	title: 'flipKoin',
	description:
		'E-commerce site where you get blockchain based flipKoin as a reward for shopping.',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className={`${roboto.variable} ${lobster.variable}  `} lang="en">
      <Hydrate>
        <Nav />
        {children}
      </Hydrate>
    </html>
  )
}
