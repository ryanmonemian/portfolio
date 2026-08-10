import { journey } from "@/data/journey";
import Reveal from "@/components/Reveal";

export default function JourneyTimeline() {
  return (
    <div className="flex flex-col gap-6 border-l border-border pl-8 sm:pl-10">
      {journey.map((beat, i) => (
        <Reveal key={beat.slug} delay={i * 100} className="relative">
          <span className="absolute -left-[41px] top-1.5 h-3 w-3 rounded-full border-2 border-background bg-accent sm:-left-[49px]" />
          <p className="mb-2 text-xs font-normal uppercase tracking-widest text-accent">
            {beat.label}
          </p>
          <h3 className="font-heading text-xl font-semibold sm:text-2xl">{beat.title}</h3>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            {beat.body}
          </p>
        </Reveal>
      ))}
    </div>
  );
}
