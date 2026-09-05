import Animated from "@/components/animated";
import { featuresData } from "@/data/data";
import { ChefHat, Heart, Leaf } from "lucide-react";
import Image from "next/image";

const iconMap = {
  ChefHat,
  Leaf,
  Heart,
};
export default function FeaturesSection() {
  return (
    <section id="features" className="mt-44 px-6">
      <div className="mb-16 text-center">
        <Animated delay={0.2}>
          <p className="text-primary mb-3.5 font-medium uppercase">
            What Sets Us Apart
          </p>
        </Animated>

        <Animated>
          <h2 className="mx-auto max-w-lg text-4xl text-balance md:text-5xl">
            Crafting memorable dining experiences
          </h2>
        </Animated>
      </div>

      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-14 md:flex-row">
        <div className="max-w-md space-y-10">
          {featuresData.map((feature, index) => {
            const IconComponent = iconMap[feature.icon as keyof typeof iconMap];
            return (
              <Animated
                key={index}
                y={150}
                delay={index * 0.15}
                className="flex items-start gap-4 text-left"
              >
                {IconComponent && (
                  <IconComponent className="text-primary mt-0.5 size-5 shrink-0" />
                )}
                <div>
                  <h3 className="mb-2 text-xl">{feature.title}</h3>
                  <p className="text-muted-foreground max-w-sm">
                    {feature.description}
                  </p>
                </div>
              </Animated>
            );
          })}
        </div>
        <Animated x={50} y={50}>
          <Image
            src={"/assets/chef.png"}
            alt="Chef plating a signature dish"
            width={500}
            height={500}
            className="h-111 w-full max-w-sm rounded-3xl object-cover"
          />
        </Animated>
      </div>
    </section>
  );
}
