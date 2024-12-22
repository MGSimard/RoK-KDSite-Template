import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/kvk/$kvk")({
  component: RouteKVK,
  loader: async ({ params }) => {
    /* Fetch KVK Data Here - TODO: Leaf render block, get actual data */
    await new Promise((resolve) => setTimeout(resolve, 5000));
    return {
      kvk: params.kvk,
    };
  },
  pendingComponent: () => <div>Loading...</div>,
  errorComponent: () => <div>Error</div>,
});

function RouteKVK() {
  const { kvk } = Route.useLoaderData();
  return <div>PAGE FOR: {kvk}</div>;
}
