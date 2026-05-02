interface Props {
  text: string;
}
export function AnimatedTitle({ text }: Props) {
  return (
    <h1 className="text-shimmer text-center font-black tracking-tight text-5xl sm:text-7xl md:text-8xl leading-none">
      {text.split("").map((ch, i) => (
        <span
          key={i}
          className="letter-rise"
          style={{ animationDelay: `${i * 60}ms` }}
        >
          {ch === " " ? "\u00A0" : ch}
        </span>
      ))}
    </h1>
  );
}
