import { useRef, useEffect } from 'react'
import { useInView, motion, useAnimation } from 'framer-motion'

const Projects = () => {
   const projects = [
      { value: '1', ref: useRef(null), controls: useAnimation() },
      { value: '2', ref: useRef(null), controls: useAnimation() },
      { value: '3', ref: useRef(null), controls: useAnimation() },
      { value: '4', ref: useRef(null), controls: useAnimation() },
      { value: '5', ref: useRef(null), controls: useAnimation() },
      { value: '6', ref: useRef(null), controls: useAnimation() },
      { value: '7', ref: useRef(null), controls: useAnimation() },
      { value: '8', ref: useRef(null), controls: useAnimation() },
      { value: '9', ref: useRef(null), controls: useAnimation() },
   ]

   projects.map((project) => {
      const isInView = useInView(project.ref, { once: true, margin: '-10% 0%' })

      useEffect(() => {
         if (isInView) project.controls.start({ y: 0, opacity: 1 })
      }, [isInView])
   })

   return (
      <div className="flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-slate-300 py-20">
         <p className="font-[pilowlava] text-6xl opacity-50">POJECTS</p>
         <div className="mt-20 grid w-full lg:grid-cols-3">
            {projects.map((v) => (
               <motion.a
                  key={v.value}
                  initial={{ y: 100, opacity: 0 }}
                  animate={v.controls}
                  ref={v.ref}
                  href="#"
                  className=" relative flex h-44 items-center justify-center bg-slate-800 text-slate-300"
               >
                  <p className="text-2xl">{v.value}asdasdslorem60</p>

                  <motion.div
                     initial={{ opacity: 0 }}
                     whileHover={{ opacity: 1 }}
                     className="absolute left-0 top-0 flex h-full w-full items-center justify-center bg-slate-500"
                  >
                     <div className="p-5">
                        <p>{v.value}</p>
                        <p>
                           Lorem ipsum dolor sit amet consectetur adipisicing
                           elit. Nulla, cumque.
                        </p>
                     </div>
                  </motion.div>
               </motion.a>
            ))}
         </div>
      </div>
   )
}

export default Projects
