import { createFileRoute, Link } from "@tanstack/react-router";
import kvks from "../data/kvkdata.json";

export const Route = createFileRoute("/")({
  component: RouteHome,
});

function RouteHome() {
  console.log(kvks);

  return (
    <>
      <main className="hero">
        <h1>
          Kingdom<span>of</span>
          <hr />
          Tanano
        </h1>
        <p>Home of the greatest warriors in Rise of Kingdoms</p>
        <div className="hero-links">
          <Link className="btn btn-primary">CURRENT SEASON</Link>
          <Link to="/migration" className="btn btn-secondary">
            MIGRATION
          </Link>
        </div>
      </main>
    </>
  );
}
