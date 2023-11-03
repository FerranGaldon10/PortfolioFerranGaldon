import React from "react";

import { useTranslation } from "react-i18next";

function Education () {

  const [t, i18n] = useTranslation("global");

    return (
        <section id='education' className='pt-24'>
        <div>
          <h3 className='text-2xl font-semibold tracking-tight mb-3 pb-4 dark:text-orange-100/90 text-black/80'>{t("education.education")}</h3>
          <article className='mb-14'>
            <div className='group relative grid  transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50'>
              <div className='absolute -inset-x-4 -inset-y-4 border border-transparent hover:dark:border-neutral-950 hover:border-neutral-450 z-0 hidden rounded-lg transition motion-reduce:transition-none lg:block lg:group-hover:dark:bg-neutral-800/20 lg:group-hover:bg-neutral-300/20 lg:group-hover:dark:shadow-[inset_0_1px_0_0_rgba(221, 223, 225, 0.1)] lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg'>
              </div>
              <header className='z-10 mb-2 mt-1 text-sm font-semibold uppercase tracking-wide dark:text-neutral-500 text-neutral-500 sm:col-span-2' aria-label='2013 - 2018'>
              {t("education.date1")}
              </header>

              <div className='z-10 sm:col-span-6'>
                <h3 className='font-medium flex flex-col gap-1 text-orange-200'>
                  <div>
                    <a className='inline-flex items-baseline font-medium leading-tight dark:text-orange-200 text-orange-800 hover:dark:text-orange-300 hover:text-orange-800 focus-visible:text-orange-300  group/link text-lg' href="https://portal.edu.gva.es/iescarcer/" aria-label='IES Càrcer'>
                      <span className='inline-block font-semibold'>{t("education.school1")}
                      <svg viewBox="0 0 20 20" fill="currentColor" className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true"><path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd"></path></svg>
                      </span>
                      <span className='absolute -inset-x-3 -inset-y-3'></span>
                    </a>
                  </div>
                    
                  <div>
                    <div className="dark:text-orange-100/50 text-orange-900/80 font-normal">{t("education.grade1")}</div>
                  </div>
                </h3>

                <p className='mt-2 text-sm leading-normal dark:text-orange-50/60 text-orange-950/80 dark:text-orange-50 [&>a]:text-orange-800 dark:[&>a]:text-orange-50 dark:hover:[&>a]:text-cyan-500 hover:[&>a]:text-cyan-700'>
                  {/* Graduado en la ESO y Bachillerato en IES Càrcer, un pequeño insituto situado en la localidad Valenciana de Càrcer que abarca los estudios de varias localidades de sus alrededores. */}
                  {t("education.desc1")}
                </p>

              </div>
            </div>
          </article>
          <article className='mb-14'>
            <div className='group relative grid  transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50'>
              <div className='absolute -inset-x-4 -inset-y-4 border border-transparent hover:dark:border-neutral-950 hover:border-neutral-450 z-0 hidden rounded-lg transition motion-reduce:transition-none lg:block lg:group-hover:dark:bg-neutral-800/20 lg:group-hover:bg-neutral-300/20 lg:group-hover:dark:shadow-[inset_0_1px_0_0_rgba(221, 223, 225, 0.1)] lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg'>
              </div>
              <header className='z-10 mb-2 mt-1 text-sm font-semibold uppercase tracking-wide dark:text-neutral-500 text-neutral-500 sm:col-span-2' aria-label='2020 - 2023'>
              {t("education.date2")}
              </header>
              {/* Revisar els responsives */}
              <div className='z-10 sm:col-span-6'>
                <h3 className='font-medium flex flex-col gap-1 text-orange-200'>
                  <div>
                    <a className='inline-flex items-baseline font-medium leading-tight dark:text-orange-200 text-orange-800 hover:dark:text-orange-300 hover:text-orange-800 focus-visible:text-orange-300  group/link text-lg' href="https://www.upv.es/" aria-label='Universitat Poliècnica de València | ETSIT'>
                      <span className='inline-block font-semibold'>{t("education.school2")}
                      <svg viewBox="0 0 20 20" fill="currentColor" className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true"><path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd"></path></svg>
                      </span>
                      <span className='absolute -inset-x-3 -inset-y-3'></span>
                    </a>
                  </div>
                    
                  <div>
                    <div className="dark:text-orange-100/50 text-orange-900/80 font-normal">{t("education.grade2")}</div>
                  </div>
                </h3>

                <p className='mt-2 text-sm leading-normal dark:text-orange-50/60 text-orange-950/80 dark:text-orange-50 [&>a]:text-orange-800 dark:[&>a]:text-orange-50 dark:hover:[&>a]:text-cyan-500 hover:[&>a]:text-cyan-700'>
                  {/* Diplomado en la 1a Promoción del Grado en Tecnología Digital y Multimedia en la Escuela Técnica Superior de Ingenieros de Telecomunicación de la Universitat Politécnica de València. */}
                  {t("education.desc2")}
                  </p>

              </div>
            </div>
          </article>
        </div>
      </section>
    )
}

export default Education;