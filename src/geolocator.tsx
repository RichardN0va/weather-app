import { useState, useEffect } from "react"
import { FaLocationArrow } from 'react-icons/fa'
export const Geolocator = ({ setLocator }: any) => {
    const [lat, setLat] = useState<number>();
    const [lon, setLon] = useState<number>();

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const latitude = position.coords.latitude;
                    const longitude = position.coords.longitude;
                    setLat(latitude);
                    setLon(longitude);
                },
                (error) => {
                    console.error("Error getting location:", error);
                }
            );
        } else {
            console.error("Geolocation is not supported by this browser.");
        }
    })
    
    const handleClick = () => {
        setLocator({lat: lat, lon: lon})
    }


    return (
        <div className="geolocator">
            <button
                type='submit'
                className="location_button"
                onClick={handleClick}
            ><FaLocationArrow size={20} /></button>
        </div>


    )

};