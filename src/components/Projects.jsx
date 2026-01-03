import React from 'react'
import ProjectComponent from './projectComponent'
import projectImage from '../images/kick.png'
import projectImage2 from '../images/otf.png'
import projectImage3 from '../images/shopper.png'

const Projects = () => {
  return (
     <section className='flex flex-col items-center justify-center gap-4 mt-35 px-6'>
        <h2 className='[color:var(--heading_1_color)] lg:text-3xl text-xl uppercase'>Projects</h2>
        <div className='mt-8 grid grid-cols-1 md:grid-cols-2 gap-10 '>
         <a href="#">  <ProjectComponent img={projectImage} title='Kickabout' description='A 5-aside scheduling app'/></a>
         <a href="#">  <ProjectComponent img={projectImage2} title='OwnTheFit' description='A 5-aside scheduling app'/></a>
          <a href="#">  <ProjectComponent img={projectImage3} title='Animated Products carousel' description='A 5-aside scheduling app'/></a>
        </div>
     
      
     
    </section>
  )
}

export default Projects
