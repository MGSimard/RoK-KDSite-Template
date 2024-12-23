import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/migration")({
  component: RouteMigration,
});

function RouteMigration() {
  return (
    <>
      <header>
        <div className="header-content">
          <h1>MIGRATION PAGE HEADER</h1>
        </div>
      </header>
      <main>
        <section>
          <div className="section-content">
            <h2>MIGRATION PAGE MAIN CONTENT AREA</h2>
          </div>
        </section>
      </main>
    </>
  );
}
