import { motion } from 'framer-motion'
const Home = () => {
   return (
      <header className="flex h-[80vh] w-full items-center justify-center overflow-hidden bg-slate-800">
         <div className="text-center">
            <motion.h1
               initial={{ opacity: 0 }}
               animate={{
                  opacity: 1,
                  transition: { delay: 0.2, duration: 1.4 },
               }}
               style={{ WebkitTextStroke: '1px white' }}
               className="font-[pilowlava] text-7xl text-transparent selection:bg-slate-900 lg:text-8xl"
            >
               MINARD <br /> PARILLA
            </motion.h1>

            <motion.p
               initial={{ opacity: 0, x: -50 }}
               animate={{
                  opacity: 1,
                  x: 0,
                  transition: { delay: 0.5, duration: 1 },
               }}
               className="mt-3 text-[.8rem] text-slate-400 md:text-sm lg:text-lg"
            >
               " seamlessly connecting users to data with full-stack expertise.
               "
            </motion.p>
         </div>
      </header>
   )
}

export default Home
