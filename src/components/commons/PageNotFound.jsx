import React from 'react'
import { NavLink } from 'react-router-dom'

const PageNotFound = () => {
  return (
    <section className='flex items-center h-[100vh] p-16 bg-gray-50'>
    <div className='container flex flex-col items-center justify-center px-5 mx-auto my-8'>
      <div className='max-w-md text-center'>
        <h2 className='mb-8 font-extrabold text-9xl dark:text-gray-600'>
          <span className='sr-only'>Error</span>404
        </h2>
        <p className='text-2xl font-semibold md:text-3xl'>Sorry, we couldn't find this page.</p>
        <NavLink rel='noopener noreferrer' to='/' className='btn-style-one bg-theme-color2'>
          Back to homepage
        </NavLink>
      </div>
    </div>
  </section>
  )
}

export default PageNotFound