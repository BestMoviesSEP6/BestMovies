import callApi from "./callApi";

export const removeFromFavourites = async (userId:number, movieId:number):Promise<string> => {
    const url = `https://cloudcomputingapi.azurewebsites.net/Movies/favorites/remove/${userId}/${movieId}`
    return  await callApi(url,"POST")

}