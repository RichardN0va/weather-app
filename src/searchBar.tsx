import { FaSearch } from 'react-icons/fa';
import { useState } from 'react'

export const SearchBar = ({ setLocation }: any) => {
    const [city, setCity] = useState("")
    const handleClick = (event: any) => {
        if (city !== '') {
            setLocation({ q: city })
            event.preventDefault();
        }

    }
    return (
        <div className="SearchBar">
            <form>
                <input type="search"
                    value={city}
                    onChange={(e) => setCity(e.currentTarget.value)}
                    placeholder="Search for Location"
                    className="search_bar"
                />
                <button
                    type='submit'
                    className="search_button"
                    onClick={handleClick}
                ><FaSearch size={20} /></button>
            </form>


        </div>

    )
}
