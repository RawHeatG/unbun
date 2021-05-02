import { useParams } from "react-router-dom";

export function Chat() {
  const { channelId } = useParams();
  return (
    <div className="chat">
      <h1>Hi Iam Chat # {channelId} </h1>
    </div>
  );
}
