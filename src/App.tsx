import "./App.css";
import Modal from "./components/Modal";

function App() {
  return (
    <div className="app">
      <Modal title="Modal1" description="Modal 1 Description" />
      <Modal title="Modal2" description="Modal 2 Description" />
    </div>
  );
}

export default App;
