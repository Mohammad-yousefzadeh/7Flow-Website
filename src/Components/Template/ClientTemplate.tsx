"use client"
import { useContext } from 'react';
import designImage from '../../Assests/4ad1f55ef422a2212947dd175862862b.png'
import darkModeImg from "../../Assests/2b402f80493c2849338b62f7b628de23.png"
import { AppContext } from '@/src/AppContext/AppContext';

const ClientTemplate = () => {

    const {darkMode} = useContext(AppContext)

    return (
        <>
            <img src={darkMode ? darkModeImg.src : designImage.src} style={{boxShadow : "-10px 6px 29px -19px rgb(255, 145, 0)"}} alt="Design-Image" className="w-100 rounded-circle mb-4 mb-lg-0" />
        </>
    );
}
 
export default ClientTemplate;