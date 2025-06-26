function Navbar({ onNavigate }) {
  return (
    <nav style={{ padding: "1rem", background: "#eee" }}>
      <ul style={{ display: "flex", listStyle: "none", gap: "1rem", margin: 0}}>
         <li><a href="#" style={{ textDecoration: "none" }} onClick={() => onNavigate("welcome")}>Home</a></li>
         <li><a href="#" style={{ textDecoration: "none" }} onClick={() => onNavigate("events")}>My Events</a></li>
         <li><a href="#" style={{ textDecoration: "none" }} onClick={() => onNavigate("register")}>Register</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;