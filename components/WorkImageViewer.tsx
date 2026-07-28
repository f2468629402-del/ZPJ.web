"use client";

import { ChevronLeft, ChevronRight, Maximize2, X } from "lucide-react";
import { useCallback, useEffect, useMemo, useState } from "react";
import { Project } from "@/data/projects";

export function WorkImageViewer({
  color,
  initialIndex,
  projects,
}: {
  color: string;
  initialIndex: number;
  projects: Project[];
}) {
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(initialIndex);
  const activeProject = projects[activeIndex] || projects[initialIndex];
  const canMove = projects.length > 1;

  const imageStyle = useMemo(
    () => ({
      boxShadow: `0 0 0 1px ${color}18, 0 28px 90px ${color}14`,
    }),
    [color],
  );

  const move = useCallback(
    (direction: -1 | 1) => {
      if (!canMove) return;
      setActiveIndex((current) => (current + direction + projects.length) % projects.length);
    },
    [canMove, projects.length],
  );

  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
      if (event.key === "ArrowLeft") move(-1);
      if (event.key === "ArrowRight") move(1);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [move, open]);

  if (!activeProject) return null;

  return (
    <>
      <button
        type="button"
        onClick={() => {
          setActiveIndex(initialIndex);
          setOpen(true);
        }}
        className="group relative block w-full cursor-zoom-in bg-black/20 p-3 text-left md:p-6"
        style={{ aspectRatio: `${activeProject.width || 16}/${activeProject.height || 9}` }}
        aria-label="放大查看作品图片"
      >
        <img
          src={activeProject.image}
          alt={activeProject.alt || activeProject.title}
          width={activeProject.width}
          height={activeProject.height}
          loading="eager"
          fetchPriority="high"
          decoding="async"
          className="h-auto w-full object-contain transition duration-500 group-hover:scale-[1.01]"
        />
        <span
          className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-black/45 text-white/60 backdrop-blur transition group-hover:border-white/30 group-hover:text-white"
          style={{ boxShadow: `0 0 28px ${color}18` }}
          aria-hidden="true"
        >
          <Maximize2 size={17} />
        </span>
      </button>

      {open ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#03050b]/95 p-4 backdrop-blur-xl md:p-8" role="dialog" aria-modal="true">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_15%,rgba(255,255,255,.08),transparent_38%)]" />
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="absolute right-5 top-5 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/[.04] text-white/60 transition hover:border-white/35 hover:text-white"
            aria-label="关闭放大预览"
          >
            <X size={19} />
          </button>

          {canMove ? (
            <>
              <button
                type="button"
                onClick={() => move(-1)}
                className="absolute left-4 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-white/[.04] text-white/65 transition hover:border-white/35 hover:bg-white/[.08] hover:text-white md:left-8"
                aria-label="上一张作品"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                type="button"
                onClick={() => move(1)}
                className="absolute right-4 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-white/[.04] text-white/65 transition hover:border-white/35 hover:bg-white/[.08] hover:text-white md:right-8"
                aria-label="下一张作品"
              >
                <ChevronRight size={24} />
              </button>
            </>
          ) : null}

          <figure className="relative z-10 flex h-full w-full max-w-7xl flex-col items-center justify-center gap-4">
            <div className="flex max-h-[82vh] w-full items-center justify-center overflow-hidden rounded-[24px] border border-white/10 bg-white/[.025] p-3 md:p-5" style={imageStyle}>
              <img
                src={activeProject.image}
                alt={activeProject.alt || activeProject.title}
                width={activeProject.width}
                height={activeProject.height}
                decoding="async"
                className="max-h-[78vh] w-auto max-w-full object-contain"
              />
            </div>
            <figcaption className="flex items-center gap-4 text-[10px] tracking-[.18em] text-white/45">
              <span style={{ color }}>{String(activeIndex + 1).padStart(2, "0")}</span>
              <span>{activeProject.title}</span>
              <span>/</span>
              <span>{String(projects.length).padStart(2, "0")}</span>
            </figcaption>
          </figure>
        </div>
      ) : null}
    </>
  );
}
