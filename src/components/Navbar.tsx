import { Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import kvks from "../data/kvkdata.json";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`noselect${isScrolled ? " sticky" : ""}`}>
      <div className="nav-content">
        <Link to="/">
          <span className="logo-as-text">KD0000</span>
        </Link>
        <ul className="nav-links">
          <li>
            <Link to="/" className="nav-link">
              HOME
            </Link>
          </li>
          <li className="nav-dropdown">
            <span className="nav-link" tabIndex={0} aria-haspopup="true">
              SEASONS
            </span>
            <ul>
              {Object.entries(kvks).map(([key, _], i) => (
                <li key={`${i}-${key}`}>
                  <Link to="/season/$kvk" params={{ kvk: key }} className="nav-link">
                    {key}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
          <li>
            <Link to="/information" className="nav-link">
              INFORMATION
            </Link>
          </li>
          <li>
            <Link to="/migration" className="nav-link">
              MIGRATION
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
