'use client';

// next image
import Image from "next/image";

// icons
import { FaPhone, FaEnvelope } from 'react-icons/fa6'

// components
import Copyright from './Copyright'

import { Link } from 'react-scroll';

export default function Footer() {
  return (
    <footer className="pt-20 bg-white z-20">
      <div className="container mx-auto mb-24">
        {/* grid */}
        <div className="flex flex-col lg:flex-row lg:justify-between gap-x-5
        gap-y-14">
          <div className="flex flex-col flex-1 gap-y-8 xl:items-center">
            {/* Logo */}
            <Link to="home" smooth={true} spy={true} className='cursor-pointer'>
              <Image src={'/icons/logo.svg'} width={200} height={200} alt="" />
            </Link>
            {/* text */}
            <div className="text-secundary">
              Lorem Ipsum is simply dummy text of the printing
            </div>
            {/* phone & email */}
            <div className=" flex flex-col gap-y-4 font-semibold">
              {/* phone */}
              <div className="flex items-center gap-x-[10px]">
                <FaPhone />
                <div className="font-medium">(123)456-7890</div>
              </div>
              {/* email */}
              <div className="flex items-center gap-x-[10px]">
                <FaEnvelope />
                <div className="font-medium">office@carland.com</div>
              </div>
            </div>
          </div>

          {/* links */}
          <div className="flex-1 flex flex-col">
            <div>
              <h3 className="h3 font-bold mb-8">Company</h3>
              <ul className="flex flex-col gap-y-4 font-semibold">
                <li>
                  <a href="">New York</a>
                </li>
                <li>
                  <a href="">Careers</a>
                </li>
                <li>
                  <a href="">Mobile</a>
                </li>
                <li>
                  <a href="">Blog</a>
                </li>
                <li>
                  <a href="">How we work</a>
                </li>
              </ul>
            </div>
          </div>

          {/* programs */}
          <div className="flex-1">
            <h3 className="h3 font-bold mb-8">Working Hours</h3>
            <div className="flex flex-col gap-y-4">
              <div className="flex gap-x-2">
                <div className="text-secundary">Mon-Fri</div>
                <div className="font-semibold">09:00AM - 09:00PM</div>
              </div>
              <div className="flex gap-x-2">
                <div className="text-secundary">Sat:</div>
                <div className="font-semibold">09:00AM - 07:00PM</div>
              </div>
              <div className="flex gap-x-2">
                <div className="text-secundary">Sun:</div>
                <div className="font-semibold">Closed</div>
              </div>
            </div>
          </div>
          
          {/* newsletter */}
          <div className="flex-1">
            <h3 className="h3 font-bold mb-8">Newsletter</h3>
            <div className="mb-9 text-secundary">Lorem Ipsum dolor sit amet consectetur adispinit elit.</div>
            {/*form*/}
            <form className="flex gap-x-2 h-14">
              <input 
              type="text"
              placeholder="Your Email" 
              className="outline-none bg-white h-full border rounded-lg pl-4
              focus:border-accent" />
            <button type="submit" className="btn btn-sm btn-accent w-24">
              Submit
            </button>
            </form>
            
          </div>
        </div>
      </div>
    </footer>
  )
}
