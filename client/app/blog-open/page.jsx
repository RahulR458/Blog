import React from 'react'
import { MdArrowOutward } from 'react-icons/md'
import logo  from "/public/assets/images/logo.png"
import blog_banner  from "/public/assets/images/blog-banner.png"
import blog_banner_m  from "/public/assets/images/blog-bannr-m.png"
import { Button } from "@/components/ui/button"
import { FaArrowDown } from "react-icons/fa6";
import { IoIosHeart } from "react-icons/io";
import { FiEye } from "react-icons/fi";
import { CiHeart, CiLocationArrow1 } from "react-icons/ci";
import Image from "next/image";
import image_2  from "/public/assets/images/image_2.png"
import image_3  from "/public/assets/images/image_3.png"
import image_4  from "/public/assets/images/image_4.png"
import { FaLinkedin, FaLocationArrow, FaTwitter } from 'react-icons/fa'
import { BsArrowUpRightCircleFill } from 'react-icons/bs'
import { PiMediumLogoFill } from 'react-icons/pi'


export default function BlogOpen() {
  return (
    <div className="max-w-[1640px] h-auto mx-auto text-white ">
      {/* subscribe container */}
      <div className="w-full h-8 p-4  flex justify-center items-center">
        <h2 className="hidden sm:block text-[#98989A]">
          Subscribe to our Newsletter For New & latest Blogs and Resources
        </h2>
        <div className="flex justify-around space-x-4">
          <h2 className="sm:hidden text-xs  text-[#98989A]  ">
            Subscribe to our Newsletter For Blogs and Resources
          </h2>
          <span className="text-yellow-300">
            <MdArrowOutward />
          </span>
        </div>
      </div>

      {/* logo container */}
      <div className="w-full h-16 bg-[#1A1A1A] flex items-center">
        <div className="sm:mx-[130px] w-full flex justify-between ">
          <div className="flex gap-1">
            <Image className="w-5 h-5" src={logo} alt="logo" />
            <h2 className="">FutureTech</h2>
          </div>
          <div className=" space-x-5 text-[#7E7E81] hidden sm:flex">
            <h1>Home</h1>
            <h1>News</h1>
            <h1>Podcasts</h1>
            <h1>Resources</h1>
          </div>
          <div className="hidden sm:block">
            <Button className=" h-1 bg-yellow-400 hover:bg-yellow-400 text-black p-4 text-sm rounded-[2px] sm:mx-10 mx-2 w-full sm:w-[100px]">
              Contact Us
            </Button>
          </div>
        </div>
      </div>

      {/* banner container */}
      <div className="w-ful border border-[#393939]">
        <Image
          className="w-full hidden sm:block"
          src={blog_banner}
          alt="blog_banner"
        />
        <Image
          className="w-full sm:hidden block"
          src={blog_banner_m}
          alt="blog_banner_m"
        />
      </div>

      {/* Introduction main container */}
      <div className="w-full sm:flex border-b border-[#393939] ">
        {/* Mobile view - Second container */}
        <div className="w-full sm:hidden">
          <div className="w-full border border-[#393939] border-t-0 sm:border-l-0">
            <div className="w-full flex p-6 pl-16 py-7 space-x-4">
              <div className="w-20 h-10 p-2 rounded-3xl border border-[#393939] flex items-center justify-around">
                <IoIosHeart className="text-red-500" />
                <h1 className="text-xs">24.5k</h1>
              </div>
              <div className="w-20 h-10 p-2 rounded-3xl border border-[#393939] flex items-center justify-around">
                <FiEye className="text-[#393939]" />
                <h1 className="text-xs">24.5k</h1>
              </div>
              <div className="w-20 h-10 p-2 rounded-3xl border border-[#393939] flex items-center justify-around">
                <CiLocationArrow1 className="text-[#393939]" />
                <h1 className="text-xs">24.5k</h1>
              </div>
            </div>
          </div>
          <div className=" ">
            <div className="w-full flex justify-between p-6 px-[70px] space-x-5">
              <div className="space-y-5">
                <div className="space-y-2">
                  <h1 className="text-[#98989A]">Publication Date</h1>
                  <h2>October 15, 2023</h2>
                </div>
                <div className="space-y-2">
                  <h1 className="text-[#98989A]">Reading Time</h1>
                  <h2>10 Min</h2>
                </div>
              </div>
              <div className="space-y-5">
                <div className="space-y-2">
                  <h1 className="text-[#98989A]">Category</h1>
                  <h2>Healthcare</h2>
                </div>
                <div className="space-y-2">
                  <h1 className="text-[#98989A]">Author Name</h1>
                  <h2>Dr. Emily Walker</h2>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full ">
            <div className="w-full p-6 sm:px-[70px] ">
              <h1>Table of Contents</h1>
              <div className="w-full bg-[#1A1A1A] mt-5 p-6 rounded-xl text-sm space-y-2">
                <li>Introduction</li>
                <li>AI in Diagnostic Imaging</li>
                <li>Predictive Analytics and Disease Prevention</li>
                <li>Personalized Treatment Plans</li>
                <li>Drug Discovery and Research</li>
                <li>AI in Telemedicine</li>
                <li>Ethical Considerations</li>
                <li>The Future of AI in Healthcare</li>
                <li>Conclusion</li>
              </div>
            </div>
          </div>
        </div>

        {/* First container */}
        <div>
          <div className="sm:w-[1000px] border border-[#393939] border-t-0 flex justify-center sm:px-20 p-4 py-10">
            <div className="w-full ">
              <h1>Introduction</h1>
              <p className="text-[#98989A] text-xs pt-3">
                Artificial Intelligence (AI) has emerged as a transformative
                force in the healthcare industry, reshaping patient care,
                diagnostics, and research. In this blog post, we explore the
                profound impact of AI in healthcare, from revolutionizing
                diagnostic accuracy to enhancing patient outcomes.
              </p>
            </div>
          </div>
          <div className="sm:w-[1000px] border border-[#393939] border-t-0 flex justify-center sm:px-20 p-4 py-10">
            <div className="w-full">
              <h1>Artificial Intelligence (AI)</h1>
              <p className="text-[#98989A] text-sm pt-3">
                Artificial Intelligence (AI) has permeated virtually every
                aspect of our lives, and healthcare is no exception. The
                integration of AI in healthcare is ushering in a new era of
                medical practice, where machines complement the capabilities of
                healthcare professionals, ultimately improving patient outcomes
                and the efficiency of the healthcare system. In this blog post,
                we will delve into the diverse applications of AI in healthcare,
                from diagnostic imaging to personalized treatment plans, and
                address the ethical considerations surrounding this
                revolutionary technology.
              </p>
              <p className="text-[#98989A] text-sm pt-3">
                Artificial Intelligence (AI) has permeated virtually every
                aspect of our lives, and healthcare is no exception. The
                integration of AI in healthcare is ushering in a new era of
                medical practice, where machines complement the capabilities of
                healthcare professionals, ultimately improving patient outcomes
                and the efficiency of the healthcare system. In this blog post,
                we will delve into the diverse applications of AI in healthcare,
                from diagnostic imaging to personalized treatment plans, and
                address the ethical considerations surrounding this
                revolutionary technology.
              </p>
              <h1 className="pt-3">
                Predictive Analytics and Disease Prevention
              </h1>
              <p className="text-[#98989A] text-sm pt-3 shadow-black">
                Artificial Intelligence (AI) has permeated virtually every
                aspect of our lives, and healthcare is no exception. The
                integration of AI in healthcare is ushering in a new era of
                medical practice, where machines complement the capabilities of
                healthcare professionals, ultimately improving patient outcomes
                and the efficiency of the healthcare system. In this blog post,
                we will delve into the diverse applications of AI in healthcare,
                from diagnostic imaging to personalized treatment plans, and
                address the ethical considerations surrounding this
                revolutionary technology.
              </p>
              <div className="w-full flex justify-center ">
                <div className="border rounded text-[#98989A] text-sm flex justify-between items-center px-2">
                  <Button className="">Read Full Blog</Button>
                  <FaArrowDown />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Second container */}
        <div className="w-full hidden sm:block">
          <div className="w-full border border-[#393939] border-t-0 sm:border-l-0">
            <div className="w-full flex p-6 pl-16 py-7 space-x-4">
              <div className="w-20 h-10 p-2 rounded-3xl border border-[#393939] flex items-center justify-around">
                <IoIosHeart className="text-red-500" />
                <h1 className="text-xs">24.5k</h1>
              </div>
              <div className="w-20 h-10 p-2 rounded-3xl border border-[#393939] flex items-center justify-around">
                <FiEye className="text-[#393939]" />
                <h1 className="text-xs">24.5k</h1>
              </div>
              <div className="w-20 h-10 p-2 rounded-3xl border border-[#393939] flex items-center justify-around">
                <CiLocationArrow1 className="text-[#393939]" />
                <h1 className="text-xs">24.5k</h1>
              </div>
            </div>
          </div>
          <div className=" ">
            <div className="w-full flex justify-between p-6 px-[70px] space-x-5">
              <div className="space-y-5">
                <div className="space-y-2">
                  <h1 className="text-[#98989A]">Publication Date</h1>
                  <h2>October 15, 2023</h2>
                </div>
                <div className="space-y-2">
                  <h1 className="text-[#98989A]">Reading Time</h1>
                  <h2>10 Min</h2>
                </div>
              </div>
              <div className="space-y-5">
                <div className="space-y-2">
                  <h1 className="text-[#98989A]">Category</h1>
                  <h2>Healthcare</h2>
                </div>
                <div className="space-y-2">
                  <h1 className="text-[#98989A]">Author Name</h1>
                  <h2>Dr. Emily Walker</h2>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full ">
            <div className="w-full p-6 sm:px-[70px] ">
              <h1>Table of Contents</h1>
              <div className="w-full bg-[#1A1A1A] mt-5 p-6 rounded-xl text-sm space-y-2">
                <li>Introduction</li>
                <li>AI in Diagnostic Imaging</li>
                <li>Predictive Analytics and Disease Prevention</li>
                <li>Personalized Treatment Plans</li>
                <li>Drug Discovery and Research</li>
                <li>AI in Telemedicine</li>
                <li>Ethical Considerations</li>
                <li>The Future of AI in Healthcare</li>
                <li>Conclusion</li>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full py-10 border border-[#262626] ">
        <div className="w-full sm:px-20 px-5 flex justify-between items-center  ">
          <h1>Similar News</h1>
          <div className="border rounded text-[#98989A] text-xs flex justify-between items-center px-2">
            <Button className="">Read Full Blog</Button>
            <FaArrowDown />
          </div>
        </div>
        <div className="sm:flex justify-around items-center p-5 space-y-5">
          <div className="">
            <Image src={image_2} alt="image_2" />
            <h1>A Decisive Victory for Progressive Policies</h1>
            <h2>Politics</h2>
            <div className="flex justify-between items-center">
              <div className="flex gap-2">
                <div className="w-14 h-5 bg-[#262626] rounded-2xl flex justify-around items-center">
                  <span className="text-xs text-[#98989A]">
                    <CiHeart />
                  </span>
                  <h1 className="text-[#98989A] text-xs">14k</h1>
                </div>
                <div className="w-14 h-5 bg-[#262626] rounded-2xl flex justify-around items-center ">
                  <span className="text-xs text-[#98989A]">
                    <FaLocationArrow />
                  </span>
                  <h1 className="text-[#98989A] text-xs">200</h1>
                </div>
              </div>
              <Button className="border rounded-xl border-[#262626] text-[#98989A] gap-1">
                Read More
                <span className="text-yellow-300">
                  <MdArrowOutward />
                </span>
              </Button>
            </div>
          </div>
          <div className="">
            <Image src={image_3} alt="image_2" />
            <h1>Tech Giants Unveil Cutting-Edge AI Innovations</h1>
            <h2>Technology</h2>
            <div className="flex justify-between items-center">
              <div className="flex gap-2">
                <div className="w-14 h-5 bg-[#262626] rounded-2xl flex justify-around items-center">
                  <span className="text-xs text-[#98989A]">
                    <CiHeart />
                  </span>
                  <h1 className="text-[#98989A] text-xs">14k</h1>
                </div>
                <div className="w-14 h-5 bg-[#262626] rounded-2xl flex justify-around items-center ">
                  <span className="text-xs text-[#98989A]">
                    <FaLocationArrow />
                  </span>
                  <h1 className="text-[#98989A] text-xs">200</h1>
                </div>
              </div>
              <Button className="border rounded-xl border-[#262626] text-[#98989A] gap-1">
                Read More
                <span className="text-yellow-300">
                  <MdArrowOutward />
                </span>
              </Button>
            </div>
          </div>
          <div className="">
            <Image src={image_4} alt="image_2" />
            <h1>COVID-19 Variants</h1>
            <h2>Health</h2>
            <div className="flex justify-between items-center">
              <div className="flex gap-2">
                <div className="w-14 h-5 bg-[#262626] rounded-2xl flex justify-around items-center">
                  <span className="text-xs text-[#98989A]">
                    <CiHeart />
                  </span>
                  <h1 className="text-[#98989A] text-xs">14k</h1>
                </div>
                <div className="w-14 h-5 bg-[#262626] rounded-2xl flex justify-around items-center ">
                  <span className="text-xs text-[#98989A]">
                    <FaLocationArrow />
                  </span>
                  <h1 className="text-[#98989A] text-xs">200</h1>
                </div>
              </div>
              <Button className="border rounded-xl border-[#262626] text-[#98989A] gap-1">
                Read More
                <span className="text-yellow-300">
                  <MdArrowOutward />
                </span>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-[#1A1A1A]">
        <div className="p-6 sm:p-10 w-full h-full">
          <div className="w-full flex flex-col sm:flex-row justify-center items-center pt-2 space-x-0 sm:space-x-5">
            <div className="flex items-center mt-5 sm:mt-0">
              <div>
                <div className="flex justify-center items-center sm:justify-start">
                  <Image
                    src={logo}
                    alt="logo"
                    className="w-32 sm:w-auto mx-auto sm:mx-0"
                  />
                  <h1 className="w-full sm:w-[200px] text-center sm:text-left text-sm py-1 bg-[#333333] rounded-sm">
                    Learn, Connect, and Innovate
                  </h1>
                </div>
                <h1 className="text-lg sm:text-[30px] font-semibold py-4 text-center sm:text-left">
                  Be Part of the Future Tech Revolution
                </h1>
                <p className="text-[12px] text-center sm:text-left">
                  Immerse yourself in the world of future technology. Explore
                  our comprehensive resources, connect with fellow tech
                  enthusiasts, and drive innovation in the industry. Join a{" "}
                  <br /> dynamic community of forward-thinkers.
                </p>
              </div>
            </div>
          </div>

          {/* Second section */}
          <div className="w-full flex justify-center items-center mt-10 sm:mt-20">
            <div className="flex flex-col sm:flex-row justify-center items-center bg-black p-4 rounded-xl">
              <div className="sm:w-[980px] flex flex-col sm:flex-row justify-between items-center space-y-5 sm:space-y-0 sm:space-x-5">
                {/* Card 1 */}
                <div className="w-full sm:w-[320px] h-auto bg-[#262626] rounded-xl p-4">
                  <div className="h-full flex flex-col justify-between items-start">
                    <div className="flex justify-between items-center mb-3">
                      <h1 className="text-xl">Resource Access</h1>
                      <span className="text-yellow-300 text-xl">
                        <BsArrowUpRightCircleFill />
                      </span>
                    </div>
                    <p className="text-xs">
                      Visitors can access a wide range of resources, including
                      ebooks, whitepapers, and reports.
                    </p>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="w-full sm:w-[320px] h-auto bg-[#262626] rounded-xl p-4">
                  <div className="h-full flex flex-col justify-between items-start">
                    <div className="flex justify-between items-center mb-3">
                      <h1 className="text-xl">Resource Access</h1>
                      <span className="text-yellow-300 text-xl">
                        <BsArrowUpRightCircleFill />
                      </span>
                    </div>
                    <p className="text-xs">
                      Visitors can access a wide range of resources, including
                      ebooks, whitepapers, and reports.
                    </p>
                  </div>
                </div>

                {/* Card 3 */}
                <div className="w-full sm:w-[320px] h-auto bg-[#262626] rounded-xl p-4">
                  <div className="h-full flex flex-col justify-between items-start">
                    <div className="flex justify-between items-center mb-3">
                      <h1 className="text-xl">Resource Access</h1>
                      <span className="text-yellow-300 text-xl">
                        <BsArrowUpRightCircleFill />
                      </span>
                    </div>
                    <p className="text-xs">
                      Visitors can access a wide range of resources, including
                      ebooks, whitepapers, and reports.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="w-full h-auto bg-[#131212] text-white">
        <div className="w-full h-auto grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-10 p-6 sm:p-10">
          {/* Section 1 */}
          <div className="h-auto">
            <h1 className="font-semibold mb-5">Home</h1>
            <h4 className="text-[#666666]">Feature</h4>
            <h4 className="text-[#666666]">Blogs</h4>
            <div className="flex gap-2">
              <h4 className="text-[#666666]">Resources</h4>
              <div className="p-[1px] rounded bg-gradient-to-r from-[#262626] to-[#FFD119]">
                <h4 className="bg-[#262626] rounded px-2">New</h4>
              </div>
            </div>
            <h4 className="text-[#666666]">Testimonials</h4>
            <h4 className="text-[#666666]">Contact Us</h4>
            <h4 className="text-[#666666]">Newsletter</h4>
          </div>

          {/* Section 2 */}
          <div className="h-auto">
            <h1 className="font-semibold mb-5">News</h1>
            <h4 className="text-[#666666]">Trending Stories</h4>
            <h4 className="text-[#666666]">Featured Videos</h4>
            <h4 className="text-[#666666]">Technology</h4>
            <h4 className="text-[#666666]">Health</h4>
            <h4 className="text-[#666666]">Politics</h4>
            <h4 className="text-[#666666]">Environment</h4>
          </div>

          {/* Section 3 */}
          <div className="h-auto">
            <h1 className="font-semibold mb-5">Blogs</h1>
            <h4 className="text-[#666666]">Quantum Computing</h4>
            <h4 className="text-[#666666]">AI Ethics</h4>
            <h4 className="text-[#666666]">Space Exploration</h4>
            <div className="flex gap-2">
              <h4 className="text-[#666666]">Biotechnology</h4>
              <div className="p-[1px] rounded bg-gradient-to-r from-[#262626] to-[#FFD119]">
                <h4 className="bg-[#262626] rounded px-2">New</h4>
              </div>
            </div>
            <h4 className="text-[#666666]">Renewable Energy</h4>
            <h4 className="text-[#666666]">Biohacking</h4>
          </div>

          {/* Section 4 */}
          <div className="h-auto">
            <h1 className="font-semibold mb-5">Podcasts</h1>
            <h4 className="text-[#666666]">AI Revolution</h4>
            <div className="flex gap-2">
              <h4 className="text-[#666666]">AI Revolution</h4>
              <div className="p-[1px] rounded bg-gradient-to-r from-[#262626] to-[#FFD119]">
                <h4 className="bg-[#262626] rounded ">New</h4>
              </div>
            </div>
            <h4 className="text-[#666666]">TechTalk AI</h4>
            <h4 className="text-[#666666] pb-11">AI Conversations</h4>
          </div>

          {/* Section 5 */}
          <div className="h-auto mt-5 lg:mt-0">
            <h1 className="font-semibold mb-5">Resources</h1>
            <div className="w-auto space-y-4 ">
              <div className="border p-1 rounded flex justify-between items-center">
                <h4 className="text-[#666666]">Whitepapers</h4>
                <MdArrowOutward className="text-yellow-400" />
              </div>
              <div className="border p-1 rounded flex justify-between items-center">
                <h4 className="text-[#666666]">Ebooks</h4>
                <MdArrowOutward className="text-yellow-400" />
              </div>
              <div className="border p-1 rounded flex justify-between items-center">
                <h4 className="text-[#666666]">Reports</h4>
                <MdArrowOutward className="text-yellow-400" />
              </div>
              <div className="border p-1 rounded flex justify-between items-center">
                <h4 className="text-[#666666]">Research Papers</h4>
                <MdArrowOutward className="text-yellow-400" />
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-[1px] bg-[#262626] mt-10"></div>

        {/* Footer bottom */}
        <div className="px-6 sm:px-10 flex flex-col sm:flex-row justify-between items-center pt-6 pb-10 space-y-4 sm:space-y-0">
          {/* Terms and Privacy */}
          <div className="space-x-4 flex text-[#666666]">
            <h1>Terms & Conditions</h1>
            <h1>Privacy Policy</h1>
          </div>
          {/* Social Links */}
          <div className="flex space-x-4">
            <FaTwitter />
            <PiMediumLogoFill />
            <FaLinkedin />
          </div>
          {/* Copyright */}
          <div className="text-[#666666] text-center">
            <h1>© 2024 FutureTech. All rights reserved.</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
