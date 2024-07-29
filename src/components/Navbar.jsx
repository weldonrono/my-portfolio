import { FaLinkedin } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { FaSquareXTwitter } from "react-icons/fa6"
import { FaInstagram } from "react-icons/fa"
import project5 from "../assets/project5.jpg"
const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between">
        <div className="flex flex-shrink-0 items-center">
          <img className="mx-2 w-10 rounded-full p-0" src={project5} alt="your logo"></img>
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
          <FaLinkedin/>
          <FaGithub/>
          <FaSquareXTwitter/>
          <FaInstagram/>
        </div>
    </nav>
  )
}

export default Navbar