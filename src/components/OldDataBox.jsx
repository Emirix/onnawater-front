import React from 'react'

function OldDataBox({image,tarih}) {
    return (
        <div className="relative mb-2 h-[150px]">
            <div className="bg-black/20 absolute bottom-0 py-2 font-medium text-white p-2 w-full left-0 gdark">{tarih}</div>
            <img className="h-full w-full object-cover" src={image} alt="" />
        </div>
    )
}

export default OldDataBox