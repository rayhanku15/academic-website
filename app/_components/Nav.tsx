"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { nav } from "../_data/profile";

export default function Nav() {
  const pathname = usePathname();
  return (
    <nav aria-label="Main" className="flex flex-wrap gap-x-6 gap-y-1 text-[0.95rem]">
      {nav.map((item) => {
        const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
        return (
          <Link
            key={item.href}
            href={item.href}
            aria-current={active ? "page" : undefined}
            className={
              "border-b-2 py-1 transition-colors " +
              (active
                ? "border-accent font-medium text-ink"
                : "border-transparent text-muted hover:text-accent")
            }
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
