import React, { useEffect, useState } from "react";
import CustomerCard from "../../components/CustomerCard/CustomerCard";
import { getAllCustomers } from "../../service/miniShopApiSevrice";

const CustomerPage = () => {
    const [listaCustomers, setListaCustomers] = useState([]);
    useEffect(() => {
    getAllCustomers().then((data) => {
      setListaCustomers(data);
    });
  }, []);
    return ( 
    <div>
      <h1>Lista de Clientes:</h1>
      <div className="lista-customers">
        {listaCustomers.map((item, index) => {
          return (
            <div key={index} className="listaCustomers__customerCard">
              <CustomerCard customer={item} />
            </div>
          );
        })}
      </div>
    </div>
     );
}
 
export default CustomerPage;