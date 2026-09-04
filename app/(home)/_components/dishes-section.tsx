"use client";

import Animated from "@/components/animated";
import { dishes } from "@/data/data";
import { motion } from "motion/react";
import Image from "next/image";
import { useState } from "react";

export default function DishesS() {
  const [rotate, setRotate] = useState<Record<number, number>>({});

  return (
    <section id="dishes" className="px-auto mt-44">
      <div className="mb-16 text-center">
        <Animated>
          <p className="text-primary mb-3.5 font-medium uppercase">
            Chef&apos;s Signature Selection
          </p>
        </Animated>

        <Animated>
          <h2 className="mx-auto max-w-lg text-4xl text-balance md:text-5xl">
            Discover our signature dishes
          </h2>
        </Animated>
      </div>

      <div className="mx-auto grid max-w-5xl grid-cols-2 gap-12 md:grid-cols-4 md:gap-16">
        {dishes.map((dish, index) => (
          <Animated
            key={index}
            y={80}
            delay={index * 0.1}
            className="flex shrink-0 cursor-pointer flex-col items-center text-center"
          >
            <motion.div
              animate={{ rotate: rotate[index] || 0 }}
              transition={{ type: "spring", stiffness: 80, damping: 15 }}
              onHoverStart={() =>
                setRotate((prev) => ({
                  ...prev,
                  [index]: (prev[index] || 0) + 150,
                }))
              }
              onHoverEnd={() =>
                setRotate((prev) => ({
                  ...prev,
                  [index]: (prev[index] || 0) - 150,
                }))
              }
            >
              <Image
                src={dish.img}
                alt={dish.title}
                width={300}
                height={300}
                className="size-32 object-cover md:size-36"
              />
            </motion.div>

            <h3 className="mt-5">{dish.title}</h3>
            <p className="mt-2 text-zinc-600">{dish.price}</p>
          </Animated>
        ))}
      </div>
    </section>
  );
}
