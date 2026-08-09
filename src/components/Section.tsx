import type { ReactNode } from "react";

export default function Section({
  id,
  title,
  children,
}: {
  id?: string;
  title?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="mx-auto max-w-5xl px-6 py-20 sm:py-28">
      {title && (
        <h2 className="mb-10 font-mono text-sm font-semibold uppercase tracking-widest text-accent">
          {title}
        </h2>
      )}
      {children}
    </section>
  );
}
