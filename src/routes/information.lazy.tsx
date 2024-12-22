import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/information")({
  component: RouteInformation,
});

function RouteInformation() {
  return <div>Hello "/information"!</div>;
}
