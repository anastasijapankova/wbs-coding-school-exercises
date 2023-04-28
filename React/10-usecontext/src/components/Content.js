import { useContext } from 'react';
import { LanguageContext } from './languageContext';

const translations = {
    english: {
        title: 'Welcome',
    },
    latvian: {
        title: 'Laipni lūdzam',
    },
    russian: {
        title: 'Добро пожаловать',
    },
};

export function Content() {

    const { language } = useContext(LanguageContext);
    const { title } = translations[language];

    return (
        <div>
            <h1>{title}</h1>
        </div>
    );
}