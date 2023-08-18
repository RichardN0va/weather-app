
export const HourlyForecast = (props: any) => {
    return (
            <div className="hourlyForecast" key={props.index}>
                <h2 >
                    {props.time}
                </h2>
                <img src={props.icon} alt="sunny" />
                <span>{props.temp}&deg;</span>
            </div>  
    )

}