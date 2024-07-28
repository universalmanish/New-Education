import { ShineCard } from "@/components/shine-card"

const LevelPage = () => {
    return (
        <div className="p-5 pt-[90px] bg-black lg:pl-[350px]">
            <div className="flex items-center justify-center">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 sm:gap-9">
                    {[...Array(8)].map((_, index) => (
                        <div key={index}>
                            <ShineCard />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default LevelPage