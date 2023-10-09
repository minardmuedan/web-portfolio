import { AiFillHtml5 } from 'react-icons/ai'
import { DiCss3Full } from 'react-icons/di'
import { IoLogoJavascript } from 'react-icons/io5'
import { FaBootstrap, FaReact, FaPhp } from 'react-icons/fa6'
import { BiLogoTailwindCss } from 'react-icons/bi'
import { SiMysql } from 'react-icons/si'

const About = () => {
   return (
      <div className="flex min-h-screen w-full flex-col items-center justify-center bg-slate-300 px-5 py-10">
         <div className="flex flex-wrap items-center justify-center gap-8">
            <div className="h-56 w-56 rounded-xl border-2 border-slate-800"></div>
            <div className="w-3/4">
               <h1 className="mb-2 font-[nighty] text-8xl leading-[4rem] opacity-75">
                  Minard Parilla
               </h1>
               <p className="text-xl leading-6 opacity-60">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Ipsam, ut beatae esse incidunt eius quo, aut dolore veniam
                  tempora quibusdam assumenda, dignissimos distinctio voluptatem
                  suscipit ratione! Corrupti aliquam minima tempore totam quo
                  officia velit voluptates. Obcaecati consequatur perferendis
                  rem repellat laborum. Placeat laudantium itaque consequatur
                  soluta dicta dolor quos molestias?
               </p>

               <div className="mt-5 w-full text-end">
                  <button className=" rounded-xl bg-violet-600 px-4 py-2 text-white">
                     curriculum vitae
                  </button>
               </div>
            </div>
         </div>

         <p className="mt-10 text-lg">stacks that I know: </p>
         <div className=" flex items-center gap-5">
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
