const url = `https://api.chucknorris.io/jokes/random`

// FORMA DE PROMESA
// fetch(url).then(resp =>{
//     resp.json().then(data => { 
//         console.log(data.id);
//         console.log(data.value);
//     })
// });

// FORMA PROMESA EN CADENA
// fetch(url)
//     .then(resp => resp.json())
//     .then((data) => {
//         console.log(data);
//         console.log(data.value);
//     })

// FORMA ASYNC AWAIT
const obtenerChiste= async ()=>{
    try {
        const resp = await fetch(url);

    if (!resp.ok) throw 'No se pudo realizar la peticion';
    console.log(await resp.json());
    const {icon_url, id, value} = await resp.json();
        
    return {icon_url, id, value};

    } catch (err) {
        throw err;
    }
    

}



    obtenerChiste()
        .then(console.log)