//VAR GENERALES
const listaTareas = document.querySelector('tbody')
const btnAgregar = document.querySelector('#btnAgregar')
const nTarea = document.querySelector('#nuevaTarea')
const tareaEnLista = document.querySelector('#tareasLista')

//VAR CONTADORES
const totalTareas = document.querySelector('#totalTareas')
const totalTareasRealizadas = document.querySelector('#tareasRealizadas')

//OBJETOS

const tareas = [
    { id: 16, nombre: "Hacer Mercado", },
    { id: 60, nombre: "Estudiar para la Prueba", },
    { id: 24, nombre: "Sacar a pasear a Tobby", },

]

//TRIGGER PARA RENDER



//BTN PARA  AGREGAR - LISTA DE TAREAS


btnAgregar.addEventListener('click', () => {
    
    
    const nuevaTarea = {id:Date.now(),nombre: nTarea.value}
   
    tareas.push(nuevaTarea)

    //DEFINICIÓN DE TOTALES

    
    


    //RENDERS

    rendertareaEnLista(tareas)


    
    /*
    renderTareas(tareas)
    */
    
    


    /*
    
    let html = ''
    for (let x of tareas) {
        html += `
        <li>${x.nombre}</li>
        `
    }
    tareaEnLista.innerHTML = html

    */
})

//RENDER 

    //TABLA DE TAREAS

function rendertareaEnLista(x){

    listaTareas.innerHTML = '';
   
   
   
   
   
    tareas.forEach((x) => {

        if (x.completed == false) {
            listaTareas.innerHTML = `

            <tr>
                <td>${x.id}</td>
                <td>${x.nombre}</td>
                <td> <input type='checkbox' onclick='realizada(${x.value})' > </td>
                <td> <button onclick='borrar(${x.id})' >x</button> </td>
            
            </tr>
            `

        } else{

            listaTareas.innerHTML+=`
        <tr>
            <td>${x.id}</td>
            <td>${x.nombre}</td>
            <td> <input type='checkbox' onclick='realizada(${x.value})'hecked="true" > </td>
            <td> <button onclick='borrar(${x.id})' >x</button> </td>
            
        
        </tr>
        

        `;


        }


        

    })
    totalTareas.innerHTML = tareas.length
    totalTareasRealizadas.innerHTML=`${

        tareas.filter((x)=> x.completed==true).length

    }`
    

}


    //FUNCION BORRAR

function borrar(id){

    const index=tareas.findIndex((x)=>x.id==id)
    tareas.splice(index,1)
    rendertareaEnLista(tareas)
}


    //FUNCION CONTAR REALIZADAS
























window.onload = function () {
    rendertareaEnLista();
  }

