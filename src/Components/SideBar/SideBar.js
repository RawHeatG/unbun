import { Channel } from "../../Components";
import "./SideBar.css";
import BarChartRoundedIcon from "@material-ui/icons/BarChartRounded";
import ChatRoundedIcon from "@material-ui/icons/ChatRounded";

export function SideBar() {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <h2>Sidebar Header</h2>
        <BarChartRoundedIcon />
      </div>
      <Channel name="general" className="channel_active" />
      <Channel name="general" Icon={ChatRoundedIcon} />
      <Channel name="general" />
      <Channel name="general" />
      <Channel name="general" />
    </div>
  );
}
