import Animated from "@/components/animated";
import { statsData } from "@/data/data";

export default function StatsSection() {
  return (
    <section id="stats" className="px-auto mt-32">
      <div className="*: mx-auto flex max-w-7xl flex-col items-center justify-center gap-12 md:flex-row md:gap-25">
        {statsData.map((item, index) => (
          <Animated
            key={index}
            delay={0.2}
            className="flex flex-col items-center text-center"
          >
            <span className="text-6xl">{item.number}</span>
            <h3 className="mt-5.5 text-2xl">{item.title}</h3>
            <p className="text-muted-foreground mt-3.5 max-w-72 font-light">
              {item.description}
            </p>
          </Animated>
        ))}
      </div>
    </section>
  );
}
