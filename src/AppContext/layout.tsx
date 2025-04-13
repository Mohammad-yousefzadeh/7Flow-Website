"use client";
import { ReactNode, useState } from "react";
import { AppContext } from "./AppContext";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import SideBar from "../Components/SideBar";

interface LayoutChildren {
  children: ReactNode;
}

const ContextLayout = ({ children }: LayoutChildren) => {
  const [sideBar, setSideBar] = useState(false);
  const [showCurrenyCard, setShowCurrenyCard] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const settingSideBar = () => {
    sideBar ? setSideBar(false) : setSideBar(true);
  };

  const ShowingCurrencyCard = () => {
    showCurrenyCard ? setShowCurrenyCard(false) : setShowCurrenyCard(true);
  };

  const setTheme = () => {
    darkMode ? setDarkMode(false) : setDarkMode(true);
  };

  return (
    <>
      <AppContext
        value={{
          sideBar,
          settingSideBar,
          ShowingCurrencyCard,
          showCurrenyCard,
          darkMode,
          setTheme,
        }}
      >
        <Navbar darkMode={darkMode} />
        <SideBar />
        {children}
        <Footer darkMode={darkMode} />
      </AppContext>
    </>
  );
};

export default ContextLayout;
