// App.tsx
import "./App.css";
import { BrowserRouter } from "react-router-dom";

import { useSnapshot } from "valtio";
import state from "./store/store";
import Router from "./routers/Router";

function App() {
  const snap = useSnapshot(state);

  if (snap.darkMode) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }

  return (
    <>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </>
  );
}

export default App;
