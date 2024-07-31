import Link from "next/link"
import ShinyButton from "./magicui/shiny-button"


export const SidebarItem = () => {
    return (
        <div className="p-5 h-full w-full overflow-y-auto">
            <div className="mt-14 pt-5 flex flex-col gap-y-3">
              <ShinyButton text="Shiny Button" className="h-[60px] hover:bg-white/10" />
              <ShinyButton text="Shiny Button" className="h-[60px] hover:bg-white/10" />
              <ShinyButton text="Shiny Button" className="h-[60px] hover:bg-white/10" />
              <ShinyButton text="Shiny Button" className="h-[60px] hover:bg-white/10" />
              <ShinyButton text="Shiny Button" className="h-[60px] hover:bg-white/10" />
              <ShinyButton text="Shiny Button" className="h-[60px] hover:bg-white/10" />
            </div>
        </div>
    )
}