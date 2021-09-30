import React, { useState } from "react";
import "./ProfileInfo.css"

function Profile(props) {
  const [descricao] = useState(props.descricao);

  return (
    <div className="profile-info">
      <h2>PERFIL</h2>
      <p>{descricao}</p>
    </div>
  );
}
export default Profile;