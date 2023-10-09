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
   ]

   projects.map((project) => {
      const isInView = useInView(project.ref, { once: true, margin: '-10% 0%' })

      useEffect(() => {
         if (isInView) project.controls.start({ y: 0, opacity: 1 })
      }, [isInView])
   })

   return (
      <div className="flex min-h-screen w-full flex-col items-center justify-center bg-slate-300 px-2 py-10">
         <p className="font-[pilowlava] text-4xl">POJECTS</p>
         <div className="mt-5 grid w-full grid-cols-2 gap-5 px-5 lg:grid-cols-3">
            {projects.map((v) => (
               <motion.div
                  initial={{ y: 100, opacity: 0 }}
                  animate={v.controls}
                  transition={{ duration: 1.2 }}
                  key={v.value}
                  ref={v.ref}
                  className="flex h-44 items-center justify-center rounded-xl bg-slate-800 text-slate-300"
               >
                  <p className="text-2xl">{v.value}</p>
               </motion.div>
            ))}
         </div>
      </div>
   )
}

export default Projects
