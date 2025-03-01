import { createLazyFileRoute } from "@tanstack/react-router";
import { Section } from "../components/Section";
import faq from "../data/faq.json";

export const Route = createLazyFileRoute("/information")({
  component: RouteInformation,
});

function RouteInformation() {
  const handleAccordion = (e: React.SyntheticEvent) => {
    const target = e.target as HTMLElement;
    if (target.tagName === "SUMMARY") {
      const targetDetails = target.parentElement as HTMLDetailsElement;
      const faqBoard = targetDetails.parentElement;
      if (!faqBoard) return;
      Array.from(faqBoard.children).forEach((entry) => {
        if (entry !== targetDetails && entry.tagName === "DETAILS") {
          (entry as HTMLDetailsElement).open = false;
        }
      });
    }
  };

  return (
    <>
      <header>
        <div className="header-content">
          <h1>Information</h1>
          <hr className="divider" />
        </div>
      </header>
      <main>
        {/* RENDER FAQ FROM FAQ.JSON */}
        <Section classes="section-dark">
          <div className="faq-board" onClick={handleAccordion}>
            {faq.map((entry) => (
              <details key={entry.q}>
                <summary className="noselect">{entry.q}</summary>
                <p>{entry.a}</p>
              </details>
            ))}
          </div>
        </Section>
      </main>
    </>
  );
}
