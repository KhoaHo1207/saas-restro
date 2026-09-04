import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href={"/"}>
      <Image
        src={"/assets/logo.svg"}
        alt="Retro Premium Restaurant Logo"
        width={100}
        height={100}
        className="h-full w-full object-cover"
        priority
      />
    </Link>
  );
}
