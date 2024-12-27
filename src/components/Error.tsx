import { Link } from "@tanstack/react-router";

export function NotFound() {
  return (
    <main className="not-found">
      <h1>Error</h1>
      <hr className="divider" />
      <Link to="/" className="btn btn-secondary">
        RETURN HOME
      </Link>
    </main>
  );
}
