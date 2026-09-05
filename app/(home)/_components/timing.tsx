import Animated from "@/components/animated";
import BookingButton from "@/components/booking-button";
import { timingData } from "@/data/data";

export default function TimingSection() {
  return (
    <section id="timing" className="px-auto mt-44">
      <Animated
        scale={0.8}
        y={0}
        className="mx-auto flex h-162.5 w-full max-w-5xl items-center justify-center overflow-hidden rounded-3xl bg-[url('/assets/restro-timing.png')] bg-cover bg-center px-6 md:justify-start md:px-14"
      >
        {/* White Card Overlay */}
        <div className="bg-background w-full max-w-xs rounded-3xl p-8">
          <Animated delay={0.2}>
            <h3 className="mb-8 text-xl font-medium">Opening time:</h3>
          </Animated>

          <div className="space-y-7">
            {timingData.map((item, index) => (
              <Animated
                key={index}
                delay={index * 0.15}
                className="flex items-center justify-between"
              >
                <span className="text-muted-foreground font-medium">
                  {item.day}
                </span>
                <span
                  className={`font-medium ${item.hours === "Closed" ? "text-muted-foreground" : "text-foreground"}`}
                >
                  {item.hours}
                </span>
              </Animated>
            ))}
          </div>
          <BookingButton className="mx-auto mt-8 block w-fit" />
        </div>
      </Animated>
    </section>
  );
}
