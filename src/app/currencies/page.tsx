import CurrenciesTable from "./curenciesTable";
import Header from "./currenciesHeader";
import ShowCurrencies from "./showCurrenicies";

const Currencies = () => {
    return (
        <>
            <Header />
            <CurrenciesTable />
            <ShowCurrencies />
        </>
    );
}
 
export default Currencies;