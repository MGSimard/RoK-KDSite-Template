import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";

export const Route = createRootRoute({
  component: Layout,
});

function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
      {/* <TanStackRouterDevtools /> */}
    </>
  );
}
