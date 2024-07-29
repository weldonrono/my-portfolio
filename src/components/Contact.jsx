import { motion } from "framer-motion";
const Contact = () => {
     const CONTACT = [
    {
        address:"00100 Nairobi, Kenya.",
        phone:"+254741791513.",
        email:"weldonrono474@gmail.com"
    }
];

  return (
    <div className="border-b border-neutral-900 pb-20">
        <motion.h1
          whileInView={{opacity:1, y:0}}
          initial={{opacity:0, y:-100}}
          transition={{duration:0.5}}
         className="my-10 text-center text-4xl">Get In Touch</motion.h1>
        <div className="text-center tracking-tighter">
         {CONTACT.map((cont, index) => (
            <div key={index} className="text-center tracking-tighter">
               <motion.p 
                 whileInView={{opacity:1, x:0}}
                 initial={{opacity:0, x:-100}}
                 transition={{duration:0.5}} className="my-4">{cont.address}</motion.p>
               <motion.p
                 whileInView={{opacity:1, x:0}}
                 initial={{opacity:0, x:100}}
                 transition={{duration:0.5}}
                 className="my-4">{cont.phone}</motion.p>
               <a href="#" className="border-b">{cont.email}</a>
            </div>
            
         ))}
        </div>
    </div>
  )
}

export default Contact