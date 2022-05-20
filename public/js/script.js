function insertUtilizador() {
    const nome = document.getElementById('nome').value
    const nif = document.getElementById('nif').value
    const telemovel = document.getElementById('telemovel').value
    const numsocio = document.getElementById('numsocio').value
    const email= document.getElementById('email').value
    const cc= document.getElementById('cc').value

    if(validaFormData(nome,nif,numsocio,telemovel,cc,email)==true){
        let fd = new FormData()
        fd.append('nome', nome )
        fd.append('nif', nif )
        fd.append('numsocio', numsocio )
        fd.append('telemovel',telemovel )
        fd.append('cc',cc )
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

function validaFormData(nome,nif,numsocio,telemovel,cc,email){
    if (nome == '')  
        return alert('Tem de preencher o nome.')
        if (cc == '')
        return alert('Tem de preencher o CC.')
        if (email == '')
        return alert('Tem de preencher o email.')
        if (numsocio == '')
        return alert('Tem de preencher o numero de sócio.')
    if (nif == '')
        return alert('Tem de indicar o NIF.')
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
    if (telemovel == '')
        alert('Tem de indicar um telemóvel.')
    else {
        let i = 0
        for (i; i < telemovel.length; i++) {
            let c = telemovel.charAt(i)
            if (isNaN(c)) {
                return alert('Telemóvel com números inválidos')
            }
        }
        if (i == telemovel.length) {
            const telemovelInt = parseInt(telemovel)
        }
    }

}
