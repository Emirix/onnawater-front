import React from 'react'

function InfoBox({ title, value, unit, className, children }) {
    return (
        <div className={className}>
            <div className="text-white/60 font-bold text-lg">{title}</div>
            <div className='flex gap-2'>
                <div className="text-white font-bold text-2xl">{value } <span className="text-base">{unit}</span></div>
                {children}
            </div>
        </div>
    )
}

export default InfoBox