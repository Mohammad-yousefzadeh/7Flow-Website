import { createContext } from "react";

interface IContext{
    sideBar : boolean
    settingSideBar : () => void
    ShowingCurrencyCard : () => void
    showCurrenyCard : boolean
    darkMode : boolean
    setTheme : () => void
}

export const AppContext = createContext({} as IContext)