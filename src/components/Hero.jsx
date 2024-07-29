import profilePic from "../assets/weldon.jpg"
import { delay, motion } from "framer-motion"
const container = (delay) =>({
  hidden:{x:-100, opacity:0},
  visible:{
    x:0,
    opacity:1,
    transition:{duration:0.5, delay:delay},
  },
});

const Hero = () => {
  const about=`I am a passionate full stack developer with a knowledge of developing robust and scalable web applications.With 3 years of experience, I have honed my skills in front-end technologies like React and Next js as well as back-end technologies like Nodde.js, Mysql and mongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`

  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
        <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2">
            <div className="flex flex-col items-center lg:items-start">
                <motion.h1
                  variants={container(0)}
                  initial="hidden"
                  animate="visible"

                   className="pb-16 text-6xl font-thin lg:mt-16 lg:text-8xl tracking-tight">Weldon Rono</motion.h1>
                <motion.span 
                  variants={container(0.5)}
                  initial="hidden"
                  animate="visible"className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent">Full Stack Developer</motion.span>
                <motion.p
                  variants={container(1)}
                  initial="hidden"
                  animate="visible" className="my-2 max-w-xl py-6 font-light tracking-tighter">{about}</motion.p>



            </div>

            </div>
            <div className="w-full lg:w-1/2 lg:p-8">
              <div className="flex justify-center">
                <motion.img
                 
                 initial={
                  {x:100, opacity:0}
                }
                 animate={
                  {x:0, opacity:1}
                }
                 transition={
                  {duration:1, delay:1.2}
                }
                 src={profilePic} alt="Weldon Rono"/>
              </div>
            </div>

        </div>

    </div>
  )
}

export default Hero