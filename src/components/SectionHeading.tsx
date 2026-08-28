interface SectionHeadingProps {
  number: string;
  title: string;
}

export default function SectionHeading({ number, title }: SectionHeadingProps) {
  return (
    <div className="flex items-center gap-4">
      <span className="font-mono text-sm font-semibold text-accent">{number}</span>
      <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">{title}</h2>
      <span className="h-px flex-1 bg-border" />
    </div>
  );
}