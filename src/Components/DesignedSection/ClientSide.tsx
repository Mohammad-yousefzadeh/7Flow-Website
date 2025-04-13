"use client"
import designImage from '../../Assests/c35867cfb7c2bbd3d7dd5307ba2093d1.png'
import DarkModeImg from "../../Assests/8f237cfc5813ffb61460bc81a48e14a9.png"
import { useContext } from 'react'
import { AppContext } from '@/src/AppContext/AppContext'

const ClientDesignedSection = () => {

    const {darkMode} = useContext(AppContext)

    return (
        <>
            <img src={darkMode ? DarkModeImg.src : designImage.src} style={{boxShadow : "-10px 6px 29px -19px #5d18ff"}} alt="Design-Image" className="w-100 rounded-circle mb-4 mb-lg-0" />
        </>
    );
}
 
export default ClientDesignedSection;