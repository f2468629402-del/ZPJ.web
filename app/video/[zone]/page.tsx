import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Play } from "lucide-react";
import { getModule } from "@/data/modules";
import { getVideoZone, videoProjects, videoZones } from "@/data/projects";

export function generateStaticParams() {
  return videoZones.map((z) => ({ zone: z.id }));
}

export default async function VideoZonePage({ params }: { params: Promise<{ zone: string }> }) {
  const { zone: zoneId } = await params;
  const zone = getVideoZone(zoneId);
  if (!zone) notFound();

  const module = getModule("video")!;
  const color = module.color;
  const videos = zone.indices.map((i) => videoProjects[i]);

  return (
    <main>
      {/* Hero */}
      <section
        className="shell relative mt-10 min-h-[420px] overflow-hidden rounded-[32px] border border-white/10"
        style={{ boxShadow: `inset 0 0 80px ${color}0d` }}
      >
        <img src={zone.cover} alt="" className="absolute inset-0 h-full w-full object-cover object-center opacity-35" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#07090f] via-[#07090f]/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#07090f] via-transparent to-[#07090f]/30" />
        <div className="relative flex min-h-[420px] max-w-3xl flex-col justify-end p-8 md:p-16">
          <Link href="/video" className="absolute left-8 top-8 flex items-center gap-2 text-[10px] tracking-[.18em] text-white/45 hover:text-white md:left-16">
            <ArrowLeft size={14} /> BACK TO VIDEO
          </Link>
          <div className="mb-auto mt-16 text-6xl font-semibold md:text-7xl" style={{ color }}>
            {zone.id === "manga" ? "M" : "T"}
          </div>
          <p className="text-[10px] tracking-[.22em]" style={{ color }}>
            {zone.category}
          </p>
          <h1 className="mt-4 text-[clamp(38px,6vw,72px)] font-semibold leading-[.9] tracking-[-.055em]">{zone.title}</h1>
          <h2 className="mt-3 text-2xl text-white/80 md:text-3xl">{zone.cn}</h2>
          <p className="mt-6 max-w-xl text-sm leading-7 text-white/50">{zone.description}</p>
        </div>
      </section>

      {/* Video List */}
      <section className="shell mt-24">
        <div className="flex items-end justify-between border-b border-white/10 pb-5">
          <div>
            <p className="eyebrow" style={{ color }}>
              Archive / 2026
            </p>
            <h2 className="mt-3 text-3xl font-medium tracking-tight">
              {zone.title} <span className="ml-3 text-lg text-white/35">{zone.cn}</span>
            </h2>
          </div>
          <span className="text-xs text-white/30">{videos.length} VIDEOS</span>
        </div>
        <div className="mt-9 flex flex-col gap-8">
          {videos.map((video) => (
            <a
              key={video.title}
              href={video.url}
              target="_blank"
              rel="noreferrer"
              className="group grid overflow-hidden rounded-[24px] border border-white/10 bg-white/[.025] transition duration-300 hover:border-white/25 md:grid-cols-2"
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={video.cover}
                  alt={video.title}
                  className="h-full w-full object-cover opacity-75 transition duration-700 group-hover:scale-105 group-hover:opacity-100"
                />
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
    </main>
  );
}
