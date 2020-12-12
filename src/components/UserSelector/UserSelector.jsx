import React from "react";
import Avatar from "@material-ui/core/Avatar";
import "./UserSelector.css";
const UserSelector = () => {
  return (
    <div className="userSelector">
      <span className="userSelector__name">User</span>
      <Avatar src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/BD2FA0F3965617FC515E3CEBD3AD51C00CCFFBF98F96448EFE46B82867FCE542/scale?width=96&format=png" />
    </div>
  );
};

export default UserSelector;
