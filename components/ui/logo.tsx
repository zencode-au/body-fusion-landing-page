import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  full?: boolean;
};

export function Logo({ full = true }: LogoProps) {
  return (
    <Link
      href="/"
      aria-label="Body Fusion home"
      className="inline-flex items-center"
    >
      <Image
        src={
          full
            ? "/assets/body-fusion-logo-full.png"
            : "/assets/body-fusion-logo.png"
        }
        alt="Body Fusion"
        width={full ? 180 : 44}
        height={full ? 42 : 44}
        priority
      />
    </Link>
  );
}
