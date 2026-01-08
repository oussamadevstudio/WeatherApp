import { useState } from 'react'
import axios from 'axios';
import './App.css'
import Dashboard from './components/layouts/Dashboard'
import { MdOutlineArrowForwardIos } from "react-icons/md";


function App() {


  const [data, setData] = useState({})
  const [location, setLocation] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  const API_KEY = "ee2ad02bffac678c70ce9d81553797ae"
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${API_KEY}`

  const searchLocation = (event) => {
    if(event.type === 'click' || event.key === "Enter"){
      
      setLoading(true)
      setError("")

      axios.get(url).then(
        (response) => {
          setData(response.data)
          console.log(response.data)
          setLocation("")
          setLoading(false)
          
        }
      ).catch((err) => {
        if(err.response && err.response.status === 404){
          setLoading(false)
          setError("City not found. Please try again.");
        } else {
          setError("Something went wrong.");
        }
        setData({})
        setLocation("")
        
      })
    }
  }



  return(
    <>
    <div className="w-full h-screen flex justify-center items-center bg-linear-to-bl from-[#9fbcf2] via-[#90e7ca] to-[#7aeefd] ">
      
      <div className="w-[50vw] min-h-25 flex justify-around items-center gap-y-10 flex-col bg-white/30 backdrop-blur-md border border-white/20 shadow-xl rounded-2xl p-10">
        
        <h1 className="text-4xl font-bold text-black/80">
          <span className="bg-clip-text text-transparent bg-linear-to-r from-amber-400 via-red-400 to-pink-400">Way</span>ther</h1>
        
        <div className="relative w-[70%] flex ">
          <input type="text" className="w-full h-13 bg-white rounded-full focus:outline-none px-5 shadow-md" 
                 placeholder="type a city(Jeddah, Riyadh,..)"
                 value={location}
                 onChange = {(event) => setLocation(event.target.value)}
                 onKeyDown = {searchLocation}
            />
          <button className="absolute right-2 top-1.5 flex justify-center items-center rounded-full w-10 h-10 bg-[#0ea5e9]/60" 
                  onClick = {searchLocation}><MdOutlineArrowForwardIos color="white"/></button>
        </div>

        {loading && (
                      <div className="flex gap-x-2 items-center">
                        <div className="flex justify-center items-center py-10">
                          <div className="relative w-8 h-8">
                                      {[...Array(12)].map((_, i) => (
                            <div key={i} className="spinner-blade"></div>
                                    ))}
                          </div>
                        </div>
                       <p className="text-blue-500 animate-pulse"> loading...</p>
                      </div>
)}

        {error && <p style={{ color: 'red', fontSize: '14px' }}>{error}</p>}

        {data.weather && (<Dashboard data={data}/>)}
      </div>
    </div>
    
    </>
  )
}

export default App
