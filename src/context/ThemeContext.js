import { createContext, useState } from "react";

const ThemeContext = createContext(0);

export const ThemeProvider = ({ children }) => {
    const [footerColor, setFooterColor] = useState(0);

    return (
        <ThemeContext.Provider value={{footerColor, setFooterColor}}>
            {children}
        </ThemeContext.Provider>
    );
}

export default ThemeContext;