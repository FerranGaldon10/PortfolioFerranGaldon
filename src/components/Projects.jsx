import React from "react";
import {AiFillGithub} from 'react-icons/ai'

import { useTranslation } from "react-i18next";

function Projects() {

  const [t, i18n] = useTranslation("global");

    return (
        <section id='projects' className='pt-24 max-[800px]:pt-5'>
                <h3 className='text-2xl font-semibold tracking-tight mb-3 pb-4 dark:text-orange-100/90 text-black/80'>{t("projects.projects")} </h3>

                <article className='mb-14'>
                  <div className='group relative grid  transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50'>
                    <div className='absolute -inset-x-4 -inset-y-4 border border-transparent hover:dark:border-neutral-950 hover:border-neutral-450 z-0 hidden rounded-lg transition motion-reduce:transition-none lg:block lg:group-hover:dark:bg-neutral-800/20 lg:group-hover:bg-neutral-300/20 lg:group-hover:dark:shadow-[inset_0_1px_0_0_rgba(221, 223, 225, 0.1)] lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg'></div>
                    <div className='z-10 mb-2 mt-1 text-sm font-semibold uppercase tracking-wide  sm:col-span-2'>
                      <div className='rounded-lg overflow-hidden max-[700px]:hidden border-2 border-neutral-900 shadow-xl dark:shadow-black/50 shadow-black/20  '>
                        <img  loading='lazy' width={250} height={250} decoding='async' data-nimg="1" className='opacity-80 object-cover w-full h-full sepia group-hover:sepia-0' src="/portfolio-image.png"  />
                      </div>
                    </div>

                    <div className='z-10 sm:col-span-6'>
                      <h3 className='font-medium flex flex-col gap-1 text-orange-200'>
                        <div>
                          <a className='inline-flex items-baseline font-medium leading-tight dark:text-orange-200 text-orange-800 hover:dark:text-orange-300 hover:text-orange-800 focus-visible:text-orange-300  group/link text-lg' aria-label="Your Library" href="/">
                            <span className='inline-block'>{t("projects.portfolio")}
                            <svg viewBox="0 0 20 20" fill="currentColor" className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true"><path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd"></path></svg>
                            </span>
                            <span className='absolute -inset-x-3 -inset-y-3'></span>
                          </a>
                        </div>

                        <div>
                          <div className='dark:text-orange-100/50 text-orange-900/80 font-normal'>
                            {t("projects.inprod")}
                          </div>
                        </div>
                      </h3>

                      <p className='mt-2 text-sm leading-normal dark:text-orange-50/60 text-orange-950/80 dark:text-orange-50 [&>a]:text-orange-800 dark:[&>a]:text-orange-50 dark:hover:[&>a]:text-cyan-500 hover:[&>a]:text-cyan-700'>
                        {t("projects.desc1")}
                      </p>
                      <p className='mt-2 text-sm leading-normal dark:text-orange-50/60 text-orange-950/80 dark:text-orange-50 [&>a]:text-orange-800 dark:[&>a]:text-orange-50 dark:hover:[&>a]:text-cyan-500 hover:[&>a]:text-cyan-700'>
                        {t("projects.desc12")}
                      </p>

                      <ul className='mt-2 flex flex-wrap' aria-label='Technologies used'>
                        <li className='mr-1.5 mt-2'>
                          <div className='flex items-center rounded-full bg-orange-400/10 px-3 py-1 text-xs font-medium leading-5 dark:text-orange-300 text-orange-900'>
                            ReactJs
                          </div>
                        </li>
                        <li className='mr-1.5 mt-2'>
                          <div className='flex items-center rounded-full bg-orange-400/10 px-3 py-1 text-xs font-medium leading-5 dark:text-orange-300 text-orange-900'>
                            TailwindCSS
                          </div>
                        </li>
                        <li className='mr-1.5 mt-2'>
                          <div className='flex items-center rounded-full bg-orange-400/10 px-3 py-1 text-xs font-medium leading-5 dark:text-orange-300 text-orange-900'>
                            Netlify
                          </div>
                        </li>                      
                      </ul>

                      <div className='relative pt-2'>
                        <a className='inline-flex items-center font-semibold text-sm baseline  leading-tight dark:text-orange-200 text-orange-950 hover:dark:text-orange-100/60 hover:text-orange-800 focus-visible:text-orange-300 ' href="https://github.com/FerranGaldon10/PortfolioFerranGaldon">
                          <div className='w-8'>
                            <AiFillGithub size={25}/>
                          </div>
                          <span>GitHub</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </article>

                <article className='mb-14'>
                  <div className='group relative grid  transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50'>
                    <div className='absolute -inset-x-4 -inset-y-4 border border-transparent hover:dark:border-neutral-950 hover:border-neutral-450 z-0 hidden rounded-lg transition motion-reduce:transition-none lg:block lg:group-hover:dark:bg-neutral-800/20 lg:group-hover:bg-neutral-300/20 lg:group-hover:dark:shadow-[inset_0_1px_0_0_rgba(221, 223, 225, 0.1)] lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg'></div>
                    <div className='z-10 mb-2 mt-1 text-sm font-semibold uppercase tracking-wide  sm:col-span-2'>
                      <div className='rounded-lg overflow-hidden max-[700px]:hidden border-2 border-neutral-900 shadow-xl dark:shadow-black/50 shadow-black/20  '>
                        <img loading='lazy' width={250} height={250} decoding='async' data-nimg="1" className='opacity-80 object-cover w-full h-full sepia group-hover:sepia-0' src="/netflix-clone-image.png"  />
                      </div>
                    </div>

                    <div className='z-10 sm:col-span-6'>
                      <h3 className='font-medium flex flex-col gap-1 text-orange-200'>
                        <div>
                          <a className='inline-flex items-baseline font-medium leading-tight dark:text-orange-200 text-orange-800 hover:dark:text-orange-300 hover:text-orange-800 focus-visible:text-orange-300  group/link text-lg' aria-label="Your Library" href="">
                            <span className='inline-block'>{t("projects.netflix")}
                            <svg viewBox="0 0 20 20" fill="currentColor" className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true"><path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd"></path></svg>
                            </span>
                            <span className='absolute -inset-x-3 -inset-y-3'></span>
                          </a>
                        </div>

                        <div>
                          <div className='dark:text-orange-100/50 text-orange-900/80 font-normal'>
                          {t("projects.improve")}
                          </div>
                        </div>
                      </h3>

                      <p className='mt-2 text-sm leading-normal dark:text-orange-50/60 text-orange-950/80 dark:text-orange-50 [&>a]:text-orange-800 dark:[&>a]:text-orange-50 dark:hover:[&>a]:text-cyan-500 hover:[&>a]:text-cyan-700'>
                      {t("projects.desc2")}
                      </p>

                      <p className='mt-2 text-sm leading-normal dark:text-orange-50/60 text-orange-950/80 dark:text-orange-50 [&>a]:text-orange-800 dark:[&>a]:text-orange-50 dark:hover:[&>a]:text-cyan-500 hover:[&>a]:text-cyan-700'>
                      {t("projects.desc22")}
                      </p>

                      <ul className='mt-2 flex flex-wrap' aria-label='Technologies used'>
                        <li className='mr-1.5 mt-2'>
                          <div className='flex items-center rounded-full bg-orange-400/10 px-3 py-1 text-xs font-medium leading-5 dark:text-orange-300 text-orange-900'>
                            NextJs
                          </div>
                        </li>
                        <li className='mr-1.5 mt-2'>
                          <div className='flex items-center rounded-full bg-orange-400/10 px-3 py-1 text-xs font-medium leading-5 dark:text-orange-300 text-orange-900'>
                            Prisma
                          </div>
                        </li>
                        <li className='mr-1.5 mt-2'>
                          <div className='flex items-center rounded-full bg-orange-400/10 px-3 py-1 text-xs font-medium leading-5 dark:text-orange-300 text-orange-900'>
                            MongoDB
                          </div>
                        </li>
                        <li className='mr-1.5 mt-2'>
                          <div className='flex items-center rounded-full bg-orange-400/10 px-3 py-1 text-xs font-medium leading-5 dark:text-orange-300 text-orange-900'>
                            NextAuth
                          </div>
                        </li>                       
                      </ul>

                      <div className='relative pt-2'>
                        <a className='inline-flex items-center font-semibold text-sm baseline  leading-tight dark:text-orange-200 text-orange-950 hover:dark:text-orange-100/60 hover:text-orange-800 focus-visible:text-orange-300 ' href="https://github.com/FerranGaldon10/netlix-clone-ferran">
                          <div className='w-8'>
                            <AiFillGithub size={25}/>
                          </div>
                          <span>GitHub</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </article>

                <article className='mb-14'>
                  <div className='group relative grid  transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50'>
                    <div className='absolute -inset-x-4 -inset-y-4 border border-transparent hover:dark:border-neutral-950 hover:border-neutral-450 z-0 hidden rounded-lg transition motion-reduce:transition-none lg:block lg:group-hover:dark:bg-neutral-800/20 lg:group-hover:bg-neutral-300/20 lg:group-hover:dark:shadow-[inset_0_1px_0_0_rgba(221, 223, 225, 0.1)] lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg'></div>
                    <div className='z-10 mb-2 mt-1 text-sm font-semibold uppercase tracking-wide  sm:col-span-2'>
                      <div className='rounded-lg overflow-hidden max-[700px]:hidden border-2 border-neutral-900 shadow-xl dark:shadow-black/50 shadow-black/20  '>
                        <img  loading='lazy' width={250} height={250} decoding='async' data-nimg="1" className='opacity-80 object-cover w-full h-full brightness-[20%] group-hover:brightness-100' src="/prueba.png"  />
                      </div>
                    </div>

                    <div className='z-10 sm:col-span-6'>
                      <h3 className='font-medium flex flex-col gap-1 text-orange-200'>
                        <div>
                          <a className='inline-flex items-baseline font-medium leading-tight dark:text-orange-200 text-orange-800 hover:dark:text-orange-300 hover:text-orange-800 focus-visible:text-orange-300  group/link text-lg' aria-label="Your Library" href="https://camals-project.netlify.app/">
                            <span className='inline-block'>{t("projects.tfg")}
                            <svg viewBox="0 0 20 20" fill="currentColor" className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true"><path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd"></path></svg>
                            </span>
                            <span className='absolute -inset-x-3 -inset-y-3'></span>
                          </a>
                        </div>

                        <div>
                          <div className='dark:text-orange-100/50 text-orange-900/80 font-normal'>
                          {t("projects.finished")}
                          </div>
                        </div>
                      </h3>

                      <p className='mt-2 text-sm leading-normal dark:text-orange-50/60 text-orange-950/80 dark:text-orange-50 [&>a]:text-orange-800 dark:[&>a]:text-orange-50 dark:hover:[&>a]:text-cyan-500 hover:[&>a]:text-cyan-700'>
                      {t("projects.desc3")}
                      </p>

                      <ul className='mt-2 flex flex-wrap' aria-label='Technologies used'>
                        <li className='mr-1.5 mt-2'>
                          <div className='flex items-center rounded-full bg-orange-400/10 px-3 py-1 text-xs font-medium leading-5 dark:text-orange-300 text-orange-900'>
                            ReactJs
                          </div>
                        </li>
                        <li className='mr-1.5 mt-2'>
                          <div className='flex items-center rounded-full bg-orange-400/10 px-3 py-1 text-xs font-medium leading-5 dark:text-orange-300 text-orange-900'>
                            TailwindCSS
                          </div>
                        </li>
                        <li className='mr-1.5 mt-2'>
                          <div className='flex items-center rounded-full bg-orange-400/10 px-3 py-1 text-xs font-medium leading-5 dark:text-orange-300 text-orange-900'>
                            NodeJs
                          </div>
                        </li>
                        <li className='mr-1.5 mt-2'>
                          <div className='flex items-center rounded-full bg-orange-400/10 px-3 py-1 text-xs font-medium leading-5 dark:text-orange-300 text-orange-900'>
                            ExpressJs
                          </div>
                        </li>
                        <li className='mr-1.5 mt-2'>
                          <div className='flex items-center rounded-full bg-orange-400/10 px-3 py-1 text-xs font-medium leading-5 dark:text-orange-300 text-orange-900'>
                            MongoDB
                          </div>
                        </li>
                        <li className='mr-1.5 mt-2'>
                          <div className='flex items-center rounded-full bg-orange-400/10 px-3 py-1 text-xs font-medium leading-5 dark:text-orange-300 text-orange-900'>
                            Figma
                          </div>
                        </li>
                        <li className='mr-1.5 mt-2'>
                          <div className='flex items-center rounded-full bg-orange-400/10 px-3 py-1 text-xs font-medium leading-5 dark:text-orange-300 text-orange-900'>
                            Photoshop
                          </div>
                        </li>  
                        <li className='mr-1.5 mt-2'>
                          <div className='flex items-center rounded-full bg-orange-400/10 px-3 py-1 text-xs font-medium leading-5 dark:text-orange-300 text-orange-900'>
                            Lightroom
                          </div>
                        </li>                    
                      </ul>

                      <div className='relative pt-2'>
                        <a className='inline-flex items-center font-semibold text-sm baseline  leading-tight dark:text-orange-200 text-orange-950 hover:dark:text-orange-100/60 hover:text-orange-800 focus-visible:text-orange-300 ' href="https://github.com/FerranGaldon10/TFG-FerranGaldon">
                          <div className='w-8'>
                            <AiFillGithub size={25}/>
                          </div>
                          <span>GitHub</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </article>

              </section>
    )
}

export default Projects;