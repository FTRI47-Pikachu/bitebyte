import "./App.css";
import Carousel from "./components/Carousel.tsx";
import AddSnacks from "./components/AddSnacks"
import SavedSnacks from "./components/SavedSnacks.tsx";
import SnacksContainer from "./components/SnacksContainer.tsx";

function App() {

  return (
    <div>
      {/* <Modal /> */}
      <Carousel />
      <SnacksContainer />
      <AddSnacks />
      <SavedSnacks />
    </div>
  );
}

export default App;
