
import { FaLocationArrow } from 'react-icons/fa'
export const Geolocator = ({ setLocator }: any) => {
    const url = "http://ip-api.com/json";
    const gps = async () => {
        const res = await fetch(url);
        const data = await res.json();
        return data;
    }
    
    const handleClick = async() => {
        const lat = await gps().then(data => data.lat);
        const lon = await gps().then(data => data.lon);
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