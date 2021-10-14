import axios from "axios";

const urlApi = "http://localhost:8080/api/v1/";

//todos os customers(clientes)
export function getAllCustomers(pagina, tamanho) {
  const urlApiCostumer = urlApi + "all-customers?pagina=" + pagina + "&tamanho=" + tamanho;;
  return axios.get(urlApiCostumer).then((AxiosResponse) => {
    return AxiosResponse.data;
  });
}

//todos os product(produtos)
export function getAllProducts(pagina, tamanho) {
  const urlApiProducts = urlApi + "all-products?pagina=" + pagina + "&tamanho=" + tamanho;
  return axios.get(urlApiProducts).then((AxiosResponse) => {
    return AxiosResponse.data;
  })
}

//pegar produto pelo id
export function getProdutoPorId(id) {
  const urlApiProductsId = urlApi + "product/" + id
  return axios.get(urlApiProductsId).then((AxiosResponse) => {
    return AxiosResponse.data;
  })
}

//post produto
export function postProduto(novo) {
  const urlApiPost = urlApi + "create-product";
  const produtoPostModel = {
    isDiscontinued: novo.isDiscontinued,
    productName: novo.productName,
    packageName: novo.packageName,
    supplierId: novo.supplierId,
    unitPrice: novo.unitPrice,
  };
  return axios.post(urlApiPost, produtoPostModel).then((AxiosResponse) => { return AxiosResponse.data })
}

//post cliente
export function postCustomer(novo) {
  const urlApiPost = urlApi + "create-customer";
  const customerPostModel = {
    customerFirstName: novo.customerFirstName,
    customerLastName: novo.customerLastName,
    customerPhone: novo.customerPhone,
    customerCity: novo.customerCity,
    customerCountry: novo.customerCountry,
  };
  return axios.post(urlApiPost, customerPostModel).then((AxiosResponse) => { return AxiosResponse.data })
}

//listar imagens pelo id do produto
export function getProductImages(idProduct) {
  const urlApiProducts = urlApi + "image/" + idProduct;
  return axios.get(urlApiProducts).then((AxiosResponse) => {
    return AxiosResponse.data;
  })
}

//todos os suppliers(fornecedores)
export function getAllSuppliers(pagina, tamanho) {
  const urlApiSuppliers = urlApi + "all-suppliers?pagina=" + pagina + "&tamanho=" + tamanho;;
  return axios.get(urlApiSuppliers).then((AxiosResponse) => {
    return AxiosResponse.data;
  })
}

//pegar um supplier por id
export function getSupplierPorId(id) {
  const urlApiSupplierId = urlApi + "supplier/" + id
  return axios.get(urlApiSupplierId).then((AxiosResponse) => {
    return AxiosResponse.data;
  })
}

//post supplier
export function postSupplier(novo) {
  const urlApiPost = urlApi + "create-supplier";
  const supplierPostModel = {
    city: novo.city,
    companyName: novo.companyName,
    contactName: novo.contactName,
    country: novo.country,
    fax: novo.fax,
    phone: novo.phone
  };
  return axios.post(urlApiPost, supplierPostModel).then((AxiosResponse) => { return AxiosResponse.data })
}