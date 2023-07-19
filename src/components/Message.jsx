/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
const Message = ({ message }) => {
  console.log(message)
  return (
    <div className="chat chat-start">
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img src={message.avatar} />
        </div>
      </div>
      <div className="chat-header">
        {message.name}
      </div>
      <div className="chat-bubble">{message.text}</div>
    </div>
  );
};

export default Message;