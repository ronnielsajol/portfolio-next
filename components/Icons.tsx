import Image from "next/image";

interface IconsProps {
  src: string;
}

const Icons = ({ src }: IconsProps) => {
  return (
    <Image
      src={src}
      alt="icon"
      className="grayscale transition-all duration-300 hover:grayscale-0 md:h-24 md:w-24"
      width={95}
      height={95}
    />
  );
};

export default Icons;
