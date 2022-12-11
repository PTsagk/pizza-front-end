import React from "react";
import "./ProfilePage.css";

function ProfilePage() {
  return (
    <div className="profile-page">
      <nav className="profile-nav-bar">
        <button>Address</button>
        <button>Orders</button>
        <button>Settings</button>
        <button>Tracker</button>
      </nav>
      <div className="settings-container"></div>
    </div>
  );
}

export default ProfilePage;
