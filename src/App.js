import { Routes, Route } from "react-router-dom";
import { Chat, Home, SideBar } from "./Components";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/channel" element={<SideBar />} />
        <Route path="/channel/:channelId" element={<Chat />} />
      </Routes>
    </div>
  );
}

export default App;
