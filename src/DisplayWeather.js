import React from 'react';

const DisplayWeather = (props) => {
    
    // Receiving the API data and if loading is true or false in props
    const forecast = props.forecast;
    const loading = props.loading;

    // Getting today's date, the days of the week, and months
    const today = new Date();
    const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Oct", "Nov", "Dec"];
    
    // Setting 5 days to display the day of the week and dates in MM/DD
    let daySpan = [];
    let allDates = [];
    for (let i = 0; i < 5; i++){
        let nextDay = new Date(today);
        nextDay.setDate(nextDay.getDate() + i);
        // Adding weekday for 5 days
        let daysOfWeek = weekday[nextDay.getDay()];
        daySpan.push(daysOfWeek);
        // Date display for 5 days
        let datesOfTheWeek = month[(nextDay.getMonth() - 1)];
        let stringDate = nextDay.toLocaleDateString().split("/");
        allDates.push(datesOfTheWeek + " " + stringDate[0]);
    };

    return (
        <div className="Weather-Display">
            <div className="Days">
            <p className="Dates">{daySpan[0]} <br></br>
            {allDates[0]}</p>
            {loading ? <div>...loading</div> : 
            <div><img src={`/icons/${forecast.data[0].weather.icon + ".png"}`}/>
            <p>{`${forecast.data[0].temp}°C`}</p>
            </div>}
        </div>

        <div className="Days">
            <p className="Dates">{daySpan[1]}<br></br>
            {allDates[1]}</p>
            {loading ? <div>...loading</div> : 
            <div><img src={`/icons/${forecast.data[1].weather.icon + ".png"}`}/>
                <p>{`${forecast.data[1].temp}°C`}</p>
            </div>}
        </div>

        <div className="Days">
            <p className="Dates">{daySpan[2]} <br></br>
            {allDates[2]}</p>
            {loading ? <div>...loading</div> : 
            <div><img src={`/icons/${forecast.data[2].weather.icon + ".png"}`}/>
                <p>{`${forecast.data[2].temp}°C`}</p>
            </div>}
            </div>

        <div className="Days">
            <p className="Dates">{daySpan[3]}<br></br>
            {allDates[3]}</p>
            {loading ? <div>...loading</div> : 
            <div><img src={`/icons/${forecast.data[3].weather.icon + ".png"}`}/>
                <p>{`${forecast.data[3].temp}°C`}</p>
            </div>}
        </div>

        <div className="Days">
            <p className="Dates">{daySpan[4]}<br></br>
            {allDates[4]}</p>
            {loading ? <div>...loading</div> : 
            <div><img src={`/icons/${forecast.data[4].weather.icon + ".png"}`}/>
                <p>{`${forecast.data[4].temp}°C`}</p>
            </div>}
        </div>
    </div>
    );
}

export default DisplayWeather;