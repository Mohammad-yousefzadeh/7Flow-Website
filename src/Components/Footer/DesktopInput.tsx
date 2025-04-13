import { AppContext } from "@/src/AppContext/AppContext";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useEffect } from "react";

const DesktopFooterInput = () => {

    const { darkMode, setTheme } = useContext(AppContext);
    
    useEffect(() => {
        if (darkMode) document.body.style.backgroundColor = "rgb(20, 20, 20)";
        else document.body.style.backgroundColor = "white";
    });

    return (
        <>
            <div className="dark_mode my-auto d-none d-lg-block">
              <input
                className="dark_mode_input"
                type="checkbox"
                id="darkmode-toggle"
                />
              <label
                onClick={setTheme}
                    className="dark_mode_label"
                    htmlFor="darkmode-toggle"
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
 
export default DesktopFooterInput;