import { PiWindLight } from "react-icons/pi";
import { IoWaterOutline, IoSpeedometerOutline } from "react-icons/io5";





function Dashboard({data}) {



  return(
    <>
    <div className="w-full flex flex-col gap-y-3">
        <div className="w-full h-50 flex justify-evenly ">
            <div className="w-[50%] h-full flex justify-center items-start gap-y-2 px-10 flex-col shadow-md bg-white/70 rounded-3xl">
                <p className="text-xl font-medium">{data.name}, {data.sys.country}</p>
                <p className="text-7xl font-bold">{data.main.temp.toFixed()}°C</p>
                <p><span className="text-gray-500 font-medium tracking-tight">Real Feel</span> {data.main.feels_like.toFixed(0)}°C</p>
            </div>
            <div className="w-[30%] h-full flex justify-center items-center flex-col shadow-md bg-white/30 rounded-3xl">
                <img src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt=""/>
                <p className="text-gray-500 tracking-tight">{data.weather[0].description}</p>
            </div>
        </div>

        <div className="w-full h-40 flex justify-center items-center gap-x-5">
            <div className="w-[30%] h-40 flex justify-center gap-y-2 items-start px-7 flex-col shadow-md bg-white/50 rounded-3xl">
                <PiWindLight size={30} color="gray" />      
                <p>Wind</p>
                <p className="text-gray-400 text-sm font-medium">{data.wind.speed} Km/H</p>
            </div>
            <div className="w-[30%] h-40 flex justify-center gap-y-2 items-start px-7 flex-col shadow-md bg-white/50 rounded-3xl">
                <IoSpeedometerOutline size={30} color="gray" />     
                <p>Pressure</p>
                <p className="text-gray-400 text-sm font-medium">{data.main.pressure} Pa</p>
            </div>
            <div className="w-[30%] h-40 flex justify-center gap-y-2 items-start px-7 flex-col shadow-md bg-white/50 rounded-3xl">
                <IoWaterOutline size={30} color="gray" />     
                <p>Humidity</p>
                <p className="text-gray-400 text-sm font-medium">{data.main.humidity}%</p>
            </div>
        </div>
    </div>
    
    </>
  )
}

export default Dashboard