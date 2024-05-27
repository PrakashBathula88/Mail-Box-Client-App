import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthContextProvider } from "./Components/Context/AuthContext";
import Signin from "./Components/SignIn/Signin";
import welcome from "./Components/Welcome to Expense/welcome";

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Signin />}></Route>
            <Route path="/welcome" element={<welcome />}></Route>
          </Routes>
        </BrowserRouter>
      </AuthContextProvider>
    </div>
  );
}

export default App;
