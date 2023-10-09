import { motion } from 'framer-motion'
const Home = () => {
   return (
      <div className="flex h-[80vh] w-full items-center justify-center bg-slate-800">
         <div className="text-center">
            <motion.h1
               style={{ WebkitTextStroke: '1px white' }}
               className="font-[pilowlava] text-7xl text-transparent selection:bg-slate-900 lg:text-8xl"
            >
               MINARD <br /> PARILLA
            </motion.h1>

            <p className="mt-3 text-sm text-slate-400 lg:text-lg">
               " seamlessly connecting users to data with full-stack expertise.
               "
            </p>
         </div>
      </div>
   )
}

export default Home
