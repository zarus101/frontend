import React from 'react'
import Service from '../components/studyTrip/Services'
import Ielts from '../components/studyTrip/Ielts'
import AboutComponent from '../components/studyTrip/AboutComponent'
import { PageHeadingPicture } from '../components/ui/Design'

const About = () => {
  return (
    <>        <PageHeadingPicture title="About"/>

      <AboutComponent/>
      <Ielts />
      <Service/>

    </>
  )
}

export default About