import { PATHS } from "../utils/utils.js";

export const getAllCars = async () => {
    try{
        const request = await fetch(`${PATHS.baseUrl}${PATHS.cars}`);
        
        if(!request.ok){
            throw new Error('Error while fetching data:');
        }

        const result = await request.json();

        return result;
    }catch(err){
        console.log(err.message);
        return [];
    }
}

export const create = async (data) => {  
    const token = localStorage.getItem('accessToken');
    const { imageUrl, brand, model, price, phoneNumber } = data;
    try{
        if(!imageUrl || !brand || !model  || !price || !phoneNumber){
            throw new Error('Empty fields');
        }else{
            const request = await fetch(`${PATHS.baseUrl}${PATHS.cars}`, {
                method: 'POST',
                headers: {'X-authorization': token},
                body: JSON.stringify(data)
            });

            if(!request.ok){
                throw new Error('Error while fetching:');
            }
        }
    }catch(err){
        console.log(err.message);
    }
}

export async function myCarsService(userId){
    try{
        const request = await fetch(`${PATHS.baseUrl}${PATHS.cars}?where=_ownerId%3D%22${userId}%22`);

        if(!request.ok){
            throw new Error('Error: could not find searched value.');
        }

        const result = request.json();
        return result;
    }catch(err){
        console.log(err.message);
    }
}