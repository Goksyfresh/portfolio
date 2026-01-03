import React from 'react'

const Bio = () => {
  return (
    <section className='flex flex-col items-center justify-center gap-4 mt-35 px-6'>
        <h2 className='[color:var(--heading_1_color)] lg:text-3xl text-xl uppercase'>About me</h2>
        <p className='[color:var(--text-color)] lg:text-lg text-sm w-[60%] text-center'>As a passionate software engineer, I thrive on the intricate dance between logic and creativity. Currently immersed in the dynamic world of WebHR, my expertise centers around React Native, where I seamlessly blend technology with innovation.
</p>
<p className='[color:var(--text-color)] lg:text-lg text-sm w-[60%] text-center'>With a fervor for crafting elegant solutions, I navigate the ever-evolving landscape of software development. My journey involves translating concepts into code, creating seamless user experiences, and constantly pushing the boundaries of what's possible</p>
    </section>
  )
}

export default Bio
