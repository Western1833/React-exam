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