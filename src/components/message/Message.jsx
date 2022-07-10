import "./message.css";
import { format } from "timeago.js";

export default function Message({ message, own }) {
  return (
    <div className={own ? "message own" : "message"}>
      <div className="messageTop">
        <p className="messageText">{message.text}</p>
        <img style={{marginRight:"5px"}}
          className="messageImg"
          src="https://www.kindpng.com/picc/m/163-1636340_user-avatar-icon-avatar-transparent-user-icon-png.png"
          alt=""
        />
      </div>
      <div className="messageBottom">{format(message.createdAt)}</div>
    </div>
  );
}
