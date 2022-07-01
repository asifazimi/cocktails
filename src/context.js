import React, { useState, useContext, useEffect } from "react";
const data = " https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("Strawberry");
  const [cocktails, setCocktails] = useState([]);

  // Fetching the data
  const fetchData = async () => {
    setLoading(true);
    try {
      const request = await fetch(`${data}${searchTerm}`);
      const response = await request.json();
      const { drinks } = response;
      if (drinks) {
        const newCocktails = drinks.map((item) => {
          const { idDrink, strDrink, strAlcoholic, strGlass, strDrinkThumb } =
            item;

          return {
            id: idDrink,
            name: strDrink,
            info: strAlcoholic,
            image: strDrinkThumb,
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
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchTerm]);

  return (
    <AppContext.Provider value={{ loading, cocktails, setSearchTerm }}>
      {children}
    </AppContext.Provider>
  );
};

// custom hook
export const useGlobalContext = () => {
  return useContext(AppContext);
};
