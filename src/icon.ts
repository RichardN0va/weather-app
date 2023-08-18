import clearDay from './Weather_Icon/clear-day.svg'
import clearNight from './Weather_Icon/clear-night.svg'
import cloudyDay from './Weather_Icon/partly-cloudy-day.svg'
import cloudyNight from './Weather_Icon/partly-cloudy-night.svg'
import cloudy from './Weather_Icon/cloudy.svg'
import brokenClouds from './Weather_Icon/overcast.svg'
import showerRain from './Weather_Icon/rain.svg'
import rainDay from './Weather_Icon/partly-cloudy-day-rain.svg'
import rainNight from './Weather_Icon/partly-cloudy-night-rain.svg'
import thunderStorm from './Weather_Icon/thunderstorms.svg'
import mist from './Weather_Icon/mist.svg'
import snow from './Weather_Icon/snow.svg'

export const Icon = (description: string, unix_time: number) => {
    var date = Date.now();
    const seconds = Math.floor(date / 1000);
    if (description === "Clear") {
        if (unix_time > seconds)
            return clearDay;
        return clearNight;
    }
    else if (description === "few clouds") {
        if (unix_time > seconds)
            return cloudyDay
        return cloudyNight
    }
    else if (description === "cloudy") {
        return cloudy
    }
    else if (description === "Clouds") {
        return brokenClouds
    }
    else if (description === "Rain") {
        return showerRain
    }
    else if (description === "Drizzle") {
        if (unix_time > seconds)
            return rainDay
        return rainNight
    }
    else if (description === "thunderstorm") {
        return thunderStorm
    }
    else if (description === "Snow") {
        return snow
    }
    else if (description === "Mist") {
        return mist
    }
}