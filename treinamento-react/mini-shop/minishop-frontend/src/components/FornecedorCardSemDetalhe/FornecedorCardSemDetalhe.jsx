import React from 'react';
import "./FornecedorCardSemDetalhe.css"
import { Card, CardHeader } from "@material-ui/core";
import { Button } from "@material-ui/core";
import RemoveRedEyeIcon from '@material-ui/icons/RemoveRedEye';
import { NavLink } from "react-router-dom";

export default function FornecedorCardSemDetalhe(props) {

  const local = props.fornecedor.city + ", " + props.fornecedor.country;

  return (
    <Card className="fornecedorCardSemDetalhe">
      <CardHeader className="header"
        title={props.fornecedor.companyName}
        subheader={local}
      />
      <Button component={NavLink} to={"/Fornecedor/" + props.fornecedor.id} title="Detalhes">
        <RemoveRedEyeIcon />
      </Button>
    </Card>
  );
}