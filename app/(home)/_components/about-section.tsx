import Animated from "@/components/animated";
import Image from "next/image";
import Link from "next/link";

export default function AbouSection() {
  return (
    <section id="about" className="mt-44 px-6">
      <div className="mx-auto flex max-w-7xl flex-col gap-14 md:flex-row md:gap-16">
        {/* Left Side: Main Image */}
        <Animated scale={0.8} y={0}>
          <Image
            src={"/assets/about.png"}
            alt="Plated salmon dinner at Retro Premium Restaurant"
            width={500}
            height={500}
            className="h-full w-full max-w-137 rounded-3xl object-cover"
          />
        </Animated>
        {/* Rigth Side: Content Details */}
        <div>
          <Animated scale={0.8} y={0} className="flex items-center gap-2">
            <Image
              src={"/assets/iconL.png"}
              alt=""
              width={50}
              height={50}
              className="size-6"
            />
            <span className="font-medium tracking-widest uppercase">
              Crafted with Passion
            </span>
            <Image
              src={"/assets/iconR.png"}
              alt=""
              width={50}
              height={50}
              className="size-6"
            />
          </Animated>

          <Animated scale={0.8} y={0} className="flex items-center gap-2">
            <h2 className="mt-5 text-4xl text-balance md:text-5xl">
              Experience dining beyond expectations
            </h2>
          </Animated>

          <Animated delay={0.2}>
            <p className="text-muted-foreground mt-4.5 max-w-sm">
              We combine fresh local ingredients, creative recipes and elegant
              presentation to deliver a memorable experience with every visit.
            </p>
          </Animated>

          <Animated
            delay={0.2}
            className="bg-primary text-primary-foreground mt-9 flex w-fit items-center gap-3 rounded-lg p-2 pr-8"
          >
            <div className="relative size-16 shrink-0 overflow-hidden rounded-lg">
              <Image
                src="/assets/about.png"
                alt="Bistro Royale Location Preview"
                fill
                sizes="64px"
                className="object-cover"
              />
            </div>
            <div className="flex flex-col gap-2">
              <p className="font-medium">Bistro Royale, NY</p>
              <Link href={"#"}>View on Map</Link>
            </div>
          </Animated>
        </div>
      </div>
    </section>
  );
}
