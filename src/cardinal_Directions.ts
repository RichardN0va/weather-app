export const Cardinal_direction = (wind_dir: any) => {
    if (wind_dir > 348.75 || wind_dir <= 11.25)
        return "N";
    else if (wind_dir > 11.25 || wind_dir <= 33.75)
        return "NNE";
    else if (wind_dir > 33.75 || wind_dir <= 56.25)
        return "NE";
    else if (wind_dir > 56.25 || wind_dir <= 78.75)
        return "ENE";
    else if (wind_dir > 78.75 || wind_dir <= 101.25)
        return "E";
    else if (wind_dir > 101.25 || wind_dir <= 123.75)
        return "ESE";
    else if (wind_dir > 123.75 || wind_dir <= 146.25)
        return "SE";
    else if (wind_dir > 146.25 || wind_dir <= 168.75)
        return "SSE";
    else if (wind_dir > 168.75 || wind_dir <= 191.25)
        return "S";
    else if (wind_dir > 191.25 || wind_dir <= 213.75)
        return "SSW";
    else if (wind_dir > 213.75 || wind_dir <= 236.25)
        return "SW";
    else if (wind_dir > 236.25 || wind_dir <= 258.75)
        return "WSW";
    else if (wind_dir > 258.75 || wind_dir <= 281.25)
        return "W";
    else if (wind_dir > 281.25 || wind_dir <= 303.75)
        return "WNW";
    else if (wind_dir > 303.75 || wind_dir <= 326.25)
        return "NW";
    else if (wind_dir > 326.25 || wind_dir <= 347.75)
        return "NNW";

}