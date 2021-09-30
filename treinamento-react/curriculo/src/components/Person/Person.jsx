import React, { useState } from "react";
import "./Person.css";

function Profile(props) {
  const [profileName] = useState(props.nome);
  const [job] = useState(props.emprego);
  return (
    <div className="profile">
      <h1>{profileName}</h1>
      <h2>{job}</h2>
    </div>
  )
}

export default Profile;