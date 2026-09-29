import { Marquee } from "@/components/ui/marquee";
import { marqueeItems } from "@/content/home";

export function HomeMarquee() {
  return (
    <div className="mx-auto max-w-[1200px] px-4">
      <Marquee items={marqueeItems} />
    </div>
  );
}
