import React from "react";

function CategoriInDb({categories}) {


    return (
        <div class="col-lg-12 mb-4">
            <div class="card shadow mb-4">
                <div class="card-header py-3">
                    <h6 class="m-0 font-weight-bold text-primary">Cantidad de Productos por Categorias</h6>
                </div>
                <div class="card-body">
                    <div class="row">
                        {categories !== undefined && categories.map((elemento) => {
                                return (
                                    <div class="col-lg-6 mb-4">
                                        <div class="card bg-info text-white shadow">
                                            <div class="card-body">
                                               Categoria: {elemento.category.name} {" "} <br />
                                               Cantidad: {elemento.total}
                                            </div>

                                        </div>
                                    </div>
                                )

                            })
                        }
                    </div>
                </div>
            </div>
        </div>


    );
}
export default CategoriInDb;