import "./App";
const Profile = () => {
  return (
    <div className="Profile">
      <div className="profile-header">
        <img src="/images/загруженное.jpg" alt="Profile" className="profile-image" />
        <h2>Your name</h2>
        <p>About me: a brief description of your profile</p>
      </div>
      <div className="profile-content">
        <div className="profile-posts">
          <h3>Your posts</h3>
        </div>
        <div className="profile-friends">
          <h3>Friends</h3>
        </div>
      </div>
    </div>
  );
}

export default Profile;
