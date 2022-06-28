import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import { faChartLine } from "@fortawesome/free-solid-svg-icons"
// import { faTachometerAlt } from "@fortawesome/free-solid-svg-icons"
// import { faFolder } from "@fortawesome/free-solid-svg-icons"
// import { faChartArea } from "@fortawesome/free-solid-svg-icons"
// import { faTable } from	"@fortawesome/free-solid-svg-icons"
import image from '../assets/img/logo.png';

function SideBar(){
    return(
		<React.Fragment>
		{/*<!-- Sidebar -->*/}
		<ul className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion" id="accordionSidebar">

			{/*<!-- Sidebar - Brand -->*/}
			<a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
				<div className="sidebar-brand-icon">
					<img className="w-100" src={image} alt="Dexter"/>
				</div>
			</a>

			{/*<!-- Divider -->*/}
			<hr className="sidebar-divider my-0"/>

			{/*<!-- Nav Item - Dashboard -->*/}
			<li className="nav-item active">
				<a className="nav-link" href="/">
					<i className="fas fa-fw fa-tachometer-alt"></i>
					<span>Dashboard - Foxter</span></a>
			</li>

			{/*<!-- Divider -->*/}
			<hr className="sidebar-divider"/>

			{/*<!-- Heading -->*/}
			<div className="sidebar-heading">Actions</div>

			{/*<!-- Nav Item - Pages -->*/}
			<li className="nav-item">
				<a className="nav-link collapsed" href="/">
					<i className="fas fa-fw fa-folder"></i>
					<span>Productos</span>
				</a>
			</li>

			{/*<!-- Nav Item - Charts -->*/}
			<li className="nav-item">
				<a className="nav-link" href="../usuarios.js">
					<i className="fas fa-fw fa-chart-area"></i>
					<span>Usuarios</span></a>
			</li>

			{/*<!-- Nav Item - Tables -->*/}
			<li className="nav-item">
				<a className="nav-link" href="/">
					<i className="fas fa-fw fa-table"></i>
					<span>Tables</span></a>
			</li>

			{/*<!-- Divider -->*/}
			<hr className="sidebar-divider d-none d-md-block"/>
		</ul>
		{/*<!-- End of Sidebar -->*/}
		
	</React.Fragment>

		
    );
}
export default SideBar;