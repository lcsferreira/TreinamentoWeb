import React, { useState, useEffect } from 'react';
import "./ProdutoDetalhePage.css"
import { useParams } from "react-router-dom";
import ProdutoCard from '../../components/ProdutoCard';
import { getProdutoPorId } from '../../service/miniShopApiSevrice';

export default function ProdutoDetalhePage() {
  const { id } = useParams();

  const [produto, setProduto] = useState(null);
  useEffect(() => {
    getProdutoPorId(id).then((data) => {
      setProduto(data);
    })
  }, [id]);

  if (produto === null) {
    return <div>Carregando...</div>
  }
  return (
    <div className="single-product">
      <ProdutoCard produto={produto} />
    </div>
  );
}