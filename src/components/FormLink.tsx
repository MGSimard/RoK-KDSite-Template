export function FormLink({ title, link = "#", deadline }: { title: string; link?: string; deadline?: string }) {
  return (
    <a href={link} target="_blank">
      <h3>{title}</h3>
      <span>00:00:00</span>
      {deadline && deadline}
      {/* GREEN TIMER - YELLOW TIMER UNDER 24HRS - RED SUBMISSIONS CLOSED */}
    </a>
  );
}
