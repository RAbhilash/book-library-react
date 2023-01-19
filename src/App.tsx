import "./App.scss";
import Landing from "./components/landing/landing";
import { createContext, useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
export const themeContext = createContext('')
function App() {
  const [isFirstVisit, setVisited] = useState(() => {
    if (localStorage.getItem("isFirstVisit") === null)
      localStorage.setItem("isFirstVisit", JSON.stringify(true));
    return JSON.parse(
      localStorage.getItem("isFirstVisit") || JSON.stringify(true)
    );
  })
  useEffect(() => {
    setTimeout(() => {
      setVisited(false)
      localStorage.setItem("isFirstVisit", JSON.stringify(false));
    }, 18000);
  }, []);
  function toggleTheme() {
    setTheme(prev => {
      if (prev === 'light')
        return 'dark'
      return 'light'
    })
  }
  const [theme, setTheme] = useState('light')
  return (
    <Router>
      <div className={"App" + theme}>
        <themeContext.Provider value={theme}>
          <Landing showSS={isFirstVisit} />
          <button className={"toggle-theme " + theme} onClick={toggleTheme}><p>Toggle</p></button>
        </themeContext.Provider>
      </div>
    </Router>
  );
}

export default App;
