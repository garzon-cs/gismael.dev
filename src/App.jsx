import { LanguageProvider } from './contexts/LanguageProvider'
import { Index } from './pages/Index'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { LanguageSelector } from './components/LanguageSelector'
import { Portfolio } from './pages/Portfolio'
import { NavLink } from 'react-router-dom'
import { Footer } from './components/Footer'


function App() {

  return (
    <LanguageProvider>
      <BrowserRouter>

        <nav className='bg-gray-200 dark:bg-gray-900 sticky top-0 flex flex-row justify-end'>
          <Routes>
            <Route path='portfolio' element={
              <NavLink className={'ml-4 w-1/2 flex flex-row justify-start items-center text-2xl font-bold bg-gradient-to-r from-indigo-400 to-orange-400 text-transparent bg-clip-text'} to={'/'}>Gismael.dev</NavLink>} />
          </Routes>

          <LanguageSelector className={'mr-2 w-1/2 flex flex-row space-x-5 justify-end items-center z-10'} />
        </nav>

        <Routes >
          <Route path='/' element={<Index />} />
          <Route path='portfolio' element={<Portfolio />} />
        </Routes>

      </BrowserRouter>

      <Footer />

    </LanguageProvider>
  )
}

export default App
