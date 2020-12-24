import "./App.css";
import Header from "./Header";
import TinderCards from "./TinderCards";

function App() {
  return (
    //BEN class naming convention
    <div className="app">
      <Header />

      <TinderCards />

      {/* Swipe buttons */}
    </div>
  );
}

export default App;
