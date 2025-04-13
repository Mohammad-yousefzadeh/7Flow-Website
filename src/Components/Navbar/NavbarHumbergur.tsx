"use client"
import { AppContext } from "@/src/AppContext/AppContext";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";

const NavbarHumbergur = () => {

    const {settingSideBar , sideBar} = useContext(AppContext)

    return (
        <>
            <div className="ms-auto rounded-circle py-2 px-2 d-flex d-lg-none" style={{width : "35px" , backgroundColor : `${sideBar ? "white" : "rgba(33, 64, 212, 1)"}` , border : "1px solid black"}}>
                <FontAwesomeIcon onClick={settingSideBar} className={`mx-auto ${sideBar ? "text-black" : "text-white"}`} width={"15px"} icon={sideBar ? faXmark : faBars} />
            </div>
        </>
    );
}
 
export default NavbarHumbergur;