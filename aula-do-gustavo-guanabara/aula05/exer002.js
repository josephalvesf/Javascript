
var agora = new Date()
var hora = agora.getHours()
console.log(`agora são exatamente ${hora} horas.`)
if(hora < 12) {
    console.log(`BOM DIA!`)
}else if (hora <= 18) {
    console.log(`boa Tarde!`)
}else{
    console.log(`BOA NOITE!`)
}