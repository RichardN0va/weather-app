import { SearchBar } from "./searchBar"
import { Geolocator } from "./geolocator"
import { Social } from "./social"
import { Clock } from "./current_time"
import { Temp } from "./Temp"
export const NavBar = ({ setQuery, setSystem }:any) => {
    return (
        <div className="navbar">
            <SearchBar setLocation={setQuery} />
            <Geolocator setLocator={setQuery} />
            <Clock />
            <Temp setSystem={setSystem}/>
            <Social />
            
        </div>
    )

}