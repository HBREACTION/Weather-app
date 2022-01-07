import React,{useState,useEffect} from 'react';
import Main from "./components/Card";
import "./components/style.css";

const App = () => {
    const [SearchValue, setSearchValue] = useState("delhi");
    const [Temp, setTemp] = useState({});
    const getWeatherInfo= async()=>{
        try{
            let url=`https://api.openweathermap.org/data/2.5/weather?q=${SearchValue}&units=metric&appid=c6110f64f576c1e607044c8d7ac64bef`;
            const res = await fetch(url);
            const data= await res.json();
            const {temp,humidity,pressure}= data.main;
            const {main}=data.weather[0];
            const {name}=data;
            const {speed}=data.wind;
            const{country}=data.sys;

            const myNewWeather={
                temp,humidity,pressure,main,name,country,speed
            };
            setTemp(myNewWeather);
        }catch(error){
            console.log(error);
        }

    };
    useEffect(() => {getWeatherInfo(); }
    )
    return (
        <>
            <div className='wrap'>
                <div className='search'>
                    <input type="search" placeholder='search'
                        autoFocus id="search" className='searchTerm'
                        value={SearchValue}
                        onChange={(e)=>setSearchValue(e.target.value)} />
                    <button className='searchButton' onClick={getWeatherInfo}>Search</button>
                </div>
            </div>
      <Main Temp={Temp}/>
    </>
  )
}

export default App;

