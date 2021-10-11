import React, { useState, useEffect } from "react";
import "./ProdutosPage.css"
import ProdutoCard from "../../components/ProdutoCard";
import { getAllProducts } from "../../service/miniShopApiSevrice";
import "./ProdutosPage.css";

export default function ProdutosPage() {
  const [listaProdutos, setListaProdutos] = useState([]);

  useEffect(() => {
    getAllProducts().then((data) => {
      setListaProdutos(data);
    });
  }, [])

  return (
    <div>
      <div className="listaProdutos">
        {listaProdutos.map((item, index) => {
          return (
            <div key={index} className="listaProdutos__produtoCard">
              <ProdutoCard produto={item} />
            </div>
          );
        })}
      </div>
    </div>
  );
}