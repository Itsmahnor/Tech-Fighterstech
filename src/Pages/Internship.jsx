import React from 'react'
import { Header } from '../Components/InternShip/Header'
import { TopNav } from '../Components/Navbar/TopNav'
import { BottomNav } from '../Components/Navbar/BottomNav'
import InternshipCertificationProgram from '../Components/InternShip/content'
import Footer from '../Components/Footer/Footer'
import { Icons } from '../Components/Icons/tech'


export const Internship = () => {
  return (
    <>
     <TopNav />
    <BottomNav/>
  <Header />
  <InternshipCertificationProgram />
 <Icons />
  <Footer />
    </>
   
  )
}
