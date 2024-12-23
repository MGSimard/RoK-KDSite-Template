export function Section({ children, classes }: { children: React.ReactNode; classes?: string }) {
  return (
    <section className={classes}>
      <div className="section-content">{children}</div>
    </section>
  );
}
