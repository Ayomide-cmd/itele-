export function SectionTitle({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) {
  return (
    <div className="section-title">
      <div className="rule" />
      <p>{eyebrow}</p>
      <div className="rule" />
      <h2>{title}</h2>
    </div>
  );
}
