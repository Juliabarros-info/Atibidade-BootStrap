function retornarValores(conteudo) {
    if (!("erro" in conteudo)) {
        document.getElementById("endereco").value=(conteudo.logradouro)
        document.getElementById("cidade").value=(conteudo.localidade)
        document.getElementById("bairro").value=(conteudo.bairro)
        document.getElementById("complemento").value=(conteudo.complemento)
    }else{
        alert("CEP não encontrado")
    }
}

function buscaCEP(valor) {
    var cep = valor.replace(/\D/g, "")
    if(cep != ""){
    var validarCEP = /^[0-9]{8}$/
    /* ^ --- quer dizer que é o começo  */
    /* $ --- quer dizer que é o final  */
        if(validarCEP.test(cep)){
            document.getElementById("endereco").value = ". . ."
            var script = document.createElement('script')
            script.src = `https://viacep.com.br/ws/${cep}/json/?callback=retornarValores`
            document.body.appendChild(script)
        }else{
            alert('O formato do CEP é inválido')
        }
    }
}