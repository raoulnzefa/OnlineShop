import Products from "../components/Products";
import AddProduct from "../components/AddProduct";
import MyCart from "../components/MyCart";
import MyAccount from "../components/MyAccount";


export const routes = [
    { path : "/products" , component : Products},
    { path : "/addProduct" , component : AddProduct},
    { path : "/mycart" , component : MyCart},
    { path : "/myaccount" , component : MyAccount}
]