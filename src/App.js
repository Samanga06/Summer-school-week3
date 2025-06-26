import { useState } from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Welcome from "./components/Welcome";
import Register from "./components/Register";
import Myevent from "./components/Myevent";

function App() {
  const [currentPage, setCurrentPage]= useState("welcome");
  const [events, setEvents] = useState([]);

  const handleRegister = (event) => {
    setEvents([...events, event]);
  };

  return (
    <div>
      <Navbar onNavigate={setCurrentPage}></Navbar>
      {currentPage === "welcome" && <Welcome />}
      {currentPage === "register" && <Register onRegister={handleRegister}/>}
      {currentPage === "events" && <Myevent events={events}/>}
      <Footer></Footer>
    </div>
  );
};

export default App;