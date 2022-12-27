import "./App.scss";
import Landing from "./components/landing/landing";
import { useState } from "react";
function App() {
  const [isFirstVisit,setVisited]=useState(true)
  return (
    <div className="App">
      <Landing isFirstVisit/>
    </div>
  );
}

export default App;
