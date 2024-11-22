import Image from "next/image";
import Button from "./Button";

const Hero = () => {
  return (
    <>
      <main
        className="mb-20 flex flex-col justify-between px-8 pt-[66px] md:mx-10 md:flex-row lg:ml-20 lg:mr-10 lg:px-0"
        id="About"
      >
        {/* mobile view */}
        <div className="group mb-10 flex h-60 w-60 self-center md:hidden">
          <div className="relative">
            <div className="duration-[5000ms] absolute h-60 w-60 animate-pulse rounded-full bg-accent blur-[18.40px] transition-all"></div>
            <div className="absolute h-60 w-60">
              <Image
                src="/hero.jpg"
                height={405}
                width={405}
                alt="hero"
                className="h-60 w-60 rounded-full object-cover object-center"
                loading="lazy"
                quality={100}
              ></Image>
            </div>
          </div>
        </div>
        <div className="text-center md:text-start xl:mr-5">
          <h4 className="text-xl text-slate-200 md:mb-5 md:text-2xl lg:text-2xl xl:text-4xl">
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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                My Projects
              </a>
            </Button>
          </div>
        </div>
        <div className="group relative hidden h-[532px] w-[427.23px] xl:block">
          <div className="duration-[5000ms] absolute left-0 top-6 h-[505px] w-[405px] animate-pulse rounded-bl-[170px] bg-accent blur-[18.40px] transition-all group-hover:left-[21px] group-hover:top-0"></div>
          <div className="absolute left-0 top-6 h-[505px] w-[405px]">
            <Image
              src="/hero.jpg"
              height={505}
              width={405}
              alt="hero"
              className="h-[505px] rounded-bl-[170px] object-cover object-center"
              loading="lazy"
              quality={100}
            ></Image>
          </div>
        </div>
      </main>
    </>
  );
};

export default Hero;
