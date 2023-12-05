import React from "react";
import {format} from "date-fns/fp";

export function formatDate(date) {
    return format("EEEE, dd MMMM yyyy", date);
}

export function formatTime(date) {
    return format("HH:mm", date);
}

export function formatTemperature(temperature) {
    return Math.floor(temperature);
}

export function formatTemperatureMinMax(temperatureMin, temperatureMax){
    const tempMin = formatTemperature(temperatureMin);
    const tempMax = formatTemperature(temperatureMax);
    return { tempMin, tempMax };
}

export function isDayTime(hour) {
    return hour >= 6 && hour < 18;
}

export function getCurrentHour(time) {
    return parseInt(time.split('T')[1].split(':')[0], 10);
}

export function LocationAddress(city) {
    if (!city || !city.name || !city.country) {
        return null;
    }
    return (
        <h1 className={"location__address"}>{city.name}{city.name && city.country ? `, ${city.country}` : ''}</h1>
    );
}

export function formatDayOfWeek(time){
     return format("EEEE", new Date(time));
}

export function formatApparentTemperature(apparentTemperature) {
    return Math.floor(apparentTemperature);
}

export function formatWindSpeed(windSpeed) {
    return Math.floor(windSpeed);
}




