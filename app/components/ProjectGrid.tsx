"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";
import AnimatedDiv from "./AnimatedDiv";
import ProjectCard from "./ProjectCard";
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

const ProjectGrid = ({ projectList }: Props) => {
  return (
    <Tabs defaultValue="all">
      <TabsList className="dark:bg-zinc-900">
        <TabsTrigger value="all">All</TabsTrigger>
        <TabsTrigger value="Full Stack">Full Stack</TabsTrigger>
        <TabsTrigger value="Frontend">Frontend</TabsTrigger>
      </TabsList>

      <TabsContent value="all">
        <AnimatedDiv ClassName="grid md:grid-cols-2 mt-3 lg:grid-cols-3 xl:grid-cols-4 md:p-0 gap-4 sm:gap-5">
          {projectList.map((p) => (
            <ProjectCard
              key={p.title}
              id={p.id}
              description={p.description}
              image={p.image}
              tech={p.tech}
              title={p.title}
              url={p.url}
              github={p.github}
            />
          ))}
        </AnimatedDiv>
      </TabsContent>
      <TabsContent value="Full Stack">
        <AnimatedDiv ClassName="grid md:grid-cols-2 mt-3 lg:grid-cols-3 xl:grid-cols-4 md:p-0 gap-4 sm:gap-5">
          {projectList
            .filter((p) => p.category === "Full Stack")
            .map((p) => (
              <ProjectCard
                key={p.title}
                id={p.id}
                description={p.description}
                image={p.image}
                tech={p.tech}
                title={p.title}
                url={p.url}
                github={p.github}
              />
            ))}
        </AnimatedDiv>
      </TabsContent>
      <TabsContent value="Frontend">
        <AnimatedDiv ClassName="grid md:grid-cols-2 mt-3 lg:grid-cols-3 xl:grid-cols-4 md:p-0 gap-4 sm:gap-5">
          {projectList
            .filter((p) => p.category === "Frontend")
            .map((p) => (
              <ProjectCard
                key={p.title}
                id={p.id}
                description={p.description}
                image={p.image}
                tech={p.tech}
                title={p.title}
                url={p.url}
                github={p.github}
              />
            ))}
        </AnimatedDiv>
      </TabsContent>
    </Tabs>
  );
};

export default ProjectGrid;
