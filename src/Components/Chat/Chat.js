import NotificationsRoundedIcon from "@material-ui/icons/NotificationsRounded";
import BookmarksRoundedIcon from "@material-ui/icons/BookmarksRounded";
import PeopleAltRoundedIcon from "@material-ui/icons/PeopleAltRounded";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../Firebase/firebase";
import { Message } from "../../Components";
import "./Chat.css";

export function Chat() {
  const { channelId } = useParams();
  const [channelDetails, setChannelDetails] = useState();
  const [channelMessages, setChannelMessages] = useState();

  useEffect(() => {
    if (channelId) {
      db.collection("channels")
        .doc(channelId)
        .onSnapshot((snapshot) => {
          setChannelDetails(snapshot.data());
        });

      db.collection("channels")
        .doc(channelId)
        .collection("messages")
        .orderBy("timestamp", "asc")
        .onSnapshot((snapshot) =>
          setChannelMessages(snapshot.docs.map((doc) => doc.data()))
        );
    }
  }, [channelId]);

  return (
    <div className="chat">
      <div className="chat__header">
        <div className="chat__header__left"># {channelDetails?.name}</div>
        <div className="chat__header__right">
          <NotificationsRoundedIcon />
          <BookmarksRoundedIcon />
          <PeopleAltRoundedIcon />
        </div>
      </div>
      <div className="chat__messages">
        {channelMessages &&
          channelMessages.map((message) => <Message msg={message} />)}
      </div>
      {/* Chat Send */}
      {/* Chat Footer */}
    </div>
  );
}
