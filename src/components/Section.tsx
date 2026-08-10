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
    <section id={id} className="mx-auto max-w-5xl px-6 py-14 sm:py-20">
      {title && (
        <h2 className="mb-10 text-sm font-normal uppercase tracking-widest text-accent">
          {title}
        </h2>
      )}
      {children}
    </section>
  );
}
