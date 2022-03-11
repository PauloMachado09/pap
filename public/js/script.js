function init (){
    getinsertSócio()
    validaCriarsócio ()
    validaCriarDesconto()
    insertDesconto
}

function insertSócio() {
    const nome = document.getElementById('nome').value
    const nif = document.getElementById('nif').value
    const cc = document.getElementById('cc').value
    const numeroTelemovel= document.getElementById('numeroTelemovel').value
    const email = document.getElementById('email').email


    if(validaCriarsócio(nome,nif,cc,numeroTelemovel,email)==true){
        let fd = new criarsócio()
        fd.append('nome', nome )
        fd.append('nif', nif )
        fd.append('cc', cc )
        fd.append('numeroTelemovel', numeroTelemovel )
        fd.append('email', email )
        var options = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'myheader': nif
            },
            body: fd,
        }
        fetch('http://localhost:3000/createsoc', options)
            .then(res => res.json())
            .then(data => {
                if(data.type=='success')
                    alert(data.msg)
                else alert('Ocorreu um erro...')
            })
            .catch((err) => {
                console.log('Request failed', err.message)
            });
    }
}

function validaCriarsócio(nome,nif,cc,numeroTelemovel,email){
    if (nome == '')
        return alert('Tem de preencher o nome.')
    if (nif == '')
        return alert('Tem de indicar o NIF.')
        if (cc == '')
        return alert('Tem de indicar o Cc.')
        else{
            let i = 0
        for (i; i < cc.length; i++) {
            let c = cc.charAt(i)
            if (isNaN(c)) {
                return alert('CC inválido')
            }
        }
    }
        if (i == nif.length) {
            const nifInt = parseInt(nif)
        }
        if (email == '')
        return alert('Tem de preencher o email.')
    else {
        let i = 0
        for (i; i < nif.length; i++) {
            let c = nif.charAt(i)
            if (isNaN(c)) {
                return alert('NIF inválido')
            }
        }
        if (i == nif.length) {
            const nifInt = parseInt(nif)
        }
    }

    if (numeroTelemovel == '')
        alert('Tem de indicar um telemóvel.')
    else {
        let i = 0
        for (i; i < numeroTelemovel.length; i++) {
            let c = numeroTelemovel.charAt(i)
            if (isNaN(c)) {
                return alert('Telemóvel com números inválidos')
            }
        }
        if (i == numeroTelemovel.length) {
            const numeroTelemovelInt = parseInt(numeroTelemovel)
        }
    }
 
    return true
}

/*
function linhasTabela(){
    fetch('http://localhost:3000/getsoc')
    .then(res=>res.json())
    .then(json=>{
        if(json.type=='success'){
            const tabela = document.getElementById('corpoTabela')
            tabela.innerHTML=''
            for(i in json.msg){
                let linha = 
                `<tr>
                    <td class="text-center">${json.msg[i].nome}</td>
                    <td class="text-center">${json.msg[i].nif}</td>
                    <td class="text-center">
                    <button type="button" class="btn btn-secondary me-1">Ver Detalhes</button>
                    <button type="button" class="btn btn-light me-1">Editar</button>
                    <button type="button" class="btn btn-danger" onclick="eliminar('${json.msg[i].cc}')">Eliminar</button>
                    </td>
                </tr>`
                tabela.innerHTML+=linha
            }
        }

    })
    .catch((error)=>{
        alert(error)
    })
}

function eliminar(_id) {
    var options = {
        method: 'DELETE',
        headers: {
            'Content-type': 'application/json'
        }
    }
    fetch('http://localhost:3000/deletesoc/' + _id, options)
    .then(res=>res.json())
    .then(json=>{
        alert(json.msg)
        linhasTabela()
    })
}
*/

function insertDesconto() {
    const nomeE = document.getElementById('Nome empresa').value
    const nif = document.getElementById('nif').value
    const numeroTelemovel= document.getElementById('numeroTelemovel').value
    const email = document.getElementById('email').email


    if(validaCriarDesconto(nomeE,nif,numeroTelemovel,email)==true){
        let fd = new validaCriarDesconto()
        fd.append('nomeE', nomeE )
        fd.append('nif', nif )
        fd.append('numeroTelemovel', numeroTelemovel )
        fd.append('email', email )
        var options = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'myheader': nif
            },
            body: fd,
        }
        fetch('http://localhost:3000/createdesc', options)
            .then(res => res.json())
            .then(data => {
                if(data.type=='success')
                    alert(data.msg)
                else alert('Ocorreu um erro...')
            })
            .catch((err) => {
                console.log('Request failed', err.message)
            });
    }
}

function validaCriarDesconto(nomeE,nif,numeroTelemovel,email){
    if (nomeE == '')
        return alert('Tem de preencher o nome.')
    if (nif == '')
        return alert('Tem de indicar o NIF.')
        if (cc == '')
        return alert('Tem de indicar o Cc.')
        else{
            let i = 0
        for (i; i < cc.length; i++) {
            let c = cc.charAt(i)
            if (isNaN(c)) {
                return alert('CC inválido')
            }
        }
    }
        if (i == nif.length) {
            const nifInt = parseInt(nif)
        }
        if (email == '')
        return alert('Tem de preencher o email.')
    else {
        let i = 0
        for (i; i < nif.length; i++) {
            let c = nif.charAt(i)
            if (isNaN(c)) {
                return alert('NIF inválido')
            }
        }
        if (i == nif.length) {
            const nifInt = parseInt(nif)
        }
    }

    if (numeroTelemovel == '')
        alert('Tem de indicar um telemóvel.')
    else {
        let i = 0
        for (i; i < numeroTelemovel.length; i++) {
            let c = numeroTelemovel.charAt(i)
            if (isNaN(c)) {
                return alert('Telemóvel com números inválidos')
            }
        }
        if (i == numeroTelemovel.length) {
            const numeroTelemovelInt = parseInt(numeroTelemovel)
        }
    }
 
    return true
}
