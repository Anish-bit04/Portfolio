import CurvedText from "./components/CurvedText";

const Hero = () => {
  return (
    <>
      <div className="h-auto my-[5rem] md:my-0 md:h-[70vh] pr-3 flex items-center justify-center ">
        <div className="mx-[5rem] md:mx-[3rem] lg:mx-[12rem] w-full relative flex items-center justify-start sm:justify-center">
          <h1 className="text-5xl font-bold md:text-7xl xl:text-[5rem] text-left sm:text-center leading-tight md:leading-tight ">
            Hi, I&apos;m{" "}
            <span className=" decoration-2 underline-offset-[5px] decoration-[#74E291]">
              <span className="bg-clip-text font-protest font-normal  text-transparent bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 ">
                Anish,
              </span>
            </span>{" "}
            Yet another Full Stack{" "}
            <span
              className={` text-5xl italic md:text-7xl xl:text-[5rem] mb-3 sm:mb-0 text-center sm:text-left font-extrabold text-zinc-600 dark:text-zinc-400`}
            >
              developer
              <span className="text-orange-500">.</span>
            </span>
          </h1>

          <span className="absolute rounded-full text-[10px] text-white font-bold top-[-2.4rem] bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[0.35rem] px-3">
            • जय श्री राम •
          </span>
        </div>
      </div>
      <div className="flex justify-between items-center flex-col">
        <CurvedText />
      </div>

      <p className="text-[1rem] text-gray-600 text-center mt-4 ">
        I am a Full Stack Developer based in India, I{" "}
        <span className="opacity-70">🔥</span> building Web Apps. 
      </p>
    </>
  );
};

export default Hero;
