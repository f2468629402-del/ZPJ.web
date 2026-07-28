import { AboutContactSection } from "@/components/AboutContactSection";
import { ModuleCarousel } from "@/components/ModuleCarousel";
export default function Home(){
 return <main><div className="grid-fade pointer-events-none absolute inset-x-0 top-24 h-[700px]"/>
  <section className="shell pt-16 text-center md:pt-20"><p className="eyebrow">Portfolio / Selected works / 2026</p><h1 className="mx-auto mt-5 max-w-5xl text-[clamp(48px,7vw,104px)] font-semibold leading-[.88] tracking-[-.065em]">FENG CREATIVE<br/><span className="bg-gradient-to-r from-cyan-300 via-white to-violet-400 bg-clip-text text-transparent">SYSTEM</span></h1><p className="mt-6 text-sm tracking-[.08em] text-white/45">用创意连接品牌与用户，用视觉探索无限可能</p></section>
  <ModuleCarousel/><AboutContactSection/>
 </main>
}
