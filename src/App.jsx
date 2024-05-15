import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Homepage } from "./pages/homepage";
import { Login } from "./pages/sign-in";
import { Signuppage } from "./pages/signuppage";
import { Logout } from "./pages/logout";
import { Exchange } from "./pages/exchange";
import { Game } from "./game";
import { Withdraw } from "./withdraw";
import { Deposit } from "./deposit";
import { Game1 } from "./game1";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage></Homepage>}></Route>
        <Route path="/sign-in" element={<Login></Login>}></Route>
        <Route path="/sign-up" element={<Signuppage></Signuppage>}></Route>
        <Route path="/logout" element={<Logout></Logout>}></Route>
        <Route path="/exchange" element={<Exchange></Exchange>}></Route>
        <Route path="/game" element={<Game></Game>}></Route>
        <Route path="/deposit" element={<Deposit></Deposit>}></Route>
        <Route path="/withdraw" element={<Withdraw></Withdraw>}></Route>
        <Route path="/game1" element={<Game1></Game1>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
