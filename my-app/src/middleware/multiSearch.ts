import callApi from "./callApi";
import {MultiSearch} from "../models/MultiSearch";

export const multiSearch = async (message:string):Promise<MultiSearch> =>{
    const query = message.replace(/\s/g,"%20").toLowerCase()
    const url = `https://api.themoviedb.org/3/search/multi?api_key=ac1ccaf7cc1c015abd2c2cddca72cb16&language=en-US&query=${query}&page=1&include_adult=false`
    return await callApi(url,"GET")
}