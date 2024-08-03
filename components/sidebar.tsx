import { SidebarItem } from "./sidebar-item"


type Props = {
  href: string,
  data: {
    id: number;
    title: string;
    route: string;
  }[];
};

export const Sidebar = ({href, data}:Props) => {
    return (
        <div className="fixed h-full bg-white dark:bg-black border-r lg:w-[320px] z-5 hidden lg:flex">
          <SidebarItem href={href} data={data}/>
        </div>
    )
}