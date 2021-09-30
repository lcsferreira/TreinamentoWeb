import React from "react";
import Person from "../Person";
import Contact from "../Contact";
import GraduationList from "../GraduationList";
import ExperienceList from "../ExperienceList";
import Profile from "../Profile";
import ReferenceList from "../ReferenceList";
import PersonModel from "../../models/PersonModel";
import ContactInfoModel from "../../models/ContactInfoModel";
import GraduationInfoModel from "../../models/GraduationInfoModel";
import ProfileInfoModel from "../../models/ProfileInfoModel";
import ExperienceModel from "../../models/ExperienceModel";
import ReferenceInfoModel from "../../models/ReferenceInfoModel";
import HabilityInfoModel from "../../models/HabilityInfoModel";
import "./ResumePage.css";
import HabilityList from "../HabilityList";

function ResumePage() {
  const contactInfo = new ContactInfoModel("Bruna Lopez",
    "Desenvolvedora de Software",
    "brunalopez@gmail.com",
    "(53)98765-4321",
    "brunalopez.com.br",
    "Av. Rosário, 189",
    "Santos, São Paulo");

  let graduationInfo = [];
  graduationInfo.push(
    new GraduationInfoModel(
      "USP, Universidade de São Paulo",
      2010,
      2015,
      "WebDesign"
    ),
    new GraduationInfoModel(
      "Colégio Marista Paulistano",
      2007,
      2009,
      "Ensino Médio"
    ));

  const perfilInfo = new ProfileInfoModel("Desejo fazer parte do time da empresa oferecendo o melhor. Sou uma pessoa muito dedicada e comprometida com as atribuições que são dadas a mim.");

  let experienceInfo = [];
  experienceInfo.push(
    new ExperienceModel(
      "Grêmio Estudantil",
      "Secretária",
      2014,
      2018,
      "Execução de diretrizes propostas pela administração, Intermediações de aquisições."
    ),
    new ExperienceModel(
      "Feira de Cinências internas",
      "Líder de projeto",
      2012,
      2013,
      "Participação na criação de estratégias de administração de serviços, promovendo aprimoramento."
    ),
    new ExperienceModel(
      "Empresa Júnior",
      "Líder de projeto",
      2010,
      2012,
      "Experiência no desenvolvimento de estratégias de mercado, auxiliando na análise de metas."
    )
  )

  let referenceInfo = [];
  referenceInfo.push(
    new ReferenceInfoModel("Lucca Martins", "USP", "Professor", "(11) 98765-4321"),
    new ReferenceInfoModel("Matheus Castro", "Casas Bahia", "Gerente", "(11) 98765-4321")
  );

  let habilityinfo = [];
  habilityinfo.push(
    new HabilityInfoModel("Photoshop", 7),
    new HabilityInfoModel("Desenvolvimento web", 9),
    new HabilityInfoModel("Java Script", 8)
  )

  const person = new PersonModel(
    contactInfo,
    graduationInfo,
    perfilInfo,
    experienceInfo,
    referenceInfo,
    habilityinfo
  );

  return (
    <div className="container">
      <div className="page">
        <div className="left-side">
          <Person
            nome={person.contactInfo.nome}
            emprego={person.contactInfo.emprego}>
          </Person>
          <Contact
            telefone={person.contactInfo.telefone}
            site={person.contactInfo.site}
            email={person.contactInfo.email}
            endereco={person.contactInfo.endereco}
            cidade={person.contactInfo.cidade}
          ></Contact>
          <GraduationList listaFormacao={person.graduationInfo}></GraduationList>
          <ReferenceList listaReferencia={person.referenceInfo}></ReferenceList>
        </div>
        <div className="right-side">
          <Profile
            descricao={person.profileInfo.descricao}>
          </Profile>
          <ExperienceList listaExperiencias={person.experienceInfo}></ExperienceList>
          <HabilityList listaHabilidades={person.habilityInfo}></HabilityList>
        </div>
      </div>
    </div>
  )
}

export default ResumePage;