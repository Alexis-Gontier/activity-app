"use client"

import { FaPlus } from "react-icons/fa";
import { useRouter } from "next/navigation";

export default function Nav() {

    const router = useRouter();

  return (
    <div className="absolute z-100 top-0 left-0 flex justify-between items-center w-full p-3 px-5 bg-black border-b border-b-[#ffb129]">
      <ul className="text-white hidden md:flex items-center gap-3">
        <li onClick={()=> router.push('/')} className="hover:text-[#ff6030] cursor-pointer">Home</li>
        <li className="hover:text-[#ff6030] cursor-pointer">Evenements</li>
        <li className="hover:text-[#ff6030] cursor-pointer">Agenda</li>
        <li className="hover:text-[#ff6030] cursor-pointer">Contact</li>
      </ul>

      <div onClick={()=> router.push('/Create')} className="flex itemscenter gap-3">
        <div className="text-white hover-scale-110 cursor-pointer p-2 rounded-full hover:bg-[#ff6030] transition-all">
            <FaPlus />
        </div>
      </div>
    </div>
  )
}
