import { Briefcase } from "lucide-react";

export default function ExperienceCard({ experience }) {
  return (
    <div className="bg-background border border-border rounded-xl p-6 shadow-sm hover:shadow-md transition">
      {/* Timeline Dot */}
      <span className="absolute left-[-9px] top-1 w-4 h-4 rounded-full bg-foreground"></span>

      <div className="bg-background border border-border rounded-xl p-6 shadow-sm hover:shadow-md transition">
        <h3 className="text-xl font-semibold flex items-center gap-2">
          <Briefcase size={18} />
          {experience.role}
        </h3>

        <p className="text-sm text-muted-foreground mt-1">
          {experience.company} · {experience.location}
        </p>

        <p className="text-sm text-muted-foreground mb-4">
          {experience.duration}
        </p>

        <ul className="list-disc pl-5 space-y-2 text-sm">
          {experience.points.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
