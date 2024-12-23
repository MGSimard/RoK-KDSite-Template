import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/information")({
  component: RouteInformation,
});

function RouteInformation() {
  return (
    <>
      <header>
        <div className="header-content">
          <h1>Information</h1>
          <hr />
        </div>
      </header>
      <main>
        <section>
          <div className="section-content">
            <h2>Information page main content area.</h2>
          </div>
        </section>
      </main>
    </>
  );
}
