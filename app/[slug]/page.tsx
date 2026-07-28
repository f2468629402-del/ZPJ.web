import { notFound } from "next/navigation";
import { ModulePage } from "@/components/ModulePage";
import { IPUniverse } from "@/components/IPUniverse";
import { getModule, modules } from "@/data/modules";

export function generateStaticParams(){return modules.map(m=>({slug:m.id}))}
export default async function Page({params}:{params:Promise<{slug:string}>}){
 const {slug}=await params;
 const module=getModule(slug);
 if(!module)notFound();
 if(slug==="ip") return <IPUniverse/>;
 return <ModulePage module={module}/>;
}
