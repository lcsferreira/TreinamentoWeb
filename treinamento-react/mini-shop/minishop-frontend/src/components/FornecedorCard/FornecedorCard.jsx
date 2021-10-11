import React from "react";
import "./FornecedorCard.css"

export default function FornecedorCard(props) {

  return (
    <div className="fornecedorCard">
      <h2>{props.fornecedor.companyName}</h2>
      <h3>Nome para contato: {props.fornecedor.contactName}</h3>
      <p>Local: {props.fornecedor.city}, {props.fornecedor.country}</p>
      <p>Telefone: {props.fornecedor.phone}</p>
    </div>
  );
}