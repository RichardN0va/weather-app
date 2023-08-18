import React, { useState, useEffect } from "react";
import { WeatherData } from "./type_interface"
import { Cardinal_direction } from "./cardinal_Directions";
import { Icon } from "./icon";
import { NavBar } from "./NavBar";
import { MainInfo, InfoProps } from "./mainInfo";
import { getWeather } from "./getWeather";
import { WeatherDetails, detailsProps } from "./weatherDetails";
import { Unix, TimeConverter, DayConverter } from "./unix";
import { DailyForecast } from "./dailyForecast";
import { HourlyForecast } from "./hourlyForecast";

interface HourlyForecastData {
    dt: number | string;
    temp: number;
    description: string;
}

interface DailyForecastData {
    dt: number | string;
    dt_txt: string;
    temp: number;
    description: string;
}
const FetchData: React.FC = () => {
    const [query, setQuery] = useState({ q: "London" });
    const [system, setSystem] = useState("metric");
    const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
    const [hourlyforecastData, setHourlyForecastData] = useState<HourlyForecastData[]>([]);
    const [dailyForcastData, setDailyForecastData] = useState<DailyForecastData[]>([]);
    useEffect(() => {
        const fetchWeatherData = async () => {
            const data = await getWeather("weather", query, system)
            setWeatherData(data);
        };
        fetchWeatherData();
    }, [query, system])
    
    useEffect(() => {
        const fetchForecastData = async () => {
            const data = await getWeather("forecast", query, system);
            const hourlyData = data.list.slice(0, 8);
            const dailyData = data.list.filter((reading: any) => {
                return reading.dt_txt.includes("18:00:00")
            })
            setDailyForecastData(dailyData.map((item:any)=>({
                dt: item.dt,
                temp: item.main.temp,
                description: item.weather[0].main
            })))
            setHourlyForecastData(hourlyData.map((item: any) => ({
                dt: item.dt,
                temp: item.main.temp,
                description: item.weather[0].main
            })))
        }
        fetchForecastData();
    }, [query,system])
    let weather_icon = Icon(weatherData?.weather[0].main!, weatherData?.sys.sunset!);
    const props: InfoProps = {
        name: weatherData?.name,
        country: weatherData?.sys.country,
        icon: weather_icon,
        description: weatherData?.weather[0].description,
        temp: weatherData?.main.temp!,
        temp_max: weatherData?.main.temp_max!,
        temp_min: weatherData?.main.temp_min!,
        system: system
    }
    let rise = Unix(weatherData?.sys.sunrise);
    let set = Unix(weatherData?.sys.sunset);
    let vision = (weatherData?.visibility) ? (weatherData?.visibility / 1000) : weatherData?.visibility;
    let wind_direction = Cardinal_direction(weatherData?.wind.deg);
    
    const details: detailsProps = {
        pressure: weatherData?.main.pressure + "hPa",
        humidity: weatherData?.main.humidity + "%",
        visibility: vision + "mi",
        wind: weatherData?.wind.speed + `mi/s ${wind_direction}`,
        feels_like: weatherData?.main.feels_like,
        uv_index: Math.round(1),
        sunrise: rise,
        sunset: set,
    }
    
    return <div className="weather">
        <div className="right_side">
            <MainInfo {...props} />
            <div className="dailyReport">
                {dailyForcastData.map((item: any, index: any) =>
                    <DailyForecast date={DayConverter(item.dt)} temp={Math.round(item.temp)} icon={Icon(item.description, weatherData?.sys.sunset!)} key={index} />
                )}
            </div>    
        I</div>
        <div className="left_side">
            <NavBar setQuery={setQuery} setSystem={setSystem} />
            <WeatherDetails {...details} />
            <div className="hourlyReport">
                {hourlyforecastData.map((item: any, index: any) =>
                    <HourlyForecast time={TimeConverter(item.dt)} temp={Math.round(item.temp)} icon={Icon(item.description, weatherData?.sys.sunset!)} key={index} />
                )}
            </div>
            
        </div>
  
    </div>
}


export default FetchData;