import { Navbar } from "@/components/navbar"
import { Sidebar } from "@/components/sidebar"
import React from "react"

const SubjectLayout = ({children}: {children: React.ReactNode}) => {
    return (
        <div className="h-full w-full bg-black flex">
          <Sidebar/>
          <Navbar/>     
          {children}
        </div>
    )
}

export default SubjectLayout