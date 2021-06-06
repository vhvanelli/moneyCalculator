function calcule(){
    var real = document.getElementById("input-real").value;
    var select = document.getElementById("select-coin");
    var value = select.options[select.selectedIndex].value;
    var result;
    var coin;
    var coinValue;

    if(value == 1 & real > 0){
       coinValue = 5.05;
       coin = " Dólares"; 
       result = (real / coinValue).toFixed(2);
    }
    else if(value == 2 & real > 0){
        coinValue = 6.14;
        coin = " Euros"
        result = (real / coinValue).toFixed(2);
    }
    else if(value == 3 & real > 0){
        coinValue = 7.15;
        coin = " Libras"
        result = (real / coinValue).toFixed(2);
    }
    else{
        alert("Coloque o valor em real ou escolha para qual moeda deseja converter!");
        document.getElementById("value-id").innerHTML = "$"; 
    }
     document.getElementById("value-id").innerHTML = result + coin; 
}   