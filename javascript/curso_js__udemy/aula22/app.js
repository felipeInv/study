/*
Operados lógicos

&& -> AND -> E -> todas a expressãoes precisam ser verdaideiras (retorna true/false ou o "valor falso" encontrado ou o último valor)
    - Valores falsy:
        - false (esse não, pois ele é literalmente false)
        - 0
        - "" '' ``
        - null / undefined
        - Nan
|| -> OR -> OU -> -> pelo menos uma expressão precisa ser verdaideira
! -> NOT -> NÂO
*/

const expressaoAnd = true && true && true && true; //true
const expressaoOr = true || true || false //true