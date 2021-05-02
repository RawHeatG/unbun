import React from "react";
import { Link } from "react-router-dom";
import "./Channel.css";

export function Channel({ name, Icon, id, type }) {
  if (type === "AddChannel") {
    return (
      <div className="channel">
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
