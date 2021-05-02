import { useState, useEffect } from "react";
import { Channel } from "../../Components";
import { db } from "../../Firebase/firebase";
import "./SideBar.css";
import BarChartRoundedIcon from "@material-ui/icons/BarChartRounded";
import ChatRoundedIcon from "@material-ui/icons/ChatRounded";

export function SideBar() {
  const [channels, setChannels] = useState([]);

  useEffect(() => {
    db.collection("channels").onSnapshot((snapshot) => {
      setChannels(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          name: doc.data().name,
          icon: doc.data().icon,
        }))
      );
    });
  }, []);

  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <h2>Sidebar Header</h2>
        <BarChartRoundedIcon />
      </div>
      {channels.map((channel) => (
        <Channel name={channel.name} id={channel.id} />
      ))}
      <div className="sidebar__footer">
        <h2>SideBar footer</h2>
      </div>
    </div>
  );
}
