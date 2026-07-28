"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Navbar(){
  const path=usePathname();
  return <header className="shell flex h-24 items-center justify-between border-b border-white/10">
    <Link href="/" className="flex items-baseline gap-3"><b className="text-xl tracking-tight">FENG</b><span className="text-[10px] tracking-[.18em] text-cyan-300/70">AI VISUAL CREATOR</span></Link>
    <nav className="hidden gap-9 md:flex">{[["/","首页"],["/works","作品"],["/about","关于"],["/contact","联系"]].map(([href,label])=><Link key={href} href={href} className={`text-xs tracking-[.16em] transition hover:text-white ${path===href?"text-white":"text-white/45"}`}>{label}</Link>)}</nav>
  </header>
}
