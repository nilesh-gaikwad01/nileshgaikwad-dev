"use client";

import ExperienceCard from "../ExperienceCard";
import { experienceData } from "@/lib/experience";

export default function Experience() {
  return (
    <section
      id="experience"
      className="w-full max-w-4xl mx-auto px-6 py-20 text-foreground"
    >
      <div className="text-center mb-14">
        <h2 className="text-4xl md:text-6xl font-bold mb-4">
          Experience
        </h2>
        <p className="text-muted-foreground">
          My professional journey so far
        </p>
      </div>

      <div className="flex flex-col">
        {experienceData.map((exp, index) => (
          <ExperienceCard key={index} experience={exp} />
        ))}
      </div>
    </section>
  );
}
