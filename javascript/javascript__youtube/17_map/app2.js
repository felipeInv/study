console.clear();

let valores = new Map();

valores.set('nome','felipe');
valores.set('idade', 17);
valores.set(1,'111111');
valores.set(2,'222222');
valores.set(3,'333333');
/*
for (let key of valores.keys()){
    console.log(key);
};
for (let key of valores.values()){
    console.log(key);
};
for(let key of valores.entries()){
    console.log(key)
}
*/
valores.forEach((valores, posicao) =>{
    console.log(`${posicao} - ${valores}`)
})