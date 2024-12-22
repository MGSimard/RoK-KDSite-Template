import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: RouteHome,
});

function RouteHome() {
  return <div>Hello "/"!</div>;
}
