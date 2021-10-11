import axios from "axios";

const urlApi = "http://localhost:8080/api/v1/";

//todos os customers(clientes)
export function getAllCustomers() {
  const urlApiCostumer = urlApi + "all-customers";
  return axios.get(urlApiCostumer).then((AxiosResponse) => {
    return AxiosResponse.data;
  });
}

//todos os product(produtos)
export function getAllProducts() {
  const urlApiProducts = urlApi + "all-products";
  return axios.get(urlApiProducts).then((AxiosResponse) => {
    return AxiosResponse.data;
  })
}

//listar imagens pelo id do produto
export function getProductImages(idProduct) {
  const urlApiProducts = urlApi + "image/" + idProduct;
  return axios.get(urlApiProducts).then((AxiosResponse) => {
    return AxiosResponse.data;
  })
}

//todos os suppliers(fornecedores)
export function getAllSuppliers() {
  const urlApiSuppliers = urlApi + "all-suppliers";
  return axios.get(urlApiSuppliers).then((AxiosResponse) => {
    return AxiosResponse.data;
  })
}