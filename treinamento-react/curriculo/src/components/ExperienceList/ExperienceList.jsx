import React, { useState } from 'react';
import Experience from "../Experience"
import "./ExperienceList.css"


function ExperienceList(props) {
  const [listaExperiencias] = useState(props.listaExperiencias)

  return (
    <div className="experience-list">
      <hr />
      <h2>EXPERIÊNCIAS</h2>
      {
        listaExperiencias.map((item, i) => (
          <Experience key={i} experiencia={item}></Experience>
        ))
      }
    </div>
  );
}

export default ExperienceList;