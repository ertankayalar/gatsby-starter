import React from 'react'

const Content = ({ children }) => {
  return (
    <div
      className='
        prose prose-sm lg:prose-lg w-full md:prose-md md:max-w-full  lg:max-w-full overflow-auto py-5 mx-2 md:mx-auto text-gray-700'
    >
      {children}
    </div>
  )
}

export default Content
