import React from "react";
import { projectList } from "../data/data";
import AnimatedDiv from "../components/AnimatedDiv";
import ProjectGrid from "../components/ProjectGrid";
import { StaticImageData } from "next/image";

interface Props {
  projectList: Project[];
}

export interface Project {
  id: number;
  tag?: string;
  title: string;
  category: string;
  image: StaticImageData;
  description: string;
  tech: (string | StaticImageData)[];
  url?: string;
  github: string;
  detailedDescription: string;
  features: string[];
}

const AllProjectsPage = ({ projectList }: Props) => {
  return (
    <AnimatedDiv ClassName="px-[1.5rem] lg:px-[9rem] my-[3rem] relative">
      <h2 className="text-center font-bold text-sm text-[#FF8911] uppercase tracking-wider mb-6">
        Projects
      </h2>
      <p className="text-center text-2xl sm:text-3xl mb-6 font-extrabold">
        All Projects{" "}
      </p>

      <ProjectGrid projectList={projectList} />
    </AnimatedDiv>
  );
};

export default AllProjectsPage;