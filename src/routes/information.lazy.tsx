import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/information")({
  component: RouteInformation,
});

function RouteInformation() {
  return (
    <>
      <header>
        <div className="header-content">
          <h1>INFORMATION PAGE HEADER</h1>
        </div>
      </header>
      <main>
        <section>
          <div className="section-content">
            <h2>INFORMATION PAGE MAIN CONTENT AREA</h2>
          </div>
        </section>
      </main>
    </>
  );
}
