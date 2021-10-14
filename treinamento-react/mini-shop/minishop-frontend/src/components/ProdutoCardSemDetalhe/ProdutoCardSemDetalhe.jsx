import React from 'react';
import "./ProdutoCardSemDetalhe.css"
import { Button, Card, CardHeader } from "@material-ui/core";
import RemoveRedEyeIcon from '@material-ui/icons/RemoveRedEye';
import { NavLink } from "react-router-dom";

export default function ProdutoCardSemDetalhe(props) {

  return (
    <Card className="produtoCardNoInfo">
      <CardHeader title={props.produto.productName} subheader={props.produto.supplier.companyName} />

      <Button component={NavLink} to={"/Produto/" + props.produto.id} title="Detalhes">
        <RemoveRedEyeIcon />
      </Button>

    </Card>
  );
}