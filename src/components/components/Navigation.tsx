import { motion } from 'framer-motion'
const Navigation = () => {
   return (
      <motion.div
         initial={{ opacity: 0, y: -50 }}
         animate={{ opacity: 1, y: 0, transition: { delay: 2.5 } }}
         id="Home"
         className="flex h-14 items-center justify-between px-10 "
      >
         <a href="/" className="hidden text-slate-300 sm:block">
            minard parilla
         </a>

         <ul className="flex flex-1 items-center justify-between gap-8 text-slate-400 sm:flex-none">
            {['Home', 'About', 'Projects', 'Contact'].map((v, i) => (
               <li key={i}>
                  <a href={'#' + v}>{v}</a>
               </li>
            ))}
         </ul>
      </motion.div>
   )
}

export default Navigation
