
export const DailyForecast = (props: any) => {
    return (
            <div className="dailyForecast" key={props.index}>
                <img src={props.icon} alt="Rainny" />
                <span className="daily_max">{props.temp}&deg;</span>
                <span className="forecast_date">{props.date}</span>
            </div>
    )
}