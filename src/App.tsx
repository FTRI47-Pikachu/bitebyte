import "./App.css";
import SavedSnacks from "./components/SavedSnacks.tsx";
import SnacksContainer from "./components/SnacksContainer.tsx";
import HomePage from "./pages/HomePage.tsx";


function App() {
  return (
    <div>
      <HomePage />
      <SavedSnacks />
      <SnacksContainer />
    </div>
  );
}

export default App;
