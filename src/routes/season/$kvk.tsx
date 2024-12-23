import { createFileRoute } from "@tanstack/react-router";
import { Section } from "../../components/Section";
import kvks from "../../data/kvkdata.json";
import { IconExternal } from "../../components/Icons";

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
        <Section classes="section-light center">
          <div>
            <h2>Form Submissions</h2>
            <p className="flavor">Fill each form at the appropriate time prior to the deadline.</p>
          </div>
          <div className="form-links">
            <FormLink title="Pre-KvK" />
            <FormLink title="Post-KvK" />
            <FormLink title="Honor" />
          </div>
        </Section>
        <Section classes="center">
          <div>
            <h2>Rankings</h2>
            <p className="flavor">List of top KVK contributors.</p>
            <hr className="divider" />
          </div>
          <KvkTable />
        </Section>
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

function FormLink({ title, link = "#", deadline }: { title: string; link?: string; deadline?: string }) {
  return (
    <a href={link} target="_blank">
      <h3>
        <span className="withicon">
          {title}
          <IconExternal />
        </span>
      </h3>
      <span>00:00:00</span>
      {deadline && deadline}
      {/* GREEN TIMER - YELLOW TIMER UNDER 24HRS - RED SUBMISSIONS CLOSED */}
    </a>
  );
}

export function KvkTable() {
  return (
    <table className="kvk-table">
      <thead>
        <tr>
          <th>Table head</th>
          <th>Table head</th>
          <th>Table head</th>
          <th>Table head</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Table row</td>
          <td>Table row</td>
          <td>Table row</td>
          <td>Table row</td>
        </tr>
      </tbody>
    </table>
  );
}
