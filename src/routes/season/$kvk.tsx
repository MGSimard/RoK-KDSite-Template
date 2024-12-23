import { createFileRoute } from "@tanstack/react-router";

/* Fetch KVK Data - TODO: Leaf render block, get actual data */

export const Route = createFileRoute("/season/$kvk")({
  component: RouteKVK,
  loader: async ({ params }) => {
    return {
      kvk: params.kvk,
    };
  },
  pendingComponent: () => <div>Loading...</div>,
  errorComponent: () => <div>Error</div>,
});

function RouteKVK() {
  const { kvk } = Route.useLoaderData();
  return (
    <>
      <header>
        <div className="header-content">
          <h1>{kvk} PAGE HEADER</h1>
        </div>
      </header>
      <main>
        <section>
          <div className="section-content">
            <h2>{kvk} PAGE MAIN CONTENT AREA</h2>
          </div>
        </section>
      </main>
    </>
  );
}
