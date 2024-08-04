"use client"
import { Background } from "@/components/Background";
import { MobileSidebar } from "@/components/mobile-sidebar";
import { Navbar } from "@/components/navbar";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <div className="">
        <Background />
      </div>
      <div className="w-full h-[400px] bg-black">
        Manish
        <MobileSidebar />
      </div>

    </div>

  )
}
