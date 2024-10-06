import React from 'react'

function Pusula({derece}) {
    return (
        <div className="relative">
            <div className="absolute left-[50%] translate-x-[-50%] top-[-10px] text-slate-400 font-bold text-xl">N</div>
            <div className="absolute left-[50%] translate-x-[-50%] bottom-[-12px] text-slate-400 font-bold text-xl">S</div>
            <div className="absolute top-[60%] left-[-5px] translate-y-[-50%] bottom-[-12px] text-slate-400 font-bold text-xl">W</div>
            <div className="absolute top-[60%] right-[-5px] translate-y-[-50%] bottom-[-12px] text-slate-400 font-bold text-xl">E</div>
            <div className="flex items-center justify-center border-4 border-dashed border-gri w-[100px] h-[100px] rounded-full bg-slate-200/5">

                <svg width="30" className={`transition-all rotate-[${derece}deg]`} viewBox="0 0 152 141" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 141L76 0V102.93L0 141Z" fill="#0085FF" />
                    <path d="M0 141L76 0V102.93L0 141Z" fill="#0085FF" />
                    <path d="M0 141L76 0V102.93L0 141Z" fill="#0085FF" />
                    <path d="M152 141L76 0V102.93L152 141Z" fill="#0085FF" />
                    <path d="M152 141L76 0V102.93L152 141Z" fill="#0085FF" />
                    <path d="M152 141L76 0V102.93L152 141Z" fill="#0085FF" />
                </svg>


            </div>

            <div className="text-center absolute  left-[50%] mt-2 translate-x-[-50%] text-2xl font-bold text-[#0085FF]">{derece}°</div>
        </div>
    )
}

export default Pusula