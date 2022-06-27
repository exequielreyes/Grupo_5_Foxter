import React from "react";
import TopBar from "./TopBar";
import ContenRowTop from "./ContenRowTop";
import Footer from "./Footer";
function ContentWrapper(){
    return(
       
		<div id="content-wrapper" className="d-flex flex-column">

			
			<div id="content">
                <TopBar/>
            
                <ContenRowTop/>
                
                <Footer/>                   
                   
            </div>
        </div>
          
    );
}
export default ContentWrapper