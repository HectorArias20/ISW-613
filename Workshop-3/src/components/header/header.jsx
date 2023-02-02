import React, {useState} from "react";
import "./style.css";
import { NavLink } from "react-router-dom";

// function llamadaboton(){

// }
function llamado(){
    const navmenu=document.querySelector(".nav-menu")
    navmenu.classList.toggle("nav-menu_visible");
}


function Header(props) {
    const cerrar=()=>{
        sessionStorage.clear();
    }




	return (
		<header>
			<nav className="nav">
                <a  className="logo nav-link" href="#">Trodo</a>
                <button onClick={()=>llamado()} className="nav-toggle">
                    <i className="fa-solid fa-bars-progress"></i>
                </button>
                <ul className="nav-menu nav-menu_visible">
                <li  className="nav-menu-item"><NavLink className="nav-menu-link nav-link" to="/Pagina1" >Pagina 1 </NavLink></li>
                <li  className="nav-menu-item"><NavLink className="nav-menu-link nav-link" to="/Pagina2" >Pagina 2 </NavLink></li>
                <li  className="nav-menu-item"><NavLink className="nav-menu-link nav-link" to="/Pagina3" >Pagina 3 </NavLink></li>
                </ul>
            </nav>
		</header>
	);
}

export default Header;
