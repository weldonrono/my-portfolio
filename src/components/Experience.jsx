import { motion } from "framer-motion";
const Experience = () => {
     const EXPERIENCES = [
  {
      year:"2024- present",
      role:"Junior Full Stack Developer",
      company:"Nakuru County",
      description:"Led a team in developing and maintaining web applications using javascript, React js, and Node js.Implemented RESTful APIS and integrated with mongoDB",
      technologies:["javascript","React js","Next js","mongoDB"],
  },
  {
      year:"2022- 2023",
      role:"Frontend Developer",
      company:"Nakuru County Headquaters",
      description:"Designed and developed user interfaces for web applications using Next js and React js. Worked closely with backend developers to integrate front end components",
      technologies:["HTML","CSS","Vue.js","mySQL"],
  },
  {
      year:"2021-2022",
      role:"Sofware Engineer",
      company:"IEBC",
      description:`Contributed to the development of web applications using javascript, React js, and Node js. Managed databases and implemented data storage solutions using mongoDB. Worked closely with product managers to prioritize features and enhancements.`,
      technologies:["PHP","Ruby","sqlite","Rails"],
  }
];

  return (
    <div className="border-b border-neutral-900 pb-4">
        <motion.h1
        whileInView={{opacity:1, y:0}}
        initial={{opacity:0, y:-100}}
        transition={{duration:0.5}}
         className="my-20 text-center text-4xl">Experience</motion.h1>
        <div>
            {EXPERIENCES.map((experience, index)=>(
                <div key={index}
                className="mb-8 flex flex-wrap lg:justify-center">
                    <motion.div
                      whileInView={{opacity:1, x:0}}
                      initial={{opacity:0, x:-100}}
                      transition={{duration:1}}

                     className="w-full lg:w-1/4">
                      <p>{experience.year}</p>
                    </motion.div>
                    <motion.div
                      whileInView={{opacity:1, x:0}}
                      initial={{opacity:0, x:100}}
                      transition={{duration:1}}
                     className="w-full max-w-xl lg:w-3/4">
                      <h6 className="mb-2 font-semibold">
                        {experience.role} - <span className="text-sm text-purple-100">{experience.company}</span>
                      </h6>
                      <p className="mb-4 text-neutral-400">{experience.description}</p>
                       {experience.technologies.map((tech, index) => (
                        <span key={index} className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800">{tech}</span>
                       ))}
                        
                    </motion.div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Experience