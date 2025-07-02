import React from 'react'
import { TopNav } from '../Components/Navbar/TopNav'
import { BottomNav } from '../Components/Navbar/BottomNav'
import { Header } from '../Components/OurInstructors/Header'

import { Tutor } from '../Components/Tutot/Tutor'

import Footer from '../Components/Footer/Footer'
import { Icons } from '../Components/Icons/tech'

export const Instructors = () => {
  return (
    <div>
      <TopNav />
      <BottomNav />
      <Header />
    <Tutor />
   <Icons />
    <Footer />
    </div>
  )
}
