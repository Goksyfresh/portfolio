import React from 'react'
import { FaGithub } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { HiExternalLink } from 'react-icons/hi'

const ProjectComponent = ({img, title, description, Xlink, gitLink, siteLink, techStack}: {
  img: string, 
  title: string, 
  description: string, 
  Xlink: string, 
  gitLink: string,
  siteLink: string,
  techStack: string[]
}) => {
  return (
    <div className='flex flex-col items-start gap-3 rounded-xl w-[300px] lg:w-[350px]' style={{
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
    }}>
      <img src={img} className='w-[100%] h-[60%] lg:h-[80%] object-cover rounded-t-xl' alt={title} />
      
      <div className='flex px-3 py-4 flex-col gap-3 items-start w-full'>
        {/* Title and Links Row */}
        <div className='flex justify-between items-center w-full'>
          <h3 className='[color:var(--text-color)] text-lg lg:text-xl font-bold'>{title}</h3>
          
          <div className='flex gap-2 items-center'>
            <a 
              href={siteLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className='p-1.5 hover:bg-[var(--link-hover)] rounded-full transition-colors duration-200'
              title="Visit Site"
            >
              <HiExternalLink className='text-[var(--heading_1_color)]' size={18} />
            </a>
            
            <a 
              href={Xlink} 
              target="_blank" 
              rel="noopener noreferrer"
              className='p-1.5 hover:bg-[var(--link-hover)] rounded-full transition-colors duration-200'
              title="X Post"
            >
              <FaXTwitter className='text-[var(--heading_1_color)]' size={16} />
            </a>
          </div>
        </div>

        {/* Description */}
        <p className='[color:var(--text-color)] text-sm lg:text-base'>{description}</p>

        {/* Tech Stack Tags */}
        <div className='flex flex-wrap gap-2'>
          {techStack.map((tech, index) => (
            <span 
              key={index}
              className='px-2 py-1 bg-[var(--link-bg)] text-[var(--text-color)] text-xs rounded-md border border-[var(--heading_1_color)] border-opacity-20'
            >
              {tech}
            </span>
          ))}
        </div>

        {/* View Code Button */}
        <a 
          href={gitLink} 
          target="_blank" 
          rel="noopener noreferrer"
          className='flex items-center gap-2 px-4 py-2 bg-[var(--link-bg)] hover:bg-[var(--link-hover)] text-[var(--text-color)] rounded-full transition-colors duration-200 text-sm font-medium w-full justify-center'
        >
          <FaGithub className='text-[var(--heading_1_color)]' size={18} />
          View Code
        </a>
      </div>
    </div>
  )
}

export default ProjectComponent