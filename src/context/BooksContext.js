import { createContext, useState } from "react";

const BooksContext = createContext({});

export const BooksProvider = ({ children }) => {
    const [resultFor, setResultFor] = useState(null);
    const [data, setData] = useState(null);

    return (
        <BooksContext.Provider value={ { resultFor, setResultFor, data, setData } }>
            {children}
        </BooksContext.Provider>
    );
}

export default BooksContext;