import React, { useState } from 'react'
import { languageContext } from './LanguageContext'
import { Strings_en, Strings_es } from '../data/itl_en_es';

export const LanguageProvider = ({children}) => {
    const [lang, setLang] = useState('en');
    const [Strings, setStrings] = useState(Strings_en);

    const changeLang = (targetLang) => {
      setLang(targetLang);
      
      switch (targetLang) {
        case 'es':
          setStrings(Strings_es);
          break;

        case 'en':
          setStrings(Strings_en);
          break;
      
        default:
          break;
      }
    }

  return (
    <languageContext.Provider value={ {lang, changeLang, Strings} }>
        {children}
    </languageContext.Provider>
  )
}
