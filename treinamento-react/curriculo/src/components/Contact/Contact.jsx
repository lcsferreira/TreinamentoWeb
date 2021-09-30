import React, { useState } from "react";
import "./Contact.css"

function Contact(props) {
  const [phone] = useState(props.telefone);
  const [email] = useState(props.email);
  const [site] = useState(props.site);
  const [adress] = useState(props.endereco);
  const [city] = useState(props.cidade);

  return (
    <div className="contact">
      <div className="info">
        <img src="https://cdn-icons-png.flaticon.com/512/181/181511.png" alt="tel-icon" />
        <p>{phone}</p>
      </div>
      <div className="info">
        <img src="https://cdn-icons-png.flaticon.com/512/181/181526.png" alt="site-icon" />
        <p>{site}</p>
      </div>
      <div className="info">
        <img src="https://cdn-icons-png.flaticon.com/512/181/181535.png" alt="email-icon" />
        <p>{email}</p>
      </div>
      <div className="info">
        <img src="https://cdn-icons-png.flaticon.com/512/181/181508.png" alt="local-icon" />
        <p>{adress} <br /> {city}</p>
      </div>
    </div>
  )
}

export default Contact;