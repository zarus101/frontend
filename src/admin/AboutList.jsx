import React, { useState } from 'react'
import { Card } from '../components/ui/Design'
import { RiDeleteBin6Line } from "react-icons/ri"
import { BiEditAlt } from "react-icons/bi"
import { NavLink } from 'react-router-dom'
const AboutList = () => {
    const [abouts, setAbouts]= useState([{id: 1,title: "hbshjbjh"}])
  return (
    <>
    <Card>
        <section className='relative overflow-x-auto'>
          {/* {isLoading && <Loader />} */}
          { abouts?.length === 0 ? (
            <h1>No About Found!</h1>
          ) : (
            <table className='w-full text-sm text-left text-gray-500'>
              <thead className='text-xs text-gray-700 uppercase bg-gray-50 '>
                <tr>
                  <th scope='col' className='px-6 py-3'>
                    Id
                  </th>
                  <th scope='col' className='px-6 py-3'>
                    Title
                  </th>
                  <th scope='col' className='px-6 py-3'>
                    Image
                  </th>
                  <th scope='col' className='px-6 py-3'>
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {abouts.map((about, index) => (
                  <tr className='bg-white border-b hover:bg-gray-50' key={index}>
                    <th scope='row' className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap'>
                      {index + 1}
                    </th>
                    <td className='px-6 py-4'>{about.title?.slice(0, 80)}</td>
                    <td className='px-6 py-4'>
                      {about?.image ? (
                        <img
                          src={about.image.filePath}
                          alt={about.image.filename}
                          className='object-cover w-14 h-10 rounded-lg'
                        />
                      ) : (
                        <span>No Image</span>
                      )}
                    </td>
                    <td className='px-6 py-4 flex justify-between items-center'>
                      <button >
                        <RiDeleteBin6Line size={20} className=' text-red-500' />
                      </button>
                      <NavLink to={`/edit-about/${about._id}`}>
                        <BiEditAlt size={20} className=' text-green-500' />
                      </NavLink>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </section>

    </Card>
    </>
  )
}

export default AboutList