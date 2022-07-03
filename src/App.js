import { BrowserRouter, Route, Routes, Switch, Redirect } from "react-router-dom";
import "../src/styles/index.scss"
import Projects from './Components/Projects'
import Epics from './Components/Epics'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Projects />} />
        <Route path="/epics" element={<Epics />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

