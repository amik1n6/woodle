import SingleNotification from './Notification';
import notifications_container from './notif_data';

const Notifications = () => {
    return (
        <div className="Notifications">
            <SingleNotification name={notifications_container[0].postTitle} date={notifications_container[0].id} text={notifications_container[0].text} />
            <SingleNotification name={notifications_container[1].postTitle} date={notifications_container[1].id} text={notifications_container[1].text} />
            <SingleNotification name={notifications_container[2].postTitle} date={notifications_container[2].id} text={notifications_container[2].text} />
            <SingleNotification name={notifications_container[3].postTitle} date={notifications_container[3].id} text={notifications_container[3].text} />
        </div>
    );
};

export default Notifications;
