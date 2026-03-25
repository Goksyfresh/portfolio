import React from 'react'
import { FaGithub } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { HiExternalLink } from 'react-icons/hi'

const AnimationComponent = ({img, siteLink}: {
  img: string, 
  siteLink: string,
  
}) => {
  return (
    <div className='flex flex-col items-start gap-3 rounded-xl w-[300px] lg:w-[350px]' style={{
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
    }}>
      <img src={img} className='w-[100%]  object-contain rounded-t-xl' alt={siteLink} />
      
      <div className='flex px-3 py-4 flex-col gap-3 items-start w-full'>
        {/* Title and Links Row */}
        <div className='flex justify-between items-center w-full'>
        
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
            
        
          </div>
        </div>
      
      </div>
    </div>
  )
}

export default AnimationComponent