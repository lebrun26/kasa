import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Logements from "./pages/Logements";
import Error from "./pages/Error";
import Apropos from "./pages/Apropos";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/logements" element={<Logements />} />
          <Route path="/Apropos" element={<Apropos />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
