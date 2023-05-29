import React, { useState } from 'react'
import { Card } from '../components/ui/Design'
import { RiDeleteBin6Line } from "react-icons/ri"
import { BiEditAlt } from "react-icons/bi"
import { NavLink } from 'react-router-dom'
const FaqList = () => {
    const [faqs, setFaqs]= useState([{id: 1,question: "USq", answer: "jhbjbsjkbkjcd "}])
  return (
    <>
    <Card>
        <section className='relative overflow-x-auto'>
          {/* {isLoading && <Loader />} */}
          { faqs?.length === 0 ? (
            <h1>No Faq Found!</h1>
          ) : (
            <table className='w-full text-sm text-left text-gray-500'>
              <thead className='text-xs text-gray-700 uppercase bg-gray-50 '>
                <tr>
                  <th scope='col' className='px-6 py-3'>
                    Id
                  </th>
                  <th scope='col' className='px-6 py-3'>
                    Question
                  </th>
                  <th scope='col' className='px-6 py-3'>
                    Answer
                  </th>
                  
                  <th scope='col' className='px-6 py-3'>
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {faqs.map((faq, index) => (
                  <tr className='bg-white border-b hover:bg-gray-50' key={index}>
                    <th scope='row' className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap'>
                      {index + 1}
                    </th>
                    <td className='px-6 py-4'>{faq.question?.slice(0, 80)}</td>
                    
                    <td className='px-6 py-4'>{faq.answer?.slice(0, 80)}</td>
                   


                    <td className='px-6 py-4 flex justify-between items-center'>
                      <button >
                        <RiDeleteBin6Line size={20} className=' text-red-500' />
                      </button>
                      <NavLink to={`/edit-about/${faq._id}`}>
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

export default FaqList