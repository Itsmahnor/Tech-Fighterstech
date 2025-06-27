import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { TopNav } from "../Navbar/TopNav";
import { BottomNav } from "../Navbar/BottomNav";
import Footer from "../Footer/Footer";
import CareerOpportunities from "../CareerOpertunities";

export const MainContent = ({ courses }) => {
  const { courseId } = useParams();
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [openOutlineItems, setOpenOutlineItems] = useState({});

  useEffect(() => {
    const course = courses.find((course) => course.courseId === courseId);
    setSelectedCourse(course);
  }, [courseId, courses]);

  const toggleOutlineItem = (index) => {
    setOpenOutlineItems((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  return (
    <>
      <TopNav />
      <BottomNav />
      <div className="w-full bg-gradient-to-r from-[#C19EE0] to-[#DAC3E8] text-black overflow-x-hidden">
        {selectedCourse ? (
          <>
            {/* Breadcrumb */}
            <div className="breadcrumb-wrapper md:h-[50vh] py-10 flex justify-center items-center flex-col text-center">
              <h1 className="text-xl sm:text-2xl md:text-4xl font-bold text-black">
                {selectedCourse.header.title}
              </h1>
              <p
                className="w-full max-w-[90vw] md:w-[70vw] mt-4 text-base md:text-lg text-black"
                dangerouslySetInnerHTML={{
                  __html: selectedCourse.header.description,
                }}
              ></p>
            </div>

            {/* Main Content */}
            <div className="w-full flex justify-center items-center pt-10 text-black flex-col">
              <div className="w-full max-w-[90vw] lg:max-w-[80vw] flex flex-col lg:flex-row gap-10">
                
                {/* Left Column */}
                <div className="lg:w-[60%]">
                  <h1 className="text-2xl md:text-4xl font-extrabold text-black">
                    {selectedCourse.firstHeading}
                  </h1>
                  <p className="text-base md:text-lg text-[#4A4A4A] mt-4">
                    {selectedCourse.firstHeadingDescription}
                  </p>

                  <div className="pt-7">
                    <h2 className="text-xl md:text-2xl font-semibold">Overview</h2>
                    <p className="text-base md:text-lg mt-4">{selectedCourse.overview}</p>

                    {/* What You Will Learn */}
                    <div className="pt-7">
                      <h2 className="text-xl font-semibold">What You Will Learn</h2>
                      <ul className="list-disc pl-5 space-y-2 text-[#4A4A4A] mt-2">
                        {selectedCourse.whatYouWillLearn.map((point, index) => (
                          <li key={index}>{point}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Course Outline */}
                  <div className="mt-10">
                    <h2 className="text-xl md:text-2xl font-semibold">Course Outline</h2>
                    {selectedCourse.outline.map((item, index) => (
                      <div key={index} className="my-4">
                        <div
                          className="flex justify-between items-center font-semibold text-white text-lg cursor-pointer bg-gradient-to-r from-[#A06CD5] to-[#9163CB] p-3 rounded transition-all"
                          onClick={() => toggleOutlineItem(index)}
                        >
                          <p>{item.month}: {item.title}</p>
                          <span
                            className={`transition-transform duration-300 ${
                              openOutlineItems[index] ? "rotate-180" : "rotate-0"
                            }`}
                          >
                            ▲
                          </span>
                        </div>

                        <div
                          className={`overflow-hidden transition-all duration-500 ease-in-out ${
                            openOutlineItems[index] ? "max-h-[500px] pt-3" : "max-h-0"
                          } pl-6 text-[#4A4A4A]`}
                        >
                          <div className="mb-3">
                            <h3 className="font-bold text-lg text-black">{item.subTitle1}</h3>
                            <p className="text-sm">{item.subTitle1Content}</p>
                          </div>
                          <div>
                            <h3 className="font-bold text-lg text-black">{item.subTitle2}</h3>
                            <p className="text-sm">{item.subTitle2Content}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right Sidebar */}
                <div className="lg:w-[35%]  py-7 h-[70vh] w-full bg-white rounded-lg shadow-lg p-4 md:p-6 text-black font-bold text-[1rem]">
                  <div className="space-y-4">
                    <h3 className="text-lg md:text-xl font-semibold text-black">
                      Course Details
                    </h3>
                    <div className="space-y-3 mt-4 text-sm md:text-base">
                      <div className="flex justify-between">
                        <p className="font-bold">Duration:</p>
                        <p>{selectedCourse.details?.duration}</p>
                      </div>
                      <div className="flex justify-between">
                        <p className="font-bold">Weekend Classes:</p>
                        <p>{selectedCourse.details?.classHours}</p>
                      </div>
                      <div className="flex justify-between">
                        <p className="font-bold">Students:</p>
                        <p>{selectedCourse.details?.students}</p>
                      </div>
                      <div className="flex justify-between">
                        <p className="font-bold">Course Type:</p>
                        <p>{selectedCourse.details?.courseType}</p>
                      </div>
                      <Link to="/register">
                        <div className="bg-gradient-to-r from-[#A06CD5] to-[#9163CB] rounded-lg text-white p-3 text-center cursor-pointer mt-4">
                          Course Enrollment
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="text-center text-[#4A4A4A] mt-16">Course not found.</div>
        )}
      </div>
      <CareerOpportunities />
      <Footer />
    </>
  );
};
