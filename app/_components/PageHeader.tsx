export default function PageHeader({
  title,
  lead,
}: {
  title: string;
  lead?: React.ReactNode;
}) {
  return (
    <header className="mb-10 border-b border-line pb-8">
      <h1 className="text-4xl font-semibold sm:text-[2.6rem] sm:leading-[1.1]">{title}</h1>
      {lead ? (
        <p className="mt-4 max-w-[62ch] font-serif text-xl leading-snug text-muted">{lead}</p>
      ) : null}
    </header>
  );
}

export function Section({
  id,
  title,
  children,
}: {
  id?: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="mt-12 first:mt-0">
      <h2 className="mb-4 text-2xl font-semibold">{title}</h2>
      {children}
    </section>
  );
}
