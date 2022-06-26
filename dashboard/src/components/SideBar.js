import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChartLine } from "@fortawesome/free-solid-svg-icons"
import { faTachometerAlt } from "@fortawesome/free-solid-svg-icons"
import { faFolder } from "@fortawesome/free-solid-svg-icons"
import { faChartArea } from "@fortawesome/free-solid-svg-icons"
import { faTable } from	"@fortawesome/free-solid-svg-icons"

function SideBar(){
    return(
		<div >

		<ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">


			<a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
				<div className="sidebar-brand-icon"></div>
						<FontAwesomeIcon icon={faChartLine} />
				<div className="sidebar-brand-text mx-3">Admin</div>
			</a>

			<hr className="sidebar-divider"/>

			<li className="nav-item active">
				<a className="nav-link" href="/">
							<FontAwesomeIcon icon={faTachometerAlt} />
					<span> Dashboard</span></a>
			</li>


			<hr className="sidebar-divider"/>


			<div className="sidebar-heading">Actions</div>


			<li className="nav-item">
				<a className="nav-link collapsed" href="/">
					<FontAwesomeIcon icon={faFolder} />
					<span> Pages</span>
				</a>
			</li>


			<li className="nav-item">
				<a className="nav-link" href="/">
					<FontAwesomeIcon icon={faChartArea} />
					<span> Charts</span>
				</a>
			</li>


			<li className="nav-item">
				<a className="nav-link" href="/">
					<FontAwesomeIcon icon={faTable} />
					<span> Tables</span>
				</a>
			</li>



		</ul>
	</div>

    );
}
export default SideBar;