import React,{ useState } from 'react'
import { FaGithub, FaLinkedin, FaTwitter, FaFacebook,FaUserCircle , FaReact, FaGitAlt} from "react-icons/fa";
import { motion } from "motion/react";
import { ReactTyped } from "react-typed";

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);
   const formhandler=(e)=>{
    e.preventDefault();
   }
  return (
    <div className=' bg-gray-800 h-screen overflow-x-hidden  '>
      <div  id='home' className='flex justify-center  font-serif space-y-5  min-h-screen w-screen bg-[#1a2230]'>
      <div className='flex justify-between items-center w-4/5 h-15 text-white shadow-[0_0_15px_rgba(0,0,0,0.3)]  backdrop-blur-xs bg-transparent fixed px-8 rounded-r-full rounded-l-full my-4'>
       <div className="text-gray-300">
      <FaUserCircle size={40} /> 
      </div>
        <div className=' hidden  font-bold ml-12 sm:flex space-x-4'>
          <a href="#home"    className='hover:bg-clip-text hover:text-transparent hover:bg-linear-to-bl hover:from-violet-500 hover:to-fuchsia-500'>HOME</a> 
          <a href="#projects"className='hover:bg-clip-text hover:text-transparent hover:bg-linear-to-bl hover:from-violet-500 hover:to-fuchsia-500'>PROJECTS</a>
          <a href="#SKILL"   className='hover:bg-clip-text hover:text-transparent hover:bg-linear-to-bl hover:from-violet-500 hover:to-fuchsia-500'>SKILLS</a>
          <a href="#contact" className='hover:bg-clip-text hover:text-transparent hover:bg-linear-to-bl hover:from-violet-500 hover:to-fuchsia-500'>CONTACT</a>
        </div>
          <motion.button 
          whileHover={{ opacity: 0.9}}
          whileTap={{ scale: 0.95 }}
          className= 'bg-white hidden sm:block px-6 py-2 rounded-r-full rounded-l-full bg-linear-to-bl from-violet-500 to-fuchsia-500 text-amber-100'><a href="resume.pdf" download='resume.pdf'>DOWNLOAD CV </a></motion.button>
          <motion.button   whileHover={{ opacity: 0.7}}
          whileTap={{ scale: 0.95 }}className= 'bg-linear-to-bl from-violet-500 to-fuchsia-500 block sm:hidden p-2 rounded-sm text-amber-100'
          onClick={() => setMenuOpen(!menuOpen)}> <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6 text-amber-100"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M4 6h16M4 12h16M4 18h16"
      />
    </svg></motion.button>
     {menuOpen && (
          <div className="sm:hidden fixed top-15 w-full  bg-[#1a2230] text-white flex flex-col items-center font-bold   py-13 z-40 shadow-lg ">
            <a className='hover:bg-[#1a2c4a] hover:bg-clip-text hover:text-transparent hover:bg-linear-to-bl hover:from-violet-500 hover:to-fuchsia-500 w-full h-12 text-center flex justify-center items-center' href="#home" onClick={() => setMenuOpen(false)}>HOME</a>
            <a className='hover:bg-[#1a2c4a] hover:bg-clip-text hover:text-transparent hover:bg-linear-to-bl hover:from-violet-500 hover:to-fuchsia-500 w-full h-12 text-center flex justify-center items-center' href="#projects" onClick={() => setMenuOpen(false)}>PROJECTS</a>
            <a className='hover:bg-[#1a2c4a] hover:bg-clip-text hover:text-transparent hover:bg-linear-to-bl hover:from-violet-500 hover:to-fuchsia-500 w-full h-12 text-center flex justify-center items-center' href="#SKILL" onClick={() => setMenuOpen(false)}>SKILLS</a>
            <a className='hover:bg-[#1a2c4a] hover:bg-clip-text hover:text-transparent hover:bg-linear-to-bl hover:from-violet-500 hover:to-fuchsia-500 w-full h-12 text-center flex justify-center items-center' href="#contact" onClick={() => setMenuOpen(false)}>CONTACT</a>
          </div>
        )}

      </div>
      <div className='flex  my-25 p-3 rounded-md flex-col justify-center gap-3 items-center  sm:flex-row  sm:items-center  sm:p-20 sm:my-23 sm:justify-between sm:gap-20 text-white w-[80%] h-4/5'>
       <motion.div  className='w-40 aspect-square sm:w-52   flex-shrink-0 rounded-full   overflow-hidden flex  justify-center items-center  sm:flex-row  '> 
       <motion.img  src="download.jpg" alt=""  className='w-full h-full  object-cover' /></motion.div>
        <div className='flex flex-col mt-2.5  sm:items-start sm:justify-start  sm:text-left'>
          <h2 className='text-xl font-bold sm:text-2xl'>Hi There,</h2>
       <h1 className='text-2xl sm:text-3xl font-bold'>I am {""}
        <ReactTyped strings={['PRASAD KUMAR SAHOO','A WEB DEVELOPER',' A UI/UX DEVELOPER','A PROGRAMMER','A MERN DEVELOPER']}
         typeSpeed={60} 
         backSpeed={50} 
         loop /></h1>
        <p className='text-gray-300   text-md text-justify sm:text-lg'>
         a passionate web developer who loves turning ideas into beautiful, functional websites. I specialize in crafting modern, responsive, and user-friendly designs using the latest technologies. <br />


        </p>
         <div className="flex space-x-4 text-xl mt-1.5 sm:mt-2 text-linear-to-bl from-violet-500 to-fuchsia-500 sm:text-2xl">
      <a className='bg-linear-to-bl from-violet-500 to-fuchsia-500 rounded-full' href="https://github.com/Prasadksahoo" target="_blank" rel="noopener noreferrer">
        <FaGithub />
      </a>
      <a  className='' href="https://linkedin.com/in/prasad-kumar-sahoo-787865295" target="_blank" rel="noopener noreferrer">
        <FaLinkedin />
      </a>
      <a  className=' ' href="https://x.com/Engg_Prasad7" target="_blank" rel="noopener noreferrer">
        <FaTwitter />
      </a>
      <a  className='bg-linear-to-bl from-violet-500 to-fuchsia-500 rounded-full' href="https://facebook.com/prince.prasad.902819/" target="_blank" rel="noopener noreferrer">
        <FaFacebook />
      </a>
    </div>
       <div  className=' my-4 flex flex-col -mx-3 justify-center    gap-4  sm:flex-row sm:gap-4 sm:justify-normal sm:mt-4 sm:-ml-2'>
         <motion.button  whileHover={{ opacity: 0.8}}
          whileTap={{ scale: 0.95 }}  className='bg-linear-to-bl from-violet-500 to-fuchsia-500 px-6 py-2 mx-1.5 rounded-r-full rounded-l-full flex justify-center items-center '><a href="resume.pdf" download='resume.pdf'>DOWNLOAD CV</a></motion.button>
        <motion.button  whileHover={{ opacity: 0.8}}
          whileTap={{ scale: 0.95 }} className='bg-linear-to-bl from-violet-500 to-fuchsia-500 px-6 py-2 rounded-r-full rounded-l-full mx-2  flex justify-center items-center'><a href="mailto:prasadkumar9692@gmail.com ">CONTACT ME</a></motion.button>
       </div>
        </div>

      </div>
      </div>
      <div id='projects' className='w-screen  bg-[#1a2230]   text-white font-serif py-16 flex flex-col justify-center items-center'>
        <h1 className='sm:text-3xl font-bold   mt-5  bg-clip-text text-transparent bg-linear-to-bl from-violet-500 to-fuchsia-500 text-2xl'>MY PROJECTS</h1>
        <p className='mt-2 text-sm text-center sm:text-lg w-full'>A showcase of my work — where creativity meets code to deliver meaningful, functional, and visually engaging experiences.</p>
        <div className='grid grid-cols-1 sm:grid sm:grid-cols-3 justify-center  flex-wrap items-center mt-3  gap-10'>
          <div className='flex flex-col  shadow-[0_0_15px_rgba(0,0,0,0.3)]   bg-[#25324b]      w-75 m-2 rounded-lg  p-4 py-5'>
            <img src="rental.png" alt="" className='w-70 h-40 object-fit  rounded-md  shadow-[0_0_15px_rgba(0,0,0,0.3)] ' />
            <div className='flex justify-between mt-1.5 my-2'><h2 className=''> BikeHUB</h2>
             <div className='flex space-x-2 '>
      
      <FaReact size={20} color="#61DAFB" title="React" />

    
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="#38BDF8"
        title="Tailwind CSS"
      >
        <path d="M12.001 4.8c-2.4 0-4.2 1.2-5.4 3.6 1.2-1.2 2.4-1.8 3.6-1.8 1.6 0 2.6.8 3.4 2.4.6 1.2 1.6 1.8 3 1.8 2.4 0 4.2-1.2 5.4-3.6-1.2 1.2-2.4 1.8-3.6 1.8-1.6 0-2.6-.8-3.4-2.4-.6-1.2-1.6-1.8-3-1.8zm-6 6c-2.4 0-4.2 1.2-5.4 3.6 1.2-1.2 2.4-1.8 3.6-1.8 1.6 0 2.6.8 3.4 2.4.6 1.2 1.6 1.8 3 1.8 2.4 0 4.2-1.2 5.4-3.6-1.2 1.2-2.4 1.8-3.6 1.8-1.6 0-2.6-.8-3.4-2.4-.6-1.2-1.6-1.8-3-1.8z"/>
      </svg>

      
      <FaGitAlt size={20} color="#F05032" title="Git" />
    </div>
            </div>

            <p className='text-sm text-justify'>A user-friendly web application that allows users to browse, book, and rent bikes seamlessly. Features include real-time bike availability, interactive UI for selecting bikes, and secure booking. Built with React, Tailwind CSS, and integrated with Git for version control.Built with a focus on clean UI/UX,</p>
            <motion.button whileHover={{ opacity: 0.8}}
          whileTap={{ scale: 0.95 }}  className='w-full bg-gradient-to-bl from-violet-500 to-fuchsia-500  mt-1.5 px-4 py-2 rounded-full'><a href="https://rental-app-peach.vercel.app/" target='_blank' rel='noopener noreferrer'>Check it out</a></motion.button>
          </div>
           <div className='flex flex-col  shadow-[0_0_15px_rgba(0,0,0,0.3)]   bg-[#25324b]      w-75 m-2 rounded-lg  p-4 py-5'>
            <img src="weather.png" alt="" className='w-70 h-40 object-fit rounded-md  shadow-[0_0_15px_rgba(0,0,0,0.3)] ' />
            <div className='flex justify-between mt-1.5 my-2'><h2 className=''> WEATHER APP</h2>
             <div className='flex space-x-2 '>
      
      <FaReact size={20} color="#61DAFB" title="React" />

    
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="#38BDF8"
        title="Tailwind CSS"
      >
        <path d="M12.001 4.8c-2.4 0-4.2 1.2-5.4 3.6 1.2-1.2 2.4-1.8 3.6-1.8 1.6 0 2.6.8 3.4 2.4.6 1.2 1.6 1.8 3 1.8 2.4 0 4.2-1.2 5.4-3.6-1.2 1.2-2.4 1.8-3.6 1.8-1.6 0-2.6-.8-3.4-2.4-.6-1.2-1.6-1.8-3-1.8zm-6 6c-2.4 0-4.2 1.2-5.4 3.6 1.2-1.2 2.4-1.8 3.6-1.8 1.6 0 2.6.8 3.4 2.4.6 1.2 1.6 1.8 3 1.8 2.4 0 4.2-1.2 5.4-3.6-1.2 1.2-2.4 1.8-3.6 1.8-1.6 0-2.6-.8-3.4-2.4-.6-1.2-1.6-1.8-3-1.8z"/>
      </svg>

      
      <FaGitAlt size={20} color="#F05032" title="Git" />
    </div>
            </div>

            <p className='text-sm text-justify'>A responsive web application that provides real-time weather updates and forecasts for any city worldwide. The app integrates with the OpenWeather API to display temperature, humidity, wind speed, and detailed conditions.</p>
            <motion.button whileHover={{ opacity: 0.8 }}
          whileTap={{ scale: 0.95 }}  className='w-full bg-gradient-to-bl from-violet-500 to-fuchsia-500  mt-1.5 px-4 py-2 rounded-full'><a href="https://weather-website-lime-six.vercel.app/"  target='_blank' rel='noopener noreferrer'>Check it out</a></motion.button>
          </div>

          <div className='flex flex-col  shadow-[0_0_15px_rgba(0,0,0,0.3)]   bg-[#25324b]      w-75 m-2 rounded-lg  p-4 py-5'>
            <img src="chatapp.png" alt="" className='w-70 h-40 object-fit  rounded-md  shadow-[0_0_15px_rgba(0,0,0,0.3)] ' />
            <div className='flex justify-between mt-1.5 my-2'><h2 className=''> CHAT APP</h2>
             <div className='flex space-x-2 '>
      
      <FaReact size={20} color="#61DAFB" title="React" />

    
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="#38BDF8"
        title="Tailwind CSS"
      >
        <path d="M12.001 4.8c-2.4 0-4.2 1.2-5.4 3.6 1.2-1.2 2.4-1.8 3.6-1.8 1.6 0 2.6.8 3.4 2.4.6 1.2 1.6 1.8 3 1.8 2.4 0 4.2-1.2 5.4-3.6-1.2 1.2-2.4 1.8-3.6 1.8-1.6 0-2.6-.8-3.4-2.4-.6-1.2-1.6-1.8-3-1.8zm-6 6c-2.4 0-4.2 1.2-5.4 3.6 1.2-1.2 2.4-1.8 3.6-1.8 1.6 0 2.6.8 3.4 2.4.6 1.2 1.6 1.8 3 1.8 2.4 0 4.2-1.2 5.4-3.6-1.2 1.2-2.4 1.8-3.6 1.8-1.6 0-2.6-.8-3.4-2.4-.6-1.2-1.6-1.8-3-1.8z"/>
      </svg>

      
      <FaGitAlt size={20} color="#F05032" title="Git" />
    </div>
            </div>

            <p className='text-sm text-justify'>A full-stack real-time chat application built with the MERN stack (MongoDB, Express.js, React, Node.js,postman) and Socket.IO for instant messaging. The app allows users to sign up, log in, and show the online users to chat in real-time with secure authentication using JWT</p>
            <motion.button whileHover={{ opacity: 0.8}}
          whileTap={{ scale: 0.95 }}  className='w-full bg-gradient-to-bl from-violet-500 to-fuchsia-500  mt-1.5 px-4 py-2 rounded-full'><a href="https://chat-app-1-ue1i.onrender.com/" target='_blank' rel='noopener noreferrer'>Check it out</a></motion.button>
          </div>
        </div>
      </div>
      <div id='SKILL'  className='w-screen  text-white font-serif  bg-[#1a2230] flex flex-col  items-center py-10'>
        <h1 className='text-2xl sm:text-3xl font-bold bg-clip-text text-transparent bg-linear-to-bl from-violet-500 to-fuchsia-500 mt-6 sm:mt-15'>SKILLS</h1>
       <div className='grid grid-cols-2 items-center justify-center   sm:grid sm:grid-cols-4 sm:gap-8 mt-4 gap-4'>
                                                                                                                                           
        <div className=' bg-[#2c3a53] sm:w-50 sm:h-50 flex w-30 h-30 flex-col shadow-[0_0_15px_rgba(0,0,0,0.3)]  rounded-lg justify-center items-center'>
          <img src="ht.jpg" alt=""  className='w-20 h-20 sm:w-30 sm:h-30 object-cover rounded-lg'/>
          <p className='  text-xl font-bold' >HTML</p>
       </div>
            
        <div className=' bg-[#2c3a53]  sm:w-50 sm:h-50  w-30 h-30 flex  flex-col shadow-[0_0_15px_rgba(0,0,0,0.3)]  rounded-lg justify-center items-center'>
          <img src="css.png" alt=""  className='w-20 h-20 sm:w-30 sm:h-30 object-cover rounded-lg'/>
          <p className='  text-xl font-bold' >CSS</p>
       </div>
        <div className=' bg-[#2c3a53]  sm:w-50 sm:h-50  w-30 h-30 flex  flex-col shadow-[0_0_15px_rgba(0,0,0,0.3)]  rounded-lg justify-center items-center'>
          <img src="js.png" alt=""  className='w-20 h-20 sm:w-30 sm:h-30 object-cover rounded-lg'/>
          <p className='  text-xl font-bold' >JAVASCRIPT</p>
       </div>
        <div className=' bg-[#2c3a53]  sm:w-50 sm:h-50  w-30 h-30 flex  flex-col shadow-[0_0_15px_rgba(0,0,0,0.3)]  rounded-lg justify-center items-center'>
          <img src="reacct.png" alt=""  className='w-20 h-20 sm:w-30 sm:h-30 object-cover rounded-lg'/>
          <p className='  text-xl font-bold'>REACT</p>
       </div>
        <div className=' bg-[#2c3a53]  sm:w-50 sm:h-50  w-30 h-30 flex  flex-col shadow-[0_0_15px_rgba(0,0,0,0.3)]  rounded-lg justify-center items-center'>
          <img src="node.png" alt=""  className='w-20 h-20 sm:w-30 sm:h-30 object-cover rounded-lg'/>
          <p className='  text-xl font-bold' >NODE</p>
       </div>
        <div className=' bg-[#2c3a53]  sm:w-50 sm:h-50  w-30 h-30 flex  flex-col shadow-[0_0_15px_rgba(0,0,0,0.3)]  rounded-lg justify-center items-center'>
          <img src="express.png" alt=""  className='w-20 h-20 sm:w-30 sm:h-30 object-cover rounded-lg'/>
          <p className='  text-xl font-bold' >EXPRESS</p>
       </div>
        <div className=' bg-[#2c3a53]  sm:w-50 sm:h-50  w-30 h-30 flex  flex-col shadow-[0_0_15px_rgba(0,0,0,0.3)]  rounded-lg justify-center items-center'>
          <img src="mongo.png" alt=""  className='w-20 h-20 sm:w-30 sm:h-30 object-cover rounded-lg'/>
          <p className='  text-xl font-bold'>MONGODB</p>
       </div>
        <div className=' bg-[#2c3a53]  sm:w-50 sm:h-50  w-30 h-30 flex  flex-col shadow-[0_0_15px_rgba(0,0,0,0.3)]  rounded-lg justify-center items-center'>
          <img src="git.png" alt=""  className='w-20 h-20 sm:w-30 sm:h-30 object-cover rounded-lg'/>
          <p className='  text-xl font-bold'>GIT</p>
       </div>

       

        
      


       </div>
      </div>
      <div id='contact' className=' w-screen bg-[#323437] flex flex-col justify-center gap-3 items-center text-xl sm:text-2xl text-white font-serif '>
        <h1 className='font-bold '>CONTACT ME</h1>
        <p className='text-center font-mono p-2.5'>If you would like to get in touch, feel free to reach out!</p>

       <div className='grid grid-column-1 w-screen gap-5 sm:gap-15 sm:grid sm:grid-cols-3 justify-between items-center text-xl sm:text-2xl  mt-5 p-4'>
        <div className='text-sm sm:text-xl'>
          <h1 className=''>📍 Patia, Bhubaneswar, Odisha, India</h1>
        </div>
        <div className='grid grid-cols-1 gap-1 text-sm sm:text-xl'>
           <a href="mailto:prasadkumar9692@gmail.com">📩 prasadkumar9692@gmail.com</a>
           <a href="tel:+919692253099">☎️ +91 9692253099</a>
        </div>
        <div className='sm:flex sm:flex-col text-sm sm:text-xl sm:items-center gap-3 sm:justify-center  flex flex-col  bg-[#323437]'>
         <a href="https://facebook.com/prince.prasad.902819/" target="_blank" rel="noopener noreferrer">Facebook</a>
         <a href="https://x.com/Engg_Prasad7" target="_blank" rel="noopener noreferrer">Twitter</a>
         <a href="https://linkedin.com/in/prasad-kumar-sahoo-787865295" target="_blank" rel="noopener noreferrer">LinkedIn</a>
         <a href="https://github.com/Prasadksahoo" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
       </div>
      </div>
    </div>
  )
}

export default App
