import { PATHS } from "../utils/utils.js";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

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
    } catch (err) {
        console.log(err.message);
    }
}

export async function register({ email, password, repeatPassword }) {
    try {
        if (emailRegex.test(email)) {
            const response = await fetch(`${PATHS.baseUrl}${PATHS.register}`, {
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
        } else {
            throw new Error('Invalid email!');
        }
    } catch (err) {
        console.log(err.message);
    }
}
