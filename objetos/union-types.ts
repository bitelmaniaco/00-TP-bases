(() => {

    type Heroe = {
        nombre: string,
        edad?: number,
        poderes: string[],
        getNombre?:() => string;
    } 

    let miVariableCustom: string | number | Heroe = 'Superman'; 
    console.log(typeof miVariableCustom);


})()