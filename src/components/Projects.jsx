import React from 'react'
import ProjectComponent from './projectComponent'
import projectImage from '../images/kicky.png'
import projectImage2 from '../images/otf.png'
import projectImage3 from '../images/shopper.png'

const Projects = () => {
  return (
     <section className='flex flex-col items-center justify-center gap-4 mt-35 px-6'>
        <h2 className='[color:var(--heading_1_color)] lg:text-3xl text-xl uppercase'>Projects</h2>
        <div className='mt-8 grid grid-cols-1 md:grid-cols-2 gap-10 '>
         <a href="#">  <ProjectComponent img={projectImage} title='Kickabout' description='A bright startup idea where users can create 5 aside football sessions with flexibility of time, location and skill level and others can join. Users also have the luxury of rating and reviewing each other after a kickabout session.'/></a>
         <a href="#">  <ProjectComponent img={projectImage2} title='OwnTheFit' description='A social community meets Ecommerce web app for streetwear enthusiasts and designers to connect.'/></a>
          <a href="#">  <ProjectComponent img={projectImage3} title='Animated Products carousel' description='An animated infinite scroll product carousel'/></a>
        </div>
     
      
     
    </section>
  )
}

export default Projects
