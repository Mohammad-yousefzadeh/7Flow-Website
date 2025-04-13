import { AppContext } from "@/src/AppContext/AppContext";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useEffect } from "react";

const MobileFooterInput = () => {

    const { darkMode, setTheme } = useContext(AppContext);
    
    useEffect(() => {
        if (darkMode) document.body.style.backgroundColor = "rgb(20,20,20)";
        else document.body.style.backgroundColor = "white";
    });

    return (
        <>
            <div className="d-flex d-lg-none justify-content-center mt-4">
              <input
                className="dark_mode_input"
                type="checkbox"
                id="darkmode-toggle2"
                />
              <label
                onClick={setTheme}
                    className="dark_mode_label"
                    htmlFor="darkmode-toggle2"
                      >
                    <FontAwesomeIcon icon={faSun} className="sun-icon text-white" />
                    <FontAwesomeIcon
                    icon={faMoon}
                    className="moon-icon text-secondary"
                />
              </label>
            </div>
        </>
    );
}
 
export default MobileFooterInput;