for (i=0;i<11;i++){
    spin=Math.floor(Math.random()*(37-0)+0)* Math.floor(Math.random()*(11-5)+5);
    n=spin%36;
    console.log("Num de jugada: "+i+"\nNumero: "+spin+"\nValor ganador: "+n+"\n");
}