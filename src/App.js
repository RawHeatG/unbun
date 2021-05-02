import { SideBar } from "./Components";
import { Link, Routes, Route } from "react-router-dom";
import { Chat } from "./Components";

function App() {
  return (
    <div className="App">
      <SideBar />
      <Routes>
        <Route path="/channel/:channelId" element={<Chat />} />
      </Routes>
    </div>
  );
}

export default App;
