import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/migration")({
  component: RouteMigration,
});

function RouteMigration() {
  return (
    <>
      <header>
        <div className="header-content">
          <h1>Migration</h1>
          <hr />
        </div>
      </header>
      <main>
        <section>
          <div className="section-content">
            <h2>Migration page main content area.</h2>
          </div>
        </section>
      </main>
    </>
  );
}
