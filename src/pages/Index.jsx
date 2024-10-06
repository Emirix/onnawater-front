import React, { useEffect } from 'react'
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

const oldData = [
    
];


export default function Index() {

    useEffect(() => {
        axios.post(`http://localhost/onnawater/api.php?action=l`).then(res => {
            console.log(res)
        })  
    }, [])


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
                                        value={20}
                                        unit={"knot"}
                                    />

                                    <InfoBox
                                        title={"SICAKLIK"}
                                        value={20}
                                        unit={"°"}
                                    />

                                    <InfoBox
                                        title={"DERİNLİK"}
                                        value={-20}
                                        unit={"M"}
                                    />
                                </div>
                            </div>

                            <div>

                                <Pusula derece={110} />
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
                                value={"16:49"}
                                unit={""}
                            >
                                <LoadingBar level={23} />
                            </InfoBox>
                        </div>

                    </div>
                    <iframe src="https://api.wo-cloud.com/content/widget/?geoObjectKey=13097769&language=tr&region=TR&timeFormat=HH:mm&windUnit=kmh&systemOfMeasurement=metric&temperatureUnit=celsius" name="CW2" scrolling="no" height="192" frameborder="0" className='border-4 mt-2 border-gri w-full'></iframe>
                </div>
                <div className="orta">
                    <MainImg image={"https://i.natgeofe.com/n/dde3c72a-7612-451e-9796-5498d6386a04/yourshot-underwater-1869254_16x9.jpg"} />
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
