import Link from "next/link";

export function SectionTitle({
  eyebrow,
  title,
  href,
}: {
  eyebrow: string;
  title: string;
  href?: string;
}) {
  const titleContent = <h2>{title}</h2>;

  return (
    <div className="section-title">
      <div className="rule" />
      <p>{eyebrow}</p>
      <div className="rule" />

      {href ? (
        <Link href={href} className="section-title-link">
          {titleContent}
        </Link>
      ) : (
        titleContent
      )}
    </div>
  );
}
