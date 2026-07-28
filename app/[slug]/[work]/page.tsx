import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { WorkImageViewer } from "@/components/WorkImageViewer";
import { getModule, modules } from "@/data/modules";
import { projectsByModule } from "@/data/projects";

export function generateStaticParams(){
  return modules.flatMap((module)=>
    (projectsByModule[module.id] || [])
      .filter((project)=>project.slug)
      .map((project)=>({ slug:module.id, work:project.slug as string }))
  );
}

export default async function WorkDetailPage({params}:{params:Promise<{slug:string;work:string}>}){
  const {slug, work}=await params;
  const module=getModule(slug);
  const moduleProjects=projectsByModule[slug] || [];
  const projectIndex=moduleProjects.findIndex((item)=>item.slug===work);
  const project=moduleProjects[projectIndex];
  if(!module || !project) notFound();
  if(slug === "ecommerce") redirect(`/${slug}`);

  return <main className="shell py-10">
    <Link href={`/${slug}`} className="inline-flex items-center gap-2 text-[10px] tracking-[.18em] text-white/45 transition hover:text-white"><ArrowLeft size={14}/> BACK TO {module.title}</Link>
    <section className="mt-10 overflow-hidden rounded-[28px] border border-white/10 bg-white/[.025]" style={{boxShadow:`0 0 0 1px ${module.color}12, 0 28px 90px ${module.color}10`}}>
      <div className="border-b border-white/10 p-6 md:p-8">
        <p className="text-[10px] tracking-[.2em]" style={{color:module.color}}>{project.subtitle}</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight md:text-6xl">{project.title}</h1>
        {project.description ? <p className="mt-4 max-w-3xl text-sm leading-7 text-white/50">{project.description}</p> : null}
      </div>
      <WorkImageViewer color={module.color} initialIndex={projectIndex} projects={moduleProjects}/>
    </section>
  </main>;
}
