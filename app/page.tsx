"use client"
import { Background } from "@/components/Background";
import { Navbar } from "@/components/navbar";

export default function Home() {
  return (
    <div className="">
      <Navbar/>
      <div>
        <Background />
      </div>
      <div className="w-full h-[400px] bg-black">
        Manish
      </div>
    </div>
  )
}
