"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight, Box, Maximize2, Orbit, Sparkles, UserRound } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { projectsByModule } from "@/data/projects";
import { getImagePath } from "@/lib/basePath";
import { Lightbox, type LightboxImage } from "./Lightbox";

const profileItems = [
  { cn: "角色设计", en: "CHARACTER DESIGN", icon: UserRound },
  { cn: "世界观构建", en: "WORLD BUILDING", icon: Box },
  { cn: "IP 孵化开发", en: "IP DEVELOPMENT", icon: Orbit },
  { cn: "IP 视觉呈现", en: "VISUAL IDENTITY", icon: Sparkles },
];

export function IPUniverse() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const lightboxImages: LightboxImage[] = projectsByModule.ip.map((project) => ({
    src: project.image,
    alt: project.alt || project.title,
    title: project.title,
    subtitle: project.subtitle,
  }));

  useEffect(() => {
    document.body.classList.add("ip-universe-page");
    return () => document.body.classList.remove("ip-universe-page");
  }, []);

  return (
    <motion.main
      className="ip-universe"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      <section className="ip-shell">
        <div className="ip-ambient ip-ambient-one" />
        <div className="ip-ambient ip-ambient-two" />

        <div className="ip-topline">
          <Link href="/" className="ip-back">
            <ArrowLeft size={14} /> BACK TO SYSTEM
          </Link>
          <div className="ip-mini-nav">
            <span>IP DESIGN</span>
            <span>CHARACTER</span>
            <span>WORLD</span>
          </div>
          <div className="ip-status">
            <div>
              <strong>LV.02</strong>
              <span>IP CREATOR</span>
            </div>
            <div className="ip-status-line" />
            <b>PROJECT 06</b>
          </div>
        </div>

        <div className="ip-copy">
          <motion.div
            className="ip-number"
            initial={{ y: 18, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.15 }}
          >
            02
          </motion.div>
          <p className="ip-kicker">CHARACTER UNIVERSE / 2026</p>
          <h1>IP UNIVERSE</h1>
          <h2>角色创造宇宙</h2>
          <p className="ip-description">
            从性格、形象到世界观，构建拥有情绪连接与长期生命力的原创角色。
          </p>
        </div>

        <div className="ip-visual" aria-label="Lilac Dream 紫色 IP 角色主视觉">
          <motion.div
            className="ip-halo ip-halo-outer"
            animate={{ rotate: 360 }}
            transition={{ duration: 36, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="ip-halo ip-halo-inner"
            animate={{ scale: [1, 1.035, 1], opacity: [0.65, 1, 0.65] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.img
            src={getImagePath("/images/ip/lilac-dream.png")}
            alt="紫色渐变长发、浅紫服装的 Lilac Dream 潮玩角色"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
          />
          <span className="ip-orbit-dot ip-dot-one" />
          <span className="ip-orbit-dot ip-dot-two" />
          <div className="ip-character-label">
            <span>CORE CHARACTER</span>
            <strong>LILAC DREAM</strong>
          </div>
        </div>

        <div className="ip-profile">
          <p className="ip-section-label">CHARACTER PROFILE</p>
          <div className="ip-profile-list">
            {profileItems.map(({ cn, en, icon: Icon }, index) => (
              <motion.div
                className="ip-profile-item"
                key={en}
                initial={{ x: -15, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3 + index * 0.08 }}
                whileHover={{ x: 5, scale: 1.015 }}
              >
                <div className="ip-icon"><Icon size={19} strokeWidth={1.6} /></div>
                <div><strong>{cn}</strong><span>{en}</span></div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="ip-bottom">
          <div><span>PROJECTS</span><strong>06</strong></div>
          <Link href="#ip-projects" className="ip-enter">
            ENTER <ArrowUpRight size={20} />
          </Link>
        </div>
      </section>

      <section className="ip-projects" id="ip-projects">
        <div className="ip-projects-title">
          <div><span>SELECTED IP WORKS</span><h3>角色宇宙档案</h3></div>
          <p>CHARACTER / STORY / APPLICATION</p>
        </div>
        <div className="ip-project-grid">
          {projectsByModule.ip.map((project, index) => (
            <article key={project.title}>
              <div
                className="ip-project-image group cursor-zoom-in"
                onClick={() => setLightboxIndex(index)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setLightboxIndex(index);
                  }
                }}
              >
                <img src={project.image} alt={project.alt || project.title} />
                <span className="ip-zoom-hint">
                  <Maximize2 size={16} /> CLICK TO ZOOM
                </span>
              </div>
              <div className="ip-project-info">
                <span>{project.subtitle}</span>
                <h4>{project.title}</h4>
                <p>{project.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {lightboxIndex !== null && (
        <Lightbox
          images={lightboxImages}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNavigate={setLightboxIndex}
        />
      )}
    </motion.main>
  );
}
