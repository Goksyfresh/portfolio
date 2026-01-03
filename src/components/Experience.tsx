import React from 'react'
import Stack from './Stack'

const Experience = () => {
  return (
    <section className='flex flex-col items-center justify-center gap-4 mt-35 px-6'>
        <h2 className='[color:var(--heading_1_color)] lg:text-3xl text-xl uppercase'>Experience</h2>
        <div className='flex justify-between items-center w-[60%]'>
        <h3 className='[color:var(--heading_1_color)] lg:text-xl text-lg'>Frontend Engineer at Qorporate</h3>
        <p className='[color:var(--text-color)] uppercase text-sm '>August 2025 - present</p>
        </div>
        <p className='[color:var(--text-color)] lg:text-lg text-sm w-[60%] text-center'>As a passionate software engineer, I thrive on the intricate dance between logic and creativity. Currently immersed in the dynamic world of WebHR, my expertise centers around React Native, where I seamlessly blend technology with innovation.
</p>
<p className='[color:var(--text-color)] lg:text-lg text-sm w-[60%] text-center'>With a fervor for crafting elegant solutions, I navigate the ever-evolving landscape of software development. My journey involves translating concepts into code, creating seamless user experiences, and constantly pushing the boundaries of what's possible</p>
   <div className='flex gap-4 items-center justify-center mt-4 w-[60%] flex-wrap'>
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
