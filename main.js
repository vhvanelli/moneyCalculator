function calcule(){
    var real = document.getElementById("input-real").value;
    var select = document.getElementById("select-coin");
    var value = select.options[select.selectedIndex].value;
    var result;
    var coinValue = [{coinName:" Dólares", valueCoin:5.05}, {coinName:" Euros", valueCoin:6.14}, {coinName:" Libras", valueCoin:7.15} ]
    var coin;

    for(coin = 0; coin != value; coin++){     
        result = (real / coinValue[coin].valueCoin).toFixed(2);
    }
    coin--;
    
    document.getElementById("value-id").innerHTML = result + coinValue[coin].coinName;
}   