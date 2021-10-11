import React from "react";
import "./ProdutoCard.css"
import Typography from "@material-ui/core/Typography";

export default function ProdutoCard(props) {
  var formatter = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  const valorFormatado = formatter.format(props.produto.unitPrice);
  return (
    <div className="produtoCard">
      <div className="header">
        <Typography gutterBottom variant="h5" className="header" component="h4">
          {props.produto.productName}
        </Typography>
      </div>
      <div className="main-info">
        <Typography component="h4">Preço unitário: {valorFormatado}</Typography>
        <Typography component="h4">Fornecedor: {props.produto.supplier.companyName}</Typography>
      </div>
      <div className="linhaPrincipal">
        <Typography component="p">Pacote: {props.produto.packageName}
        </Typography>
        {props.produto.isDiscontinued
          ? <Typography component="p" className="esgotado">Esgotado</Typography>
          : <Typography component="p" className="estoque">Em estoque</Typography>}
      </div>
    </div>
  );
}