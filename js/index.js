const nombre = document.getElementById("nombre")
const salario = document.getElementById("salario")
const departamento = document.getElementById("departamento")
const error = document.getElementById("error")

const crear = document.getElementById("crear")



crear.addEventListener("click", () => {

    const getEmpleados = JSON.parse(localStorage.getItem("Empleados")) || []
    const dentro = false
    if (nombre.value && salario.value && departamento.value) {

        const listaEmpleados = []

        if (getEmpleados) {

            getEmpleados.forEach(empleado => {

                const { nombre: nombreStorage, salario: salarioStorage, departamento: departamentoStorage } = empleado

                listaEmpleados.push(nombreStorage)

            });

            if (!listaEmpleados.includes(nombre.value)) {

                getEmpleados.push({
                    nombre: nombre.value,
                    salario: parseFloat(salario.value),
                    departamento: departamento.value
                })
                localStorage.setItem("Empleados", JSON.stringify(getEmpleados))
                error.innerHTML = `<i class="fa-solid fa-check-double"></i> Empleado añadido`
                error.style.color = "green"
                setTimeout(() => {
                    error.innerHTML = ``

                }, 5000)

                // window.location.href = "./empleados.html"

            }
            else {
                error.innerHTML = `<i class="fa-solid fa-circle-exclamation"></i> Este empleado ya fue registrado`
                error.style.color = "red"
                setTimeout(() => {
                    error.innerHTML = ``

                }, 5000)
            }

        }

    }
    else {
        error.innerHTML = `<i class="fa-solid fa-circle-exclamation"></i> Lo siento, debe completar el formulario`
        setTimeout(() => {
            error.innerHTML = ``

        }, 5000)
    }

})

const datos = { info: { temp: 22, viento: 15 }, coord: [40, -3] }
console.log(datos)

const { info: { temp: temperaturaActual }, coord: [, longitud] } = datos

console.log(temperaturaActual)
console.log(longitud)