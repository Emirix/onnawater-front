import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios';
import { Riple } from 'react-loading-indicators';
import { imgUrl } from "../data"

function DeviceList() {


    const [devices, setDevices] = useState(null);

    useEffect(() => {
        axios.get(`api.php?action=devices`).then((res) => {
            setDevices(res.data)
        })
    }, [])

    return (
        <div>
            <Header />


            <div className="container mt-5">
                <div className="row g-3">

                    {devices && devices.map((val, i) => {
                        return (
                            <div className="col-4">
                                <Link key={i} to={`/device/${val.device_id}`} className='shadow-lg group'>
                                    <div className=''>
                                        <div className='relative h-[180px] rounded-t-lg border-4 border-gri w-full block'>
                                            <div className="absolute  opacity-0 transition group-hover:opacity-100 w-full h-full bg-zinc-950/60 z-[1] transition  flex items-center justify-center flex-col">

                                                <i className='fa-solid fa-magnifying-glass text-4xl text-white'></i>
                                                <div className='font-medium text-white/80 text-lg mt-2'>İncele</div>
                                            </div>
                                            <img className=' w-full block h-full object-cover' src={val.timestamp ? imgUrl + val.device_id + "/" + val.timestamp + ".jpg" : ""} alt="" />

                                        </div>
                                        <div className='border-b-4 border-x-4 rounded-b-lg bg-white border-gri p-2'>

                                            <div className="flex items-center justify-between">
                                                <div className='font-bold text-blue-800'>{val.name}</div>

                                                {
                                                    val.active == 1 ? <div className='text-sm font-medium text-green-600'><i className="text-xs fa-solid fa-toggle-on"></i> Aktif</div>
                                                        : <div className='text-sm font-medium text-red-600'><i className="text-xs fa-solid fa-toggle-off"></i> Pasif</div>
                                                }

                                            </div>

                                            <div className='text-slate-600 font-medium text-sm'>{val.description}</div>

                                            <div className='h-[2px] mt-3 rounded-full bg-slate-300 w-[70%] mx-auto'></div>
                                            <div className="flex mt-3">

                                                <div className='text-green-700 flex-fill flex gap-2 items-center justify-center'>
                                                    <div color=''>
                                                        <i className="fa-regular text-sxl fa-compass"></i>
                                                    </div>
                                                    <div className='text-xl font-medium'>{val.fdirection}</div>
                                                </div>

                                                <div className='border-x-2 border-slate-300 text-red-700 flex-fill flex gap-2 items-center justify-center'>
                                                    <div color=''>
                                                        <i className="fa-solid text-sxl  fa-temperature-empty"></i>
                                                    </div>
                                                    <div className='text-xl font-medium'>{val.temp}</div>
                                                </div>
                                                <div className='border-r-2 border-slate-300 text-orange-700 flex-fill flex gap-2 items-center justify-center'>
                                                    <div color=''>
                                                        <i className="fa-solid text-sxl  fa-gauge-high"></i>
                                                    </div>
                                                    <div className='text-xl font-medium'>{val.fspeed}</div>
                                                </div>

                                                <div className='text-blue-700 flex-fill flex gap-2 items-center justify-center'>
                                                    <div color=''>
                                                        <i className="fa-solid text-sxl fa-arrow-down"></i>
                                                    </div>
                                                    <div className='text-xl font-medium'>{val.depth}</div>
                                                </div>



                                            </div>


                                        </div>
                                    </div>
                                </Link>
                            </div>
                        )
                    })}




                    {devices == null ? <div className='flex justify-center'><Riple color="white" size="medium" text="" textColor="" /></div> : <></>}



                </div>
            </div>

        </div>
    )
}

export default DeviceList