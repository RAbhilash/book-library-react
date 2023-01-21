import "./App.scss";
import Landing from "./components/landing/landing";
import { createContext, useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import BackgroundColorHandler from "./components/backgroundColorHandler";
export const themeContext = createContext({
  theme: '',
  toggleTheme: () => { }
})
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
      <themeContext.Provider value={{ theme, toggleTheme }}>
        <div className="App">
          <BackgroundColorHandler />
          <Landing showSS={isFirstVisit} />
        </div>
      </themeContext.Provider>
    </Router>
  );
}

export default App;
