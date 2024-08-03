"use client"
import { LevelDataCard } from "@/components/level-data-card"
import { levelData } from "@/db/queries";
import { countSlashes, routeItem } from "@/lib/route-finder";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

type Props = {
    title: string | null;
    subHeading: {
        title: string | null;
    }[];
}
const LevelContent = () => {
    const pathName = usePathname();
    const [data, setData] = useState<Props[] | null>(null);
    const [loading, setLoading] = useState(true);
    const countSlash = countSlashes(pathName)
    const routeItems = routeItem(pathName)

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await levelData(routeItems);
                if (response === undefined) {
                    setData(null);
                } else {
                    setData(response);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
                setData(null);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [countSlash, routeItems]);

    if (!data) return null

    return (
        <div className="p-5 w-full pt-[90px] h-full bg-white dark:bg-black lg:pl-[350px] overflow-y-auto">
            <div className="w-full grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 md:gap-6 lg:gap-8 sm:gap-9">
            {data.map((item, index) => (
                    <LevelDataCard 
                        key={index} 
                        header={item.title || ''} 
                        content={item.subHeading.map(subItem => subItem.title || '')}
                    />
                ))}
            </div>
        </div>
    )
}

export default LevelContent