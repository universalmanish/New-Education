import Link from "next/link"
import ShinyButton from "./magicui/shiny-button"
import { cn } from "@/lib/utils";

type Props = {
    href: string,
    data: {
        id: number;
        title: string;
        route: string;
    }[];
};



export const SidebarItem = ({href, data}: Props) => {
    if (!data) return null  //Skeleton ShinyButton will be show here 
    return (
        <div className="p-5 h-full w-full overflow-y-auto">
            <div className="mt-14 pt-5 flex flex-col gap-y-3">
                {data.map(sub => (
                    <Link key={sub.id} href={sub.route}>
                        <ShinyButton text={sub.title} className={cn("h-[60px] w-full text-start hover:bg-white/10", href === sub.route ? "bg-white/20" : "" )} />
                    </Link>
                ))}
            </div>
        </div>
    )
}

