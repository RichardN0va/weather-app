import { FaLocationDot } from "react-icons/fa6"
export type InfoProps = {
    name: string | undefined
    country: string | undefined
    icon: string | undefined
    description: string | undefined
    temp: number | null
    temp_max: number | null
    temp_min: number | null
    system: string
}

export const MainInfo = ({ name, country, icon, description, temp, temp_max, temp_min, system }: InfoProps) => {
    let temp_unit = ""
    if(system === "imperial")
        temp_unit = "°F"
    else 
        temp_unit = "°C"
    return (
        <div className="main_info">
            <div className="weather_condition">
                <span className="temp">{Math.round(temp!)}{temp_unit}</span>
                <img src={icon!} alt="" className="weather_icon" />
            </div>

            <span className="condition">{description}</span>
            <span className="location"><FaLocationDot /> {name}, {country}</span>
            <div className="max_min">
                <p className="temp_max">H:{Math.round(temp_max!)}{temp_unit}</p>
                <p className="temp_min">L:{Math.round(temp_min!)}{temp_unit}</p>
            </div>
        </div>
    )

}