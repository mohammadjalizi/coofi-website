import React from 'react'
import { ShoppingCart,User } from 'lucide-react';

const Navbar = () => {
  return (
    <div className="  mx-5 container flex     justify-between items-center  navbar    mt-1 ">
    
    <div className=" icons flex gap-4 items-center">
    
    <div>
    <ShoppingCart />
    <span className=" bg-[#55555a] text-white  size-5    absolute  text-center  rounded-3xl text-xs  top-[34px] left-[4px]   z-10 ">0 </span>
      </div>
    <div>
    <User />
    </div>
    </div>

      <div className=' flex   justify-center ' >
  <img  width={186} src="https://t4.ftcdn.net/jpg/02/41/54/71/240_F_241547135_niyWjjIEJkMFlfTeKWlDCcKqq7LuuOVY.jpg" alt="" />
      </div>
      </div>
  )
}

export default Navbar