//inicio de variable 
let targetasDestapadas=0;
let targeta1=null;
let targeta2 = null;
let primerR =null;
let segundoR =null;
let Movimientos=0;
let Aciertos=0;
let Temporizador=false;
timer=30;
tiempoRegresivo=null;
TimerInicial=30;
//apuntando a docx
let mostrarMov =document.getElementById('Movimientos');
let mostrarAciertos=document.getElementById('Aciertos');
let MostrarTiempo=document.getElementById('T-restante');
//Aqui estamos generando numeros aleatorios a la tabla 
let numeros = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8];
numeros=numeros.sort(()=>{return Math.random()-0.5});
console.log(numeros);

//funcion 
function contarTiempo(){
    tiempoRegresivo = setInterval(()=>
 {timer--;
MostrarTiempo.innerHTML = `Tiempo: ${timer} segundos`;
if(timer==0){
clearInterval(tiempoRegresivo);
bloquearTargetas();
}
},1000);
}

//funcion de bloqueo de targetas
function bloquearTargetas(){
 for(let i=0; i<=15; i++)
 {
 let targetaBloq = document.getElementById(i);
 targetaBloq.innerHTML=numeros[i];
 targetaBloq.disabled=true;

 }

}

//funcion principal 
function destapar(id)
{

if(Temporizador==false){
    contarTiempo();
    Temporizador = true;
}

targetasDestapadas++;
console.log(targetasDestapadas);

if(targetasDestapadas==1){
targeta1=document.getElementById(id);
primerR=numeros[id]
targeta1.innerHTML=primerR;


//Deshabilitar el primer boton 
targeta1.disabled=true;

}else if(targetasDestapadas==2)
{
    targeta2=document.getElementById(id);
    segundoR=numeros[id];
    targeta2.innerHTML=segundoR;

    targeta2.disabled=true;

//Incremental
  Movimientos++;
  mostrarMov.innerHTML= `Movimientos: ${Movimientos}`;

if(primerR==segundoR)
{
targetasDestapadas=0;

Aciertos++;
mostrarAciertos.innerHTML = `Aciertos: ${Aciertos}`;

if(Aciertos == 8){
    clearInterval(tiempoRegresivo);
    mostrarAciertos.innerHTML = `Aciertos: ${Aciertos} 😲`;
    MostrarTiempo.innerHTML = `Fantastico te demorastes: ${TimerInicial - timer} segundos`;
    mostrarMov.innerHTML = `Movimientos: ${Movimientos} :D muy bien crack`;
}

}else{
     setTimeout(()=>{
    targeta1.innerHTML = '';
    targeta2.innerHTML = '';
    targeta1.disabled=false;
    targeta2.disabled=false;
    targetasDestapadas=0;
}, 2000);
}

}

}


