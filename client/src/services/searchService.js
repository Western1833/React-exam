import { PATHS } from "../utils/utils.js";

export async function search(brand, model){
    if(brand.length && model.length === 0){
        const request = await fetch(`${PATHS.baseUrl}?where=brand%3D%22${brand}%22`);
        const result = request.json();
        return result;
    }else if(brand.length && model.length){
        const request = await fetch(`${PATHS.baseUrl}?where=brand%3D%22${brand}%22&model%3D%22${model}%22`);
        const result = request.json();
        return result;
    }
}