import React, { useState, useEffect } from 'react';
import "./FornecedorDetalhePage.css"
import { useParams } from "react-router-dom";
import FornecedorCard from '../../components/FornecedorCard';
import { getSupplierPorId } from '../../service/miniShopApiSevrice';


export default function FornecedorDetalhePage() {
  const { id } = useParams();

  const [fornecedor, setFornecedor] = useState(null);
  useEffect(() => {
    getSupplierPorId(id).then((data) => {
      setFornecedor(data);
    })
  }, [id]);

  if (fornecedor === null) {
    return <div>Carregando...</div>
  }
  return (
    <div className="single-supplier">
      <FornecedorCard fornecedor={fornecedor} />
    </div>
  );
}