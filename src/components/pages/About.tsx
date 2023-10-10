import { useRef, useEffect } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'

import { AiFillHtml5 } from 'react-icons/ai'
import { DiCss3Full } from 'react-icons/di'
import { IoLogoJavascript } from 'react-icons/io5'
import { FaBootstrap, FaReact, FaPhp } from 'react-icons/fa6'
import { BiLogoTailwindCss } from 'react-icons/bi'
import { SiMysql } from 'react-icons/si'

const About = () => {
   const aboutRef = useRef(null)
   const aboutControls = useAnimation()
   const aboutIsView = useInView(aboutRef, { once: true, margin: '-10% 0%' })

   useEffect(() => {
      if (aboutIsView) aboutControls.start({ x: 0, opacity: 1 })
   }, [aboutIsView])
   return (
      <div
         id="About"
         className="flex min-h-screen w-full flex-col items-center justify-center bg-slate-300 px-5 py-20"
      >
         <p className="font-[minard-parilla] text-5xl opacity-50">ABOUT</p>
         <div className="mt-10 flex flex-wrap items-center justify-center gap-8">
            <div className="h-56 w-56 rounded-xl border-2 border-slate-800"></div>

            <motion.div
               initial={{ x: 50, opacity: 0 }}
               animate={aboutControls}
               transition={{ duration: 1 }}
               ref={aboutRef}
               className="md:w-1/2"
            >
               <h1 className="font-[basmo] text-4xl opacity-75">
                  MINARD PARILLA
               </h1>
               <p className="text-lg leading-6 opacity-60 lg:text-xl">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Ipsam, ut beatae esse incidunt eius quo, aut dolore veniam
                  tempora quibusdam assumenda, dignissimos distinctio voluptatem
                  suscipit ratione! Corrupti aliquam minima tempore totam quo
                  officia velit voluptates. Obcaecati consequatur perferendis
                  rem repellat laborum. Placeat laudantium itaque consequatur
                  soluta dicta dolor quos molestias?
               </p>

               <div className=" w-full text-end">
                  <button className=" rounded-xl bg-violet-600 px-4 py-2 text-slate-300">
                     curriculum vitae
                  </button>
               </div>
            </motion.div>
         </div>

         <p className="mt-20 text-lg opacity-60">stacks that I know: </p>
         <div className="flex w-full items-center justify-evenly opacity-60 md:w-1/2">
            <AiFillHtml5 size="1.9rem" />
            <DiCss3Full size="1.9rem" />
            <IoLogoJavascript size="1.7rem" />
            <FaBootstrap size="1.8rem" />
            <BiLogoTailwindCss size="2.2rem" />
            <FaReact size="1.8rem" />
            <FaPhp size="2.4rem" />
            <SiMysql size="2.4rem" />
         </div>
      </div>
   )
}

export default About
