import '../global.css'
import Navbar from "@/components/Navbar";
import localFont from "next/font/local";
import SessionWrapper from "@/components/SessionWrapper";
import { Metadata } from "next";

export const metadata:Metadata={
  title:"YC Directory",
  description:'Pitch, Vote and Grow'
}


const firaCode = localFont({
  src: [
    {
      path: "../fonts/FiraCode-Bold.ttf",
      weight: "900",
      style: "normal",
    },
    {
      path: "../fonts/FiraCode-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../fonts/FiraCode-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/FiraCode-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/FiraCode-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
  ],
  variable:'--font-fira-code'
});



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      className={firaCode.variable}>
        <SessionWrapper>
          <Navbar></Navbar>
          {children}
        </SessionWrapper>
      </body>
    </html>
  );
}
