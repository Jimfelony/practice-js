today=new Date();
hora=today.getHours();
min=today.getMinutes();
minalt=Math.floor(Math.random()*(601-300)+300);
horaalt=Math.floor(minalt/60);
minfin=min+minalt%60;
horafin=hora+horaalt;
if(minfin>=60){
    horafin+=1;
    minfin-=60;
}
console.log("Hora Inicial: "+hora+":"+min+"\nHora Random: "+minalt+"\nHora Final: "+horafin+":"+minfin);
