import { Routes, Route } from "react-router-dom";
import { Chat, Home, SideBar } from "./Components";
import { useAuth } from "./Contexts/AuthProvider";
import { PrivateRoute } from "./PrivateRoute";

function App() {
  const { user } = useAuth();
  console.log(user);
  return (
    <div className="App">
      {/* {user.user && <SideBar />} */}
      <Routes>
        <Route path="/" element={<Home />} />
        <PrivateRoute path="/channel" element={<SideBar />} />
        <PrivateRoute path="/channel/:channelId" element={<Chat />} />
      </Routes>
    </div>
  );
}

export default App;
