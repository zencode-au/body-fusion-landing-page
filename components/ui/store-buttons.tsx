import Image from "next/image";

const APPLE_STORE_URL = "#";
const GOOGLE_PLAY_URL = "#";

export function StoreButtons() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <a
        href={APPLE_STORE_URL}
        aria-label="Download on the App Store"
        className="transition-transform hover:scale-[1.02]"
      >
        <Image
          src="/assets/app-store-button.svg"
          alt="Download on the App Store"
          width={172}
          height={52}
        />
      </a>
      <a
        href={GOOGLE_PLAY_URL}
        aria-label="Get it on Google Play"
        className="transition-transform hover:scale-[1.02]"
      >
        <Image
          src="/assets/play-store-button.png"
          alt="Get it on Google Play"
          width={172}
          height={52}
        />
      </a>
    </div>
  );
}
