export type WeatherData = {

    weather: [{
        id: number;
        main: string;
        description: string;
        icon: string;
    }];
    main: {
        temp: number;
        feels_like: number;
        temp_min: number;
        temp_max: number;
        pressure: number;
        humidity: number;
    };
    wind: {
        speed: number;
        deg: number;
    };
    sys: {
        country: string;
        sunrise: number;
        sunset: number;
    };
    name: string;
    visibility: number;
    coord: {
        lon: number;
        lat: number;
    }
    timezone: number;
    list: [
        {
            dt: number;
            main: {
                temp: number;
            }
            weather: {
                description: string;
            }
            dt_txt: string;
        }
    ]
}