import React from "react";

import { useTranslation } from "react-i18next";


function About() {

  const [t, i18n] = useTranslation("global");

    return (
        <section id='about' className='pt-24 max-[800px]:pt-0'>
            <h3 className='text-2xl max-[800px]:block hidden font-semibold tracking-tight mb-3 pb-4 dark:text-orange-100/90 text-black/80'>{t("about.about")}</h3>
            <div className='dark:text-neutral-400 text-neutral-900'>
                <p className='mb-4 leading-6 text-base'>
                    {t("about.desc1")} 
                    <br />
                    <br />
                    {t("about.desc2")} 
                    <br />
                    <br />
                    {t("about.desc3")} 
                </p>
            </div>
      </section>
    )
}

export default About;