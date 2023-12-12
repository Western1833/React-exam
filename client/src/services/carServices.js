import { useNavigate } from "react-router-dom";
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

    try{
        const request = await fetch(`${PATHS.baseUrl}${PATHS.cars}`, {
            method: 'POST',
            headers: {'X-authorization': token},
            body: JSON.stringify(data)
        });

        if(!request.ok){
            throw new Error('Error while fetching:');
        }
    }catch(err){
        console.log(err.message);
    }
}