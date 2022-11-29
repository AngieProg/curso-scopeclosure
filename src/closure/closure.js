function greeting(username) {
    //let username = 'Angie';
    function displayUsername(descripcion) 
    {
        return `Hello ${username}, ${descripcion} `;
    }
    return displayUsername;
}

const g = greeting('Angie'); 
console.log(g('bonita'));

/*function greeting(username) {
    //let username = 'Angie';
    function displayUsername() 
    {
        return `Hello ${username} `;
    }
    return displayUsername;
}

const g = greeting('Angie'); 
console.log(g());*/