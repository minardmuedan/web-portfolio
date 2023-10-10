import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

const Intro = () => {
   const [hidden, setHidden] = useState(true)

   setTimeout(() => {
      setHidden(false)
   }, 2000)

   return (
      <AnimatePresence>
         {hidden && (
            <motion.div
               exit={{ opacity: 0, transition: { duration: 0.5 } }}
               className={`intro pe- fixed right-0 top-0 z-50 h-screen w-screen bg-slate-800`}
            >
               <div className="navigation h-14 w-full"></div>

               <div className="flex h-[80vh] w-full items-center justify-center pe-[5px]">
                  <div className="flex h-full flex-col items-center justify-between px-[5%] py-5 text-slate-600">
                     {['M', 'I', 'N', 'A', 'R', 'D'].map((v, i) => (
                        <motion.h1
                           key={i}
                           initial={{ opacity: 0, x: -100 }}
                           animate={{ opacity: 1, x: 0 }}
                           transition={{ delay: i * 0.2 }}
                           className="font-[minard-parilla] text-6xl"
                        >
                           {v}
                        </motion.h1>
                     ))}
                  </div>
                  <div className="flex-1"></div>

                  <div className="flex h-full flex-col items-center justify-between px-[5%] py-5 text-slate-600">
                     {['P', 'A', 'R', 'I', 'L', 'L', 'A'].map((v, i) => (
                        <motion.h1
                           key={i}
                           initial={{ opacity: 0, x: 100 }}
                           animate={{
                              opacity: 1,
                              x: 0,
                              transition: { delay: i * 0.2 },
                           }}
                           className="font-[minard-parilla] text-6xl"
                        >
                           {v}
                        </motion.h1>
                     ))}
                  </div>
               </div>
            </motion.div>
         )}
      </AnimatePresence>
   )
}

export default Intro
