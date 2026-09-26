const empleadosDiv = document.getElementById("empleados")
const buscar = document.getElementById("buscar")
const btn_filtro=document.getElementById("btn-filtro")
const mostrarTipoFiltro=document.getElementById("tipoFiltro")

const listas=document.querySelectorAll("li")



const mostrarEmpleados = () => {
    const listaEmpleados = JSON.parse(localStorage.getItem("Empleados"))

    listaEmpleados.forEach(empleado => {

        empleadosDiv.innerHTML += `
    
        <div class="empleado" >
            
            <h3>
    
                ${empleado.nombre[0]}
            
            </h3>
    
            <div class="info">
                <h4>
                ${empleado.nombre}
                </h4>
                <p>
                    Salario: € ${empleado.salario}
                </p>
                <p>
                    Departamento: ${empleado.departamento}
                </p>
    
            </div>
    
            <div class="operacionenes">
                <i class="fa-solid fa-trash trash" id=${empleado.nombre}></i>
                <i class="fa-solid fa-pencil edit" id=${empleado.nombre}></i>
            </div>
        
        </div>
        `


    });
}
mostrarEmpleados()
const low = ""

buscar.addEventListener("input", () => {
    const empleado = listaEmpleados.filter(elemento => elemento.nombre.toLowerCase().startsWith((buscar.value).toLowerCase()))
    empleadosDiv.innerHTML = ''
    empleado.forEach(empleado => {

        empleadosDiv.innerHTML += `

    <div class="empleado">

        <h3>

            ${empleado.nombre[0]}
        
        </h3>

        <div class="info">
            <h4>
            ${empleado.nombre}
            </h4>
            <p>
                Salario: € ${empleado.salario}
            </p>
            <p>
                Departamento: ${empleado.departamento}
            </p>

        </div>

        <div class="operacionenes">
            <i class="fa-solid fa-trash trash" id="borrar"></i>
            <i class="fa-solid fa-pencil edit"></i>
        </div>
    
    </div>
    `
    })
})

const borrar = document.querySelectorAll(".trash")
let storage = JSON.parse(localStorage.getItem("Empleados"))

borrar.forEach(boton => {
    boton.addEventListener("click", (e) => {
        e.preventDefault()
        storage = storage.filter(empleado => empleado.nombre != boton.id)
        console.log(boton.id)
        localStorage.setItem("Empleados", JSON.stringify(storage))
            
        window.location.reload()
    })

})
let flex=false
btn_filtro.addEventListener("click",(e)=>{
    e.preventDefault()
    flex=flex?false:true
    mostrarTipoFiltro.style.display=flex?"flex":"none"
})

listas.forEach(lista=>{
    // console.log(lista)
    lista.addEventListener("click",()=>{
        buscar.placeholder="Buscar empleado por "+lista.textContent.toLowerCase()
    })
})

