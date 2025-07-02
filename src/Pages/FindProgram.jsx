import React from 'react'
import { TopNav } from '../Components/Navbar/TopNav'
import { BottomNav } from '../Components/Navbar/BottomNav'
import { SearchProgram } from '../ProgramFindPage/SearchProgram/SearchProgram'
import { Header } from '../ProgramFindPage/Header'
import Footer from '../Components/Footer/Footer'
import { Icons } from '../Components/Icons/tech.jsx'


export const FindProgram = () => {
  return (
  <>
  <TopNav />
  <BottomNav />
<Header />
  <SearchProgram  />
 <Icons />
  <Footer />
  </>
  )
}
