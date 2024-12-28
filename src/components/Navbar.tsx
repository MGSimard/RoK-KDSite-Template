import { Link } from "@tanstack/react-router";
import kvks from "../data/kvkdata.json";

export function Navbar() {
  return (
    <nav className="noselect">
      <div className="nav-content">
        <Link to="/">
          <span className="logo-as-text">KD0000</span>
          {/* <img alt="Logo" /> */}
        </Link>
        <ul className="nav-links">
          <li>
            <Link to="/" className="nav-link">
              HOME
            </Link>
          </li>
          <li className="nav-dropdown">
            {/* TODO: ARIA EXPAND CONTROL */}
            <span className="nav-link" tabIndex={0}>
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
