function carregar(){
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
//var hora = 1
msg.innerHTML = `Agora são ${hora} horas.`
if (hora >= 0 && hora <12){
    //bom dia
    img.src = 'imagen/amanhecer-9.jpg'
    document.body.style.background = '#e2cd9f'
}else if (hora >= 12 && hora <= 18) {
    //boa Tarde!
    img.src = 'imagen/tarde.jpg'
    document.body.style.background = 'b9846f'
}else {
    // boa noite
    img.src = 'imagen/noite.jpg'
    document.body.style.background = '#515154'
}
}

