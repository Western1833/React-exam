const baseUrl = 'http://localhost:3030/users';

export async function login({email, password}){
    try{
        const response = await fetch(`${baseUrl}/login`, {
            method: 'POST',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify({email,password})
        });

        if(response.status === 403){
            throw new Error('Wrong username or password.')
        }

        if(!response.ok){
            throw new Error('Error while fetching.');
        }
    }catch(err){
        console.log(err.message);
    }
}