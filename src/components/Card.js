// api.openweathermap.org/data/2.5/weather?q=delhi&appid=deb3afdf1d5e44474f9384d56f8b2013

import React from 'react';
import "./style.css"

const Main = ({Temp}) => {
    const {
        temp,humidity,pressure,main,name,country,speed}=Temp;
    return(
<>
            {/* temperature card */}
            <article className='widget'>
                <div className='weatherIcon'>
                    <i className={"wi wi-day-fog"}></i>

                </div>
                <div className='weatherInfo'>
                    <div className='temperature'>
                        <span>{temp}&deg;</span>

                    </div>
                    <div className='description'>
                        <div className='weatherCondition'>{main}</div>
                        <div className='place'>{name}, {country}</div>

                    </div>

                </div>
                <div className='date'>{new Date().toLocaleString()} </div>

                <div className='extra-temp'>
                    <div className='temp-info-minmax'>
                        <div className='two-sided-section'>
                            <p>
                                <i className={"wi wi-sunset"}></i>
                            </p>
                            <p className='extra-info-leftside'>
                                {speed}<br />
                                Ass
                            </p>
                        </div>

                        <div className='two-sided-section'>
                            <p>
                                <i className={"wi wi-humidity"}></i>
                            </p>
                            <p className='extra-info-leftside'>
                                {humidity} <br />
                                HUmid
                            </p>
                        </div>
                    </div>
                    <div className='weather-extra-info'>
                    <div className='two-sided-section'>
                            <p>
                                <i className={"wi wi-hail"}></i>
                            </p>
                            <p className='extra-info-leftside'>
                                {pressure} <br />
                                pressure
                            </p>
                        </div><div className='two-sided-section'>
                            <p>
                                <i className={"wi wi-day-sleet"}></i>
                            </p>
                            <p className='extra-info-leftside'>
                                {pressure} <br />
                                speed
                            </p>
                        </div>

                    </div>
                </div>
            </article>
        </>
    );
};

export default Main;
