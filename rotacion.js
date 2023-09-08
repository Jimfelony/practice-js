angulo=Math.floor(Math.random()*(360-0)+0);
angulo2=Math.floor(Math.random()*(360-0)+0);
rotacion= Math.floor(Math.random()*(11-5)+5);
fin=angulo2*rotacion+angulo;
total=fin%360
console.log("Angulo Inicial: "+angulo+"\nGiratorio: "+fin+"\nValor Final: "+total+"\n");