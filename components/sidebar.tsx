import { SidebarItem } from "./sidebar-item"

export const Sidebar = () => {
    return (
        <div className="fixed h-full bg-white dark:bg-black border-r lg:w-[320px] z-5 hidden lg:flex">
          <SidebarItem/>
        </div>
    )
}