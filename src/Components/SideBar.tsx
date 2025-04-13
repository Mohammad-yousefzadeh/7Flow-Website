"use client"
import { useContext, useEffect } from "react";
import { AppContext } from "../AppContext/AppContext";
import Link from "next/link";
import {Link as ScrollLink} from "react-scroll"
import { Button } from "react-bootstrap";

const SideBar = () => {

    
    const {sideBar , settingSideBar  , darkMode} = useContext(AppContext)
    
    useEffect(()=>{
        if(sideBar){
            document.body.style.overflow = 'hidden'
        }else{
            document.body.style.overflow = 'unset'  
        }
    } , [sideBar])

    return (
        <>
            <div className={`sidebar ${sideBar ?'show-sidebar' : ''}`} style={{backgroundColor : `${darkMode ? "rgb(20,20,20)" : "#e2e3e5"}` , color : `${darkMode ? "white" : " black"}`}}>
                <div className="d-flex flex-column sideBar-items">
                    <Link onClick={settingSideBar} style={{color : `${darkMode ? "rgba(129, 162, 210, 1)" : "rgb(108, 117, 125)"}`}} className=" fw-bold text-decoration-none" href={'/'}>Pricing</Link>
                    <Link onClick={settingSideBar} style={{color : `${darkMode ? "rgba(129, 162, 210, 1)" : "rgb(108, 117, 125)"}`}} className=" my-4 fw-bold text-decoration-none" href={'/'}>How it Works</Link>
                    <ScrollLink to="FAQ" style={{color : `${darkMode ? "rgba(129, 162, 210, 1)" : "rgb(108, 117, 125)"}` , cursor : "pointer"}} offset={-50} duration={500} onClick={settingSideBar} className="mb-4 fw-bold text-decoration-none" href={'/'}>FAQ</ScrollLink>
                    <Link onClick={settingSideBar} className="fw-bold text-decoration-none" style={{color : "#08C056"}} href={'/currencies'}>Currencies</Link>
                </div>
                <div style={{position : "absolute" , bottom : "5%" , left : "50%" , transform : "translate(-50% , -50%)"}}>
                    <Button onClick={settingSideBar} variant="primary" className="form-control mb-4 py-2 px-4">
                        <Link href={'/currenices'} className="text-decoration-none text-white">Get Started</Link>
                    </Button>
                    <Button onClick={settingSideBar} variant="outline-secondary" className="form-control border-0 py-2 px-4">
                        <Link href={'/currenices'} className="text-decoration-none">Sign In</Link>
                    </Button>
                </div>
            </div>
        </>
    );
}
 
export default SideBar;