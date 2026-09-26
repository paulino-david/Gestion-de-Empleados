const empleadosDiv = document.getElementById("empleados")
const buscar = document.getElementById("buscar")

const listaEmpleados = JSON.parse(localStorage.getItem("Empleados"))

listaEmpleados.forEach(empleado => {
    empleadosDiv.innerHTML += `

    <div class="empleado">
            <div class="top_tarjeta">
            <i class="fa-solid fa-ellipsis-vertical"></i>
        </div>

        <h3>

            ${empleado.nombre[0]}
        
        </h3>

        <div>
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
    
    </div>
    `

});
const low = ""

buscar.addEventListener("input", () => {
    const empleado = listaEmpleados.filter(elemento => elemento.nombre.toLowerCase().startsWith((buscar.value).toLowerCase()))
    empleadosDiv.innerHTML = ''
    empleado.forEach(empleado => {

        empleadosDiv.innerHTML += `

    <div class="empleado">

        <div class="top_tarjeta">
            <i class="fa-solid fa-ellipsis-vertical"></i>
        </div>

        <h3>

            ${empleado.nombre[0]}
        
        </h3>

        <div>
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
    
    </div>
    `
    })
})


