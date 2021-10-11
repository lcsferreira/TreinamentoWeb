import React, { useState, useEffect } from "react";
import FornecedorCard from "../../components/FornecedorCard";
import { getAllSuppliers } from "../../service/miniShopApiSevrice";

export default function ForenecedorPage() {
  const [listaFornecedores, setListaFornecedores] = useState([]);

  useEffect(() => {
    getAllSuppliers().then((data) => {
      setListaFornecedores(data);
    })
  })

  return (
    <div className="listaFornecedor">
      {listaFornecedores.map((item, index) => {
        return (
          <div key={index} className="listaFornecedores__fornecedorCard">
            <FornecedorCard fornecedor={item} />
          </div>
        )
      })}
    </div>
  );
}