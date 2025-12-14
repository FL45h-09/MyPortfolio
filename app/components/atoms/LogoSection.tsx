import { ProfileData as data } from "@/config/content";
import Link from "next/link";

export const LogoSection = () => {
  return (
    <div className="logosec text-2xl font-medium"><Link href="/" className="flex items-center gap-2.5"><span className="text-4xl leading-0"><data.logoIcon /></span> {data.logoText}</Link></div>
  )
}
