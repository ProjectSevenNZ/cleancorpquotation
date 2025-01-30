import { createContext, useContext, useState } from "react";

interface IQuoteContext {
    quote: any,
    setQuote: React.Dispatch<React.SetStateAction<any>>,
};

const QuoteContext = createContext<IQuoteContext>({
    quote: {},
    setQuote: () => { },
});

export const useQuote = () => useContext(QuoteContext);

const QuoteProvider = ({ children }) => {
    const [quote, setQuote] = useState({});

    return (
        <QuoteContext.Provider
            value={{
                quote,
                setQuote,
            }}
        >
            {children}
        </QuoteContext.Provider>
    );
};

export default QuoteProvider;