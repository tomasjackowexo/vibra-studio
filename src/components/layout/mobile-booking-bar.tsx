"use client";

import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { bookingCta } from "@/content/site";

export function MobileBookingBar() {
  const pathname = usePathname();

  if (pathname === bookingCta.href) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-bg/90 p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur-md md:hidden">
      <Button href={bookingCta.href} variant="dark" className="w-full">
        {bookingCta.label}
      </Button>
    </div>
  );
}
