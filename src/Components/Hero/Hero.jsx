import React from 'react';
import { FaBookOpen } from "react-icons/fa";
import img4 from '../Navbar/Images/img4.jpeg';

export const Hero = () => {
  const techIcons = [
    { name: "HTML", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "Python", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "Express", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
  
    { name: "Django", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" },
    { name: "PHP", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
    { name: "Machine Learning", src: "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg" },
    { name: "Java", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
    { name: "WordPress", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg" },
  ];

  return (
    <div className='w-full lg:h-[80vh] bg-gradient-to-r from-[#C19EE0] to-[#DAC3E8] flex justify-center items-center text-black font-bold text-[1.2rem] py-5'>
      <div className='w-[90vw] flex justify-between flex-wrap lg:h-[70vh] items-center gap-6'>

        {/* Left content */}
        <div className='lg:flex-1 flex  flex-col justify-center px-3'>
          <div className='flex gap-1 items-center text-black'> 
            <FaBookOpen size={24} className="text-[#A06CD5]" />
            <span>100% LEARN ONLINE</span>
          </div>

          <h1 className='md:text-[3rem] font-bold text-black mt-4'>
            TechFighters: Empowering Tech Talent
          </h1>

          <p className='text-[#4A4A4A] mt-4 '>
            Join TechFighters and learn from industry experts. Experience live, interactive, and cutting-edge training designed to prepare you for the tech-driven future.
          </p>

          {/* Icon row */}
          <div className='p-3 mt-0'>
            <ul className="flex flex-wrap gap-1 items-center">
              {techIcons.map((icon, index) => (
                <li key={index} className="group relative">
                  <div className="w-[40px] h-[40px] rounded-full bg-white shadow-md p-2 flex items-center justify-center transition-transform hover:scale-110 duration-300">
                    <img
                      src={icon.src}
                      alt={icon.name}
                      title={icon.name}
                      className="w-[30px] h-[30px] object-contain"
                    />
                  </div>
                  {/* Tooltip */}
                  <span className="absolute top-[60px] left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition duration-300 whitespace-nowrap z-50">
                    {icon.name}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right image */}
        <div className='lg:flex-1 h-full flex justify-center items-center'>
          <img
            src={img4}
            alt="TechFighters Hero"
            className='h-[400px] w-[400px] rounded-full shadow-lg object-cover filter brightness-75 transition duration-300 hover:brightness-50'
          />
        </div>
      </div>
    </div>
  );
};
