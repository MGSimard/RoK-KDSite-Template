import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import kvks from "../data/kvkdata.json";

export const Route = createRootRoute({
  component: Layout,
});

function Layout() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        {kvks.map((kvk) => (
          <Link to="/kvk/$kvk" params={{ kvk: kvk.name }}>
            {kvk.name}
          </Link>
        ))}
        <Link to="/information">Information</Link>
        <Link to="/migration">Migration</Link>
      </nav>
      <hr />
      <Outlet />
      <TanStackRouterDevtools />
    </>
  );
}
