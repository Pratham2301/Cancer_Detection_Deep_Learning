import { useState, useEffect } from "react";
import Navbar from "./Navbar.jsx";
import Intro from "./Intro.jsx";
import Working from "./Working.jsx";
import Demo from "./Demo.jsx";

function App() {
  useEffect(() => {
    window.process = {
      ...window.process,
    };
  }, []);
  const [count, setCount] = useState(0);

  return (
    <div className="   ">
      <Navbar />
      <Intro />
      <Working />
      <Demo />{" "}
  
    </div>
  );
}

export default App;