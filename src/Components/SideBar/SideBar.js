import { Channel } from "../../Components";
import "./SideBar.css";

export function SideBar() {
  return (
    <div className="sidebar">
      <div className="sidebar__header">Sidebar Header</div>
      <Channel props={{ name: "general" }} />
    </div>
  );
}
