import "./App.scss";
import Landing from "./components/landing/landing";
import { useEffect, useState ,useContext,createContext} from "react";
const VisitedContext=createContext(null);
function App() {
  const [isFirstVisit, setVisited] = useState(() => {
    if (localStorage.getItem("isFirstVisit") === null)
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
      <VisitedContext.Provider value={isFirstVisit}>
        <Landing />
      </VisitedContext.Provider>
    </div>
  );
}

export {App,VisitedContext};
