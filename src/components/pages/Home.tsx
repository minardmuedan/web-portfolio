import { motion } from 'framer-motion'
const Home = () => {
   return (
      <div className="flex h-[80vh] w-full items-center justify-center bg-slate-800">
         <div className="flex h-full flex-col items-center justify-between px-[5%] py-5 text-slate-600">
            {['M', 'I', 'N', 'A', 'R', 'D'].map((v, i) => (
               <h1 key={i} className="font-[minard-parilla] text-6xl">
                  {v}
               </h1>
            ))}
         </div>
         <div className="flex-1 px-3 text-center text-slate-300">
            <motion.p
               initial={{ opacity: 0 }}
               animate={{ opacity: 1, transition: { delay: 2.5, duration: 1 } }}
            >
               Seamlessly connecting users to data with full-stack expertise.
            </motion.p>
         </div>

         <div className="flex h-full flex-col items-center justify-between px-[5%] py-5 text-slate-600">
            {['P', 'A', 'R', 'I', 'L', 'L', 'A'].map((v, i) => (
               <h1 key={i} className="font-[minard-parilla] text-6xl">
                  {v}
               </h1>
            ))}
         </div>
      </div>
   )
}

export default Home
