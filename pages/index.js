import Image from 'next/image';

import ParticleContainer from '../components/ParticlesContainer';
import ProjectBtn from '../components/ProjectsBtn';
import Avatar from '../components/Avatar';


import {motion, notion} from 'framer-motion';

import { fadeIn } from '../variants';


const Home = () => {
  return(
   <div className = 'bg-primary/60 h-full'>
  
  <div className = 'w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10'>
    <div className = 'text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto'>
      <motion.h1 
      className = 'h1'
      initial = 'hidden'
      animate = 'show'
      exit = 'hidden'
      variants= {fadeIn('down',0.2)}
      > 
        Sulagno Ghosh <br /> {' '} 
        <span className = 'text-accent'>SDE Intern</span> 

      </motion.h1>
      <motion.p 
        className = 'max-w-sm xl:max-w-xl mx-auto xl:max-0 mb-10 xl:mb-16'
        initial = 'hidden'
        animate = 'show'
        exit = 'hidden'
        variants= {fadeIn('down',0.4)}
          
      >
      As a passionate aspirant in Software Engineering and Finance, I possess a profound understanding of AI's intricacies and its transformative impact on future businesses. 
      With a strong foundation in both Web development and artificial intelligence, I am dedicated to unraveling the endless possibilities of coding and harnessing the transformative potential of cutting-edge Natural Language Models like GPT-LLAMA.
      
      </motion.p>

      <div className = 'flex justify-center xl:hidden relative '>
        <ProjectBtn />

    </div>
    
    <motion.div 
      variants={ fadeIn('down',0.4)}
      initial = 'hidden'
      animate = 'show'
      exit = 'hidden'
      className='hidden xl:flex'
    >
      <ProjectBtn />
    
    </motion.div>
  


  </div>

  </div>
    
    <div className='w-[1200px] h-full absolute right-0 bottom-0'>
      <div className='bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0'></div>
    
      <ParticleContainer />
    
    </div>
    
   
    

  </div>
    
  


      
  );
}

export default Home;
