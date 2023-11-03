import { React, useState } from 'react';
import MainInfo from './components/MainInfo';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Footer from './components/Footer';
import ShadowCursor from './components/ShadowCursor';
import Resume from './components/Resume';
import Education from './components/Education';
import HomeSection from './components/HomeSection';

import { useTranslation } from "react-i18next";
import i18next from 'i18next';


function App() {

  const [t, i18n] = useTranslation("global");

  const [language, setLanguage] = useState('en');

  const changeLanguage = (newLanguage) => {
    setLanguage(newLanguage);
    i18next.changeLanguage(newLanguage);
  };

  return (
    <>
      <ShadowCursor/>
      {/* Els responsives y item-s y group */}
      <main className="relative bg-[--body-background]" >
        <HomeSection/>
        <div id='content' className='px-8 relative flex items-center max-w-[1100px] mx-auto' >
          <div className='h-full text-left max-w-full'>
            <div className='grid grid-cols-2 gap-2 h-full w-full'>

            <header className='flex col-span-1 max-[800px]:col-span-2 top-0 h-screen max-[800px]:h-auto min-[800px]:sticky  gap-3' >
              
              {/* <a href="" className='absolute top-0 mt-7 flex'>
                <img className='w-5 h-6' src="/esp.png" alt="" />
                <p className='pl-2 pr-2'>/</p>
                <img className='w-6 h-6' src="/eng.png" alt="" />
              </a> */}
              
              <div >
                {language === 'en' ? (
                  <button className='absolute top-0 mt-7 flex' onClick={() => changeLanguage('es')}>
                    <img className='w-5 h-6' src="/esp.png" alt="ESP" />
                    <p className='pl-2 pr-2'>/</p>
                    <img className='w-6 h-6' src="/eng.png" alt="ENG" />
                  </button>
                ) : (
                  <button className='absolute top-0 mt-7 flex' onClick={() => changeLanguage('en')}>
                    <img className='w-5 h-6' src="/esp.png" alt="ESP" />
                    <p className='pl-2 pr-2'>/</p>
                    <img className='w-6 h-6' src="/eng.png" alt="ENG" />
                  </button>
                )}
              </div>

              <MainInfo/>
            </header>

            <div className='col-span-1 max-[800px]:col-span-2 flex flex-col'>
              <About/>
              <Education />
              {/* <Experience/> */}
              <Resume/>
              <Projects/>
              <Skills/>
              <Footer/>
            </div>
            </div>
          </div>
        </div>
        
      </main>
    </>
  )
}

export default App;
