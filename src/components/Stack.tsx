import React from 'react'

const Stack = ({stack}: {stack: string} ) => {
  return (
     <div className='p-[1px] rounded-full' style={{
      background: 'linear-gradient(90deg, #9C83FF, #FF9051)'
    }}>
    <div className=' bg-[var(--background-color)] stack py-2 px-2 lg:px-4 rounded-full flex items-center justify-center [color:var(--text-color)]'>
      <p className='[color:(var--text-color)] lg:text-lg text-sm'>{stack}</p>
    </div>
    </div>
  )
}

export default Stack
