import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/Navbar/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Developer Ratul",
  description: "AL SAEF RATUL · Web Developer (Frontend-React.JS) · 1+ year in Web Application Development, Coding, Programming, Testing, Data Management, Project Management.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar></NavBar>
        {children}
        <div className=' bg-black p-6 '> 
            <p className='text-white text-center'>Developed By Al Saef Ratul | All rights reserved.</p>
        </div>
        </body>
    </html>
  );
}
