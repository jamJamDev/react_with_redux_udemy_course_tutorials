import axios from 'axios';

const API_KEY = '350ebf264ce9d7e66240ef5d305fe913';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';//will be used throughout, could maybe even add a config to have these strings for "easy access?"

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(url);

    return {
        type: FETCH_WEATHER,
        payload: request
    };
}