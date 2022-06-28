import React from "react";
import { useState, useEffect } from "react"
import CategoriInDb from "./CategoriaInDb";
import LastProductInDb from "./LastProductInDb";
import LastUserInDb from "./LastUserInDb";
import ProductList from "./ProductList";
import ContentRow from "./ContentRow";



function ContenRowTop(props) {
    
    const [data, setData] = useState([]);


    useEffect(() => {
    const fetchData = async () => {
        const res = await fetch(
            "http://localhost:3000/api/products",
        );
        const data = await res.json();
        setData(data);        
    };
    fetchData();
}, []);

const [dataUser, setDataUser] = useState([]);


useEffect(() => {
const fetchData = async () => {
    const res = await fetch(
        "http://localhost:3000/api/users",
    );
    const data = await res.json();
    setDataUser(data);        
};
fetchData();
}, []);

console.log(dataUser);



    return (
        <div id="content-wrapper" className="d-flex flex-column">



            <div class="container-fluid">
                <ContentRow dataProduct = {data}
                dataUser = {dataUser}
                />
                
                <div className="row"> 

                  <LastProductInDb lastProduct = {data}/>
                <LastUserInDb lastUser = {dataUser} /> 
                <CategoriInDb categories = {data.countByCategory} />

                 <ProductList products = {data.products}
                    users = {dataUser} />

                
               


                

                </div>
            </div>



        </div>

    );
}
export default ContenRowTop;