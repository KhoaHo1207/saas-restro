import Animated from "@/components/animated";
import { faqs } from "@/data/data";
import { Plus, X } from "lucide-react";

export default function FAQsSection() {
  return (
    <section id="faq" className="mt-44">
      <div className="mx-auto max-w-3xl">
        <div className="mb-14 text-center">
          <Animated delay={0.2}>
            <p className="text-primary mb-3.5 font-medium uppercase">FAQs</p>
          </Animated>
          <Animated delay={0.2}>
            <h2 className="mx-auto max-w-2xl text-4xl text-balance md:text-5xl">
              Frequently Asked Questions
            </h2>
          </Animated>
        </div>

        <div className="space-y-3 px-6 md:px-0">
          {faqs.map((faq, index) => (
            <Animated key={index} y={150} delay={index * 0.15}>
              <details className="border-border text-muted-foreground group rounded-lg border">
                <summary className="hover:bg-accent/50 flex cursor-pointer list-none items-center justify-between p-4 transition-colors [&::-webkit-details-marker]:hidden">
                  <span className="text-foreground pr-4">{faq.question}</span>
                  <span className="bg-accent grid size-7 shrink-0 place-content-center rounded-full">
                    <Plus className="size-4 group-open:hidden" />
                    <X className="hidden size-4 group-open:block" />
                  </span>
                </summary>
                <p className="px-5 pb-4 leading-relaxed">{faq.answer}</p>
              </details>
            </Animated>
          ))}
        </div>
      </div>
    </section>
  );
}
