import { createFileRoute } from "@tanstack/react-router";
import kvks from "../../data/kvkdata.json";
import { FormLink } from "../../components/FormLink";
import { KvkTable } from "../../components/KvkTable";

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
          <hr className="divider" />
          <span className="h1-sub">{kvkData.title}</span>
        </div>
      </header>
      <main>
        <section className="section-light">
          <div className="section-content center">
            <div>
              <h2>Form Submissions</h2>
              <p className="flavor">Fill each form at the appropriate time prior to the deadline.</p>
            </div>
            <div className="form-links">
              <FormLink title="Pre-KvK" />
              <FormLink title="Post-KvK" />
              <FormLink title="Honor" />
            </div>
          </div>
        </section>
        <section>
          <div className="section-content center">
            <div>
              <h2>Rankings</h2>
              <p className="flavor">List of top KVK contributors.</p>
              <hr className="divider" />
            </div>
            <KvkTable />
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
          <hr className="divider" />
          <span className="h1-sub">Fetching Season Data</span>
        </div>
      </header>
      <main></main>
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
          <hr className="divider" />
          <span className="h1-sub">Season "{kvk}" not found</span>
        </div>
      </header>
      <main></main>
    </>
  );
}
