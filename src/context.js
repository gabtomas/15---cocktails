import React, { useState, useContext, useEffect } from "react";
import { useCallback } from "react";

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSerchtTerm] = useState("a"); // default value a because we want to see some cocktails when we load the page
    const [cocktails, setCocktails] = useState([]);

    const fetchDrinks = async () => {
        setLoading(true);
        try {
            const response = await fetch(`${url}${searchTerm}`);
            const data = await response.json();
            const { drinks } = data;

            //if we have some cocktails set them to the cocktails state
            if (drinks) {
                const newCocktails = drinks.map((drink) => {
                    const {
                        idDrink,
                        strDrink,
                        strDrinkThumb,
                        strAlcoholic,
                        strGlass,
                    } = drink;

                    return {
                        id: idDrink,
                        name: strDrink,
                        image: strDrinkThumb,
                        info: strAlcoholic,
                        glass: strGlass,
                    };
                });
                setCocktails(newCocktails);
            } else {
                setCocktails([]);
            }
            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchDrinks();
    }, [searchTerm]);

    return (
        <AppContext.Provider value={{ loading, cocktails, setSerchtTerm }}>
            {children}
        </AppContext.Provider>
    );
};
// make sure use
export const useGlobalContext = () => {
    return useContext(AppContext);
};

export { AppContext, AppProvider };
