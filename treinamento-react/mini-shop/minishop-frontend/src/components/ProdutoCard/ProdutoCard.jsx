import React from "react";
import "./ProdutoCard.css"
import Typography from "@material-ui/core/Typography";
import { Card, CardContent, CardHeader } from "@material-ui/core";

export default function ProdutoCard(props) {
  var formatter = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  const valorFormatado = formatter.format(props.produto.unitPrice);
  return (
    <Card className="produtoCard">
      <CardHeader className="header" title={props.produto.productName} />
      <CardContent className="main-info">
        <Typography variant="h6" component="h3">Preço unitário: {valorFormatado}</Typography>
        <Typography variant="h6" component="h3">Fornecedor: {props.produto.supplier.companyName}</Typography>
      </CardContent>
      <CardContent className="linhaPrincipal">
        <Typography variant="body1" component="p">Pacote: {props.produto.packageName}
        </Typography>
        {props.produto.isDiscontinued
          ? <Typography variant="body1" component="p" className="esgotado">Fora de produção</Typography>
          : <Typography variant="body1" component="p" className="estoque">Em produção</Typography>}
      </CardContent>
    </Card>
  );
}