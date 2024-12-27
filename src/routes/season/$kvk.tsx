import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Section } from "../../components/Section";
import { IconExternal } from "../../components/Icons";
import kvks from "../../data/kvkdata.json";

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
        {/* RENDER FORM LINKS FROM KVKDATA.JSON */}
        {kvkData.forms.length > 0 && (
          <Section classes="section-light center">
            <div>
              <h2>Form Submissions</h2>
              <p className="flavor">Fill each form at the appropriate time prior to the deadline.</p>
            </div>
            <div className="form-links">
              {kvkData.forms.map((form) => (
                <FormLink formData={form} key={form.formTitle} />
              ))}
            </div>
          </Section>
        )}
        {/* RENDER PLAYER STATISTICS DATA FROM KVKDATA.JSON */}
        <Section classes="center">
          <div>
            <h2>Rankings</h2>
            <p className="flavor">List of top KVK contributors.</p>
            <hr className="divider" />
            {kvkData.dataUrl ? (
              // TAKES IN ANY IFRAME LINK; GOOGLE SHEETS, LOOKER STUDIO ETC.
              <iframe className="kvk-data-iframe" src={kvkData.dataUrl}></iframe>
            ) : (
              <p className="flavor">Not available at this time.</p>
            )}
          </div>
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

function FormLink({ formData }: { formData: { formTitle: string; deadlineUnix: number; formLink: string } }) {
  const { formTitle, deadlineUnix, formLink } = formData;

  return (
    <a href={formLink} target="_blank">
      <h3>
        <span className="withicon">
          {formTitle}
          <IconExternal />
        </span>
      </h3>
      <FormTimer deadlineUnix={deadlineUnix} />
      {/* GREEN TIMER - YELLOW TIMER UNDER 24HRS - RED SUBMISSIONS CLOSED */}
    </a>
  );
}
function FormTimer({ deadlineUnix }: { deadlineUnix: number }) {
  // IF NO DEADLINE PROVIDED RETURN NOT YET STARTED
  if (!deadlineUnix) return <span className="flavor">NOT YET STARTED.</span>;
  // IF DEADLINE IS PAST, RETURN SUBMISSIONS CLOSED
  const currentUnix = Math.floor(Date.now() / 1000);
  if (currentUnix > deadlineUnix) return <span className="timer-closed">SUBMISSIONS CLOSED</span>;

  const [timeLeft, setTimeLeft] = useState(deadlineUnix - currentUnix);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(deadlineUnix - Math.floor(Date.now() / 1000));
    }, 1000);

    return () => clearInterval(timer);
  }, [deadlineUnix]);

  const days = Math.floor(timeLeft / (60 * 60 * 24));
  const hours = Math.floor((timeLeft % (60 * 60 * 24)) / (60 * 60));
  const minutes = Math.floor((timeLeft % (60 * 60)) / 60);
  const seconds = timeLeft % 60;

  return (
    <span className={timeLeft > 86400 ? "timer-more24" : "timer-less24"}>
      {days ? days + "d " : ""}
      {hours ? hours + "h " : ""}
      {minutes ? minutes + "m " : ""}
      {seconds ? seconds + "s" : ""}
    </span>
  );
}
