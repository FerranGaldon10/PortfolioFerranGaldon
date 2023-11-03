import React from "react";
import {AiFillGithub, AiOutlineInstagram, AiFillLinkedin} from 'react-icons/ai'
import {BsLinkedin, BsSpotify} from 'react-icons/bs'
import {BiLogoGmail} from 'react-icons/bi'

import { useTranslation } from "react-i18next";

function MainInfo() {

  const [t, i18n] = useTranslation("global");

  const handleEmailClick = () => {
    const email = 'ferrangaldon100@gmail.com'; 
    window.open(`mailto:${email}`);
  };

    return (
        <div className='h-full py-24 px-110 max-[800px]:px-2 flex-col  flex'>
                <div className='flex flex-col gap-3'>
                  <h1 className='font-bold text-[#1f1c19] dark:text-[#cdbead] relative text-transparent text-6xl bg-clip-text inline-block text-gradient tracking-tighter'>Ferran Galdón</h1>
                  <h2 className='dark:text-[#ada79f] text-[#6c6761] text-transparent bg-clip-text tracking-tighter text-gradient text-xl'>{t("maininfo.prof")}</h2>
                  <p className='w-96 max-[700px]:w-full opacity-80 dark:text-[#c8c6c0] text-transparent text-[#302e2a] item-s text-gradient bg-clip-text leading-5'>{t("maininfo.desc")}</p>
                </div>
                
                <nav className='my-10 max-[800px]:hidden'>
                  <ul className='flex flex-col gap-1 text-base font-semibold'>
                    <li>
                      <a href="#about" className='dark:text-neutral-400 text-neutral-600 hover:text-neutral-950 dark:hover:text-neutral-50 py-1 group transition-colors flex items-center max-w-min'>
                        <div className='h-[2px] w-4 dark:bg-neutral-500 bg-neutral-700 group-hover:w-6 transition-all group-hover:dark:bg-neutral-200 group-hover:bg-neutral-800'></div>
                        <span className='ml-2'>{t("maininfo.about")}</span>
                      </a>
                    </li>
                    <li>
                      <a href="#education" className='dark:text-neutral-400 text-neutral-600 hover:text-neutral-950 dark:hover:text-neutral-50 py-1 group transition-colors flex items-center max-w-min'>
                        <div className='h-[2px] w-4 dark:bg-neutral-500 bg-neutral-700 group-hover:w-6 transition-all group-hover:dark:bg-neutral-200 group-hover:bg-neutral-800'></div>
                        <span className='ml-2'>{t("maininfo.education")}</span>
                      </a>
                    </li>
                    {/* <li>
                      <a href="#experience" className='dark:text-neutral-400 text-neutral-600 hover:text-neutral-950 dark:hover:text-neutral-50 py-1 group transition-colors flex items-center max-w-min'>
                        <div className='h-[2px] w-4 dark:bg-neutral-500 bg-neutral-700 group-hover:w-6 transition-all group-hover:dark:bg-neutral-200 group-hover:bg-neutral-800'></div>
                        <span className='ml-2'>Experience</span>
                      </a>
                    </li> */}
                    <li>
                      <a href="#projects" className='dark:text-neutral-400 text-neutral-600 hover:text-neutral-950 dark:hover:text-neutral-50 py-1 group transition-colors flex items-center max-w-min'>
                        <div className='h-[2px] w-4 dark:bg-neutral-500 bg-neutral-700 group-hover:w-6 transition-all group-hover:dark:bg-neutral-200 group-hover:bg-neutral-800'></div>
                        <span className='ml-2'>{t("maininfo.projects")}</span>
                      </a>
                    </li>
                    <li>
                      <a href="#skills" className='dark:text-neutral-400 text-neutral-600 hover:text-neutral-950 dark:hover:text-neutral-50 py-1 group transition-colors flex items-center max-w-min'>
                        <div className='h-[2px] w-4 dark:bg-neutral-500 bg-neutral-700 group-hover:w-6 transition-all group-hover:dark:bg-neutral-200 group-hover:bg-neutral-800'></div>
                        <span className='ml-2'>{t("maininfo.skills")}</span>
                      </a>
                    </li>
                  </ul>
                </nav>

                <div className='mt-auto max-[700px]:mt-4'>
                  <div className='flex max-[700px]:flex-col items-center max-[700px]:items-start'>
                    <div className='flex items-center gap-3'>
                      <a title='Github' className='dark:text-neutral-300 text-neutral-600 hover:dark:text-neutral-100 hover:text-neutral-800' href="https://github.com/FerranGaldon10">
                        <div className='w-8'>
                            <AiFillGithub size={32}/>
                        </div>
                      </a>
                      <a title='Instagram' className='dark:text-neutral-300 text-neutral-600 hover:dark:text-neutral-100 hover:text-neutral-800' href="https://www.instagram.com/ferrangaldon10/">
                        <div className='w-8'>
                          <AiOutlineInstagram size={32} />
                        </div>
                      </a>
                      
                      <button onClick={handleEmailClick} title='Gmail' className='dark:text-neutral-300 text-neutral-600 hover:dark:text-neutral-100 hover:text-neutral-800'>
                        <div className='w-8'>
                        <BiLogoGmail size={32} />
                        </div>
                      </button>

                      {/* <a title='Linkedin' className='dark:text-neutral-300 text-neutral-600 hover:dark:text-neutral-100 hover:text-neutral-800'>
                        <div className='w-8'>
                        <BsLinkedin size={32} />
                        </div>
                      </a> */}

                      <a title='Spotify' className='dark:text-neutral-300 text-neutral-600 hover:dark:text-neutral-100 hover:text-neutral-800' href="https://open.spotify.com/user/ferrangaldon10?si=6308ced635294530">
                        <div className='w-8'>
                          <BsSpotify size={32} />
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
    )
}

export default MainInfo;