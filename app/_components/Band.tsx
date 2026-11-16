"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";

// The strip of confocal image that runs under the header on every page.
// It is taller on the home page and carries a caption there.
export default function Band() {
  const home = usePathname() === "/";
  return (
    <div className="bg-night">
      <div className={"relative mx-auto max-w-[76rem] overflow-hidden " + (home ? "h-40 sm:h-56" : "h-20 sm:h-24")}>
        <Image
          src="/banner.png"
          alt="Confocal micrograph of a Drosophila embryonic heart tube: two rows of cardiac cell nuclei running along the embryo."
          fill
          priority
          sizes="(min-width: 76rem) 76rem, 100vw"
          className="object-cover object-[50%_56%] [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
        />
        {home ? (
          <p className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-night/85 to-transparent px-5 pb-2 pt-8 text-right text-[0.72rem] tracking-wide text-white/80 sm:px-8">
            <em>Drosophila</em> embryonic heart tube, confocal micrograph
          </p>
        ) : null}
      </div>
    </div>
  );
}
