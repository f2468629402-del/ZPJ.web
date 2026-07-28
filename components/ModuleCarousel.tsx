"use client";
import { motion, PanInfo } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { modules } from "@/data/modules";

const ANIMATION_FALLBACK_MS=1400;
const WHEEL_COOLDOWN_MS=800;
const WHEEL_THRESHOLD=40;
const CAROUSEL_STATE_KEY="feng:home-carousel-state";

type CarouselState={
 activeIndex:number;
 railPosition:number;
 currentModule:string;
 scrollY:number;
 updatedAt:number;
};

export function ModuleCarousel(){
 const [activeIndex,setActiveIndex]=useState(0);
 const [isAnimating,setIsAnimating]=useState(false);
 const [isRestoring,setIsRestoring]=useState(false);
 const router=useRouter();
 const panelRef=useRef<HTMLElement>(null);
 const activeIndexRef=useRef(0);
 const isAnimatingRef=useRef(false);
 const hasRestoredRef=useRef(false);
 const unlockTimerRef=useRef<ReturnType<typeof setTimeout>|null>(null);
 const restoreTimerRef=useRef<ReturnType<typeof setTimeout>|null>(null);
 const lastWheelTimeRef=useRef(0);

 const persistCarouselState=useCallback((index=activeIndexRef.current)=>{
   if(typeof window==="undefined")return;
   const normalizedIndex=Math.max(0,Math.min(index,modules.length-1));
   const state:CarouselState={
     activeIndex:normalizedIndex,
     railPosition:normalizedIndex*350,
     currentModule:modules[normalizedIndex].id,
     scrollY:window.scrollY,
     updatedAt:Date.now()
   };
   window.sessionStorage.setItem(CAROUSEL_STATE_KEY,JSON.stringify(state));
 },[]);

 const unlock=useCallback(()=>{
   if(unlockTimerRef.current){
     clearTimeout(unlockTimerRef.current);
     unlockTimerRef.current=null;
   }
   isAnimatingRef.current=false;
   setIsAnimating(false);
 },[]);

 const move=useCallback((direction:-1|1)=>{
   if(isAnimatingRef.current)return;
   const targetIndex=activeIndexRef.current+direction;
   if(targetIndex<0||targetIndex>=modules.length)return;
   isAnimatingRef.current=true;
   setIsAnimating(true);
   activeIndexRef.current=targetIndex;
   setActiveIndex(targetIndex);
   unlockTimerRef.current=setTimeout(unlock,ANIMATION_FALLBACK_MS);
 },[unlock]);

 const goTo=useCallback((index:number)=>{
   if(index===activeIndexRef.current||index<0||index>=modules.length||isAnimatingRef.current)return;
   isAnimatingRef.current=true;
   setIsAnimating(true);
   activeIndexRef.current=index;
   setActiveIndex(index);
   unlockTimerRef.current=setTimeout(unlock,ANIMATION_FALLBACK_MS);
 },[unlock]);

 useEffect(()=>{
   if(typeof window==="undefined")return;
   const saved=window.sessionStorage.getItem(CAROUSEL_STATE_KEY);
   if(!saved){
     hasRestoredRef.current=true;
     persistCarouselState(0);
     return;
   }
   try{
     const state=JSON.parse(saved) as Partial<CarouselState>;
     const savedIndex=Number(state.activeIndex);
     const validIndex=Number.isInteger(savedIndex)&&savedIndex>=0&&savedIndex<modules.length;
     if(!validIndex){
       hasRestoredRef.current=true;
       persistCarouselState(0);
       return;
     }
     if(typeof state.scrollY==="number"&&state.scrollY>0){
       window.scrollTo({top:state.scrollY,behavior:"smooth"});
     }
     if(savedIndex===activeIndexRef.current){
       hasRestoredRef.current=true;
       return;
     }
     setIsRestoring(true);
     isAnimatingRef.current=true;
     setIsAnimating(true);
     window.requestAnimationFrame(()=>{
       activeIndexRef.current=savedIndex;
       setActiveIndex(savedIndex);
       hasRestoredRef.current=true;
       unlockTimerRef.current=setTimeout(unlock,ANIMATION_FALLBACK_MS);
       restoreTimerRef.current=setTimeout(()=>setIsRestoring(false),950);
     });
   }catch{
     hasRestoredRef.current=true;
     persistCarouselState(0);
   }
 },[persistCarouselState,unlock]);

 useEffect(()=>{
   if(!hasRestoredRef.current)return;
   persistCarouselState(activeIndex);
 },[activeIndex,persistCarouselState]);

 useEffect(()=>{
   const panel=panelRef.current;
   if(!panel)return;
   const onWheel=(event:WheelEvent)=>{
     event.preventDefault();
     event.stopPropagation();
     const delta=Math.abs(event.deltaX)>Math.abs(event.deltaY)?event.deltaX:event.deltaY;
     if(Math.abs(delta)<WHEEL_THRESHOLD||isAnimatingRef.current)return;
     const now=Date.now();
     if(now-lastWheelTimeRef.current<WHEEL_COOLDOWN_MS)return;
     lastWheelTimeRef.current=now;
     move(delta>0?1:-1);
   };
   panel.addEventListener("wheel",onWheel,{passive:false});
   return()=>panel.removeEventListener("wheel",onWheel);
 },[move]);

 useEffect(()=>()=>{if(unlockTimerRef.current)clearTimeout(unlockTimerRef.current);if(restoreTimerRef.current)clearTimeout(restoreTimerRef.current)},[]);

 const drag=useCallback((_:unknown,info:PanInfo)=>{
   if(Math.abs(info.offset.x)>60)move(info.offset.x<0?1:-1);
 },[move]);

 return <section ref={panelRef} aria-label="Creative Control Panel" data-animating={isAnimating} className="creative-panel shell relative mt-12 overflow-hidden rounded-[30px] border border-white/10 bg-white/[.018]">
   <div className="flex h-16 items-center justify-between border-b border-white/10 px-5 md:px-7">
     <div className="flex items-center gap-4"><span className="h-2 w-2 rounded-full" style={{background:modules[activeIndex].color,boxShadow:`0 0 14px ${modules[activeIndex].color}`}}/><div><p className="text-[10px] tracking-[.2em] text-white/70">创意控制台</p><p className="mt-1 text-[8px] tracking-[.14em] text-white/30">滚轮 / 拖拽 / 选择</p></div></div>
     {isRestoring?<div className="hidden rounded-full border border-white/10 bg-white/[.035] px-4 py-2 text-[9px] tracking-[.18em] text-white/45 shadow-[0_0_28px_rgba(60,229,255,.08)] md:block">RETURN TO SYSTEM / RESTORING NODE</div>:null}
     <div className="hidden items-center gap-2 sm:flex">{modules.map((module,index)=><button key={module.id} disabled={isAnimating} onClick={()=>goTo(index)} aria-label={`Show ${module.title}`} className={`h-1 rounded-full transition-all duration-500 disabled:cursor-wait ${index===activeIndex?"w-8":"w-2 bg-white/15 hover:bg-white/35"}`} style={index===activeIndex?{background:module.color}:undefined}/>)}</div>
     <span className="font-mono text-[10px] tracking-[.16em] text-white/35">{String(activeIndex+1).padStart(2,"0")} / {String(modules.length).padStart(2,"0")}</span>
   </div>
   <div className="carousel-snap relative h-[560px] w-full overflow-hidden md:h-[600px]">
   <div className="pointer-events-none absolute inset-x-[18%] top-16 h-72 rounded-full blur-[100px] opacity-20" style={{background:modules[activeIndex].color}}/>
   <div className="absolute left-1/2 top-1/2 h-[500px] w-full -translate-x-1/2 -translate-y-1/2">
   {modules.map((m,itemIndex)=>{const d=itemIndex-activeIndex;const distance=Math.abs(d);const center=d===0;const side=distance===1;
    return <motion.article key={m.id} drag={center?"x":false} dragConstraints={{left:0,right:0}} dragElastic={.15} onDragEnd={drag}
      onClick={()=>{if(isAnimatingRef.current)return;if(center){persistCarouselState(itemIndex);router.push(`/${m.id}`)}else{goTo(itemIndex)}}}
      data-active={center}
      initial={false}
      animate={{
        x:`calc(-50% + ${d*350}px)`,
        scale:center?1:side?.85:.7,
        rotateY:center?0:d>0?-12:12,
        opacity:center?1:side?.5:.2,
        filter:center?"blur(0px)":side?"blur(2px)":"blur(5px)",
        zIndex:center?10:side?5:1
      }}
      transition={{type:"spring",stiffness:120,damping:20,mass:.8}}
      onAnimationComplete={()=>{if(center&&isAnimatingRef.current)unlock()}}
      className="absolute left-1/2 top-0 h-[500px] w-[330px] cursor-pointer overflow-hidden rounded-[28px] border bg-[#090b12] md:w-[390px]"
      style={{borderColor:center?`${m.color}aa`:"rgba(255,255,255,.12)",boxShadow:center?`0 0 45px ${m.color}25, inset 0 0 25px ${m.color}10`:"none",willChange:"transform, opacity, filter",pointerEvents:distance>1?"none":"auto",transformStyle:"preserve-3d",backfaceVisibility:"hidden"}}>
      <img src={m.image} alt="" className="absolute inset-0 h-full w-full object-cover opacity-55" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#070911]/35 via-transparent to-[#06070c]"/>
      <div className="relative flex h-full flex-col p-7">
       <div className="flex items-center justify-between"><span className="text-5xl font-semibold" style={{color:m.color}}>{m.number}</span><span className="eyebrow">{m.count} PROJECTS</span></div>
       <div className="mt-auto"><p className="mb-3 text-[10px] tracking-[.19em]" style={{color:m.color}}>{m.category}</p><h2 className="text-4xl font-semibold leading-none tracking-[-.04em]">{m.title}</h2><p className="mt-3 text-lg text-white/80">{m.cn}</p>
       <div className="mt-6 flex items-center justify-between border-t border-white/15 pt-4"><span className="text-[10px] tracking-[.2em] text-white/45">{center?"DRAG TO EXPLORE":"PREVIEW"}</span><ArrowRight size={20} style={{color:m.color}}/></div></div>
      </div>
    </motion.article>})}
   </div>
   <button aria-label="Previous module" disabled={isAnimating||activeIndex===0} onClick={()=>move(-1)} className="absolute bottom-3 left-1/2 -translate-x-16 rounded-full border border-white/15 p-3 text-white/60 transition hover:bg-white/10 hover:text-white disabled:cursor-not-allowed disabled:opacity-30"><ArrowLeft size={18}/></button>
   <button aria-label="Next module" disabled={isAnimating||activeIndex===modules.length-1} onClick={()=>move(1)} className="absolute bottom-3 left-1/2 translate-x-4 rounded-full border border-white/15 p-3 text-white/60 transition hover:bg-white/10 hover:text-white disabled:cursor-not-allowed disabled:opacity-30"><ArrowRight size={18}/></button>
   </div>
 </section>
}
