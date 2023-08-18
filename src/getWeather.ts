
const API_KEY: string = `${process.env.REACT_APP_API_KEY}` 
const WEB_URL: string = `${process.env.REACT_APP_API_URL}`

export const getWeather = (info: string, searchParams: any, units: string) => {
    
    const url = new URL(WEB_URL + "/" + info);
    url.search = new URLSearchParams({ ...searchParams, appid: API_KEY, units }).toString();
    
    const fData = async () => {
        const res = await fetch(url);
        const data = await res.json();
        return data
    }
    const result = fData();
    return result;
    
}

