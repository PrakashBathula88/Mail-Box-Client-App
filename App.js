import { AuthContextProvider } from "./Components/Context/AuthContext";
import Signin from "./Components/SignIn/Signin";

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <Signin />
      </AuthContextProvider>
    </div>
  );
}

export default App;
