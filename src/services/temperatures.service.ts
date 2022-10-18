import { database } from "../databases";
import {Temperature} from "../models/temperature.interface";

// @ts-ignore
export const findAll= async ():Promise<Temperature[] > =>{
    try {
        let response:Temperature[];
        const db= await database()
        const result = await db.query`select * from Temperature `;
        console.log(result.recordset)
        response= result.recordset;
        return  response;
    } catch (err) {
        console.log(err)
    }
}
// @ts-ignore
export const findAllByCity= async (city:string):Promise<Temperature[]> =>{
    try {
        let result;
        // @ts-ignore
        const db= await database()
        result = await db.query`select * from Temperature where ville= ${city}`;
        console.log(result.recordset)
        if(result.recordset){
           return result.recordset
        };
    } catch (err) {
        console.log(err)
    }
}

export const getCities = async  () => {
    try {
        const db= await database()
        let result = await db.query`select distinct ville as label from Temperature`;
        console.log(result.recordset)
        return result.recordset;
    } catch (err) {
        console.log(err)
    }
}
export const getAVGTemperature = async  () => {
    try {
        let result;
        const db= await database()
        result = await db.query`EXEC getAllCitiesAverageTemperature`;
        return result.recordset;
    } catch (err) {
        console.log(err)
    }
}
export const getAVGTemperatureByCity = async  (city:string) => {
    try {
        let result;
        const db= await database()
        result = await db.query`EXEC getAverageTemperatureByCity ${city}`;
        console.log(result.recordset[0].avg_temperature)
        return result.recordset[0].avg_temperature;
    } catch (err) {
        console.log(err)
    }
}
