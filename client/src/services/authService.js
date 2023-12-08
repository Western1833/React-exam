const baseUrl = 'http://localhost:3030/users';

export async function login(email, password){
    try{
        const request = await fetch(`${baseUrl}/login`, {
            method: 'POST',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify({email,password})
        });

        if(!request.ok){
            throw new Error('Error:');
        }
    }catch(err){
        console.log(err);
    }
}