import {
  Award,
  Briefcase,
  GraduationCap,
  Handshake,
  Users,
} from "lucide-react";

type StatItem = {
  value: string;
  label: string;
  icon: "users" | "graduation" | "briefcase" | "handshake" | "award";
};

const iconMap = {
  users: Users,
  graduation: GraduationCap,
  briefcase: Briefcase,
  handshake: Handshake,
  award: Award,
};

type StatsBarProps = {
  items: StatItem[];
  columns?: 4 | 5;
};

export function StatsBar({ items, columns = 4 }: StatsBarProps) {
  return (
    <section className="relative z-10 -mt-8 w-full px-4">
      <div
        className={`mx-auto grid w-full max-w-6xl grid-cols-2 gap-6 rounded-2xl bg-white px-6 py-8 shadow-xl lg:px-12 ${
          columns === 5
            ? "md:grid-cols-3 lg:grid-cols-5"
            : "md:grid-cols-4"
        }`}
      >
        {items.map((stat) => {
          const Icon = iconMap[stat.icon];
          return (
            <div key={stat.label} className="flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-red-50">
                <Icon className="h-5 w-5 text-tasvee-red" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                <p className="text-xs text-gray-500 md:text-sm">{stat.label}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
