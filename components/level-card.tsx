import ShineBorder from "@/components/magicui/shine-border";
import { Star } from "lucide-react";


type Props = {
  title: string;
}

export function LevelCard({title}:Props) {
  return (
    <ShineBorder
      className="bg-black items-center justify-center rounded-lg border md:shadow-xl h-60 w-60"
      color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
    >
      <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-3xl font-semibold leading-none  bg-black">
        <div className="flex flex-col gap-y-9 items-center justify-center pb-8">
          <Star className="h-[40px] w-[40px]"/>
          Level  {title}
        </div>
      </span>
    </ShineBorder>

  );
}
