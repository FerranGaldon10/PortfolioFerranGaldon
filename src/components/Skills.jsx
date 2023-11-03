import React from "react";

import {AiFillHtml5,} from 'react-icons/ai'
import {FaCss3Alt, FaReact} from 'react-icons/fa'
import {BiLogoJavascript, BiLogoTypescript, BiLogoTailwindCss, BiLogoMongodb, BiLogoGit, BiLogoPython, BiLogoNodejs, BiLogoBlender, BiLogoUnity} from 'react-icons/bi'
import {TbBrandNextjs} from 'react-icons/tb'
import {SiFfmpeg, SiAdobepremierepro, SiAdobeaftereffects} from 'react-icons/si'

import { useTranslation } from "react-i18next";

function Skills() {

  const [t, i18n] = useTranslation("global");
  
    return (
        <section id='skills' className='py-24 max-[800px]:pt-5'>
        <h3 className='text-2xl font-semibold tracking-tight mb-3 pb-4 dark:text-orange-100/90 text-black/80' >{t("skills.skills")} </h3>
        <div className='max-w-[380px] mx-auto'>
          <div className='grid grid-cols-4  space-x-2 justify-center items-center'>

            <figure title='HTML' className='col-span-1 group transition-all dark:text-neutral-400 dark:hover:text-white text-neutral-600 hover:text-neutral-950'>
              <div className='w-14 mx-auto'>
                <AiFillHtml5 size={56}/>
              </div>
              <div className='text-center group-hover:opacity-90 transition-opacity opacity-0 font-medium text-sm tracking-tight py-3'>HTML</div>
            </figure>

            <figure title='CSS' className='col-span-1 group transition-all dark:text-neutral-400 dark:hover:text-white text-neutral-600 hover:text-neutral-950'>
              <div className='w-14 mx-auto'>
                <FaCss3Alt size={56}/>
              </div>
              <div className='text-center group-hover:opacity-90 transition-opacity opacity-0 font-medium text-sm tracking-tight py-3'>CSS</div>
            </figure>

            <figure title='NextJS' className='col-span-1 group transition-all dark:text-neutral-400 dark:hover:text-white text-neutral-600 hover:text-neutral-950'>
              <div className='w-14 mx-auto'>
                <TbBrandNextjs size={56} />
              </div>
              <div className='text-center group-hover:opacity-90 transition-opacity opacity-0 font-medium text-sm tracking-tight py-3'>NextJS</div>
            </figure>

            <figure title='ReactJS' className='col-span-1 group transition-all dark:text-neutral-400 dark:hover:text-white text-neutral-600 hover:text-neutral-950'>
              <div className='w-14 mx-auto'>
                <FaReact size={56} />
              </div>
              <div className='text-center group-hover:opacity-90 transition-opacity opacity-0 font-medium text-sm tracking-tight py-3'>ReactJS</div>
            </figure>

            <figure title='JavaScript' className='col-span-1 group transition-all dark:text-neutral-400 dark:hover:text-white text-neutral-600 hover:text-neutral-950'>
              <div className='w-14 mx-auto'>
                <BiLogoJavascript size={56} />
              </div>
              <div className='text-center group-hover:opacity-90 transition-opacity opacity-0 font-medium text-sm tracking-tight py-3'>JavaScript</div>
            </figure>

            <figure title='TypeScript' className='col-span-1 group transition-all dark:text-neutral-400 dark:hover:text-white text-neutral-600 hover:text-neutral-950'>
              <div className='w-14 mx-auto'>
                <BiLogoTypescript size={60} />
              </div>
              <div className='text-center group-hover:opacity-90 transition-opacity opacity-0 font-medium text-sm tracking-tight py-3'>TypeScript</div>
            </figure>

            <figure title='TailwindCSS' className='col-span-1 group transition-all dark:text-neutral-400 dark:hover:text-white text-neutral-600 hover:text-neutral-950'>
              <div className='w-14 mx-auto'>
                <BiLogoTailwindCss size={60} />
              </div>
              <div className='text-center group-hover:opacity-90 transition-opacity opacity-0 font-medium text-sm tracking-tight py-3'>TailwindCSS</div>
            </figure>

            <figure title='MongoDB' className='col-span-1 group transition-all dark:text-neutral-400 dark:hover:text-white text-neutral-600 hover:text-neutral-950'>
              <div className='w-14 mx-auto'>
                <BiLogoMongodb size={56} />
              </div>
              <div className='text-center group-hover:opacity-90 transition-opacity opacity-0 font-medium text-sm tracking-tight py-3'>MongoDB</div>
            </figure>

            <figure title='Git' className='col-span-1 group transition-all dark:text-neutral-400 dark:hover:text-white text-neutral-600 hover:text-neutral-950'>
              <div className='w-14 mx-auto'>
                <BiLogoGit size={56} />
              </div>
              <div className='text-center group-hover:opacity-90 transition-opacity opacity-0 font-medium text-sm tracking-tight py-3'>Git</div>
            </figure>

            <figure title='Python' className='col-span-1 group transition-all dark:text-neutral-400 dark:hover:text-white text-neutral-600 hover:text-neutral-950'>
              <div className='w-14 mx-auto'>
                <BiLogoPython size={56} />
              </div>
              <div className='text-center group-hover:opacity-90 transition-opacity opacity-0 font-medium text-sm tracking-tight py-3'>Python</div>
            </figure>
            
            <figure title='NodeJS' className='col-span-1 group transition-all dark:text-neutral-400 dark:hover:text-white text-neutral-600 hover:text-neutral-950'>
              <div className='w-14 mx-auto'>
                <BiLogoNodejs size={56} />
              </div>
              <div className='text-center group-hover:opacity-90 transition-opacity opacity-0 font-medium text-sm tracking-tight py-3'>NodeJS</div>
            </figure>
            
            <figure title='Ffmpeg' className='col-span-1 group transition-all dark:text-neutral-400 dark:hover:text-white text-neutral-600 hover:text-neutral-950'>
              <div className='w-14 mx-auto'>
                <SiFfmpeg size={56} />
              </div>
              <div className='text-center group-hover:opacity-90 transition-opacity opacity-0 font-medium text-sm tracking-tight py-3'>Ffmpeg</div>
            </figure>
            
            <figure title='Blender' className='col-span-1 group transition-all dark:text-neutral-400 dark:hover:text-white text-neutral-600 hover:text-neutral-950'>
              <div className='w-14 mx-auto'>
                <BiLogoBlender size={56} />
              </div>
              <div className='text-center group-hover:opacity-90 transition-opacity opacity-0 font-medium text-sm tracking-tight py-3'>Blender</div>
            </figure>
            
            <figure title='Unity' className='col-span-1 group transition-all dark:text-neutral-400 dark:hover:text-white text-neutral-600 hover:text-neutral-950'>
              <div className='w-14 mx-auto'>
                <BiLogoUnity size={56} />
              </div>
              <div className='text-center group-hover:opacity-90 transition-opacity opacity-0 font-medium text-sm tracking-tight py-3'>Unity</div>
            </figure>
            
            <figure title='Premiere' className='col-span-1 group transition-all dark:text-neutral-400 dark:hover:text-white text-neutral-600 hover:text-neutral-950'>
              <div className='w-14 mx-auto'>
                <SiAdobepremierepro size={56} />
              </div>
              <div className='text-center group-hover:opacity-90 transition-opacity opacity-0 font-medium text-sm tracking-tight py-3'>Premiere</div>
            </figure>

            <figure title='Adobe AffterEffects' className='col-span-1 group transition-all dark:text-neutral-400 dark:hover:text-white text-neutral-600 hover:text-neutral-950'>
              <div className='w-14 mx-auto'>
                <SiAdobeaftereffects size={56} />
              </div>
              <div className='text-center group-hover:opacity-90 transition-opacity opacity-0 font-medium text-sm tracking-tight py-3'>AffterEffects</div>
            </figure>
          </div>
        </div>
      </section>
    )
}

export default Skills;