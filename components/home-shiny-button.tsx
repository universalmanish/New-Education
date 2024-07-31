"use client"
import ShimmerButton from "@/components/magicui/shimmer-button";
import { useRouter } from "next/navigation";

export function HomeShinyButton() {
  const router = useRouter()
  const onClick = () => {
    router.push("/mathematics")
  }
  return (
    <div className="z-10 flex min-h-[16rem] items-center justify-center">
      <ShimmerButton className="shadow-2xl" onClick={onClick}>
        <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
          Get Started
        </span>
      </ShimmerButton>
    </div>
  );
}
