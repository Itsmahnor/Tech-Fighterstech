import { AboutMe } from "../Components/AboutMe/AboutMe";

import { Courses } from "../Components/Courses/Courses";
import Footer from "../Components/Footer/Footer";
import { Hero } from "../Components/Hero/Hero";
import { Icons } from "../Components/Icons/Icons";

import { BottomNav } from "../Components/Navbar/BottomNav";
import { TopNav } from "../Components/Navbar/TopNav";
import { TopCatagories } from "../Components/TopCatagories/TopCatagories";
import { Tutor } from "../Components/Tutot/Tutor";


function Home() {
  return ( 
    <>
    <TopNav />
    <BottomNav />
    <Hero />
    <TopCatagories />
    <AboutMe />
    <Courses />
    <Tutor />
  <Icons />
<Footer />



    </>
   );
}

export default Home;