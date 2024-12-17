import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={{ padding: "16px", background: "#6200ea", color: "#fff" }}>
      <Link to="/" style={{ margin: "0 16px", color: "#fff", textDecoration: "none" }}>
        Home
      </Link>
      <Link to="/about" style={{ margin: "0 16px", color: "#fff", textDecoration: "none" }}>
        Über uns
      </Link>
      <Link to="/contact" style={{ margin: "0 16px", color: "#fff", textDecoration: "none" }}>
        Kontakt
      </Link>
    </nav>
  );
};

export default Navbar;