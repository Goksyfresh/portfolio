import React from 'react'

const ProjectComponent = ({img, title, description}: {img: string, title: string, description: string}) => {
  return (
    <div className='flex flex-col items-start gap-3 rounded-xl w-[300px] lg:w-[350px]' style={{
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
    }}>
      <img src={img} className='w-[100%] h-[60%] lg:h-[80%] object-cover rounded-t-xl' alt={title} />
      <div className='flex px-3 py-4 flex-col gap-2 items-start'>
        <h3 className='[color:var(--text-color)] text-lg lg:text-xl font-bold'>{title}</h3>
        <p className='[color:var(--text-color)] text-sm lg:text-lg'>{description}</p>
      </div>
    </div>
  )
}

export default ProjectComponent