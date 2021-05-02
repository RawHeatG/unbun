import React from "react";
import { Link } from "react-router-dom";
import { AddChannel } from "../../Components";
import "./Channel.css";

export function Channel({ name, Icon, id, type }) {
  const AddChannel = () => <AddChannel />;

  if (type === "AddChannel") {
    return (
      <div className="channel" onClick={AddChannel}>
        {Icon && <Icon className="channel__icon" />}
        {!Icon && <div className="channel__icon">#</div>}
        <div className="channel__name">{name}</div>
      </div>
    );
  }
  return (
    <Link to={`/channel/${id}`} className="link">
      <div className="channel">
        {Icon && <Icon className="channel__icon" />}
        {!Icon && <div className="channel__icon">#</div>}
        <div className="channel__name">{name}</div>
      </div>
    </Link>
  );
}
