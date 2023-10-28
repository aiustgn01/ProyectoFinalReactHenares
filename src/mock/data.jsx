const arrayProductos = [
    {id:'01',name:'Tetris', stock:10,price:5000,description:' El juego clásico de bloques que desafía tu habilidad para encajar piezas.', img:'../img/Tetris1.jpg'},
    {id:'02',name:'Tetris 2', stock:20,price:5000,description:'Una versión mejorada con modos de juego adicionales y desafíos estratégicos.', img:'../img/Tetris2.jpg'},
    {id:'03',name:'Tetris 3', stock:30,price:5000,description:'La evolución con gráficos mejorados y nuevas mecánicas de juego emocionantes.', img:'../img/Tetris3.png'}
]

export const getProductos = () =>{
    return new Promise((resolve, reject)=>{
        let error = false
        setTimeout(()=>{
            if(error){
                reject('No hay data')
            }else{
                resolve(arrayProductos)
            }

        },2000)
    })}


    export const getItem = () =>{
        return new Promise ((resolve) =>{
            setTimeout(() => {
                resolve(list[2])
            }, 2000);
        })
    }
    