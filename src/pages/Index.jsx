import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Pusula from '../components/Pusula'
import InfoBox from '../components/InfoBox'
import LoadingBar from '../components/LoadingBar'
import OldDataBox from '../components/OldDataBox'
import MainImg from '../components/MainImg'
import axios from 'axios';
import { imgUrl } from "../data"
import { useParams } from 'react-router-dom'

const dates = [
    "Ocak",
    "Şubat",
    "Mart",
    "Nisan",
    "Mayıs",
    "Haziran",
    "Temmuz",
    "Ağustos",
    "Eylül",
    "Ekim",
    "Kasım",
    "Aralık",
]
String.prototype.toHHMMSS = function () {
    var sec_num = parseInt(this, 10); 
    var hours = Math.floor(sec_num / 3600);
    var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
    var seconds = sec_num - (hours * 3600) - (minutes * 60)

    if (hours < 10) { hours = "0" + hours; }
    if (minutes < 10) { minutes = "0" + minutes; }
    if (seconds < 10) { seconds = "0" + seconds; }
    return minutes + ':' + seconds;
}




export default function Index() {
    const [data, setData] = useState(null);
    const [oldData, setOldData] = useState(null);
    const [dataCount, setDataCount] = useState(1);


    let { id } = useParams();
    useEffect(() => {
        console.log(id)
        axios.post(`api.php?action=l&device=${id}`).then(res => {
            console.log(res)
            setData(res.data)
        })

        const intervalId = setInterval(() => {
            axios.post(`api.php?action=l&device=${id}`).then(res => {
                console.log(res)
                setData(res.data)
            })
        }, 60000)

        axios.get(`api.php?action=old&device=${id}`).then(res => {
       
            console.log(res.data)
            setOldData(res.data)
        })


        return () => {
            // Clear interval using intervalId
            // This function run when component unmount
            clearInterval(intervalId)
        }
    }, [])


    return (
        <>

            <Header />

            <div className="main-grid mt-5 in">
                <div className="sol relative top-[-36px] px-3">
                    <div className="text-white/60 font-bold mb-2 text-lg">VERİLER</div>

                    <div className='flex animate-pulse py-3 border-b-8 bg-red-200 border gap-2 border-red-500 w-full justify-center items-center'>
                        <img src='s.svg' className='w-[40px] ' />
                        <div className='font-bold text-red-500 text-3xl'>Sinyal Yok</div>
                    </div>

                    <div className='mt-2 flex border-t-4 border-gri'>
                        <div onClick={e => {
                            setDataCount(1)
                        }} className={`${dataCount == 1 ? 'derinlik-tab-active' : ''}  font-bold  border-gri border-l-4 text-xl flex-fill py-2 px-2 derinlik-tab  text-white`}>9 <span className='text-base'>M</span></div>
                        <div onClick={e => {
                            setDataCount(2)
                        }} className={`${dataCount == 2 ? 'derinlik-tab-active' : ''} in font-bold  border-gri border-l-4 text-xl flex-fill py-2 px-2 derinlik-tab  text-white`}>11 <span className='text-base'>M</span></div>
                        <div onClick={e => {
                            setDataCount(3)
                        }} className={`${dataCount == 3 ? 'derinlik-tab-active' : ''} in font-bold  border-r-4 border-gri border-l-4 text-xl flex-fill py-2 px-2 derinlik-tab  text-white`}>13 <span className='text-base'>M</span></div>
                    </div>

                    
                    <div className="relative  border-x-4 border-b p-2 border-gri">
                        <div className="flex items-start justify-between pr-2 pt-2">
                            <div>
                                <div className='space-y-3.5'>
                                    <InfoBox
                                        title={"DERİNLİK"}
                                        value={data ? data["depth" + dataCount] : ''}
                                        unit={"M"}
                                    />


                                    <InfoBox
                                        className={"in"}
                                        title={"Akıntı"}
                                        value={'< 1.5'}
                                        unit={"knot"}
                                    />

                                    <InfoBox

                                        title={"SICAKLIK"}
                                        value={data ? parseFloat(data.temp).toFixed(2) : ''}
                                        unit={"°"}
                                    />

                                </div>
                            </div>

                            <div>

                                <Pusula derece={data ? data["fdirection" + dataCount] : 0} />

                            </div>


                        </div>


                        <div className="mt-3">
                            <InfoBox
                                className={""}
                                title={"SON VERİ"}
                                value={data ? `${data.timestamp.substring(6, 8)} ${dates[parseInt(data.timestamp.substring(4, 6)) - 1]} ${data.timestamp.substring(0, 4)} ${data.timestamp.substring(9, 11)}:${data.timestamp.substring(11, 13)}` : ""}

                            >
                            </InfoBox>
                        </div>
                    </div>
                    <iframe src="https://api.wo-cloud.com/content/widget/?geoObjectKey=13097769&language=tr&region=TR&timeFormat=HH:mm&windUnit=kmh&systemOfMeasurement=metric&temperatureUnit=celsius" name="CW2" scrolling="no" height="192" frameBorder="0" className='border-4 mt-2 border-gri w-full'></iframe>
                
                </div>
                <div className="orta">
                    <MainImg image={data != null ? imgUrl + data.device_id + "/" + data.timestamp + ".jpg" : ''} />

                    <div className='text-3xl text-center mt-2 font-semibold text-white'>Sistem şu anda bakımdadır.</div>
                </div>
                <div className="sag px-3 relative top-[-36px]">
                    <div className="text-white/60 font-bold mb-2 text-lg">ESKİ VERİLER</div>
                    {oldData && oldData.map((val, key) => {
                        return (
                            <OldDataBox
                                speed={val["fspeed" + dataCount]}
                                degree={val.temp}
                                direction={val["fdirection" + dataCount]}
                                depth={parseInt(val["depth" + dataCount])}
                                key={key}
                                dates={dates}
                                image={imgUrl + val.device_id + "/" + val.timestamp + ".jpg"}
                                tarih={val.timestamp}
                            />)
                    })}

                </div>
            </div>
        </>
    )
}
