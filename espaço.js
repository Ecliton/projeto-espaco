const hr=document.getElementById('hora')
const mn=document.getElementById('minuto')

const relogio=setInterval(function time(){
    let data= new Date();
    let hora= data.getHours();
    let minuto= data.getMinutes();

    hr.textContent=hora;
    mn.textContent=minuto;

    if(hora < 10){
        hr.innerHTML=`0${hora}`
    }
    if(minuto < 10){
        mn.innerHTML=`0${minuto}`
    }
})