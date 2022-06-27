import React from "react";
import { useState, useEffect } from "react"

function CategoriInDb() {

    const [category, setCategory] = useState([])
    useEffect(() => {
      fetch("http://localhost:3000/products/detail/")
        .then((respuestaApi)=>{
          return respuestaApi.json()
        })
        .then((category)=>{
          let arrayCategory = category.countByCategory
          setCategory(arrayCategory)
        })
    },[])

    console.log(category)

    return (
        <div class="col-lg-6 mb-4">
            <div class="card shadow mb-4">
                <div class="card-header py-3">
                    <h6 class="m-0 font-weight-bold text-primary">Cantidad de Productos por Categorias</h6>
                </div>
                <div class="card-body">
                    <div class="row">
                        {
                            category.map((elemento) => {
                                return (
                                    <div class="col-lg-6 mb-4">
                                        <div class="card bg-info text-white shadow">
                                            <div class="card-body">
                                               categoria: {elemento.categoria} {" "} <br />
                                               cantidad: {elemento.count}
                                            </div>

                                        </div>
                                    </div>
                                )

                            })
                        }
                        {/* <div class="col-lg-6 mb-4">
              <div class="card bg-info text-white shadow">
                <div class="card-body">
                  Category 01
                </div>
              </div>
            </div> */}

                        {/* <div class="col-lg-6 mb-4">
              <div class="card bg-info text-white shadow">
                <div class="card-body">
                  Category 02
                </div>
              </div>
            </div>
            <div class="col-lg-6 mb-4">
              <div class="card bg-info text-white shadow">
                <div class="card-body">
                  Category 03
                </div>
              </div>
            </div>
            <div class="col-lg-6 mb-4">
              <div class="card bg-info text-white shadow">
                <div class="card-body">
                  Category 04
                </div>
              </div>
            </div>
            <div class="col-lg-6 mb-4">
              <div class="card bg-info text-white shadow">
                <div class="card-body">
                  Category 05
                </div>
              </div>
            </div>
            <div class="col-lg-6 mb-4">
              <div class="card bg-info text-white shadow">
                <div class="card-body">
                  Category 06
                </div>
              </div>
            </div> */}
                    </div>
                </div>
            </div>
        </div>


    );
}
export default CategoriInDb;