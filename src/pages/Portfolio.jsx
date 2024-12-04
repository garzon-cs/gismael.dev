import React, { useContext } from 'react'
import { languageContext } from '../contexts/LanguageContext'

export const Portfolio = () => {

    const {Strings} = useContext(languageContext);
    const {page_portfolio} = Strings;

  return (
    <main className='min-h-screen ml-2 mt-10 lg:m-20'>
        <h1 className='flex flex-col space-y-4'>
            <span className='text-5xl lg:text-8xl font-bold'>{page_portfolio.role}</span>
            <span className='text-3xl lg:text-5xl'> Gerardo Garzón </span>
        </h1>
        
        <h2>My Freelance work</h2>
        <div>cards</div>

    </main>
  )
}
