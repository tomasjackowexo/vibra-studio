import { Brain, Cigarette, Flower2, LayoutGrid, Moon, Repeat, type LucideIcon } from "lucide-react";

const icons: Record<string, LucideIcon> = {
  Brain,
  Cigarette,
  Flower2,
  LayoutGrid,
  Moon,
  Repeat,
};

export function TopicIcon({ name }: { name: string }) {
  const Icon = icons[name] ?? LayoutGrid;
  return <Icon className="size-5 text-gold-dark" aria-hidden />;
}
