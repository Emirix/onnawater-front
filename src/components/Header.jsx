import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <header>
            <div  className='cursor-pointer'>
                <div className="flex gap-2 mt-3 justify-center">
                    <img src='images/logo/fav.svg' className="w-[60px]" alt="" />
                    <div className="text-white font-bold text-5xl">ONNA ROBOTICSs</div>
                </div>
                <div className="ps-[32px] text-center  text-white/70 font-bold text-1xl tracking-[9px] 	ms-5">UNDERWATER TECHNOLOGY</div>
            </div>
        </header>
    )
}
