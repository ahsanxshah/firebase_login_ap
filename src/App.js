import "./App.css";
import Login from "./components/login";
import Logout from "./components/logout";
import Get from "./components/get";

function App() {
  return (
    <div className="App">
      <Login />
      <Get />
      <Logout />
    </div>
  );
}

export default App;
