import Link from "next/link"
import ShinyButton from "./magicui/shiny-button"
import { cn } from "@/lib/utils";
import { useSidebar } from "@/hooks/use-sidebar";

type Props = {
    href: string,
    onlyLevel?: boolean;
    data: {
        id: number;
        title: string;
        route: string;
    }[];
};



export const SidebarItem = ({ href, data, onlyLevel }: Props) => {
    const {onClose} = useSidebar()
    if (!data) return null  //Skeleton ShinyButton will be show here 
    return (
        <div className="lg:p-5 p-2 h-full w-full overflow-y-auto">
            <div className="lg:mt-14 lg:pt-5 mt-6 flex flex-col gap-y-3">
                {data.map(sub => (
                    <Link key={sub.id} href={sub.route} onClick={onClose}>
                        <ShinyButton
                            text={onlyLevel ? `Level  ${sub.title}` : sub.title}
                            className={cn("h-[60px] w-full text-start hover:bg-white/10", href === sub.route ? "bg-white/20" : "")} />
                    </Link>
                ))}
            </div>
        </div>
    )
}

