import { createLazyFileRoute } from "@tanstack/react-router";
import contactOptions from "../data/contacts.json";

export const Route = createLazyFileRoute("/migration")({
  component: RouteMigration,
});

function RouteMigration() {
  return (
    <>
      <main className="hero">
        <div>
          <h1>Migration</h1>
          <p>Join the #1 Kingdom in Rise of Kingdoms</p>
        </div>
        <hr className="divider" />
        <div className="hero-links noselect">
          {contactOptions.map((option) => (
            <a href={option.link} target="_blank" className="btn btn-primary">
              {option.buttonText}
            </a>
          ))}
        </div>
      </main>
    </>
  );
}
