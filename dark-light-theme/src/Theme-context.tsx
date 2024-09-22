import { useState,createContext, useEffect } from "react";
import { useContext } from "react";



const ThemeContext = createContext();

export const useTheme = () => {
  return useContext(ThemeContext);
};

export const ThemeProvider = ({ children }:any) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme((prevState) => !prevState);
  };

  const theme = isDarkTheme ? "dark" : "light";

  useEffect(()=>{
   document.documentElement.setAttribute("data-theme",theme)
  },[isDarkTheme])

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
