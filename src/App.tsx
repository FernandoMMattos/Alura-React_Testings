import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";
import Sorteio from "./pages/Sorteio";
import Config from "./pages/Config";

function App() {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <Routes>
          <Route path="/" element={<Config />}/>
          <Route path="/sorteio" element={<Sorteio />}/>
        </Routes>
      </RecoilRoot>
    </BrowserRouter>
  );
}

export default App;
