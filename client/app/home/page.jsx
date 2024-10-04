"use client"

import React, { useEffect, useState } from 'react'
import Image from "next/image";
import { MdArrowOutward } from 'react-icons/md'
import logo  from "/public/assets/images/logo.png"
import banner  from "/public/assets/images/banner.png"
import icon_1  from "/public/assets/images/icon_1.png"
import icon_2  from "/public/assets/images/icon_2.png"
import icon_3  from "/public/assets/images/icon_3.png"
import image_1  from "/public/assets/images/image_1.png"
import image_2  from "/public/assets/images/image_2.png"
import image_3  from "/public/assets/images/image_3.png"
import image_4  from "/public/assets/images/image_4.png"
import image_5  from "/public/assets/images/image_5.png"
import image_6  from "/public/assets/images/image_6.png"
import image_7  from "/public/assets/images/image_7.png"
import image_8  from "/public/assets/images/image_8.png"
import { BsArrowUpRightCircleFill } from "react-icons/bs";
import { Button } from '@/components/ui/button'
import { CiHeart } from "react-icons/ci";
import { FaLocationArrow, FaTwitter } from "react-icons/fa6";
import { PiMediumLogoFill } from "react-icons/pi";
import { FaLinkedin } from "react-icons/fa";
import axios from 'axios';
import { axiosInstance } from '@/interceptors/userinterceptor';

  // const URL = "http://localhost:3005/user/blog";

export default function Home() {
  const [ blog, setBlog ] = useState([])
  const [ image, setImage ] = useState()

  const fetchData = async (event) => {
    try {
        console.log("fetchData");
        const response = await axiosInstance("/user/blog");
        console.log(response, "===response==fetchData");
        setImage(response.data.blogs[0].image[0]);
        
        setBlog(response.data.blogs);
    } catch (error) {
      console.log(error);
      
    }
  };

  console.log(blog,"____blog");
  

  useEffect(() => {
    fetchData();
}, []);
  
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
      <div className="w-full h-12 bg-[#1A1A1A] flex items-center">
        <div className="sm:mx-[130px] flex gap-1">
          <Image className="w-5 h-5" src={logo} alt="logo" />
          <h2 className="">FutureTech</h2>
        </div>
      </div>
      {/* first main conatiner */}
      <div className="sm:flex border border-[#262626]">
        <div className="w-full h-[500px] flex flex-col justify-between">
          <div className="flex-grow flex">
            <div className="sm:mx-36 sm:mt-24 p-4">
              <h3 className="text-[#666666] p-1">
                Your Journey to Tomorrow Begins Here
              </h3>
              <h1 className="text-4xl font-semibold p-1">
                Explore the Frontiers of <br /> Artificial Intelligence
              </h1>
              <p className="text-xs text-[#7E7E81] p-1">
                Welcome to the epicenter of AI innovation. FutureTech AI News is
                your passport to a world where machines <br /> think, learn, and
                reshape the future. Join us on this visionary expedition into
                the heart of AI.
              </p>
            </div>
          </div>

          <div className="w-full h-[150px] flex justify-center items-center border border-[#262626]">
            <div className="w-full h-full flex justify-center items-center px-2">
              <div className="w-full h-full flex justify-center items-center">
                <div className='px-2'>
                  <h1 className="font-semibold">
                    300<span className="text-yellow-300">+</span>
                  </h1>
                  <p className="text-[#98989A]">Resources available</p>
                </div>
              </div>
              <div className="w-full h-full flex justify-center items-center border border-b-0 border-t-0 border-[#262626]">
                <div className='px-2'>
                  <h1 className="font-semibold">
                    12k<span className="text-yellow-300">+</span>
                  </h1>
                  <p className="text-[#98989A]">Total Downloads</p>
                </div>
              </div>
              <div className="w-full h-full flex justify-center items-center">
                <div>
                  <h1 className="font-semibold">
                    10K<span className="text-yellow-300">+</span>
                  </h1>
                  <p className="text-[#98989A]">Active Users</p>
                </div>
              </div>
            </div>

          </div>
        </div>
        <div className="sm:w-[850px] sm:h-[500px] ">
          <Image src={banner} alt="banner" />
        </div>
      </div>



      <div className="w-full h-[250px] sm:flex justify-center ">
        <div className="w-full h-full border border-[#262626] sm:border-b-0 border-t-0 flex justify-center items-center">
          <div className="">
            <Image className="w-8 h-8 mb-3" src={icon_1} alt="icon_1" />
            <div className="flex justify-start items-center space-x-10 mb-3">
              <div>
                <h2 className="">Latest News Updates</h2>
                <h3 className="text-[#7E7E81]">Stay Current</h3>
              </div>
              <div className="text-yellow-400 text-3xl">
                <BsArrowUpRightCircleFill />
              </div>
            </div>
            <p className="text-[#98989A]">
              Over 1,000 articles published monthly
            </p>
          </div>
        </div>
        <div className="w-full h-full border border-[#262626] sm:border-b-0 border-t-0 flex justify-center items-center">
          <div className="">
            <Image className="w-8 h-8 mb-3" src={icon_2} alt="icon_1" />
            <div className="flex justify-start items-center space-x-10 mb-3">
              <div>
                <h2 className="">Expert Contributors</h2>
                <h3 className="text-[#7E7E81]">Trusted Insights</h3>
              </div>
              <div className="text-yellow-400 text-3xl">
                <BsArrowUpRightCircleFill />
              </div>
            </div>
            <p className="text-[#98989A]">
              50+ renowned AI experts on our team
            </p>
          </div>
        </div>
        <div className="w-full h-full border border-[#262626] sm:border-b-0 border-t-0 flex justify-center items-center">
          <div className="">
            <Image className="w-8 h-8 mb-3" src={icon_3} alt="icon_1" />
            <div className="flex justify-start items-center space-x-10 mb-3">
              <div>
                <h2 className="">Global Readership</h2>
                <h3 className="text-[#7E7E81]">Worldwide Impact</h3>
              </div>
              <div className="text-yellow-400 text-3xl">
                <BsArrowUpRightCircleFill />
              </div>
            </div>
            <p className="text-[#98989A]">2 million monthly readers</p>
          </div>
        </div>
        
        <div className="sm:hidden flex justify-center items-center mt-10 m-2">
          <div>
            <h1 className="text-2xl font-semibold">
              Today's Headlines: Stay
              <br /> Informed
            </h1>
            <div className="flex space-x-5 pt-5">
              <p className="text-xs pt-2 text-[#98989A]">
                Explore the latest news from around the world. We bring you
                up-to-the-minute updates on the most significant events, trends,
                and stories. Discover <br /> the world through our news
                coverage.
              </p>
            </div>
          </div>
        </div>
        

        {/* Mo */}
        <div className="w-full h-auto sm:hidden flex justify-around border border-[#262626]">
          <div className="w-full p-2 ">
            <div className=" flex justify-center">
              <Image
                className="w-[400px] h-[200px] rounded-xl"
                src={`http://localhost:3005/images/images-${image}`} width={500}  height={300}
                alt="image_1"
              />
            </div>
            <div className="w-full h-[400px] flex justify-center items-center">
              <div>
                <div className="">
                  <h1>{blog[0]?.blog_title}</h1>
                  <p className="text-[#98989A] mt-4">
                  {blog[0]?.description}
                  </p>
                  <div className="flex space-x-10 mt-4">
                    <div>
                      <h1 className="text-[#98989A]">Category</h1>
                      <h1>{blog[0]?.category}</h1>
                    </div>
                    <div>
                      <h1 className="text-[#98989A]">Publication Date</h1>
                      <h1>{blog[0]?.publishing_date}</h1>
                    </div>
                    <div>
                      <h1 className="text-[#98989A]">Author</h1>
                      <h1>{blog[0]?.author}</h1>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between mt-4">
                  <div className="flex justify-center items-center gap-2">
                    <div className="w-14 h-5 bg-[#262626] rounded-2xl flex justify-around items-center p-2">
                      <span className="text-xs text-[#98989A]">
                        <CiHeart />
                      </span>
                      <h1 className="text-[#98989A] text-xs">14k</h1>
                    </div>
                    <div className="w-14 h-5 bg-[#262626] rounded-2xl flex justify-around items-center p-2">
                      <span className="text-xs text-[#98989A]">
                        <FaLocationArrow />
                      </span>
                      <h1 className="text-[#98989A] text-xs">200</h1>
                    </div>
                  </div>
                  <Button className="border rounded-xl border-[#262626] text-[#98989A]">
                    Read More
                  </Button>
                </div>
              </div>
            </div>

          </div>
        </div>


        <div>
        <div className='w-full py-10 border border-[#262626] flex sm:hidden justify-center '>
        <div className='w-full '>
            {blog.map((data, index)=>(
            <div className='mx-5'>
                <Image src={`http://localhost:3005/images/images-${data.image[0]}`} alt="image_2" width={500}  height={300} />
                <h1>{data.blog_title}</h1>
                <h2>{data.category}</h2>
                <div className="flex justify-between items-center">
                    <div className='flex gap-2'>
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
          ))}
            
        </div>
      </div>
      
        </div>

      <div className='w-full h-auto bg-[#262626] py-[80px] sm:hidden'>
        <div className='w-full p-3'>
          <div className='pb-4'>
              <div className='flex text-center pb-2'>
              <h1 className='w-32 rounded-sm py-1 bg-[#333333]'>Featured Blog</h1>
              </div>
              <h1 className='text-lg font-semibold'>Visual Insights for the <br /> Modern Viewer</h1>
          </div>
          <Button className="w-full border bg-[#141414] border-[#262626] text-[#98989A] gap-1">
            Read More 
            <span className="text-yellow-300">
                <MdArrowOutward />
            </span>
          </Button>
        </div>
      </div>

      <div className='w-full h-auto  py-[80px] sm:hidden'>
        <div className='border border-[#262626] border-t-0 pb-10 p-4'>
          <div className=''>
            <div className=''>
                <Image src={image_5} alt="image_5" />
                  <h1 className='text-xs font-semibold py-2'>Mars Exploration: Unveiling Alien Landscapes</h1>
                  <p className='text-[8px]'>Embark on a journey through the Red Planet's breathtaking landscapes and uncover the <br /> mysteries of Mars.</p>
            </div>
            <div className='pt-8'>
                <Image src={image_6} alt="image_5" />
                  <h1 className='text-xs font-semibold py-2'>Mars Exploration: Unveiling Alien Landscapes</h1>
                  <p className='text-[8px]'>Embark on a journey through the Red Planet's breathtaking landscapes and uncover the <br /> mysteries of Mars.</p>
            </div>
          </div>
          <div className='mt-4'>
          <div className=' '>
            <div className='pt-8'>
                <Image src={image_7} alt="image_5" />
                  <h1 className='text-xs font-semibold py-2'>Mars Exploration: Unveiling Alien Landscapes</h1>
                  <p className='text-[8px]'>Embark on a journey through the Red Planet's breathtaking landscapes and uncover the <br /> mysteries of Mars.</p>
            </div>
            <div className='pt-8'>
                <Image src={image_8} alt="image_5" />
                  <h1 className='text-xs font-semibold py-2'>Mars Exploration: Unveiling Alien Landscapes</h1>
                  <p className='text-[8px]'>Embark on a journey through the Red Planet's breathtaking landscapes and uncover the <br /> mysteries of Mars.</p>
            </div>
          </div>
          </div>
        </div>
      </div>

      <div className='w-full h-auto bg-[#1A1A1A] sm:hidden py-10'>
          <div className='w-full  space-x-5'>
                <div className='flex text-center items-center rounded-sm'>
                  <Image src={logo} alt="logo" />
                <h1 className='w-[200px] text-sm rounded-sm py-1 bg-[#333333]'>Learn, Connect, and Innovate</h1>
                </div>
                <h1 className='text-[30px] font-semibold py-4'>Be Part of the Future Tech Revolution</h1>
                <p className='text-[12px]'>Immerse yourself in the world of future technology. Explore our comprehensive resources, connect with fellow tech enthusiasts, and drive innovation in the industry. Join a <br /> dynamic community of forward-thinkers.</p>
              
          </div>

          <div className='flex justify-center items-center my-16 '>
          <div className='w-[350px] h-[400px] bg-black rounded-xl'>
            <div className='flex justify-center items-center m-10'>
            <div className='w-[320px] h-[100px] space-y-4'>
              <div className='w-full h-full bg-[#262626] rounded-xl '>
                <div className='w-[320px] h-full flex justify-center items-center'>
                <div>
                <div className='flex justify-between items-center '>
                  <h1 className='text-xl'>Resource Access</h1>
                  <span className="text-yellow-300 text-xl">
                        <BsArrowUpRightCircleFill />
                  </span>
                </div>
                <h1 className='text-xs '>Visitors can access a wide range of resources, <br /> including ebooks, whitepapers, reports.</h1>
                </div>
                </div>

              </div>
              <div className='w-[320px] h-full bg-[#262626] rounded-xl '>
                <div className='w-[320px] h-full flex justify-center items-center'>
                <div>
                <div className='flex justify-between items-center'>
                  <h1 className='text-xl'>Resource Access</h1>
                  <span className="text-yellow-300 text-xl">
                        <BsArrowUpRightCircleFill />
                  </span>
                </div>
                <h1 className='text-xs '>Visitors can access a wide range of resources, <br /> including ebooks, whitepapers, reports.</h1>
                </div>
                </div>

              </div>
              <div className='w-[320px] h-full bg-[#262626] rounded-xl '>
                <div className='w-[320px] h-full flex justify-center items-center'>
                <div>
                <div className='flex justify-between items-center'>
                  <h1 className='text-xl'>Resource Access</h1>
                  <span className="text-yellow-300 text-xl">
                        <BsArrowUpRightCircleFill />
                  </span>
                </div>
                <h1 className='text-xs '>Visitors can access a wide range of resources, <br /> including ebooks, whitepapers, reports.</h1>
                </div>
                </div>

              </div>
            </div>
            </div>

          </div>
          </div>
        </div>


        <div className='w-full h-auto  sm:hidden'>
          <div className='w-full h-auto  p-10 '>
            <div className='grid grid-cols-2 gap-10 items-center text-sm'>
            <div className='h-auto '>
                <h1 className='font-semibold mb-5'>Home</h1>
                <h4 className='text-[#666666]'>Feature</h4>
                <h4 className='text-[#666666]'>Blogs</h4>
                <div className='flex gap-2'>
                  <h4 className='text-[#666666]'>Resources</h4>
                  <div className="p-[1px]  rounded bg-gradient-to-r from-[#262626] to-[#FFD119]">
                    <h4 className='bg-[#262626] rounded px-2'>New</h4>
                  </div>
                </div>
                <h4 className='text-[#666666]'>Testimonials</h4>
                <h4 className='text-[#666666]'>Contact Us</h4>
                <h4 className='text-[#666666]'>Newsletter</h4>
            </div>
            <div className='h-auto'>
                <h1 className='font-semibold mb-5'>News</h1>
                <h4 className='text-[#666666]'>Trending Stories</h4>
                <h4 className='text-[#666666]'>Featured Videos</h4>
                <h4 className='text-[#666666]'>Technology</h4>
                <h4 className='text-[#666666]'>Health</h4>
                <h4 className='text-[#666666]'>Politics</h4>
                <h4 className='text-[#666666]'>Environment</h4>
            </div>
            <div className='h-auto'>
                <h1 className='font-semibold mb-5'>Blogs</h1>
                <h4 className='text-[#666666]'>Quantum Computing</h4>
                <h4 className='text-[#666666]'>AI Ethics</h4>
                <h4 className='text-[#666666]'>Space Exploration</h4>
                <div className='flex gap-2'>
                  <h4 className='text-[#666666]'>Biotechnology</h4>
                  <div className="p-[1px]  rounded bg-gradient-to-r from-[#262626] to-[#FFD119]">
                    <h4 className='bg-[#262626] rounded px-2'>New</h4>
                  </div>
                </div>
                <h4 className='text-[#666666]'>Renewable Energy</h4>
                <h4 className='text-[#666666]'>Biohacking</h4>
            </div>
            <div className='h-auto'>
                <h1 className='font-semibold mb-5'>Podcasts</h1>
                <h4 className='text-[#666666]'>AI Revolution</h4>
                <div className='flex gap-2'>
                  <h4 className='text-[#666666]'>AI Revolution</h4>
                  <div className="p-[1px]  rounded bg-gradient-to-r from-[#262626] to-[#FFD119]">
                    <h4 className='bg-[#262626] rounded'>New</h4>
                  </div>
                </div>
                <h4 className='text-[#666666]'>TechTalk AI</h4>
                <h4 className='text-[#666666] pb-11'>AI Conversations</h4>
            </div>

            <div className='w-[320px] h-auto mt-10'>
                <h1 className='font-semibold mb-5'>Resources</h1>
                <div className='w-auto gap-2 grid grid-cols-3'>
                <div className='border p-1 rounded flex justify-between items-center space-x-4'>
                  <h4 className='text-[#666666] text-xs'>Whitepapers</h4>
                  <MdArrowOutward className='text-yellow-400' />
                </div>
                <div className='border p-1 rounded flex justify-between items-center '>
                  <h4 className='text-[#666666] text-xs'>Ebooks</h4>
                  <MdArrowOutward className='text-yellow-400' />
                </div>
                <div className='border p-1 rounded flex justify-between items-center space-x-4'>
                  <h4 className='text-[#666666] text-xs'>Reports</h4>
                  <MdArrowOutward className='text-yellow-400' />
                </div>
                <div className='w-[120px] border p-1 rounded flex justify-between items-center space-x-4'>
                  <h4 className='text-[#666666] text-[10px]'>Research Papers</h4>
                  <MdArrowOutward className='text-yellow-400' />
                </div>
                </div>
            </div>
            </div>
          <div className='w-full h-[1px] bg-[#262626] mt-10'></div>
          </div>
            
          <div className='px-10 pb-10 flex justify-center ' >
            <div className=''>
            <div className='flex space-x-2 pb-3'>
            <FaTwitter />
            <PiMediumLogoFill />
            <FaLinkedin />
            </div>
            <div className='space-x-4 flex pb-3 text-[#666666]'>
              <h1>Terms & Conditions</h1>
              <h1>Privacy Policy</h1>
            </div>
            <div className='text-[#666666] pb-3'> 
              <h1>© 2024 FutureTech. All rights reserved.</h1>
            </div>
            </div>

          </div>
          

        </div>




      </div>












      {/* Desktop */}
      <div className=" justify-center items-center mt-10 sm:flex hidden mb-10">
        <div>
          <h1 className="text-4xl font-semibold">Today's Headlines: Stay</h1>
          <div className="flex space-x-5 pt-5">
            <h1 className="text-4xl font-semibold">Informed</h1>
            <p className="text-xs pt-2 text-[#98989A]">
              Explore the latest news from around the world. We bring you
              up-to-the-minute updates on the most significant events, trends,
              and stories. Discover <br />
              the world through our news coverage.
            </p>
          </div>
        </div>
      </div>

      <div className="w-full h-auto sm:flex hidden justify-around border border-[#262626]">
        <div className="w-full m-10 flex justify-between ">
          <div className="w-[500px] h-full flex justify-center items-center">
            <Image className="w-[300px] h-[300px]" src={`http://localhost:3005/images/images-${image}`} width={500}  height={300} alt="image_1" />
          </div>
          <div className="w-full h-[400px] flex justify-center items-center">
            <div>
              <div className="">
                <h1>{blog[0]?.blog_title}</h1>
                <p className="text-[#98989A] mt-4">
                  {blog[0]?.description}
                </p>
                <div className="flex space-x-10 mt-4">
                  <div>
                    <h1 className="text-[#98989A]">Category</h1>
                    <h1>{blog[0]?.category}</h1>
                  </div>
                  <div>
                    <h1 className="text-[#98989A]">Publication Date</h1>
                    <h1>{blog[0]?.publishing_date}</h1>
                  </div>
                  <div>
                    <h1 className="text-[#98989A]">Author</h1>
                    <h1>{blog[0]?.author}</h1>
                  </div>
                </div>
              </div>
              <div className="flex justify-between mt-4">
                <div className="flex justify-center items-center gap-2">
                  <div className="w-14 h-5 bg-[#262626] rounded-2xl flex justify-around items-center p-2">
                    <span className="text-xs text-[#98989A]">
                      <CiHeart />
                    </span>
                    <h1 className="text-[#98989A] text-xs">14k</h1>
                  </div>
                  <div className="w-14 h-5 bg-[#262626] rounded-2xl flex justify-around items-center p-2">
                    <span className="text-xs text-[#98989A]">
                      <FaLocationArrow />
                    </span>
                    <h1 className="text-[#98989A] text-xs">200</h1>
                  </div>
                </div>
                <Button  className="border rounded-xl border-[#262626] text-[#98989A]">
                  <a href="/blog-open">Read More</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>



      <div className='hidden sm:block'>
      <div className='w-full container mx-auto py-10 '>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-x-10 '>
          {blog.map((data, index)=>(
              <div className='space-y-3'>
              <Image className='w-full ' src={`http://localhost:3005/images/images-${data.image[0]}`} alt="image_2" width={500}  height={300} />
              <h1>{data.blog_title}</h1>
              <h2>{data.category}</h2>
              <div className="flex justify-between items-center">
                  <div className='flex gap-2'>
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
          ))}
            
            
        </div>
      </div>
      
      </div>

      <div className='w-full h-auto bg-[#1A1A1A] py-[80px] hidden sm:block'>
        <div className='w-full flex justify-around items-center'>
          <div>
              <div className='flex text-center '>
              <h1 className='w-32 rounded-sm py-1 bg-[#333333]'>Featured Blog</h1>
              </div>
              <h1 className='text-lg font-semibold'>Visual Insights for the Modern Viewer</h1>
          </div>
          <Button className="border bg-[#141414] border-[#262626] text-[#98989A] gap-1">
            Read More 
            <span className="text-yellow-300">
                <MdArrowOutward />
            </span>
          </Button>
        </div>
      </div>

      <div className='w-full h-auto  border border-[#262626] py-[80px] hidden sm:block'>
        <div className=' border-t-0 pb-10'>
          <div className='flex justify-around items-center'>
            <div className=''>
                <Image src={image_5} alt="image_5" />
                  <h1 className='text-xs font-semibold py-2'>Mars Exploration: Unveiling Alien Landscapes</h1>
                  <p className='text-[8px]'>Embark on a journey through the Red Planet's breathtaking landscapes and uncover the <br /> mysteries of Mars.</p>
            </div>
            <div className=''>
                <Image src={image_6} alt="image_5" />
                  <h1 className='text-xs font-semibold py-2'>Mars Exploration: Unveiling Alien Landscapes</h1>
                  <p className='text-[8px]'>Embark on a journey through the Red Planet's breathtaking landscapes and uncover the <br /> mysteries of Mars.</p>
            </div>
          </div>
          <div className='mt-4'>
          <div className='flex justify-around items-center'>
            <div className=''>
                <Image src={image_7} alt="image_5" />
                  <h1 className='text-xs font-semibold py-2'>Mars Exploration: Unveiling Alien Landscapes</h1>
                  <p className='text-[8px]'>Embark on a journey through the Red Planet's breathtaking landscapes and uncover the <br /> mysteries of Mars.</p>
            </div>
            <div className=''>
                <Image src={image_8} alt="image_5" />
                  <h1 className='text-xs font-semibold py-2'>Mars Exploration: Unveiling Alien Landscapes</h1>
                  <p className='text-[8px]'>Embark on a journey through the Red Planet's breathtaking landscapes and uncover the <br /> mysteries of Mars.</p>
            </div>
          </div>
          </div>
        </div>
      </div>


      <div className='w-full h-auto bg-[#1A1A1A] hidden sm:block py-10'>
          <div className='w-full flex justify-center items-center  space-x-5'>
            <Image src={logo} alt="logo" />
            <div className=' flex items-center'> 
              <div className='' >
                <div className='flex text-center rounded-sm'>
                <h1 className='w-[200px] text-sm rounded-sm py-1 bg-[#333333]'>Learn, Connect, and Innovate</h1>
                </div>
                <h1 className='text-[30px] font-semibold py-4'>Be Part of the Future Tech Revolution</h1>
                <p className='text-[12px]'>Immerse yourself in the world of future technology. Explore our comprehensive resources, connect with fellow tech enthusiasts, and drive innovation in the industry. Join a <br /> dynamic community of forward-thinkers.</p>
              </div>
          </div>
          </div>

          <div className='flex justify-center items-center my-16 mt-20'>
          <div className='w-[1000px] h-[170px] flex justify-center items-center bg-black rounded-xl'>
            <div className='w-[980px] h-[150px]  flex justify-between items-center'>
              <div className='w-[320px] h-full bg-[#262626] rounded-xl '>
                <div className='w-[320px] h-full flex justify-center items-center'>
                <div>
                <div className='flex justify-between items-center mb-5'>
                  <h1 className='text-xl'>Resource Access</h1>
                  <span className="text-yellow-300 text-xl">
                        <BsArrowUpRightCircleFill />
                  </span>
                </div>
                <h1 className='text-xs '>Visitors can access a wide range of resources, <br /> including ebooks, whitepapers, reports.</h1>
                </div>
                </div>

              </div>
              <div className='w-[320px] h-full bg-[#262626] rounded-xl '>
                <div className='w-[320px] h-full flex justify-center items-center'>
                <div>
                <div className='flex justify-between items-center mb-5'>
                  <h1 className='text-xl'>Resource Access</h1>
                  <span className="text-yellow-300 text-xl">
                        <BsArrowUpRightCircleFill />
                  </span>
                </div>
                <h1 className='text-xs '>Visitors can access a wide range of resources, <br /> including ebooks, whitepapers, reports.</h1>
                </div>
                </div>

              </div>
              <div className='w-[320px] h-full bg-[#262626] rounded-xl '>
                <div className='w-[320px] h-full flex justify-center items-center'>
                <div>
                <div className='flex justify-between items-center mb-5'>
                  <h1 className='text-xl'>Resource Access</h1>
                  <span className="text-yellow-300 text-xl">
                        <BsArrowUpRightCircleFill />
                  </span>
                </div>
                <h1 className='text-xs '>Visitors can access a wide range of resources, <br /> including ebooks, whitepapers, reports.</h1>
                </div>
                </div>

              </div>
            </div>

          </div>
          </div>
        </div>


        {/* footer */}
        <div className='w-full h-auto  hidden sm:block'>
          <div className='w-full h-auto   p-10'>
            <div className='flex justify-between items-center'>
            <div className='h-auto'>
                <h1 className='font-semibold mb-5'>Home</h1>
                <h4 className='text-[#666666]'>Feature</h4>
                <h4 className='text-[#666666]'>Blogs</h4>
                <div className='flex gap-2'>
                  <h4 className='text-[#666666]'>Resources</h4>
                  <div className="p-[1px]  rounded bg-gradient-to-r from-[#262626] to-[#FFD119]">
                    <h4 className='bg-[#262626] rounded px-2'>New</h4>
                  </div>
                </div>
                <h4 className='text-[#666666]'>Testimonials</h4>
                <h4 className='text-[#666666]'>Contact Us</h4>
                <h4 className='text-[#666666]'>Newsletter</h4>
            </div>
            <div className='h-auto'>
                <h1 className='font-semibold mb-5'>News</h1>
                <h4 className='text-[#666666]'>Trending Stories</h4>
                <h4 className='text-[#666666]'>Featured Videos</h4>
                <h4 className='text-[#666666]'>Technology</h4>
                <h4 className='text-[#666666]'>Health</h4>
                <h4 className='text-[#666666]'>Politics</h4>
                <h4 className='text-[#666666]'>Environment</h4>
            </div>
            <div className='h-auto'>
                <h1 className='font-semibold mb-5'>Blogs</h1>
                <h4 className='text-[#666666]'>Quantum Computing</h4>
                <h4 className='text-[#666666]'>AI Ethics</h4>
                <h4 className='text-[#666666]'>Space Exploration</h4>
                <div className='flex gap-2'>
                  <h4 className='text-[#666666]'>Biotechnology</h4>
                  <div className="p-[1px]  rounded bg-gradient-to-r from-[#262626] to-[#FFD119]">
                    <h4 className='bg-[#262626] rounded px-2'>New</h4>
                  </div>
                </div>
                <h4 className='text-[#666666]'>Renewable Energy</h4>
                <h4 className='text-[#666666]'>Biohacking</h4>
            </div>
            <div className='h-auto'>
                <h1 className='font-semibold mb-5'>Podcasts</h1>
                <h4 className='text-[#666666]'>AI Revolution</h4>
                <div className='flex gap-2'>
                  <h4 className='text-[#666666]'>AI Revolution</h4>
                  <div className="p-[1px]  rounded bg-gradient-to-r from-[#262626] to-[#FFD119]">
                    <h4 className='bg-[#262626] rounded px-2'>New</h4>
                  </div>
                </div>
                <h4 className='text-[#666666]'>TechTalk AI</h4>
                <h4 className='text-[#666666] pb-11'>AI Conversations</h4>
            </div>

            <div className='h-auto mt-10'>
                <h1 className='font-semibold mb-5'>Resources</h1>
                <div className='w-auto space-y-4 '>
                <div className='border p-1 rounded flex justify-between items-center space-x-4'>
                  <h4 className='text-[#666666] '>Whitepapers</h4>
                  <MdArrowOutward className='text-yellow-400' />
                </div>
                <div className='border p-1 rounded flex justify-between items-center '>
                  <h4 className='text-[#666666] '>Ebooks</h4>
                  <MdArrowOutward className='text-yellow-400' />
                </div>
                <div className='border p-1 rounded flex justify-between items-center space-x-4'>
                  <h4 className='text-[#666666] '>Reports</h4>
                  <MdArrowOutward className='text-yellow-400' />
                </div>
                <div className='border p-1 rounded flex justify-between items-center space-x-4'>
                  <h4 className='text-[#666666] '>Research Papers</h4>
                  <MdArrowOutward className='text-yellow-400' />
                </div>
                </div>
            </div>
            </div>
          <div className='w-full h-[1px] bg-[#262626] mt-10'></div>
          </div>
            
          <div className='px-10 flex justify-between items-center  pb-10' >
            <div className='space-x-4 flex text-[#666666]'>
              <h1>Terms & Conditions</h1>
              <h1>Privacy Policy</h1>
            </div>
            <div className='flex space-x-2'>
            <FaTwitter />
            <PiMediumLogoFill />
            <FaLinkedin />
            </div>
            <div className='text-[#666666]'> 
              <h1>© 2024 FutureTech. All rights reserved.</h1>
            </div>

          </div>
          

        </div>



    </div>
  );
}
