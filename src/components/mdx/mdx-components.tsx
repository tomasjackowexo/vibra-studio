import type { ComponentPropsWithoutRef } from "react";

function textOf(children: React.ReactNode) {
  return typeof children === "string" ? children : "";
}

export function DropCap({ children }: { children: React.ReactNode }) {
  const plain = textOf(children);
  const drop = plain.length > 0 && !plain.startsWith("[");
  return <p className={drop ? "mdx-dropcap" : undefined}>{children}</p>;
}

export function PullQuote({ children }: { children: React.ReactNode }) {
  return (
    <blockquote className="my-8 border-l border-gold py-1 pl-5 font-serif text-[clamp(1.6rem,3vw,2.15rem)] leading-snug text-gold italic">
      {children}
    </blockquote>
  );
}

export const mdxComponents = {
  DropCap,
  PullQuote,
  h2: (props: ComponentPropsWithoutRef<"h2">) => (
    <h2 className="text-[clamp(1.8rem,3vw,2.4rem)]">{props.children}</h2>
  ),
  h3: (props: ComponentPropsWithoutRef<"h3">) => <h3 className="text-[1.4rem]">{props.children}</h3>,
  p: (props: ComponentPropsWithoutRef<"p">) => <p>{props.children}</p>,
  a: (props: ComponentPropsWithoutRef<"a">) => (
    <a href={props.href} className="underline decoration-gold/60 underline-offset-4">
      {props.children}
    </a>
  ),
  ul: (props: ComponentPropsWithoutRef<"ul">) => <ul>{props.children}</ul>,
  li: (props: ComponentPropsWithoutRef<"li">) => <li className="mt-1">{props.children}</li>,
};
