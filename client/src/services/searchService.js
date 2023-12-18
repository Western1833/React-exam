import { PATHS } from "../utils/utils.js";

export async function search(brand){
    try{
        const request = await fetch(`${PATHS.baseUrl}${PATHS.cars}?where=brand%3D%22${brand}%22`);

        if(!request.ok){
            throw new Error('Error: could not find searched value.');
        }

        const result = await request.json();

        return result;
    }catch(err){
        throw err;
    }
}