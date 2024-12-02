function recursiva(max){
    if(max > 15000){ return };
    console.log(max);
    max+=1;
    recursiva(max);
};
recursiva(0);