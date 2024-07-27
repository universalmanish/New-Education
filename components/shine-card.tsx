import ShineBorder from "@/components/magicui/shine-border";

export function ShineCard() {
  return (
    <ShineBorder
      className="bg-black items-center justify-center rounded-lg border md:shadow-xl h-60 w-60"
      color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
    >
      <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-xl font-semibold leading-none text-transparent bg-black">
        Mathematics
      </span>
    </ShineBorder>

  );
}
