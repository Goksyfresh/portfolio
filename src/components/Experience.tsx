import React from 'react'
import Stack from './Stack'

const Experience = () => {
  return (
    <section className='flex flex-col items-center justify-center gap-4 mt-35 px-2'>
        <h2 className='[color:var(--heading_1_color)] lg:text-3xl text-xl font-bold uppercase'>Experience</h2>
        <div className='flex justify-between items-center w-[60%]'>
        <h3 className='[color:var(--heading_1_color)] lg:text-xl text-lg'>Frontend Engineer at Qorporate</h3>
        <p className='[color:var(--text-color)] uppercase text-sm '>August 2025 - present</p>
        </div>
   
<p className='[color:var(--text-color)] lg:text-xl text-lg w-[80%] text-center'>Built and maintained features for a football turf session management platform, collaborating closely with a cross-functional team. Developed user interfaces that streamlined booking, match scheduling, and player management, ensuring a smooth and engaging experience for users.</p>
   <div className='flex gap-4 items-center justify-center mt-4 w-[80%] flex-wrap'>
    <Stack stack="React" />
     <Stack stack="Svelte" />
        <Stack stack="TypeScript" />
         <Stack stack="JavaScript" />
          <Stack stack="Tailwind" />
   </div>
    </section>
  )
}

export default Experience
