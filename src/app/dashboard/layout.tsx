import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <html lang="en">
        <body className={inter.className}>
         <nav>Dashboard</nav>
         <div><Link href="/">go to home page</Link></div>
          {children}
          </body>
      </html>
    )
  };