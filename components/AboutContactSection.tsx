"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Phone, MessageCircle, Mail, Copy, Check } from "lucide-react";
import { getImagePath } from "@/lib/basePath";
import {
  aboutContactProfile,
  aboutContactMethods,
  type AboutContactMethod,
} from "@/data/projects";

/* ── 图标映射 ── */
const iconMap: Record<AboutContactMethod["id"], typeof Phone> = {
  phone: Phone,
  wechat: MessageCircle,
  qq: MessageCircle,
  email: Mail,
  gmail: Mail,
};

const skillColorMap = [
  "bg-cyan-500/15 text-cyan-300 border-cyan-500/25",
  "bg-violet-500/15 text-violet-300 border-violet-500/25",
  "bg-purple-500/15 text-purple-300 border-purple-500/25",
  "bg-indigo-500/15 text-indigo-300 border-indigo-500/25",
  "bg-amber-500/15 text-amber-300 border-amber-500/25",
  "bg-rose-500/15 text-rose-300 border-rose-500/25",
];

export function AboutContactSection() {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = useCallback(async (method: AboutContactMethod) => {
    try {
      await navigator.clipboard.writeText(method.value);
      setCopiedId(method.id);
      setTimeout(() => setCopiedId(null), 2000);
    } catch {
      // 降级：创建临时 textarea
      const ta = document.createElement("textarea");
      ta.value = method.value;
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
      setCopiedId(method.id);
      setTimeout(() => setCopiedId(null), 2000);
    }
  }, []);

  return (
    <motion.section
      className="shell mt-16 pb-12 md:mt-20"
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      aria-labelledby="about-contact-title"
    >
      <h2 id="about-contact-title" className="sr-only">
        关于我与联系方式
      </h2>

      <div className="mx-auto max-w-[1672px] overflow-hidden rounded-[26px] border border-white/10 bg-[#070b15] shadow-[0_0_50px_rgba(31,139,255,.08)]">
        <div className="flex flex-col md:flex-row md:divide-x md:divide-white/8">
          
          {/* ═══ LEFT: 写真照片 ═══ */}
          <div className="flex items-center p-8 md:w-[45%] md:shrink-0 md:p-12 lg:p-14">
            <div className="relative w-full overflow-hidden rounded-2xl border border-white/10 bg-[#0d1321]">
              <Image
                src={getImagePath("/images/portrait.jpg")}
                alt="FENG 个人写真"
                width={800}
                height={900}
                sizes="(max-width: 768px) calc(100vw - 56px), min(800px, 45vw)"
                loading="lazy"
                decoding="async"
                className="block h-auto w-full object-cover"
              />
            </div>
          </div>

          {/* ═══ RIGHT: 关于我 + 联系方式 ═══ */}
          <div className="flex flex-col justify-center gap-0 divide-y divide-white/8 p-8 md:flex-1 md:p-12 lg:p-14">
            
            {/* ── ABOUT ME ── */}
            <div className="pb-8 md:pb-10">
              <p className="text-xs font-semibold tracking-[.16em] text-cyan-400">
                {aboutContactProfile.titleEn}
              </p>
              <h3 className="mt-2 text-2xl font-semibold tracking-tight text-white md:text-3xl">
                {aboutContactProfile.title}
              </h3>
              <div className="mt-5 space-y-3 text-sm leading-relaxed text-white/60 md:text-base">
                {aboutContactProfile.body
                  .split("\u000a\u000a")
                  .map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
              </div>
              {/* Skills tags */}
              <div className="mt-6 flex flex-wrap gap-2">
                {aboutContactProfile.skills.map((skill, i) => (
                  <span
                    key={skill}
                    className={`rounded-full border px-3 py-1 text-xs font-medium ${
                      skillColorMap[i % skillColorMap.length]
                    }`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* ── CONTACT ── */}
            <div className="pt-8 md:pt-10">
              <p className="text-xs font-semibold tracking-[.16em] text-cyan-400">
                CONTACT
              </p>
              <h3 className="mb-4 mt-2 text-2xl font-semibold tracking-tight text-white md:text-3xl">
                联系方式
              </h3>

              <div className="space-y-3">
                {aboutContactMethods.map((method) => {
                  const Icon = iconMap[method.id];
                  const isCopied = copiedId === method.id;
                  const hasHref = !!method.href;
                  const isCopyable = method.copyable ?? false;

                  const content = (
                    <div className="flex w-full items-center gap-4 rounded-xl border border-white/8 bg-white/[0.03] px-5 py-4 transition-all duration-200 hover:border-white/20 hover:bg-white/[0.06] hover:shadow-[0_0_20px_rgba(31,139,255,.08)]">
                      <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-400">
                        <Icon size={20} />
                      </span>
                      <div className="min-w-0 flex-1 text-left">
                        <p className="text-xs font-medium tracking-[.08em] text-white/40">
                          {method.label}
                        </p>
                        <p className="truncate text-sm font-medium text-white/85">
                          {method.value}
                        </p>
                      </div>
                      <span className="shrink-0 text-xs text-white/30">
                        {isCopied ? (
                          <Check size={16} className="text-emerald-400" />
                        ) : isCopyable ? (
                          <Copy size={16} />
                        ) : hasHref ? (
                          <span className="text-cyan-400">&#x2197;</span>
                        ) : null}
                      </span>
                    </div>
                  );

                  if (hasHref) {
                    return (
                      <a
                        key={method.id}
                        href={method.href}
                        className="block"
                        target={method.id === "phone" ? undefined : "_blank"}
                        rel={method.id === "phone" ? undefined : "noopener noreferrer"}
                      >
                        {content}
                      </a>
                    );
                  }

                  if (isCopyable) {
                    return (
                      <button
                        key={method.id}
                        type="button"
                        className="block w-full text-left"
                        onClick={() => handleCopy(method)}
                      >
                        {content}
                        {isCopied && (
                          <span className="mt-1 block text-xs text-emerald-400">
                            已复制到剪贴板
                          </span>
                        )}
                      </button>
                    );
                  }

                  return (
                    <div key={method.id} className="block">
                      {content}
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        </div>
      </div>
    </motion.section>
  );
}
