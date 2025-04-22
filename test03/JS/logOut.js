async function logOut() {

    let location = 'https://go-wash-api.onrender.com/api/logout'
    let api = await fetch(location, {
        method: "POST",
        headers: { 'Content-Type': 'application/json' }
    });
    
}

