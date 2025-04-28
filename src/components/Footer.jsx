import React from 'react'
import { assets } from '../assets/assets'
import { Link, NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-14 my-10 mt-40 text-sm border-t-2 pt-10 px-10 ">
      <div>
        <img src={assets.logo} className="mb-5 w-32" alt="" />
        <p className="w-full md:w-4/5 text-gray-600">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis
          repellendus cumque ratione eum. Beatae dignissimos qui pariatur
          architecto, iure, at placeat omnis dolorem recusandae culpa voluptas!
          Commodi, vero! Porro, quos?
        </p>
      </div>

      <div>
        <p className="text-xl font-medium mb-5">COMPANY</p>
        <ul className="flex flex-col gap-1 text-gray-600">
          <NavLink to={'/'}>Home</NavLink>
          <NavLink to={'/about'}>About</NavLink>
          <NavLink to={'/collection'}>Products</NavLink>
        </ul>
      </div>

      <div>
        <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
        <ul className="flex flex-col gap-1 text-gray-600">
          <li>+1-123-4123-3123</li>
          <li>info@test.com</li>
        </ul>
      </div>

      <div className="md:col-span-3">
        <p className="py-5 text-sm text-center">CopyRight 2025@ forever.com</p>
      </div>
    </div>
  )
}

export default Footer
