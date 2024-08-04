import { cn } from "@/lib/utils";
import { SidebarItem } from "./sidebar-item"


type Props = {
  href: string,
  className?: string,
  onlyLevels?: boolean;
  data: {
    id: number;
    title: string;
    route: string;
  }[];
};

export const Sidebar = ({href, data, onlyLevels, className}:Props) => {
    return (
        <div className={cn("fixed h-full bg-white dark:bg-black lg:w-[320px]", className)}>
          <SidebarItem href={href} data={data} onlyLevel={onlyLevels}/>
        </div>
    )
}