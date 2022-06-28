import React from "react";
import { useState, useEffect } from "react"
import CategoriInDb from "./CategoriaInDb";
// import LastProductInDb from "./LastProductInDb";
// import LastUserInDb from "./LastUserInDb";
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

    return (
        <div id="content-wrapper" className="d-flex flex-column">



            <div class="container-fluid">
                <ContentRow dataProduct = {data} />
                
                <div className="row">
                    
                    {/* <LastProductInDb /> */}
                    {/* <LastUserInDb /> */}
                    <CategoriInDb categories = {data.countByCategory} />
                    <ProductList products = {data.products} />
                </div>
            </div>



        </div>

    );
}
export default ContenRowTop;