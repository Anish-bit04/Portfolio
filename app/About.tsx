/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { socials } from "./data/data";
import Image from "next/image";
import profilepic from "@/public/profilePicture.jpg";

const About = () => {
  return (
    <div>
      <div className=" flex-col items-center">
        <h2
          className={`text-center font-bold text-sm text-[#F11A7B] uppercase tracking-wider mb-6`}
        >
          About
        </h2>
        <div className="flex items-center gap-3 my-4">
          <div>
            <Image
              src={profilepic}
              alt="gojo"
              className="object-cover aspect-square rounded-full border-[5px]"
              width={50}
              height={50}
            />
          </div>
          <div>
            <p className="inline-block text-2xl sm:text-3xl  font-extrabold  md:no-underline underline-offset-8 decoration-[#F11A7B]">
              About Me
            </p>
            <span className="text-xs ml-2 opacity-40">{`(a bit formal intro)`}</span>
          </div>
        </div>
      </div>

      <p className="opacity-85 dark:text-zinc-400">
        As a Third year ECE undergrad, I excel in crafting projects from the ground up.
       {" "}
       . My expertise lies in MERN stack development, and I&apos;driven by a passion for crafting revolutionary web applications utilizing the latest tech stacks, particularly in MERN.
        
     
      </p>
      <div className="flex items-center mt-5 gap-3">
        <Link href={"/timeline"} className="relative">
          <Button
            className=" dark:text-zinc-400"
            size={"sm"}
            variant={"secondary"}
          >
            More info
          </Button>
          <span className="absolute right-[-2px] top-[-2px] flex h-2 w-2 ">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F11A7B] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#F11A7B]"></span>
          </span>
        </Link>

        <div className="flex gap-2 justify-center items-center">
          {socials.map((s) => (
            <a
              key={s.name}
              target="_blank"
              className={` opacity-60 transition-all hover:opacity-100 dark:bg-zinc-800 bg-zinc-100  p-2 rounded-md`}
              href={s.url}
            >
              <img
                alt={s.name}
                className="invert-0 w-[20px] dark:invert"
                src={s.icon}
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
