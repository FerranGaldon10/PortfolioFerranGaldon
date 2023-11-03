import React from "react";

import { useTranslation } from "react-i18next";

function Footer() {

  const [t, i18n] = useTranslation("global");

    return (
        <footer className='py-9 w-full border-t dark:border-t-neutral-900 border-t-neutral-300'>
        <div className='flex items-center justify-center h-full mx-auto w-[600px] max-w-full'>
          <div className='flex flex-col gap-2'>
            <h4 className='text-left font-extrabold text-2xl tracking-tighter dark:text-white'>
              <div className='flex gap-2 font-medium dark:text-neutral-400 text-neutral-800 text-xs'>
                <span>f</span>
                <span>r</span>
                <span>o</span>
                <span>m</span>
              </div>
              <a href="" className='hover:underline'>Spain</a>
            </h4>
            <p className='mt-2 text-sm leading-normal dark:text-orange-50/60 text-orange-950/80 dark:text-orange-50 [&>a]:text-orange-800 dark:[&>a]:text-orange-50 dark:hover:[&>a]:text-cyan-500 hover:[&>a]:text-cyan-700'>
              {t("footer.desc")} 
            </p>
          </div>
        </div>
      </footer>
    )
}

export default Footer;