const baseUrl = 'http://localhost:3030/data/cars';

export const getAllCars = async () => {
    try{
        const request = await fetch(baseUrl);
        
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
    try{
        const request = await fetch(baseUrl, {
            method: 'POST',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify(data)
        });

        if(!request.ok){
            throw new Error('Error while fetching:');
        }
    }catch(err){
        console.log(err.message);
    }
}