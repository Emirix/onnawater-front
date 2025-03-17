import React from 'react'

function OldDataBox({ image, direction, tarih, dates, speed, degree, depth }) {

    const year = tarih.substring(0, 4);
    const month = tarih.substring(4, 6);
    const day = tarih.substring(6, 8);
    const hour = tarih.substring(9, 11);
    const minute = tarih.substring(11, 13);

    return (
        <div className="bg-white mb-4 border-4  border-gri in">

            <img className="w-full object-cover h-[150px]" src={image} alt="" />
            <div className=' border-gri border-t-4'>
                <div className='text-xs pt-2 text-center py-0.5  px-1 font-medium '>{`${day} ${(dates[parseInt(month) - 1])} ${year} ${hour}:${minute}`}</div>
            </div>

            <div className="flex text-xs mt-1 pb-1">

                <div className='text-green-700 flex-fill flex gap-2 items-center justify-center'>
                    <div color=''>
                        <i className="fa-regular fa-compass"></i>
                    </div>
                    <div className=' font-medium'>{direction}</div>
                </div>

                <div className='border-x-2 border-slate-300 text-red-700 flex-fill flex gap-2 items-center justify-center'>
                    <div color=''>
                        <i className="fa-solid   fa-temperature-empty"></i>
                    </div>
                    <div className=' font-medium'>{degree}</div>
                </div>
                <div className='border-r-2 border-slate-300 text-orange-700 flex-fill flex gap-2 items-center justify-center'>
                    <div color=''>
                        <i className="fa-solid   fa-gauge-high"></i>
                    </div>
                    <div className=' font-medium'>{speed}</div>
                </div>

                <div className='text-blue-700 flex-fill flex gap-2 items-center justify-center'>
                    <div color=''>
                        <i className="fa-solid  fa-arrow-down"></i>
                    </div>
                    <div className=' font-medium'>{depth}</div>
                </div>



            </div>

        </div>
    )
}

export default OldDataBox