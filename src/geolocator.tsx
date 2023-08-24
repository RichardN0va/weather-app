import { useState } from "react"
import { FaLocationArrow } from 'react-icons/fa'
export const Geolocator = ({ setLocator }: any) => {
    const [lat, setLat] = useState < number | null>(null);
    const [lon, setLon] = useState<number | null>(null);
    const handleGetLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const latitude = position.coords.latitude;
                    const longitude = position.coords.longitude;
                    setLat(latitude);
                    setLon(longitude);
                    setLocator({lat: lat, lon: lon});
                },
                (error) => {
                    console.error("Error getting location:", error);
                }
            );
        } else {
            console.error("Geolocation is not supported by this browser.");
        }
    };

    
    return (
        <div className="geolocator">
            <button
                type='submit'
                className="location_button"
                onClick={handleGetLocation}
            ><FaLocationArrow size={20} /></button>
        </div>


    )

};