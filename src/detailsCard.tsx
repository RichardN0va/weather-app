export const DetailsCard = ({heading, data, image}:any) => {
    return (
        <div className="detailsCard">
            <h1>{heading}</h1>
            <div className="detail_info">
                <p>{data}</p>
                <img src={image} alt="WeatherIcon" />
            </div>
            
        </div>
    )
}