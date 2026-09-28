import { useEffect, useState } from "react";

const LINKS = [
  { id: "work", label: "Work" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="nav">
      <div className="nav-inner">
        <a className="nav-mark" href="#top" aria-label="Back to top">
          AD
        </a>

        <nav className="nav-queue" aria-label="Section navigation">
          <ol>
            {LINKS.map((link) => (
              <li key={link.id}>
                <a href={`#${link.id}`}>{link.label}</a>
              </li>
            ))}
          </ol>
        </nav>

        <button
          className="nav-toggle"
          aria-expanded={open}
          aria-label="Toggle navigation"
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
        </button>
      </div>

      {open && (
        <div className="nav-sheet">
          <ol>
            {LINKS.map((link) => (
              <li key={link.id}>
                <a href={`#${link.id}`} onClick={() => setOpen(false)}>
                  {link.label}
                </a>
              </li>
            ))}
          </ol>
        </div>
      )}
    </header>
  );
}
