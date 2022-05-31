/*variável de entrada: --nao tem--
variável de saída: restricao

script:
*/
function run() {
    today = new Date();
    day = today.getDay();
    hour = today.getHours();
    
    if(day == 2 && hour >= 22){
          return true;
        
    }
    else if (day == 3 && hour < 8){
        
        return true;
    }
    return false;
}
 
//fim do script
let teste = run()
console.log(teste)