import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/migration")({
  component: RouteMigration,
});

function RouteMigration() {
  return <div>Hello "/migration"!</div>;
}
