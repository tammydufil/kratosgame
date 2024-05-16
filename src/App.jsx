import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Homepage } from "./pages/homepage";
import { Login } from "./pages/sign-in";
import { Signuppage } from "./pages/signuppage";
import { Logout } from "./pages/logout";
import { Game } from "./game";
import { Withdraw } from "./withdraw";
import { Deposit } from "./deposit";
import { Game1 } from "./game1";
import { Terms } from "./terms";
import { Transaction } from "./transaction";
import { Profile } from "./profile";
import { Changepassword } from "./changepassword";
import "react-toastify/dist/ReactToastify.css";
import { Policy } from "./policy";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage></Homepage>}></Route>
        <Route path="/sign-in" element={<Login></Login>}></Route>
        <Route path="/sign-up" element={<Signuppage></Signuppage>}></Route>
        <Route path="/logout" element={<Logout></Logout>}></Route>
        <Route path="/game" element={<Game></Game>}></Route>
        <Route path="/deposit" element={<Deposit></Deposit>}></Route>
        <Route path="/withdraw" element={<Withdraw></Withdraw>}></Route>
        <Route path="/game1" element={<Game1></Game1>}></Route>
        <Route path="/terms" element={<Terms></Terms>}></Route>
        <Route path="/policy" element={<Policy></Policy>}></Route>
        <Route
          path="/transaction"
          element={<Transaction></Transaction>}
        ></Route>
        <Route path="/profile" element={<Profile></Profile>}></Route>
        <Route
          path="/changepassword"
          element={<Changepassword></Changepassword>}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
