import moment from 'moment'
export const Unix = (time:any) => {
    let hours = moment.unix(time).format('h:mm A');
    return hours;
}

export const TimeConverter = (time: any) => {
    let hours = moment.unix(time).format('H:mm');
    return hours;
}

export const DayConverter = (time: any) => {
    let day = moment.unix(time).format('dddd');
    return day;
}
