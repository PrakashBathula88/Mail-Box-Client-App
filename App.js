import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthContextProvider } from "./Components/Context/AuthContext";
import Signin from "./Components/SignIn/Signin";
// import welcome from "./Components/Welcome to Expense/welcome";
import CreateEmail from "./Components/CreateEmail/CreateEmail";
import Welcome from "./Components/Welcome to Expense/welcome";
import Nav from "./Components/Navbar/Nav";
import Verticalbars from "./Components/Vertical bars/Verticalbars";
import Home from "./Components/HomeItems/Home";
import Readmessage from "./Components/ReadMessage/Readmessage";

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        
        <BrowserRouter>
        <Nav />
        <Verticalbars/>
          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/signin" element={<Signin />}></Route>
            <Route path="/welcome" element={<Welcome />}></Route>
            <Route path="/Mailbox" element={<CreateEmail />}></Route>
            <Route path="/Read/:readid" element={<Readmessage/>}></Route>
          </Routes>
        </BrowserRouter>
      </AuthContextProvider>
    </div>
  );
}

export default App;
