const empleadosDiv = document.getElementById("empleados")
const buscar = document.getElementById("buscar")
const btn_filtro = document.getElementById("btn-filtro")
const mostrarTipoFiltro = document.getElementById("tipoFiltro")

const listas = document.querySelectorAll("li")



let listaEmpleados = JSON.parse(localStorage.getItem("Empleados"))
const mostrarEmpleados = () => {

    empleadosDiv.innerHTML = ''
    listaEmpleados.forEach(empleado => {

        empleadosDiv.innerHTML += `
    
        <div class="empleado" >
            
            <h3>
    
                ${empleado.nombre[0]}
            
            </h3>
    
            <h4>
            ${empleado.nombre}
            </h4>
            <div class="info">
                <p>
                    Salario:  ${empleado.salario} €
                </p>
                <p>
                    Departamento: ${empleado.departamento}
                </p>
    
            </div>
    
            <div class="operacionenes">
                <i class="fa-solid fa-trash trash" id=${empleado.nombre}></i>
                <i class="fa-solid fa-pencil edit" ></i>
            </div>
        
        </div>
        `

    });
    const borrar = document.querySelectorAll(".trash")

    borrar.forEach(boton => {

        boton.addEventListener("click", (e) => {
            // e.preventDefault()
            listaEmpleados = listaEmpleados.filter(empleadoStorage => empleadoStorage.nombre != boton.id)
            localStorage.setItem("Empleados", JSON.stringify(listaEmpleados))

            // window.location.reload()
            listaEmpleados.length == 0 ? empleadosDiv.innerHTML = `
        <div class="error" id="error">
          <i class="fa-solid fa-person-circle-exclamation"></i>
          Ningun empleado encontrado
        </div>`: mostrarEmpleados()

        })
    })
}

listaEmpleados.length == 0 ? empleadosDiv.innerHTML = `
        <div class="error" id="error">
          <i class="fa-solid fa-person-circle-exclamation"></i>
          Ningun empleado encontrado
        </div>`: mostrarEmpleados()

let buscarX = "nombre"


const busqueda = (empleadosFiltrados) => {
    // buscar.addEventListener("input", () => {

    empleadosDiv.innerHTML = ''
    empleadosFiltrados.forEach(empleado => {

        empleadosDiv.innerHTML += `
    
        <div class="empleado">
    
            <h3>
    
                ${empleado.nombre[0]}
            
            </h3>
    
            <h4>
            ${empleado.nombre}
            </h4>
            <div class="info">
                <p>
                    Salario:  ${empleado.salario} €
                </p>
                <p>
                    Departamento: ${empleado.departamento}
                </p>
    
            </div>
    
            <div class="operacionenes">
                <i class="fa-solid fa-trash trash"  id=${empleado.nombre}></i>
                <i class="fa-solid fa-pencil edit" ></i>
            </div>
        
        </div>
        `


    })
    const borrar = document.querySelectorAll(".trash")

    borrar.forEach(boton => {

        boton.addEventListener("click", (e) => {
            // e.preventDefault()
            listaEmpleados = listaEmpleados.filter(empleadoStorage => empleadoStorage.nombre != boton.id)
            localStorage.setItem("Empleados", JSON.stringify(listaEmpleados))

            // window.location.reload()
            empleadosFiltrados.length == 0 || listaEmpleados.length==0 ? empleadosDiv.innerHTML = `
        <div class="error" id="error">
          <i class="fa-solid fa-person-circle-exclamation"></i>
          Ningun empleado encontrado
        </div>`: busqueda(listaEmpleados)

        })
    })
    // })
}
buscar.addEventListener("input", () => {

    const empleadosFiltrados = listaEmpleados.filter(elemento => String(elemento[buscarX]).toLowerCase().startsWith(String(buscar.value).toLowerCase()))

    empleadosFiltrados.length == 0 ? empleadosDiv.innerHTML = `
        <div class="error" id="error">
          <i class="fa-solid fa-person-circle-exclamation"></i>
          Ningun empleado encontrado
        </div>`: busqueda(empleadosFiltrados)
})


let flex = false
btn_filtro.addEventListener("click", (e) => {
    e.preventDefault()
    flex = flex ? false : true
    mostrarTipoFiltro.style.display = flex ? "flex" : "none"

})

listas.forEach(lista => {
    // console.log(lista)
    lista.addEventListener("click", () => {
        buscar.placeholder = "Buscar empleado por " + lista.textContent.toLowerCase()
        console.log(lista.textContent)
        buscar.type = lista.textContent == "Salario" ? "number" : "text"
        buscar.step = lista.textContent == "Salario" ? "0.1" : ""
        buscar.min = lista.textContent == "Salario" ? "0" : ""

        buscarX = lista.textContent.toLowerCase()
        flex = flex ? false : true
        mostrarTipoFiltro.style.display = flex ? "flex" : "none"
    })

})

