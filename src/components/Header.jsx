import React from 'react'

export default function Header() {
    return (
        <header>
            <div>
                <div className="flex gap-2 mt-3 justify-center">
                    <img src='/images/logo/fav.svg' className="w-[60px]" alt="" />
                    <div className="text-white font-bold text-5xl">ONNA ROBOTICS</div>
                </div>
                <div className="text-center text-white/70 font-bold text-1xl tracking-[20px]	ms-5">UNDERWATER</div>
            </div>
        </header>
    )
}
