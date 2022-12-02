let cep = document.getElementById("cep");

const mostrar = (result) => {
    for (const campo in result) {
        if (document.querySelector("#" + campo)) {
            document.querySelector("#" + campo).value = result[campo]
        }
    }
}

cep.addEventListener("blur", (evento) => {
    console.log("alerta")
    let cepConvertido = cep.value.replace("-", "")
    let options = {
        method: 'GET',
        mode: 'cors',
        chache: 'default'
    }

    fetch(`https://viacep.com.br/ws/${cepConvertido}/json/`)
        .then(response => {
            response.json().then(data => mostrar(data))
        })
        .catch(e => console.log('erro:' + e.message))
})