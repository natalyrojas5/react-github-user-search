import "./Message.scss";
import { Message as MessageInterface } from "@/interfaces/components";
import { message } from "@/common";

const Message = ({ type = "error", text }: MessageInterface) => {
  return (
    <div className="message">
      {type === message.error && (
        <i className="fa-solid fa-bug text-primary"></i>
      )}
      {type === message.success && (
        <i className="fa-solid fa-check-double text-primary"></i>
      )}
      <p>{text}</p>
    </div>
  );
};

export default Message;
