import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Pusula from '../components/Pusula'
import InfoBox from '../components/InfoBox'
import LoadingBar from '../components/LoadingBar'
import OldDataBox from '../components/OldDataBox'
import MainImg from '../components/MainImg'
import axios from 'axios'

const oldData = [
    {
        image: "https://www.vacationstravel.com/wp-content/uploads/2019/04/deepdiscoveriesfeature.jpg",
        tarih: "13 Ağustos 2024 20:59"
    },
    {
        image: "https://t3.ftcdn.net/jpg/05/71/26/62/360_F_571266253_7HuXAuQKNPOEaFt44faa37kLl8rccQq7.jpg",
        tarih: "13 Ağustos 2024 20:59"
    },
    {
        image: "https://images.photowall.com/products/56871/underwater-scene.jpg?h=699&q=85",
        tarih: "13 Ağustos 2024 20:59"
    },
];


String.prototype.toHHMMSS = function () {
    var sec_num = parseInt(this, 10); // don't forget the second param
    var hours = Math.floor(sec_num / 3600);
    var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
    var seconds = sec_num - (hours * 3600) - (minutes * 60);

    if (hours < 10) { hours = "0" + hours; }
    if (minutes < 10) { minutes = "0" + minutes; }
    if (seconds < 10) { seconds = "0" + seconds; }
    return minutes + ':' + seconds;
}

export default function Index() {
    const [data, setData] = useState(null);

    const [seconds, setSeconds] = useState(0);




    useEffect(() => {
   

        const intervalId = setInterval(() => {
            setSeconds(prev => prev + 1);
            console.log(1)
        }, 1000)


        return () => {
            // Clear interval using intervalId
            // This function run when component unmount
            clearInterval(intervalId)
        }
    }, [])

    useEffect(()=>{
        if(seconds == 5){
            setSeconds(0)
        }

        if(seconds == 0){
            setData(null)
            axios.post(`http://localhost/onnawater/api.php?action=l`).then(res => {
                console.log(res)
                setData(res.data)
            })
        }
    },[seconds])




    return (
        <>

            <Header />

            <div className="main-grid mt-5">
                <div className="sol px-3">
                    <div className="text-white/60 font-bold mb-2 text-lg">VERİLER</div>


                    <div className="hidden gap-2 text-green-500 items-center">
                        <i className="fa-solid text-xl fa-power-off"></i>
                        <div className="text-xl font-medium">Sistem Etkin</div>
                    </div>
                    <div className="mt-2 border-4 p-2 border-gri">

                        <div className="flex items-start justify-between pr-2 pt-2">
                            <div>
                                <div className='space-y-3.5'>
                                    <InfoBox
                                        title={"Akıntı"}
                                        value={data ? data.fspeed : ''}
                                        unit={"knot"}
                                    />

                                    <InfoBox
                                        title={"SICAKLIK"}
                                        value={data ? data.temp : ''}
                                        unit={"°"}
                                    />

                                    <InfoBox
                                        title={"DERİNLİK"}
                                        value={20}
                                        unit={"M"}
                                    />
                                </div>
                            </div>

                            <div>

                                <Pusula derece={data ? data.fdirection : 0} />
                                <InfoBox
                                    className={"mt-[49px]"}
                                    title={"VOLTAJ"}
                                    value={12.2}
                                    unit={"V"}
                                >
                                </InfoBox>
                            </div>


                        </div>


                        <div className="mt-3">
                            <InfoBox
                                className={"SONRAKİ VERİ"}
                                title={"SONRAKİ VERİ"}
                                value= {seconds.toString().toHHMMSS()}
                                unit={""}
                            >
                                <LoadingBar level={ (seconds / 5) * 100 } />
                            </InfoBox>
                        </div>

                    </div>
                   
                    <iframe src="https://api.wo-cloud.com/content/widget/?geoObjectKey=13097769&language=tr&region=TR&timeFormat=HH:mm&windUnit=kmh&systemOfMeasurement=metric&temperatureUnit=celsius" name="CW2" scrolling="no" height="192" frameborder="0" className='border-4 mt-2 border-gri w-full'></iframe>
                </div>
                <div className="orta">
                    <MainImg image={data != null ? `https://onnarobotics.com/Onna360/assets/underwater/${data.timestamp}.jpg` : ''} />
                </div>
                <div className="sag px-3">
                    <div className="text-white/60 font-bold mb-2 text-lg">ESKİ VERİLER</div>
                    {oldData.map((val, key) => {
                        return (
                            <OldDataBox
                                image={val.image}
                                tarih={val.tarih}
                            />)
                    })}

                </div>
            </div>
        </>
    )
}
