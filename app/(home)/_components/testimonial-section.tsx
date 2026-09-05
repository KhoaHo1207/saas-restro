import Animated from "@/components/animated";
import { testimonials } from "@/data/data";
import { Star } from "lucide-react";
import Image from "next/image";

export default function TestimonialSection() {
  return (
    <section id="testimonials" className="mt-44">
      <div className="mb-14 text-center">
        <Animated delay={0.2}>
          <p className="text-primary mb-3.5 font-medium uppercase">
            LOVED BY FOOD LOVERS
          </p>
        </Animated>
        <Animated delay={0.2}>
          <h2 className="mx-auto max-w-lg text-4xl text-balance md:text-5xl">
            What Our Guests Say
          </h2>
        </Animated>
      </div>

      {/* Testimonials Grid */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-4 px-6 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((item, index) => (
          <Animated
            key={index}
            y={80}
            delay={index * 0.1}
            className="border-border hover:bg-accent flex flex-col justify-between rounded-2xl border p-6 text-left"
          >
            <div>
              <div className="mb-4 flex items-center gap-0.5">
                {[...Array(item.rating)].map((_, i) => (
                  <Star key={i} className="fill-primary text-primary size-4" />
                ))}
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                &ldquo;{item.review}&rdquo;
              </p>
            </div>

            <div className="mt-auto flex items-center gap-3">
              <Image
                src={item.avatar}
                alt={item.name}
                width={44}
                height={44}
                className="size-11 shrink-0 rounded-full object-cover"
              />
              <div className="text-sm">
                <p className="mb-0.5 leading-tight font-medium">{item.name}</p>
                <p className="text-muted-foreground">{item.location}</p>
              </div>
            </div>
          </Animated>
        ))}
      </div>
    </section>
  );
}
