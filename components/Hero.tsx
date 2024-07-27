import Image from "next/image";
import Button from "./Button";

const Hero = () => {
  return (
    <>
      <main
        className="mx-8 my-10 mt-8 flex justify-between md:mx-20 md:my-28 md:ml-40 md:mt-20"
        id="About"
      >
        <div className="mr-5">
          <h4 className="text-[4vw] text-slate-200 md:mb-5 md:text-2xl lg:text-2xl xl:text-[2vw]">
            Hi! My name is
          </h4>
          <h1 className="gradient-hero w-fit text-[20vw] font-bold leading-tight text-slate-200 md:text-7xl md:leading-relaxed xl:text-[5vw]">
            Ronniel Sajol.
          </h1>
          <h1 className="w-fit font-normal text-slate-200 lg:text-7xl xl:text-[5vw]">
            <span className="mr-5 text-[4vw] font-medium md:text-7xl xl:text-[5vw]">
              I&apos;m a
            </span>
            <br className="md:hidden" />
            <span className="gradient2 text-[17vw] font-bold leading-tight md:text-7xl md:leading-relaxed xl:text-[5vw]">
              Web Developer
            </span>
          </h1>
          <p className="mt-4 text-balance text-[3vw] font-light leading-8 md:mt-0 md:text-base lg:w-[550px] lg:text-2xl">
            I build dynamic, responsive web applications and create
            user-friendly interfaces. With a passion for clean code and modern
            design, I aim to deliver seamless user experiences.
          </p>
          <div className="mt-5 flex w-full flex-col items-center justify-between gap-5 md:w-96 md:flex-row">
            <Button
              primary={true}
              className={
                "hero shadow-md shadow-[#4e4d5f] transition-all duration-300 hover:text-accent"
              }
            >
              <a href="mailto:sajolronniel28@gmail.com">Hire Me!</a>
            </Button>
            <Button secondary={true} className={"hero"}>
              <a
                className="flex items-center gap-2"
                href="https://github.com/ronnielsajol"
                target="_blank"
              >
                <Image
                  src="/github 1.png"
                  alt="Github Icon"
                  height={24}
                  width={24}
                />
                My Projects
              </a>
            </Button>
          </div>
        </div>
        <div className="group relative hidden h-[532px] w-[427.23px] lg:block">
          <div className="absolute left-0 top-6 h-[505px] w-[405px] animate-pulse rounded-bl-[170px] bg-accent blur-[18.40px] transition-all duration-500 group-hover:left-[21px] group-hover:top-0"></div>
          <div className="absolute left-0 top-6 h-[505px] w-[405px] rounded-bl-[170px] bg-hero bg-cover bg-center bg-no-repeat"></div>
        </div>
      </main>
    </>
  );
};

export default Hero;
