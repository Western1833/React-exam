import { PATHS } from "../utils/utils.js";

export async function login({ email, password }) {
    try {
        const response = await fetch(`${PATHS.baseUrl}${PATHS.login}`, {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email, password })
        });

        if (response.status === 403) {
            throw new Error('Wrong username or password.')
        }

        if (!response.ok) {
            throw new Error('Error while fetching.');
        }

        const result = response.json();
        return result;
    } catch (err) {
        console.log(err.message);
    }
}

export async function register({ email, username, password,  }) {
    try {
        const response = await fetch(`${PATHS.baseUrl}${PATHS.register}`, {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email, username, password })
        });

        if (!response.ok) {
            throw new Error('Error while fetching.');
        }

        const result = response.json();
        return result;
    } catch (err) {
        console.log(err.message);
    }
}

export async function logout(){
    const token = localStorage.getItem('accessToken');

    await fetch(`${PATHS.baseUrl}${PATHS.logout}`, {
        method: 'GET',
        headers: {'X-Authorization': token}
    });
}
