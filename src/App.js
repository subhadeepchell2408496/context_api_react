import logo from "./logo.svg";
import "./App.css";
import CompA from "./components/CompA";
import { MyContext, NameContext } from "./context/MyContext";

function App() {
  return (
    <NameContext>
      <CompA />
    </NameContext>
  );
}

export default App;
