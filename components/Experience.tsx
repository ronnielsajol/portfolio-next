import Image from "next/image";
import Icons from "./Icons";
import IconCloud from "./magicui/icon-cloud";
import { Vortex } from "./ui/vortex";

const Experience = () => {
  const slugs = [
    "typescript",
    "javascript",
    "react",
    "html5",
    "css3",
    "nodedotjs",
    "express",
    "nextdotjs",
    "postgresql",
    "vercel",
    "git",
    "github",
    "gitlab",
    "visualstudiocode",
    "figma",
    "php",
    "laravel",
    "python",
    "vuedotjs",
    "netlify",
    "tailwindcss",
  ];

  return (
    <main
      className="flex w-full flex-col items-center justify-center pt-[66px]"
      id="Experience"
    >
      <h1 className="text-[8vw] font-bold transition-all duration-300 hover:text-accent lg:text-5xl">
        EXPERIENCE
      </h1>
      <p className="text-textColor mt-3 text-balance p-1 text-center text-[3vw] font-light md:w-[455px] md:text-base">
        I&apos;ve been doing web development for about a year now, and I&apos;m
        always eager to learn more in this fast-paced industry.
      </p>

      <section className="mt-5 md:mt-10">
        <p className="text-textColor p-5 text-center text-[4vw] font-medium md:text-lg">
          These are the technologies I&apos;ve worked with:
        </p>
        <div className="flex items-center justify-center">
          <IconCloud iconSlugs={slugs} />
        </div>
      </section>
      <section className="mt-10 md:mt-16">
        <p className="text-textColor p-5 text-center text-[4vw] font-medium md:text-lg">
          These are the past companies I&apos;ve worked with:
        </p>
        <div className="mt-5 flex w-full flex-col gap-6 px-7 md:mt-10 lg:flex-row">
          <div className="group flex flex-col items-center justify-center gap-5 md:w-full md:flex-row lg:w-full">
            <Image
              src="/fs.jpg"
              alt="FlowerStore"
              className="rounded-full border-4 border-accent grayscale transition-all duration-300 group-hover:grayscale-0"
              height={160}
              width={160}
            />
            <div className="card">
              <h4 className="text-center text-3xl font-medium md:text-start">
                FlowerStore Group
              </h4>
              <div className="flex justify-between">
                <span className="text-[3vw] font-semibold md:text-base">
                  Tech Intern
                </span>
                <span className="text-right text-[3vw] font-medium md:text-start md:text-base md:font-semibold">
                  August 2023 - June 2024
                </span>
              </div>
              <p className="w-full cursor-default text-balance text-[3vw] font-extralight md:text-base md:font-light">
                Primarily worked on the frontend and backend of the BI tool for
                the e-commerce platform FlowerStore.ph using Vue.js, Tailwind,
                and Laravel.
              </p>
            </div>
          </div>
          <div className="md:full group flex flex-col items-center justify-center gap-5 md:flex-row lg:w-full">
            <Image
              src="/lm.jpg"
              alt="lexmeet"
              className="rounded-full border-4 border-accent grayscale transition-all duration-300 group-hover:grayscale-0"
              height={160}
              width={160}
            />
            <div className="card">
              <h4 className="text-center text-3xl font-medium md:text-start">
                LexMeet
              </h4>
              <div className="flex justify-between">
                <span className="text-[3vw] font-semibold md:text-base">
                  Front-End Developer Intern
                </span>
                <span className="text-right text-[3vw] font-medium md:text-start md:text-base md:font-semibold">
                  April 2023 - July 2023
                </span>
              </div>
              <p className="w-full cursor-default text-balance text-[3vw] font-extralight md:text-base md:font-light">
                Translated Figma designs into functional websites using React.
                Conducted quality checks on each webpage to ensure accuracy and
                functionality.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Experience;
