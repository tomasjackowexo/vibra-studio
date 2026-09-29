import { PageHero } from "@/components/content/page-hero";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="pb-16">
      <PageHero
        label="404"
        title="Stránka"
        accent="sa nenašla"
        perex="Táto stránka sa niekam stratila. Vráťte sa na úvod a nájdite si cestu k pokoju odtiaľ."
      />
      <div className="px-4">
        <div className="mx-auto max-w-[1200px]">
          <Button href="/" variant="dark">
            Úvod
          </Button>
        </div>
      </div>
    </div>
  );
}
