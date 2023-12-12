import React, { useState } from 'react';

// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaJava,
  FaPython,

} from 'react-icons/fa';



import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
  SiCplusplus,
  SiDart,
  SiTailwindcss,
  SiJavascript,
  SiFlask,
  SiPytorch,
  SiTensorflow,
  SiNumpy,
  SiPandas,


} from 'react-icons/si';



//  about data
export const aboutData = [
  {
    title: 'skills',
    info: [
      {
        title: 'Web frameworks',
        icons: [
          <FaHtml5 />,
          <FaCss3 />,
          <FaJs />,
          <FaReact />,
          <SiFramer />,
          <SiNextdotjs />,
          <SiFlask />,

        ],
      },
      {
        title: 'UI/UX Design',
        icons: [<SiAdobexd />, <SiAdobephotoshop />],
      },
      {
        title: 'Programming Languages',
        icons: [

          <FaPython />,

          <FaJava />,
          <SiCplusplus />,
          <SiDart />,
          <SiTailwindcss />,
          <SiJavascript />,

        ],
      },
      {
        title: 'AI frameworks',
        icons: [<SiPytorch />,
        <SiTensorflow />,
        <SiNumpy />,
        <SiPandas />
        ]
      },
      {
        title: 'LLMS experience',
        stage: ['GPT-3.5,  ', 'GPT-4,   ', 'Langchain,   ', 'Llama 2,   ', 'Pinecone   ']
      }

    ],
  },
  {
    title: 'awards',
    info: [
      {
        title: "Dean's list Scholar in Computer Science",
        stage: 'Memorial University of Newfoundland - Fall 2022 & Winter 2023',
      },
      {
        title: "HackFusion 2023: The Innovator's Challenge",
        stage: 'Came third position by making a GPS app for reduced carbon emission',
      },
    ],
  },
  {
    title: 'experience',
    info: [
      {
        title: 'Research Assistant',
        stage: 'Memorial University - Jan 2023 - May 2023',
      },
      {
        title: 'Web Developer',
        stage: 'AIIMS India - May 2022 - July 2022',
      },
      {
        title: 'Tech Consultant',
        stage: 'Staples - Current',
      },
    ],
  },

];

// components
import Avatar from '../../components/Avatar';
import Circles from '../../components/Circles';

// framer motion
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

// counter
import CountUp from 'react-countup';

const About = () => {
  const [index, setIndex] = useState(0);
  console.log(index);
  return (
    <div className='h-full bg-primary/30 py-32 text-center xl:text-left'>

      <motion.div
        variants={fadeIn('right', 0.2)}
        initial='hidden'
        animate='show'
        exit='hidden'
        className='hidden xl:flex absolute bottom-0 -left-[370px]'
      >
        <Avatar />
      </motion.div>
      <div className='container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6'>
        {/* text */}
        <div className='flex-1 flex flex-col justify-center'>
          <motion.h2
            variants={fadeIn('right', 0.2)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='h2'
          >
            Confused <span className='text-accent'>SDE</span> with a
            Global Perspective
          </motion.h2>
          <motion.p
            variants={fadeIn('right', 0.4)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0'
          >
            Hailing from a modest background, I've always harbored a deep passion for technology and an insatiable curiosity about the future. My journey from India to Canada to pursue my technological dreams has equipped me with a global perspective, adaptability, and an unyielding drive to innovate as I aspire to make my mark in the world of software engineering.
          </motion.p>


        </div>
        {/* info */}
        <motion.div
          variants={fadeIn('left', 0.4)}
          initial='hidden'
          animate='show'
          exit='hidden'
          className='flex flex-col w-full xl:max-w-[48%] h-[480px]'
        >
          <div className='flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4'>
            {aboutData.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className={`${index === itemIndex &&
                    'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300'
                    }  cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                  onClick={() => setIndex(itemIndex)}
                >
                  {item.title}
                </div>
              );
            })}
          </div>
          <div className='py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start'>
            {aboutData[index].info.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className='flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60'
                >
                  {/* title */}
                  <div className='font-light mb-2 md:mb-0'>{item.title}</div>
                  <div className='hidden md:flex'>-</div>
                  <div>{item.stage}</div>
                  <div className='flex gap-x-4'>
                    {/* icons */}
                    {item.icons?.map((icon, itemIndex) => {
                      return <div className='text-2xl text-white'>{icon}</div>;
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
