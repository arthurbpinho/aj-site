import Reveal from "./Reveal.jsx";

export default function SectionTitle({ eyebrow, title, subtitle, align = "left" }) {
  const a = align === "center" ? "text-center mx-auto" : "text-left";
  return (
    <Reveal className={`max-w-2xl ${a}`}>
      {eyebrow && (
        <p className="mb-3 text-xs uppercase tracking-[0.3em] text-gold-600">
          {eyebrow}
        </p>
      )}
      <h2 className="font-serif text-3xl md:text-4xl text-forest-900 leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base md:text-lg text-ink-600 leading-relaxed">
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}
