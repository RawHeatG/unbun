import "./Message.css";

export function Message({ msg }) {
  console.log("Msg recived", msg);
  const { message, user, userImageURL, timestamp } = msg;
  return (
    <div className="message">
      <div>
        <img src={userImageURL} alt={user} className="message__user__img" />
      </div>
      <div className="message__details">
        <div className="message__user__details">
          <h3>{user}</h3>
          <div className="message_user__details__timestamp">
            {new Date(timestamp.toDate()).toUTCString()}
          </div>
        </div>
        <p>{message}</p>
      </div>
    </div>
  );
}
