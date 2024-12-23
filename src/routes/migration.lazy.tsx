import { createLazyFileRoute } from "@tanstack/react-router";
import { Section } from "../components/Section";

export const Route = createLazyFileRoute("/migration")({
  component: RouteMigration,
});

function RouteMigration() {
  return (
    <>
      <header>
        <div className="header-content">
          <h1>Migration</h1>
          <hr className="divider" />
        </div>
      </header>
      <main>
        <Section>
          <h2>Migration page main content area.</h2>
        </Section>
      </main>
    </>
  );
}
