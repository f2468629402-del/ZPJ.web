"use client";

import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { wechatQrImage } from "@/data/projects";

export default function WechatQrPage() {
  return (
    <main className="shell flex min-h-[calc(100vh-120px)] items-center justify-center py-12">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative w-full max-w-md"
      >
        <Link
          href="/contact"
          className="absolute -top-12 left-0 inline-flex items-center gap-2 text-[10px] tracking-[.18em] text-white/45 transition hover:text-white"
        >
          <ArrowLeft size={14} /> BACK TO CONTACT
        </Link>

        <div className="overflow-hidden rounded-[28px] border border-white/10 bg-[#07090f] p-8 shadow-[0_30px_90px_rgba(0,0,0,.45)]">
          <div className="text-center">
            <p className="text-[10px] tracking-[.22em] text-cyan-300">WECHAT / 微信</p>
            <h1 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">扫码加微信</h1>
            <p className="mt-3 text-sm leading-7 text-white/50">使用微信扫一扫下方二维码添加好友</p>
          </div>

          <div className="mt-8 flex items-center justify-center">
            <div className="rounded-2xl bg-white p-5 shadow-[0_18px_55px_rgba(34,184,255,.18)]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={wechatQrImage}
                alt="微信二维码"
                width={360}
                height={360}
                className="block h-auto w-72 max-w-full"
              />
            </div>
          </div>

          <div className="mt-6 text-center">
            <p className="text-xs tracking-[.16em] text-white/45">微信账号</p>
            <p className="mt-2 text-2xl font-medium tracking-wide text-white">f13310039786</p>
          </div>
        </div>

        <p className="mt-6 text-center text-[10px] tracking-[.16em] text-white/30">FENG CREATIVE SYSTEM · 2026</p>
      </motion.div>
    </main>
  );
}