import { createContext } from "react";
import { useState } from "react";

export const LanguageContext = createContext();

export default function LanguageContextFunction({ children }) {

    const [language, setLanguage] = useState('english')

    const handleChange = (event) => {
        setLanguage(event.target.value)
    }

    return (
        <LanguageContext.Provider value={{ language, setLanguage, handleChange }}>
            {children}
        </LanguageContext.Provider>
    )
}