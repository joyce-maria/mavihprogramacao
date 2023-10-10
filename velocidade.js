const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm = addEventListener("sybmit",(e) =>{
    e.preventDefault()

    const permitida = Number(frm.inPermitida.value)
    const condutor = Number(frm.inCondutor.value)
    let leve = permitida + (permitida * 0,2)

    if (condutor <= permitida){
        resp.innertext = "Situação: Sem Multa"

    }else if(condutor <= leve) {
        resp.innerText = "Situação: multa Leve"
    }else{
        resp.innerText = "Situação Multa Grave"
    }
})

