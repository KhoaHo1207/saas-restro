import { cn } from "@/lib/utils";
import Link from "next/link";
import { Button } from "./ui/button";

export default function BookingButton({ className }: { className?: string }) {
  return (
    <Link
      href={"#booking-process"}
      className={cn(className)}
    >
      <Button
        variant={"default"}
        size={"lg"}
        className={
          "text-primary-foreground hover:bg-primary/90 rounded-full p-6"
        }
      >
        Book a table
      </Button>
    </Link>
  );
}
