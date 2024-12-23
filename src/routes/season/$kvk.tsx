import { createFileRoute } from "@tanstack/react-router";
import kvks from "../../data/kvkdata.json";

/* Fetch KVK Data - TODO: Leaf render block, get actual data */

export const Route = createFileRoute("/season/$kvk")({
  component: RouteKVK,
  loader: async ({ params }) => {
    return {
      kvk: params.kvk,
    };
  },
  pendingComponent: () => <Skeleton />,
  errorComponent: () => <Error />,
});

function RouteKVK() {
  const { kvk } = Route.useLoaderData();

  if (!(kvk in kvks)) return <Error />;
  const kvkData = kvks[kvk as keyof typeof kvks];

  return (
    <>
      <header>
        <div className="header-content">
          <h1>{kvk}</h1>
          <hr />
          <span className="h1-sub">{kvkData.title}</span>
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

function Skeleton() {
  return (
    <>
      <header>
        <div className="header-content">
          <h1>Loading...</h1>
          <hr />
          <span className="h1-sub">Fetching Season Data</span>
        </div>
      </header>
      <main>
        <section>
          <div className="section-content"></div>
        </section>
      </main>
    </>
  );
}

function Error() {
  const { kvk } = Route.useLoaderData();
  return (
    <>
      <header>
        <div className="header-content">
          <h1>Error</h1>
          <hr />
          <span className="h1-sub">Season "{kvk}" not found</span>
        </div>
      </header>
      <main>
        <section>
          <div className="section-content"></div>
        </section>
      </main>
    </>
  );
}
