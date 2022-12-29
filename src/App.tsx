import "./App.scss";
import Landing from "./components/landing/landing";
import { useEffect, useState } from "react";
function App() {
  const [isFirstVisit, setVisited] = useState(() => {
    if (localStorage.getItem("isFirstVisit") == null)
      localStorage.setItem("isFirstVisit", JSON.stringify(true));
    return JSON.parse(
      localStorage.getItem("isFirstVisit") || JSON.stringify(true)
    );
  });
  useEffect(() => {
    setTimeout(() => {
      setVisited(false);
      localStorage.setItem("isFirstVisit", JSON.stringify(false));
    }, 18000);
  }, []);
  return (
    <div className="App">
      <Landing showSS={isFirstVisit} />
    </div>
  );
}

export default App;
