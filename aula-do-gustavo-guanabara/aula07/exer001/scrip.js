function verificar()
{
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano){
        window.alert(`[Erro] Verfificar os dados e tenta novamente`)
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            gênero = 'Homem'
            if (idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', 'imagens/bebe-homen.jpg')
            }else if (idade < 21){
                //jovem
                img.setAttribute('src', 'imagens/homen.jovem.jpg')
            }else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'imagens/homen-20-30.jpg')
            }else{
                //Idoso
                img.setAttribute('src', 'imagens/homen.velho.jpg')
            }
        }else if (fsex[1].checked){
            gênero = 'Mulher'
            if (idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', 'imagens/bebe.mulher.png')
            }else if (idade < 21){
                //jovem
                img.setAttribute('src', 'imagens/mulher-jovem.jpg')
            }else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'imagens/mulher-20-30.jpg')
            }else{
                //Idoso
                img.setAttribute('src', 'imagens/mulher.velha.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
}