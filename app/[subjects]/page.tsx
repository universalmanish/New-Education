import { ShineCard } from "@/components/shine-card"
import { useSidebar } from "@/hooks/use-sidebar"

const SubjectPage = () => {
    return (
        <div className="flex-col p-5 pt-[70px] bg-black lg:pl-[350px] min-h-screen">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
                {[...Array(8)].map((_, index) => (
                    <div key={index} className="w-full pb-[100%] relative">
                        <div className="absolute inset-0">
                            <ShineCard />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SubjectPage
