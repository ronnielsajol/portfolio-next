import Button from "./Button";
import { FiSend } from "react-icons/fi";

const Resume = () => {
  return (
    <main
      className="mt-24 flex w-full flex-col items-center justify-center pt-[66px]"
      id="Resume"
    >
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-center text-5xl font-bold transition-all duration-300 hover:text-accent md:text-start">
          CHECK OUT MY RÉSUMÉ!
        </h1>
        <Button
          primary={true}
          className={
            "resume mt-8 shadow-md shadow-[#4e4d5f] transition-all duration-300 hover:text-accent"
          }
        >
          <a href="/SAJOL_RESUME.pdf" target="_blank">
            Grab a copy
          </a>
        </Button>
      </div>
      <div className="group mx-4 mt-24 flex flex-col items-center justify-center gap-16 rounded-lg border border-transparent p-4 backdrop-blur-md transition-all duration-300 hover:border-white hover:border-opacity-20 hover:bg-primary hover:bg-opacity-40 md:mx-0 lg:gap-3">
        <div className="flex flex-col items-center justify-center gap-3">
          <FiSend className="h-24 w-24 group-hover:text-accent" />
          <h1 className="text-4xl font-medium">GET IN TOUCH!</h1>
        </div>
        <p className="mt-2 h-24 text-balance text-center text-[4vw] font-light uppercase md:w-[500px] md:text-xl">
          Whether you have an idea for a project or just want to chat, feel free
          to shoot me an email!
        </p>
        <Button secondary={true} className={"h-[50px] w-[175px] text-lg"}>
          <a href="mailto:sajolronniel28@gmail.com">Say Hello</a>
        </Button>
      </div>
    </main>
  );
};

export default Resume;
