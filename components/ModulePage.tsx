"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight, Briefcase, Calendar, Camera, Check, Copy, Maximize2, MapPin, Play, Sparkles } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState, useCallback } from "react";
import { Module } from "@/data/modules";
import { contacts, Project, projectsByModule, videoProjects, videoZones, wechatQrImage } from "@/data/projects";
import { Lightbox, type LightboxImage } from "./Lightbox";
import { WorkCard } from "./WorkCard";
import { getImagePath } from "@/lib/basePath";

const copy = {
  selectedWorks: "\u7cbe\u9009\u9879\u76ee",
  bannerDesign: "Banner\u8bbe\u8ba1",
  iconDesign: "\u56fe\u6807\u8bbe\u8ba1",
  ecommerceMain: "APP\u754c\u9762",
  typeSymbolDesign: "\u8d85\u7ea7\u5b57\u4f53\u4e0e\u8d85\u7ea7\u7b26\u53f7",
  all: "\u5168\u90e8",
  superType: "\u8d85\u7ea7\u5b57\u4f53",
  superSymbol: "\u8d85\u7ea7\u7b26\u53f7",
  videoArchive: "\u5f71\u50cf\u9879\u76ee",
  contactMe: "\u8054\u7cfb\u6211",
  contactSub: "\u4e00\u8d77\u521b\u9020\u65b0\u7684\u89c6\u89c9\u53ef\u80fd",
  wechatHint: "\u4e8c\u7ef4\u7801\u4f4d\u7f6e\u9884\u7559\uff0c\u5f53\u524d\u663e\u793a\u5fae\u4fe1\u8d26\u53f7",
  aboutTitle: "\u4f60\u597d\uff0c\u6211\u662f FENG\u3002",
  aboutBody: "\u4e13\u6ce8 AI \u89c6\u89c9\u521b\u4f5c\u4e0e\u54c1\u724c\u8bbe\u8ba1\u3002\u6211\u559c\u6b22\u628a\u65b0\u6280\u672f\u53d8\u6210\u6e05\u6670\u3001\u6709\u6e29\u5ea6\u3001\u6709\u5546\u4e1a\u4ef7\u503c\u7684\u89c6\u89c9\u4f53\u9a8c\uff0c\u4ece\u6982\u5ff5\u7b56\u7565\u5230\u6700\u7ec8\u843d\u5730\u4fdd\u6301\u5b8c\u6574\u7684\u521b\u4f5c\u5224\u65ad\u3002",
};

export function ModulePage({ module }: { module: Module }) {
  const projects = projectsByModule[module.id] || [];

  return (
    <motion.main initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}>
      <ModuleHero module={module} />
      {module.id === "video" ? (
        <VideoZoneGrid color={module.color} />
      ) : module.id === "contact" ? (
        <ContactGrid color={module.color} />
      ) : module.id === "about" ? (
        <About color={module.color} />
      ) : module.id === "symbol" ? (
        <TypeSymbolGrid color={module.color} projects={projects} />
      ) : module.id === "poster" ? (
        <BannerGrid color={module.color} projects={projects} />
      ) : module.id === "icon" ? (
        <IconGrid color={module.color} projects={projects} />
      ) : module.id === "ecommerce" ? (
        <EcommerceGrid color={module.color} projects={projects} />
      ) : module.id === "brand" ? (
        <BrandGrid color={module.color} projects={projects} />
      ) : (
        <section className="shell mt-24">
          <Header title="SELECTED WORKS" cn={copy.selectedWorks} color={module.color} />
          <div className="mt-9 grid gap-6 md:grid-cols-2">
            {projects.map((project, index) => (
              <WorkCard key={`${project.slug || project.title}-${index}`} project={project} color={module.color} />
            ))}
          </div>
        </section>
      )}
    </motion.main>
  );
}

function ModuleHero({ module }: { module: Module }) {
  return (
    <section
      className="shell relative mt-10 min-h-[580px] overflow-hidden rounded-[32px] border border-white/10"
      style={{ boxShadow: `inset 0 0 80px ${module.color}0d` }}
    >
      <img src={module.image} alt="" className="absolute inset-0 h-full w-full object-cover object-center opacity-45" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#07090f] via-[#07090f]/80 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#07090f] via-transparent to-[#07090f]/30" />
      <div className="relative flex min-h-[580px] max-w-3xl flex-col justify-end p-8 md:p-16">
        <Link href="/" className="absolute left-8 top-8 flex items-center gap-2 text-[10px] tracking-[.18em] text-white/45 hover:text-white md:left-16">
          <ArrowLeft size={14} /> BACK TO SYSTEM
        </Link>
        <div className="mb-auto mt-16 text-7xl font-semibold md:text-8xl" style={{ color: module.color }}>
          {module.number}
        </div>
        <p className="text-[10px] tracking-[.22em]" style={{ color: module.color }}>
          {module.category}
        </p>
        <h1 className="mt-4 text-[clamp(46px,7vw,88px)] font-semibold leading-[.9] tracking-[-.055em]">{module.title}</h1>
        <h2 className="mt-4 text-2xl text-white/80 md:text-3xl">{module.cn}</h2>
        <p className="mt-7 max-w-xl text-sm leading-7 text-white/50">{module.description}</p>
      </div>
    </section>
  );
}

function Header({ title, cn, color }: { title: string; cn: string; color: string }) {
  return (
    <div className="flex items-end justify-between border-b border-white/10 pb-5">
      <div>
        <p className="eyebrow" style={{ color }}>
          Archive / 2026
        </p>
        <h2 className="mt-3 text-3xl font-medium tracking-tight">
          {title} <span className="ml-3 text-lg text-white/35">{cn}</span>
        </h2>
      </div>
      <span className="text-xs text-white/30">SCROLL</span>
    </div>
  );
}

function BannerGrid({ color, projects }: { color: string; projects: Project[] }) {
  return (
    <section className="shell mt-24">
      <Header title="BANNER DESIGN" cn={copy.bannerDesign} color={color} />
      <div className="mt-9 grid grid-cols-1 gap-5 sm:grid-cols-2 md:gap-6 lg:grid-cols-3">
        {projects.map((project, index) => (
          <Link
            key={project.slug || project.title}
            href={`/poster/${project.slug || index}`}
            className="group overflow-hidden rounded-[18px] border border-white/10 bg-white/[.025] p-[1px] transition duration-500 hover:-translate-y-1 hover:border-white/25"
            style={{ boxShadow: `0 0 0 1px ${color}10, 0 14px 40px ${color}08` }}
          >
            <div className="relative aspect-[3/4] overflow-hidden rounded-[17px] bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,.08),rgba(255,255,255,.025)_48%,rgba(4,7,14,.18))]">
              <img
                src={project.image}
                alt={project.alt || project.title}
                width={project.width}
                height={project.height}
                loading={index < 3 ? "eager" : "lazy"}
                fetchPriority={index === 0 ? "high" : "auto"}
                decoding="async"
                onError={(event) => {
                  event.currentTarget.style.display = "none";
                  const fallback = event.currentTarget.nextElementSibling as HTMLElement | null;
                  if (fallback) fallback.style.display = "flex";
                }}
                className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 hidden items-center justify-center rounded-[17px] border border-white/10 bg-black/25 text-[10px] tracking-[.18em] text-white/35">
                IMAGE OFFLINE
              </div>
              <span className="absolute left-3 top-3 rounded-full bg-black/50 px-2.5 py-1 text-[8px] tracking-wider text-white/50 backdrop-blur">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>
            <div className="flex items-center justify-between px-4 py-3">
              <div className="min-w-0">
                <p className="truncate text-[9px] tracking-[.18em]" style={{ color }}>
                  {project.subtitle}
                </p>
                <h3 className="mt-1 truncate text-[13px] font-medium text-white/85">{project.title}</h3>
              </div>
              <ArrowUpRight size={14} className="shrink-0 text-white/35 transition group-hover:text-white" />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

function IconGrid({ color, projects }: { color: string; projects: Project[] }) {
  return (
    <section className="shell mt-24">
      <Header title="ICON DESIGN" cn={copy.iconDesign} color={color} />
      <div className="mt-9 grid gap-6 md:grid-cols-2">
        {projects.map((project, index) => (
          <ProjectLinkCard key={project.slug || project.id || index} project={project} color={color} href={`/icon/${project.slug || index}`} index={index} compact />
        ))}
      </div>
    </section>
  );
}

function EcommerceGrid({ color, projects }: { color: string; projects: Project[] }) {
  const liveUrl = "https://f2468629402-del.github.io/APP.web/";
  return (
    <section className="shell mt-24">
      <Header title="APP DESIGN" cn={copy.ecommerceMain} color={color} />
      <a
        href={liveUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group mt-5 flex items-center justify-between rounded-[14px] border border-white/10 bg-white/[.03] px-5 py-3.5 transition duration-300 hover:border-white/25 hover:bg-white/[.05]"
        style={{ boxShadow: `0 0 0 1px ${color}10, 0 8px 28px ${color}08` }}
      >
        <div className="flex items-center gap-3">
          <span
            className="flex h-7 w-7 items-center justify-center rounded-full text-[10px] font-bold tracking-wider"
            style={{ backgroundColor: `${color}1a`, color }}
          >
            LIVE
          </span>
          <div>
            <p className="text-sm font-medium tracking-tight text-white/90 group-hover:text-white">
              访问完整项目 / View Live Project
            </p>
            <p className="text-[11px] text-white/35">{liveUrl}</p>
          </div>
        </div>
        <span className="flex items-center gap-1.5 text-xs tracking-wider text-white/40 transition group-hover:text-white/80">
          OPEN <ArrowUpRight size={15} className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </a>
      <div className="mt-9 grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 lg:grid-cols-4">
        {projects.map((project, index) => (
          <div
            key={project.slug || project.id || index}
            className="group overflow-hidden rounded-[16px] border border-white/10 bg-white/[.025]"
            style={{ boxShadow: `0 0 0 1px ${color}10, 0 12px 40px ${color}08` }}
          >
            <div className="relative aspect-[904/1740] overflow-hidden bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,.08),rgba(255,255,255,.025)_48%,rgba(4,7,14,.18))]">
              <img
                src={project.image}
                alt={project.alt || project.title}
                width={project.width}
                height={project.height}
                loading={index < 4 ? "eager" : "lazy"}
                fetchPriority={index === 0 ? "high" : "auto"}
                decoding="async"
                onError={(event) => {
                  event.currentTarget.style.display = "none";
                  const fallback = event.currentTarget.nextElementSibling as HTMLElement | null;
                  if (fallback) fallback.style.display = "flex";
                }}
                className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 hidden items-center justify-center border border-white/10 bg-black/25 text-[10px] tracking-[.18em] text-white/35">
                IMAGE OFFLINE
              </div>
              <span className="absolute left-2 top-2 rounded-full bg-black/50 px-2 py-0.5 text-[8px] tracking-wider text-white/50 backdrop-blur">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function BrandGrid({ color, projects }: { color: string; projects: Project[] }) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const lightboxImages: LightboxImage[] = projects.map((project) => ({
    src: project.image,
    alt: project.alt || project.title,
    title: project.title,
    subtitle: project.subtitle,
  }));

  return (
    <section className="shell mt-24">
      <Header title="BRAND VISUAL SYSTEM" cn={copy.bannerDesign} color={color} />
      <div className="mt-9 grid gap-7 md:grid-cols-2">
        {projects.map((project, index) => (
          <article
            key={project.slug || project.id || index}
            className="group overflow-hidden rounded-[24px] border border-white/10 bg-white/[.025] p-[1px] transition duration-500 hover:-translate-y-1 hover:border-white/25"
            style={{ boxShadow: `0 0 0 1px ${color}10, 0 18px 55px ${color}08` }}
          >
            <button
              type="button"
              onClick={() => setLightboxIndex(index)}
              className="relative block w-full cursor-zoom-in overflow-hidden rounded-[23px] bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,.08),rgba(255,255,255,.025)_48%,rgba(4,7,14,.18))]"
              style={{ aspectRatio: "16 / 9" }}
              aria-label={`Zoom: ${project.title}`}
            >
              <img
                src={project.image}
                alt={project.alt || project.title}
                width={project.width}
                height={project.height}
                loading={index === 0 ? "eager" : "lazy"}
                fetchPriority={index === 0 ? "high" : "auto"}
                decoding="async"
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-500 group-hover:scale-[1.02]"
              />
              <span className="absolute bottom-3 right-3 z-10 flex items-center gap-1.5 rounded-full border border-white/15 bg-black/50 px-3 py-1.5 text-[9px] tracking-[.14em] text-white/70 opacity-0 backdrop-blur transition duration-300 group-hover:opacity-100">
                <Maximize2 size={13} /> ZOOM
              </span>
            </button>
            <div className="flex flex-col gap-4 border-t border-white/10 p-5 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-[9px] tracking-[.2em]" style={{ color }}>
                  {project.subtitle}
                </p>
                <h3 className="mt-2 text-xl font-medium">{project.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="rounded-full border border-white/10 px-3 py-1 text-[9px] tracking-wider text-white/45">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          images={lightboxImages}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNavigate={setLightboxIndex}
        />
      )}
    </section>
  );
}

function TypeSymbolGrid({ color, projects }: { color: string; projects: Project[] }) {
  const [filter, setFilter] = useState<"all" | "type" | "symbol">("all");
  const typeProjects = projects.filter((project) => project.type === "type");
  const symbolProjects = projects.filter((project) => project.type === "symbol");
  const filteredProjects = filter === "all" ? projects : projects.filter((project) => project.type === filter);
  const filters = [
    { key: "all" as const, label: copy.all },
    { key: "type" as const, label: copy.superType },
    { key: "symbol" as const, label: copy.superSymbol },
  ];

  return (
    <section className="shell mt-24">
      <div className="flex flex-col gap-5 border-b border-white/10 pb-5 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="eyebrow" style={{ color }}>
            Archive / 2026
          </p>
          <h2 className="mt-3 text-3xl font-medium tracking-tight">
            SUPER TYPE & SYMBOL <span className="ml-3 text-lg text-white/35">{copy.typeSymbolDesign}</span>
          </h2>
        </div>
        <div className="flex flex-wrap gap-2">
          {filters.map((item) => {
            const active = filter === item.key;
            return (
              <button
                key={item.key}
                type="button"
                onClick={() => setFilter(item.key)}
                className="rounded-full border px-4 py-2 text-[10px] tracking-[.16em] transition duration-300 hover:border-white/35"
                style={{
                  borderColor: active ? `${color}aa` : "rgba(255,255,255,.12)",
                  background: active ? `${color}22` : "rgba(255,255,255,.025)",
                  color: active ? "white" : "rgba(255,255,255,.48)",
                  boxShadow: active ? `0 0 24px ${color}24` : "none",
                }}
              >
                {item.label}
              </button>
            );
          })}
        </div>
      </div>
      <div className="mt-9">
        {filter === "all" ? (
          <div className="grid gap-12">
            <TypeSymbolSection title="SUPER TYPE" cn={copy.superType} color={color} projects={typeProjects} startIndex={0} />
            <TypeSymbolSection title="SUPER SYMBOL" cn={copy.superSymbol} color={color} projects={symbolProjects} startIndex={typeProjects.length} />
          </div>
        ) : (
          <TypeSymbolProjectGrid color={color} projects={filteredProjects} />
        )}
      </div>
    </section>
  );
}

function TypeSymbolSection({ title, cn, color, projects, startIndex }: { title: string; cn: string; color: string; projects: Project[]; startIndex: number }) {
  if (!projects.length) return null;

  return (
    <div>
      <div className="mb-5 flex items-center gap-3 border-b border-white/10 pb-3">
        <span className="text-[10px] tracking-[.18em]" style={{ color }}>
          {title}
        </span>
        <span className="text-[10px] tracking-[.16em] text-white/35">{cn}</span>
      </div>
      <TypeSymbolProjectGrid color={color} projects={projects} startIndex={startIndex} />
    </div>
  );
}

function TypeSymbolProjectGrid({ color, projects, startIndex = 0 }: { color: string; projects: Project[]; startIndex?: number }) {
  return (
    <div className="grid grid-cols-2 gap-5 md:grid-cols-3">
      {projects.map((project, index) => (
        <Link
          key={project.slug || project.id || index}
          href={`/symbol/${project.slug || index}`}
          className="group overflow-hidden rounded-[20px] border border-white/10 bg-white/[.025] p-[1px] transition duration-500 hover:-translate-y-1 hover:border-white/25"
          style={{ boxShadow: `0 0 0 1px ${color}10, 0 18px 55px ${color}08` }}
        >
          <div className="relative aspect-square overflow-hidden rounded-[19px] bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,.08),rgba(255,255,255,.025)_48%,rgba(4,7,14,.18))]">
            <img
              src={project.image}
              alt={project.alt || project.title}
              width={project.width}
              height={project.height}
              loading={(startIndex + index) === 0 ? "eager" : "lazy"}
              fetchPriority={(startIndex + index) === 0 ? "high" : "auto"}
              decoding="async"
              onError={(event) => {
                event.currentTarget.style.display = "none";
                const fallback = event.currentTarget.nextElementSibling as HTMLElement | null;
                if (fallback) fallback.style.display = "flex";
              }}
              className="h-full w-full object-cover object-center transition duration-500 group-hover:scale-[1.04]"
            />
            <div className="absolute inset-0 hidden items-center justify-center rounded-[19px] border border-white/10 bg-black/25 text-[10px] tracking-[.18em] text-white/35">
              IMAGE OFFLINE
            </div>
            <span className="absolute left-3 top-3 rounded-full bg-black/50 px-2.5 py-1 text-[8px] tracking-wider text-white/50 backdrop-blur">
              {String(startIndex + index + 1).padStart(2, "0")}
            </span>
          </div>
          <div className="flex items-center justify-between px-4 py-3">
            <p className="truncate text-[11px] font-medium text-white/80">{project.title}</p>
            <ArrowUpRight size={14} className="shrink-0 text-white/35 transition group-hover:text-white" />
          </div>
        </Link>
      ))}
    </div>
  );
}

function ProjectLinkCard({ project, color, href, index, compact = false, className = "" }: { project: Project; color: string; href: string; index: number; compact?: boolean; className?: string }) {
  return (
    <Link
      href={href}
      className={`group overflow-hidden rounded-[24px] border border-white/10 bg-white/[.025] p-[1px] transition duration-500 hover:-translate-y-1 hover:scale-[1.01] hover:border-white/25 ${className}`}
      style={{ boxShadow: `0 0 0 1px ${color}10, 0 18px 55px ${color}08` }}
    >
      <div
        className="relative rounded-[23px] bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,.08),rgba(255,255,255,.025)_48%,rgba(4,7,14,.18))] p-3 md:p-4"
        style={{ aspectRatio: `${project.width || 16}/${project.height || 9}` }}
      >
        <img
          src={project.image}
          alt={project.alt || project.title}
          width={project.width}
          height={project.height}
          loading={index === 0 ? "eager" : "lazy"}
          fetchPriority={index === 0 ? "high" : "auto"}
          decoding="async"
          onError={(event) => {
            event.currentTarget.style.display = "none";
            const fallback = event.currentTarget.nextElementSibling as HTMLElement | null;
            if (fallback) fallback.style.display = "flex";
          }}
          className="h-auto w-full object-contain transition duration-500 group-hover:scale-[1.02]"
        />
        <div className="absolute inset-4 hidden items-center justify-center rounded-[18px] border border-white/10 bg-black/25 text-[10px] tracking-[.18em] text-white/35">
          IMAGE OFFLINE
        </div>
      </div>
      <div className={compact ? "flex items-center justify-between border-t border-white/10 px-5 py-4" : "flex flex-col gap-4 border-t border-white/10 p-5 md:flex-row md:items-center md:justify-between"}>
        <div>
          <p className="text-[9px] tracking-[.2em]" style={{ color }}>
            {project.subtitle}
          </p>
          <h3 className={compact ? "mt-2 text-xl font-medium" : "mt-2 text-2xl font-medium"}>{project.title}</h3>
        </div>
        <span className="flex items-center gap-2 text-[10px] tracking-[.18em] text-white/40 transition group-hover:text-white">
          VIEW DETAIL <ArrowUpRight size={16} />
        </span>
      </div>
    </Link>
  );
}

function VideoZoneGrid({ color }: { color: string }) {
  return (
    <section className="shell mt-24">
      <Header title="VIDEO ZONES" cn={copy.videoArchive} color={color} />
      <div className="mt-9 grid gap-7 md:grid-cols-2">
        {videoZones.map((zone, index) => (
          <Link
            key={zone.id}
            href={`/video/${zone.id}`}
            className="group relative overflow-hidden rounded-[24px] border border-white/10 bg-white/[.025] transition duration-500 hover:-translate-y-1 hover:border-white/25"
            style={{ boxShadow: `0 0 0 1px ${color}10, 0 18px 55px ${color}08` }}
          >
            <div className="relative aspect-video overflow-hidden">
              <img
                src={zone.cover}
                alt={zone.title}
                className="h-full w-full object-cover opacity-60 transition duration-700 group-hover:scale-105 group-hover:opacity-80"
                loading={index === 0 ? "eager" : "lazy"}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#07090f] via-[#07090f]/40 to-transparent" />
              <span className="absolute left-5 top-5 text-5xl font-semibold text-white/20">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="absolute right-5 top-5 rounded-full bg-black/50 px-3 py-1 text-[9px] tracking-widest text-white/60">
                {zone.indices.length} VIDEOS
              </span>
            </div>
            <div className="relative p-8 md:p-10">
              <p className="text-[10px] tracking-[.2em]" style={{ color }}>
                {zone.category}
              </p>
              <h3 className="mt-4 text-3xl font-semibold tracking-tight">{zone.title}</h3>
              <h4 className="mt-2 text-xl text-white/70">{zone.cn}</h4>
              <p className="mt-5 text-sm leading-7 text-white/45">{zone.description}</p>
              <div className="mt-8 flex items-center gap-2 text-[11px] tracking-[.18em]" style={{ color }}>
                ENTER ZONE <ArrowUpRight size={16} />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

function VideoGrid({ color }: { color: string }) {
  return (
    <section className="shell mt-24">
      <Header title="VIDEO ARCHIVE" cn={copy.videoArchive} color={color} />
      <div className="mt-9 flex flex-col gap-8">
        {videoProjects.map((video, index) => (
          <a key={video.title} href={video.url} target="_blank" rel="noreferrer" className="group grid overflow-hidden rounded-[24px] border border-white/10 bg-white/[.025] transition duration-300 hover:border-white/25 md:grid-cols-2">
            <div className="relative aspect-video overflow-hidden">
              <img src={video.cover} alt={video.title} className="h-full w-full object-cover opacity-75 transition duration-700 group-hover:scale-105 group-hover:opacity-100" />
              <span className="absolute left-5 top-5 rounded-full bg-black/50 px-3 py-1 text-[9px] tracking-widest">{video.platform}</span>
              <span className="absolute inset-0 m-auto flex h-16 w-16 items-center justify-center rounded-full border border-white/30 bg-black/40 backdrop-blur transition duration-300 group-hover:scale-110">
                <Play size={22} fill="white" />
              </span>
            </div>
            <div className="flex flex-col justify-center p-8 md:p-12">
              <p className="text-[10px] tracking-[.2em]" style={{ color }}>{video.platform.toUpperCase()} · VIDEO</p>
              <h3 className="mt-4 text-2xl font-semibold md:text-3xl">{video.title}</h3>
              <p className="mt-4 text-sm leading-7 text-white/50">{video.description}</p>
              <div className="mt-8 flex items-center gap-2 text-[11px] tracking-[.18em]" style={{ color }}>
                WATCH ON {video.platform.toUpperCase()} <ArrowUpRight size={16} />
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

function ContactGrid({ color }: { color: string }) {
  const [copiedLabel, setCopiedLabel] = useState<string | null>(null);
  const [qrOpen, setQrOpen] = useState(false);

  const handleCopy = useCallback(async (contact: typeof contacts[number]) => {
    try {
      await navigator.clipboard.writeText(contact.value);
      setCopiedLabel(contact.label);
      setTimeout(() => setCopiedLabel(null), 2000);
    } catch {
      const ta = document.createElement("textarea");
      ta.value = contact.value;
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
      setCopiedLabel(contact.label);
      setTimeout(() => setCopiedLabel(null), 2000);
    }
  }, []);

  return (
    <section className="shell mt-24">
      <div className="border-b border-white/10 pb-7">
        <p className="eyebrow" style={{ color }}>
          Let's Create Something New
        </p>
        <h2 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
          CONTACT ME <span className="ml-3 align-middle text-xl font-normal text-white/40">{copy.contactMe}</span>
        </h2>
        <p className="mt-4 text-sm tracking-[.08em] text-white/45">{copy.contactSub}</p>
      </div>
      <div className="mt-9 grid gap-5">
        {contacts.map((contact, index) => {
          const isWechat = contact.label === "WECHAT";
          const isCopied = copiedLabel === contact.label;
          const inner = (
            <>
              <div className="absolute inset-0 opacity-35 transition duration-300 group-hover:opacity-70" style={{ background: `linear-gradient(120deg, ${color}44, rgba(173,84,255,.22), transparent 62%)` }} />
              <div className={`relative grid gap-4 rounded-[23px] bg-[#07090f]/75 p-6 backdrop-blur ${isWechat ? "md:grid-cols-[180px_1fr_auto_auto]" : "md:grid-cols-[180px_1fr_auto]"} md:items-center`}>
                <span className="text-xs tracking-[.16em] text-white/45">
                  {String(index + 1).padStart(2, "0")} / {contact.label}
                </span>
                <div>
                  <p className="text-xl font-medium text-white md:text-2xl">{contact.display}</p>
                </div>
                {isWechat ? (
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setQrOpen(true);
                    }}
                    className="group/qr relative flex h-14 w-14 items-center justify-center overflow-hidden rounded-lg border border-white/15 bg-white/[.06] p-1.5 shadow-[0_4px_18px_rgba(0,0,0,.4)] transition duration-300 group-hover:scale-105 hover:border-cyan-400/40 hover:shadow-[0_0_20px_rgba(34,184,255,.25)]"
                    aria-label="放大查看微信二维码"
                    title="点击放大二维码"
                  >
                    <img src={wechatQrImage} alt="微信二维码缩略图" width={56} height={56} loading="lazy" decoding="async" className="h-full w-full rounded object-cover" />
                    <span className="pointer-events-none absolute inset-0 flex items-center justify-center rounded-lg bg-black/0 transition group-hover/qr:bg-black/30">
                      <Maximize2 size={16} className="scale-75 text-white opacity-0 transition group-hover/qr:opacity-100" />
                    </span>
                  </button>
                ) : null}
                <span className="flex items-center gap-2 text-[10px] tracking-[.18em] text-white/40 transition group-hover:text-white">
                  {isCopied ? (
                    <>
                      COPIED
                      <Check size={16} className="text-emerald-400" />
                    </>
                  ) : (
                    <>
                      COPY
                      <Copy size={16} />
                    </>
                  )}
                </span>
              </div>
            </>
          );
          return (
            <button
              key={contact.label}
              type="button"
              onClick={() => handleCopy(contact)}
              className="group relative block w-full overflow-hidden rounded-[24px] border border-white/10 bg-white/[.035] p-[1px] text-left transition duration-300 hover:scale-[1.015] hover:border-white/25"
              style={{ boxShadow: `0 0 0 1px ${color}12, 0 18px 60px ${color}0a` }}
            >
              {inner}
            </button>
          );
        })}
      </div>

      {qrOpen && (
        <Lightbox
          images={[{ src: wechatQrImage, alt: "微信二维码", title: "微信账号：f13310039786", subtitle: "WECHAT QR CODE" }]}
          index={0}
          onClose={() => setQrOpen(false)}
          onNavigate={() => {}}
        />
      )}
    </section>
  );
}

function About({ color }: { color: string }) {
  const experience = {
    company: "北京中科深智科技有限公司",
    companyEn: "DeepScience",
    role: "AIGC视觉内容生成专员",
    period: "2024.07 — 2026.07",
    location: "北京",
    overview:
      "负责AIGC商业视觉内容生产与应用，结合生成式AI技术完成图片、视频及电商视觉素材创作，推动AI内容生产流程标准化与商业化落地。",
    responsibilities: [
      "负责AI生成图片与视频全流程制作，覆盖商品主图、营销海报、详情页素材、短视频、场景图等多类型商业视觉内容",
      "熟练运用 Midjourney、Stable Diffusion、Runway、可灵、即梦等AIGC工具，完成 Prompt 设计、画面生成、风格控制及效果优化",
      "根据产品定位与市场需求进行视觉策划，独立完成从创意构思、镜头设计到成品输出的完整流程",
      "参与短视频AIGC内容制作，负责分镜规划、镜头提示词编写、AI视频生成及后期优化，提升内容生产效率",
      "搭建AI素材库与 Prompt 模板体系，沉淀标准化生产流程，提高团队协作效率与素材复用能力",
      "针对抖音、小红书、淘宝、京东等平台进行视觉适配，优化商业内容表现力与用户转化效果",
    ],
    achievements: [
      "建立AIGC视觉生产流程，实现商品图片、营销素材及短视频内容的快速规模化输出",
      "沉淀多行业视觉风格方案与 Prompt 模板，提高AI生成内容稳定性",
      "支持多个商业项目落地，提升品牌视觉传播效率",
    ],
  };

  const cards = [
    { label: "EXPERIENCE", value: "5+ YEARS", body: "品牌视觉、商业海报、AI影像与电商设计" },
    { label: "CORE SKILLS", value: "28+ SKILLS", body: "Art Direction / AIGC / Branding / Motion" },
    { label: "FOCUS", value: "VISUAL x AI", body: "探索生成式工具在真实设计流程中的价值" },
    { label: "COOPERATION", value: "OPEN", body: "项目合作 / 创意顾问 / 全职机会" },
  ];

  const portraitSlots = [1, 2, 3, 4, 5];

  return (
    <div className="mt-24 space-y-6">
      {/* ── 工作经历 ── */}
      <section className="shell">
        <div className="mb-7 flex items-end justify-between border-b border-white/10 pb-5">
          <div>
            <p className="eyebrow" style={{ color }}>
              Career / 2024 — 2026
            </p>
            <h2 className="mt-3 text-3xl font-medium tracking-tight">
              WORK EXPERIENCE <span className="ml-3 text-lg text-white/35">工作经历</span>
            </h2>
          </div>
          <Briefcase size={22} className="text-white/25" />
        </div>

        <article
          className="overflow-hidden rounded-[24px] border border-white/10 bg-white/[.025] p-[1px]"
          style={{ boxShadow: `0 0 0 1px ${color}10, 0 18px 55px ${color}08` }}
        >
          <div className="rounded-[23px] bg-[#07090f]/60 p-8 md:p-12">
            {/* 公司信息 */}
            <div className="flex flex-col gap-5 border-b border-white/10 pb-7 md:flex-row md:items-start md:justify-between">
              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="text-2xl font-semibold md:text-3xl">{experience.company}</h3>
                  <span
                    className="rounded-full border px-3 py-1 text-[10px] tracking-wider"
                    style={{ borderColor: `${color}40`, color }}
                  >
                    {experience.companyEn}
                  </span>
                </div>
                <p className="mt-3 text-lg text-white/70">{experience.role}</p>
              </div>
              <div className="flex flex-col gap-2 text-sm text-white/45 md:items-end">
                <span className="flex items-center gap-2">
                  <Calendar size={14} style={{ color }} /> {experience.period}
                </span>
                <span className="flex items-center gap-2">
                  <MapPin size={14} style={{ color }} /> {experience.location}
                </span>
              </div>
            </div>

            {/* 概述 */}
            <p className="mt-7 text-sm leading-7 text-white/55">{experience.overview}</p>

            {/* 职责 */}
            <div className="mt-8">
              <p className="mb-4 flex items-center gap-2 text-[10px] tracking-[.2em]" style={{ color }}>
                <span className="h-px w-6" style={{ background: color }} />
                RESPONSIBILITIES · 主要职责
              </p>
              <ul className="space-y-3">
                {experience.responsibilities.map((item, i) => (
                  <li key={i} className="flex gap-3 text-sm leading-6 text-white/55">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: color }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* 项目成果 */}
            <div className="mt-8">
              <p className="mb-4 flex items-center gap-2 text-[10px] tracking-[.2em]" style={{ color }}>
                <Sparkles size={13} />
                ACHIEVEMENTS · 项目成果
              </p>
              <div className="grid gap-3 md:grid-cols-3">
                {experience.achievements.map((item, i) => (
                  <div key={i} className="rounded-[16px] border border-white/10 bg-white/[.03] p-5">
                    <span
                      className="flex h-7 w-7 items-center justify-center rounded-full text-xs font-semibold"
                      style={{ background: `${color}1a`, color }}
                    >
                      {i + 1}
                    </span>
                    <p className="mt-3 text-[13px] leading-6 text-white/55">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </article>
      </section>

      {/* ── 个人写真画廊 ── */}
      <section className="shell">
        <div className="mb-7 flex items-end justify-between border-b border-white/10 pb-5">
          <div>
            <p className="eyebrow" style={{ color }}>
              Personal Portraits
            </p>
            <h2 className="mt-3 text-3xl font-medium tracking-tight">
              PORTRAIT <span className="ml-3 text-lg text-white/35">个人写真</span>
            </h2>
          </div>
          <Camera size={22} className="text-white/25" />
        </div>
        <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 md:gap-6">
          {portraitSlots.slice(2).map((n) => (
            <PortraitSlot key={n} index={n} color={color} />
          ))}
        </div>
      </section>
    </div>
  );
}

function PortraitSlot({ index, color }: { index: number; color: string }) {
  const imageSrc = getImagePath(`/images/portrait-${String(index).padStart(2, "0")}.png`);

  return (
    <div
      className="group relative aspect-[3/4] overflow-hidden rounded-[20px] border border-white/15 bg-white/[.02] transition duration-500 hover:-translate-y-1 hover:border-white/30"
      style={{ boxShadow: `0 18px 50px ${color}0d` }}
    >
      <Image
        src={imageSrc}
        alt={`FENG 个人写真 ${String(index).padStart(2, "0")}`}
        fill
        sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 30vw"
        className="object-cover transition duration-700 group-hover:scale-[1.035]"
      />
      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-4">
        <div>
          <p className="text-[10px] tracking-[.2em] text-white/85">
            PORTRAIT {String(index).padStart(2, "0")}
          </p>
          <p className="mt-1 text-[10px] tracking-wider text-white/50">个人写真</p>
        </div>
        <span className="rounded-full border border-white/15 bg-black/30 px-2.5 py-1 text-[8px] tracking-wider text-white/65 backdrop-blur">
          {String(index).padStart(2, "0")}
        </span>
      </div>
    </div>
  );
}
