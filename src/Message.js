import './App.css';

const Message = (props) => {
  return (
    <div className="Message">
      <p className="sender">James D.</p>
      <p className="time">10:30 AM</p>
      <p className="message-text">Привет!</p>
      <p className="tochka">•</p>
    </div>
  );
}

export default Message;
