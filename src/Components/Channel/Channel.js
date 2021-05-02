import "./Channel.css";

export function Channel({ name, Icon }) {
  console.log(name);
  return (
    <div className="channel">
      {Icon && <Icon className="channel__icon" />}
      {!Icon && <div className="channel__icon">#</div>}
      <div className="channel__name">{name}</div>
    </div>
  );
}
