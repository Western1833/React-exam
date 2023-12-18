import { PATHS } from "../utils/utils.js";

export const getAllCars = async (offSet) => {
    try {
        const request = await fetch(`${PATHS.baseUrl}${PATHS.cars}`);

        if (!request.ok) {
            throw new Error('Error while fetching data:');
        }

        const result = await request.json();

        return result;
    } catch (err) {
        console.log(err.message);
        return [];
    }
}

export const create = async (data) => {
    const token = localStorage.getItem('accessToken');
    const { imageUrl, brand, model, price, phoneNumber } = data;

    try {
        if (!imageUrl || !brand || !model || !price || !phoneNumber) {
            throw new Error('Empty fields');
        } else {
            const request = await fetch(`${PATHS.baseUrl}${PATHS.cars}`, {
                method: 'POST',
                headers: { 'X-authorization': token },
                body: JSON.stringify(data)
            });

            if (!request.ok) {
                throw new Error('Error while fetching:');
            }
        }
    } catch (err) {
        console.log(err.message);
    }
}

export async function myCarsService(userId, page) {
    const pageSize = 2;
    const offset = (page - 1) * pageSize;

    try {
        const request = await fetch(`${PATHS.baseUrl}${PATHS.cars}?where=_ownerId%3D%22${userId}%22&offset=${offset}&pageSize=${pageSize}`);

        if (!request.ok) {
            throw new Error('Error: could not find searched value.');
        }

        const result = await request.json();

        return result;
    } catch (err) {
        console.log(err.message);
        throw err;
    }
}

export async function getCarsPagination(page) {
    const pageSize = 2;
    const offset = (page - 1) * pageSize;

    try {
        const request = await fetch(`${PATHS.baseUrl}${PATHS.cars}?sortBy=_createdOn desc&offset=${offset}&pageSize=${pageSize}`);

        if (!request.ok) {
            throw new Error('Error: could not find searched value.');
        }

        const result = await request.json();

        return result;
    } catch (err) {
        console.log(err.message);
        throw err;
    }
}

export async function getSingleCar(id) {
    try {
        const request = await fetch(`${PATHS.baseUrl}${PATHS.cars}/${id}`);

        if (!request.ok) {
            throw new Error('Error while fetching data:');
        }

        const result = await request.json();

        return result;
    } catch (err) {
        console.log(err.message);
        return [];
    }
}

export async function editCar(id, carData) {
    const token = localStorage.getItem('accessToken');

    try {
        const request = await fetch(`${PATHS.baseUrl}${PATHS.cars}/${id}`, {
            method: 'PUT',
            headers: { 'X-authorization': token },
            body: JSON.stringify(carData)
        });

        if (!request.ok) {
            throw new Error('Error while fetching:');
        }
    } catch (err) {
        console.log(err.message);
    }
}

export async function deleteCar(id) {
    const token = localStorage.getItem('accessToken');

    try {
        const request = await fetch(`${PATHS.baseUrl}${PATHS.cars}/${id}`, {
            method: 'DELETE',
            headers: { 'X-authorization': token }
        });

        if (!request.ok) {
            throw new Error('Error while fetching:');
        }
    } catch (err) {
        console.log(err.message);
    }
}

export const getLatestCars = async () => {

    const result = await fetch('http://localhost:3030/data/cars?sortBy=_createdOn desc&offset=0&pageSize=3');

    return result;

}