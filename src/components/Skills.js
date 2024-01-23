import React from 'react'
import {motion} from 'framer-motion'
import { fadeIn } from '../variants';
import Html from '../assets/html.png'
import Css from '../assets/css .png'
import Js from '../assets/javascript.png'
import Tailwind from '../assets/tailwind css.png'
import react from '../assets/reactjs.png'
import git from '../assets/git.png'
import nodejs from '../assets/nodejs.png'
import mongoDB from '../assets/mongodb.png'
export default function Skills() {
  return (
    <section className='section' id='skills'>
        <div className='container mx-auto'>
            <h2 className='h2 text-accent mb-6 '>Skills</h2>
            <div className='flex flex-col justify-center items-center'>
              <motion.div 
              variants={fadeIn('down',0.3)} 
              initial="hidden" 
              whileInView={'show'} 
              viewport={{once:false,amount:0.3}}
              className='flex flex-row gap-20 p-10'>
              <img src={Html} className='w-24'/>
              <img src={Css} className='w-24'/>
              <img src={Tailwind} className='w-24'/>
              <img src={Js} className='w-24'/>
              </motion.div> 
              <motion.div 
              variants={fadeIn('up',0.3)} 
              initial="hidden" 
              whileInView={'show'} 
              viewport={{once:false,amount:0.3}}
              className='flex flex-row gap-20 p-10'>
                <img src={react} className='w-24'/>
                <img src={nodejs} className='w-24'/>
                <img src={mongoDB} className='w-24'/>
                <img src={git} className='w-24'/>
              </motion.div>
              
            </div>
            
        </div>
    </section>
  )
}
