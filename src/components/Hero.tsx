export default function Hero() {
  return (
    <section id="top" className="mx-auto flex max-w-5xl flex-col justify-center px-6 py-28 sm:py-36">
      <p className="mb-4 font-mono text-sm text-accent">Hi, I&apos;m</p>
      <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">Ryan Monemian</h1>
      <p className="mt-4 max-w-xl text-lg text-muted sm:text-xl">
        I&apos;m a software engineer who builds fast, accessible, and thoughtful web products.
      </p>

      <div className="mt-8 flex flex-wrap gap-4">
        <a
          href="#projects"
          className="rounded-full bg-accent px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
        >
          View my work
        </a>
        <a
          href="#contact"
          className="rounded-full border border-border px-6 py-3 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
        >
          Get in touch
        </a>
      </div>
    </section>
  );
}
