let nombre = document.getElementById("inputName")
let celular = document.getElementById("inputCellphone")
let mail = document.getElementById("inputMail")
let fecha = document.getElementById("inputDate")
let hora = document.getElementById("inputDateTime")
let servicio = document.getElementById("inputService")
let campoVacio = 0;
let formulario = document.getElementById("formulario")

formulario.onsubmit = (event) => {
    event.preventDefault();
    if (nombre.value === "" || celular.value === "" || mail.value === "" || fecha.value === "" || hora.value === "" || servicio.value === "") {

        // Nombre
        nombre.addEventListener("input", () => {
            localStorage.setItem("nombre", nombre.value)
        });

        let getName = localStorage.getItem("nombre")
        if (getName) {
            getName = nombre.value
        }

        // Celular
        celular.addEventListener("input", () => {
            localStorage.setItem("celular", celular.value)
        });

        let getCellphone = localStorage.getItem("celular")
        if (getCellphone) {
            getCellphone = celular.value
        }

        // Mail
        mail.addEventListener("input", () => {
            localStorage.setItem("mail", mail.value)
        });

        let getMail = localStorage.getItem("mail")
        if (getMail) {
            getMail = mail.value
        }

        // Fecha
        fecha.addEventListener("input", () => {
            localStorage.setItem("fecha", fecha.value)
        });

        let getDate = localStorage.getItem("fecha")
        if (getDate) {
            getDate = fecha.value
        }

        // Hora
        hora.addEventListener("input", () => {
            localStorage.setItem("hora", hora.value)
        });

        let getDateTime = localStorage.getItem("hora")
        if (getDateTime) {
            getDateTime = hora.value
        }

        // Servicios
        servicio.addEventListener("input", () => {
            localStorage.setItem("servicio", servicio.value)
        });

        let getService = localStorage.getItem("servicio")
        if (getService) {
            getService = servicio.value
        }

        if (campoVacio === 0) {
            campoVacio = document.createElement("p")
            campoVacio.innerHTML = "<p id='campoVacio'>Dejaste algun campo sin completar, completalo!</p>"
            let formContainer = document.getElementById("formContainer")
            formContainer.append(campoVacio)
        } else {
            return campoVacio
        }
    } else {
        let nombreGuardado = nombre.value
        let celularGuardado = celular.value
        let mailGuardado = mail.value
        let fechaGuardada = fecha.value
        let horaGuardada = hora.value
        let servicioGuardado = servicio.value
        let usuario = { nombreGuardado, celularGuardado, mailGuardado, fechaGuardada, horaGuardada, servicioGuardado }
        localStorage.setItem("usuario", JSON.stringify(usuario))
        formulario.reset()
        campoVacio.innerHTML = "";
        Swal.fire(
            {
                title: "Formulario enviado con éxito!",
                iconHtml: "<i class='bi bi-send-check-fill'></i>",
                confirmButtonColor: "rgb(62, 137, 166)"
            }
        )
    }
}



