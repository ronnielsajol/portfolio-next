import Image from 'next/image'
import { cn } from '@/lib/utils' // Ensure the path to your `cn` utility is correct

interface FooterIconProps {
  src: string;
  alt: string;
  link: string;
}

const FooterIcon = ({ src, alt, link }: FooterIconProps) => {
  const isSocialMedia = src === '/ig.svg' || src === '/fb.svg';

  return (
    <a
      href={link}
      className={cn(
        "flex h-10 w-10 items-center justify-center rounded-[10px] bg-accent bg-opacity-75 hover:bg-opacity-100"
      )}
      target="_blank"
      rel="noopener noreferrer" 
    >
      <Image
        src={src}
        alt={alt}
        className={cn(
          "h-9 w-9",
          isSocialMedia ? 'p-0' : 'p-1'
        )}
        height={36}
        width={36}
      />
    </a>
  )
}



export default FooterIcon
