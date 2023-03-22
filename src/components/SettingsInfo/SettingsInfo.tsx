import "./SettingsInfo.css";

function SettingsInfo() {
  return (
    <div className="settings-page">
      <h1 className="page-title">Settings</h1>
      <div className="settings-container">
        <div className="input-container">
          <label htmlFor="email-input">Email</label>
          <input type="email" id="email-input" />
          <button className="change-button">Change</button>
        </div>
        <div className="input-container">
          <label htmlFor="username-input">Username</label>
          <input type="text" id="username-input" />
          <button className="change-button">Change</button>
        </div>
        <div className="input-container">
          <label htmlFor="password-input">Password</label>
          <input type="password" id="password-input" />
          <button className="change-button">Change</button>
        </div>
        <div className="input-container">
          <label htmlFor="address-input">Default Ad.</label>
          <input type="text" id="address-input" />
          <button className="change-button">Change</button>
        </div>
      </div>
    </div>
  );
}

export default SettingsInfo;
