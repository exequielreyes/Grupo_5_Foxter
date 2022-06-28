import React from "react";
import { useState, useEffect} from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faClipboardList } from "@fortawesome/free-solid-svg-icons"
import { faDollarSign } from "@fortawesome/free-solid-svg-icons"

function ContentRow({dataProduct, dataUser}){

	const [sumaPrecios, setSumaPrecios] = useState(0)

	useEffect(() => {
		
		if (dataProduct.products !== undefined) {

		const {products} = dataProduct;
	
		let preciosProd = products.map((prod) => {
							return Number(prod.price)
				})
	
		let suma = preciosProd.reduce((a, b) => a + b, 0)
				setSumaPrecios(suma);

}}, [dataProduct])

    return(

        <div class="container-fluid">

                    <div className="row">

						<div className="col-md-4 mb-4">
							<div className="card border-left-primary shadow h-100 py-2">
								<div className="card-body">
									<div className="row no-gutters align-items-center">
										<div className="col mr-2">
											<div className="text-xs font-weight-bold text-primary text-uppercase mb-1"> Cantidad Total de productos </div>
										<div className="h5 mb-0 font-weight-bold text-gray-800">{dataProduct.count}</div>
										</div>
										<div className="col-auto" style={{fontSize: 20}}>
											<FontAwesomeIcon icon={faClipboardList} />
										</div>
									</div>
								</div>
							</div>
						</div>


						<div className="col-md-4 mb-4">
							<div className="card border-left-success shadow h-100 py-2">
								<div className="card-body">
									<div className="row no-gutters align-items-center">
										<div className="col mr-2">
											<div className="text-xs font-weight-bold text-success text-uppercase mb-1"> Costo Total de Productos </div>
											<div className="h5 mb-0 font-weight-bold text-gray-800">$ {sumaPrecios} </div>
										</div>
										<div className="col-auto" style={{fontSize: 20}}>
											<FontAwesomeIcon icon={faDollarSign} />
										</div>
									</div>
								</div>
							</div>
						</div>

		
						<div className="col-md-4 mb-4">
							<div className="card border-left-primary shadow h-100 py-2">
								<div className="card-body">
									<div className="row no-gutters align-items-center">
										<div className="col mr-2">
											<div className="text-xs font-weight-bold text-primary text-uppercase mb-1"> Cantidad Total de usuarios </div>
										<div className="h5 mb-0 font-weight-bold text-gray-800">{dataUser.count}</div>
										</div>
										<div className="col-auto" style={{fontSize: 20}}>
											<FontAwesomeIcon icon={faClipboardList} />
										</div>
									</div>
								</div>
							</div>
						</div>


						
					</div>
             </div>


    );
}
export default ContentRow;

