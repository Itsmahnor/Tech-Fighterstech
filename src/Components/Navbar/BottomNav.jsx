import React, { useState } from "react";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import { FaSearch, FaBars } from "react-icons/fa";
import { PiGraduationCapBold, PiLineVerticalLight } from "react-icons/pi";
import { FaPlus } from "react-icons/fa6";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";
import { coursesData } from "./Bottom";
import tech from "./Images/tech.png";

export const BottomNav = () => {
  const [show, setShow] = useState(false);
  const [branchesOpen, setBranchesOpen] = useState(false);
  const [openCategory, setOpenCategory] = useState(null);
  const [showOpportunities, setShowOpportunities] = useState(false);
  const [showAboutUs, setShowAboutUs] = useState(false);
  const [showCourses, setShowCourses] = useState(false);
  const [hoverTimeout, setHoverTimeout] = useState(null);
  const [hoverTimeoutAbout, setHoverTimeoutAbout] = useState(null);
  const [hoverTimeoutBranches, setHoverTimeoutBranches] = useState(null);
  const [hoverTimeoutOpportunities, setHoverTimeoutOpportunities] = useState(null);
  const [hoverTimeoutCourses, setHoverTimeoutCourses] = useState(null);
  const [showCoursesDropdown, setShowCoursesDropdown] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="w-full h-auto py-4 bg-[#DAC3E8] flex justify-center items-center text-black font-bold">
      <div className="w-[95vw] max-w-[1400px] flex justify-between items-center px-4 lg:px-8">
        <div className="w-[180px] sm:w-[220px] h-auto p-2 flex justify-center items-center">
          <img src={tech} alt="Logo" className="h-[70px] sm:h-[90px] object-contain" />
        </div>

        <div className="hidden lg:flex items-center gap-7">
          <Link to="/">
            <span className="text-black  hover:text-[#A06CD5] transition-colors">Home</span>
          </Link>

          <div
            className="relative group"
            onMouseEnter={() => {
              if (hoverTimeoutCourses) clearTimeout(hoverTimeoutCourses);
              setShowCoursesDropdown(true);
            }}
            onMouseLeave={() => {
              const timeout = setTimeout(() => {
                setShowCoursesDropdown(false);
                setOpenCategory(null);
              }, 500);
              setHoverTimeoutCourses(timeout);
            }}
          >
            <button className="text-black px-2 py-1 rounded-md flex items-center gap-1">
              Courses
              <MdOutlineKeyboardArrowDown />
            </button>
            {showCoursesDropdown && (
              <div className="flex flex-col absolute top-[40px] left-1/2 -translate-x-1/2 bg-[#C19EE0] text-black w-[250px] border p-4 shadow-lg rounded-md z-10">
                <ul className="flex flex-col gap-3">
                  {coursesData.map((category) => (
                    <li
                      key={category.category}
                      className="relative"
                      onMouseEnter={() => {
                        if (hoverTimeout) clearTimeout(hoverTimeout);
                        setOpenCategory(category.category);
                      }}
                      onMouseLeave={() => {
                        const timeout = setTimeout(() => {
                          setOpenCategory(null);
                        }, 300);
                        setHoverTimeout(timeout);
                      }}
                    >
                      <div className="flex items-center gap-2 cursor-pointer">
                        <span className="text-base font-semibold">{category.category}</span>
                        <MdOutlineKeyboardArrowRight />
                      </div>
                      {openCategory === category.category && (
                        <div className="absolute top-0 left-full ml-2 w-[300px] bg-[#C19EE0] border p-4 rounded-md shadow-lg">
                          <ul className="flex flex-col gap-2">
                            {category.courses.map((course) => (
                              <Link to={`/course/${course.route}`} key={course.name}>
                                <li className="flex items-center gap-2 cursor-pointer font-medium text-black hover:text-[#A06CD5]">
                                  <course.icon /> {course.name}
                                </li>
                              </Link>
                            ))}
                          </ul>
                        </div>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <div
            className="relative group"
            onMouseEnter={() => {
              if (hoverTimeoutOpportunities) clearTimeout(hoverTimeoutOpportunities);
              setShowOpportunities(true);
            }}
            onMouseLeave={() => {
              const timeout = setTimeout(() => {
                setShowOpportunities(false);
              }, 300);
              setHoverTimeoutOpportunities(timeout);
            }}
          >
            <div className="flex items-center gap-1 cursor-pointer">
              <span>Opportunities</span>
              <MdOutlineKeyboardArrowDown />
            </div>
            {showOpportunities && (
              <div className="absolute top-[40px] left-1/2 -translate-x-1/2 bg-[#C19EE0] border text-black w-[180px] p-3 rounded-md shadow-lg z-10">
                <Link to="/internship">
                  <li className="py-2 text-black hover:text-[#A06CD5] cursor-pointer">Internship Offer</li>
                </Link>
                <Link to="/tutor">
                  <li className="py-2 text-black hover:text-[#A06CD5] cursor-pointer">Become Tutor</li>
                </Link>
                <Link to="/job">
                  <li className="py-2 text-black hover:text-[#A06CD5] cursor-pointer">Job Offer</li>
                </Link>
              </div>
            )}
          </div>

          <div
            className="relative group"
            onMouseEnter={() => {
              if (hoverTimeoutAbout) clearTimeout(hoverTimeoutAbout);
              setShowAboutUs(true);
            }}
            onMouseLeave={() => {
              const timeout = setTimeout(() => {
                setShowAboutUs(false);
              }, 300);
              setHoverTimeoutAbout(timeout);
            }}
          >
            <div className="flex items-center gap-1 cursor-pointer">
              About Us
              <MdOutlineKeyboardArrowDown />
            </div>
            {showAboutUs && (
              <div className="absolute top-[40px] left-0 bg-[#C19EE0] text-black w-[200px] border p-4 rounded-md shadow-lg z-10">
                <ul>
                  <Link to="/choose">
                    <li className="py-2 text-black hover:text-[#A06CD5]">Why TechFighters</li>
                  </Link>
                  <Link to="/instructors">
                    <li className="py-2 text-black hover:text-[#A06CD5]">Our Instructors</li>
                  </Link>
                  <li
                    className="py-2 flex justify-between items-center cursor-pointer"
                    onMouseEnter={() => {
                      if (hoverTimeoutBranches) clearTimeout(hoverTimeoutBranches);
                      setBranchesOpen(true);
                    }}
                    onMouseLeave={() => {
                      const timeout = setTimeout(() => {
                        setBranchesOpen(false);
                      }, 300);
                      setHoverTimeoutBranches(timeout);
                    }}
                  >
                    Our Branches
                    <MdOutlineKeyboardArrowRight />
                    {branchesOpen && (
                      <div className="absolute top-0 left-full ml-2 bg-[#C19EE0] w-[200px] border p-3 rounded-md shadow-lg">
                        <ul>
                          <li className="py-2 hover:text-[#A06CD5]">Faisalabad</li>
                          <li className="py-2 hover:text-[#A06CD5]">Islamabad</li>
                          <li className="py-2 hover:text-[#A06CD5]">Lahore</li>
                        </ul>
                      </div>
                    )}
                  </li>
                </ul>
              </div>
            )}
          </div>

          <Link to="/contact">
            <span className="text-black hover:text-[#A06CD5] transition-colors">Contact Us</span>
          </Link>

          <FaSearch className="text-black hover:text-[#A06CD5] cursor-pointer" />

          <Link to="/findProgram">
            <div className="flex gap-1 h-[5rem] items-center bg-[#C19EE0] px-5 py-2 rounded-full hover:bg-[#A06CD5] transition-colors">
              <PiGraduationCapBold className="text-xl text-black" />
              <PiLineVerticalLight className="text-2xl text-black" />
              <span className="text-sm text-black">Find Program</span>
            </div>
          </Link>
        </div>

        <div className="block lg:hidden text-[2rem] text-black cursor-pointer" onClick={handleShow}>
          <FaBars />
        </div>

        <Offcanvas show={show} onHide={handleClose} className="offcanvas">
          <Offcanvas.Header closeButton className="bg-white border-b text-black">
            <div className="w-[150px] mx-auto">
              <img src={tech} alt="logo" className="w-full object-contain" />
            </div>
          </Offcanvas.Header>
          <Offcanvas.Body className="overflow-y-auto max-h-[100vh] p-4 bg-[#C19EE0] text-black">
            <ul className="flex flex-col gap-5 text-lg">
              <Link to="/" onClick={handleClose}>
                <li className="text-black">Home</li>
              </Link>
              <li>
                <div className="flex text-black justify-between items-center cursor-pointer" onClick={() => setShowCourses(!showCourses)}>
                  <span>Courses</span>
                  {showCourses ? <MdOutlineKeyboardArrowDown /> : <FaPlus />}
                </div>
                {showCourses && (
                  <ul className="pl-4 mt-2 flex flex-col gap-2 text-sm">
                    {coursesData.map((category) => (
                      <li key={category.category}>
                        <div className="font-semibold" onClick={() =>
                          setOpenCategory(openCategory === category.category ? null : category.category)}>
                          {category.category}
                        </div>
                        {openCategory === category.category && (
                          <ul className="pl-4 mt-1">
                            {category.courses.map((course) => (
                              <Link
                                to={`/course/${course.route}`}
                                key={course.name}
                                onClick={handleClose}
                              >
                                <li className="hover:text-[#A06CD5]">{course.name}</li>
                              </Link>
                            ))}
                          </ul>
                        )}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
              <li>
                <div className="flex justify-between items-center cursor-pointer" onClick={() => setShowOpportunities(!showOpportunities)}>
                  <span>Opportunities</span>
                  {showOpportunities ? <MdOutlineKeyboardArrowDown /> : <FaPlus />}
                </div>
                {showOpportunities && (
                  <ul className="pl-4 mt-2 text-sm">
                    <Link to="/internship" onClick={handleClose}>
                      <li className="hover:text-[#A06CD5]">Internship Offer</li>
                    </Link>
                    <Link to="/tutor" onClick={handleClose}>
                      <li className="hover:text-[#A06CD5]">Become Tutor</li>
                    </Link>
                    <Link to="/job" onClick={handleClose}>
                      <li className="hover:text-[#A06CD5]">Job Offer</li>
                    </Link>
                  </ul>
                )}
              </li>
              <li>
                <div className="flex justify-between items-center cursor-pointer" onClick={() => setShowAboutUs(!showAboutUs)}>
                  <span>About Us</span>
                  {showAboutUs ? <MdOutlineKeyboardArrowDown /> : <FaPlus />}
                </div>
                {showAboutUs && (
                  <ul className="pl-4 mt-2 text-sm">
                    <Link to="/choose" onClick={handleClose}>
                      <li className="hover:text-[#A06CD5]">Why TechFighters</li>
                    </Link>
                    <Link to="/instructors" onClick={handleClose}>
                      <li className="hover:text-[#A06CD5]">Our Instructors</li>
                    </Link>
                  </ul>
                )}
              </li>
              <Link to="/contact" onClick={handleClose}>
                <li className="text-black">Contact Us</li>
              </Link>
              <Link to="/findProgram" onClick={handleClose}>
                <div className="flex gap-1 h-[4rem] items-center bg-[#A06CD5] px-5 py-2 rounded-full mt-4">
                  <PiGraduationCapBold className="text-xl text-black" />
                  <PiLineVerticalLight className="text-2xl text-black" />
                  <span className="text-sm text-black">Find Program</span>
                </div>
              </Link>
            </ul>
          </Offcanvas.Body>
        </Offcanvas>
      </div>
    </div>
  );
};