import "./Channel.css";

export function Channel({ name }) {
  console.log(name);
  return (
    <div className="channel">
      <div className="channel__name">{name}</div>
    </div>
  );
}
