import { Routes, Route } from "react-router-dom";
import { Hero, Details, Nav, Results, Footer } from "./components/home/Index";
import Jackpot from "./components/home/Jackpot";

import "./css/bootstrap.min.css";
import "./css/style.css";


function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route exact path="/" element={<Hero />} />
        <Route path="/details" element={<Details />} />
        <Route path='/results' element={<Results/>} />
        <Route path='/jackpot' element={<Jackpot/>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
