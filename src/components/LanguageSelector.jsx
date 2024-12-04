import React, { useContext } from 'react'
import { languageContext } from '../contexts/LanguageContext';
import { languageOptionsList } from '../data/itl_en_es';

const buttonStyle = (currentLang, myLang) => `text-black p-2 ${currentLang===myLang? 'bg-slate-400 dark:bg-slate-300': 'bg-slate-300 dark:bg-slate-400'}`;

const LanguageButton = ({buttonLang}) => {
    const {lang, changeLang} = useContext(languageContext);

    return (
        <li>
            <button className={buttonStyle(lang, buttonLang)} type='button' onClick={() => changeLang(buttonLang)}>
                {buttonLang.toUpperCase()}
            </button>
        </li>
    )
}

const LanguageOptions = ({languages}) => {
    return (
        languages.map(e => <LanguageButton key={e} buttonLang={e} />)
    )
} 

export const LanguageSelector = ({className}) => {

    const {Strings} = useContext(languageContext);
    const {nav} = Strings;

  return (
    <div className={className}>
        <span className='text-lg font-semibold'> {nav.confLang} </span>
        <menu className='flex flex-row space-x-5 justify-center'>
            <LanguageOptions languages={languageOptionsList} />
        </menu>
    </div>
  )
}
