import { Badge } from "@/components/ui/badge";
import { Icons } from "@/components/icons/Icons";
import { skills } from "../constants/skills";

export default function Skills() {
  return (
    <section className="flex min-h-0 flex-col gap-y-3 mt-5">
      <h2 className="text-2xl font-bold">Skills</h2>
      <div className="flex flex-wrap gap-1.5">
        {skills.map((skill) => (
          <Badge
            variant={skill.variant as any}
            className="[&:last-child]:mt-1.5"
          >
            {skill.icon}
            {skill.name}
          </Badge>
        ))}
      </div>
    </section>
  );
}
