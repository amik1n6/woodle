const Notification = (props) => {
    return (
        <div className="Notif">
            <div className="name-container">
                <h1>{props.name}</h1><span>{props.date}</span>
            </div>
            <div className="second_part">
                <p>{props.text}</p>
            </div>
        </div>
    );
}

export default Notification;

