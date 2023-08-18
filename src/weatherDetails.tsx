import { DetailsCard } from "./detailsCard"
import Pressure from "./Weather_Icon/pressure.svg"
import Humidity from "./Weather_Icon/humidity.svg"
import Visibility from "./Weather_Icon/visibility-svgrepo-com.svg"
import Wind from "./Weather_Icon/wind.svg"
import Feels from "./Weather_Icon/thermometer-svgrepo-com.svg"
import UV_Index from "./Weather_Icon/uv-index.svg"
import Sunrise from "./Weather_Icon/sunrise.svg"
import Sunset from "./Weather_Icon/sunset.svg"

export type detailsProps = {
    pressure: any | undefined,
    humidity: any | undefined,
    visibility: any | undefined,
    wind: any | undefined,
    feels_like: any | undefined,
    uv_index: any | undefined,
    sunrise: any | undefined,
    sunset: any | undefined,
    
}
export const WeatherDetails: any = ({ pressure, humidity, visibility, wind, feels_like, uv_index, sunrise, sunset, }: detailsProps) => {
    
    return (
        <div className="weather_details">
            <DetailsCard heading="Pressure" data={pressure} image={Pressure} />
            <DetailsCard heading="Humidity" data={humidity} image={Humidity} />
            <DetailsCard heading="Visibility" data={visibility} image={Visibility} />
            <DetailsCard heading="Wind" data={wind} image={Wind} />
            <DetailsCard heading="Feels Like" data={feels_like} image={Feels} />
            <DetailsCard heading="UV Index" data={uv_index} image={UV_Index} />
            <DetailsCard heading="Sunrise" data={sunrise} image={Sunrise} />
            <DetailsCard heading="Sunset" data={sunset} image={Sunset} />
        </div>
    )
}

