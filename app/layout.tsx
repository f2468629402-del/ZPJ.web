import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title:"FENG Creative System — AI Visual Creator",
  description:"AI视觉创作者个人作品集"
};
export default function RootLayout({ children }:{ children:React.ReactNode }) {
  return <html lang="zh-CN"><body><div className="noise"/><Navbar/>{children}<Footer/></body></html>;
}
