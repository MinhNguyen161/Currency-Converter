let fromCurrency = "";
let toCurrency = "";
let amountInput = document.getElementById('amount');
let convertButton = document.getElementById('convertButton');
function convert(ratio,amn){
    return Math.round(amn*ratio *100)/100;
}    
function formatCurrency(type, value) {
    const formatter = new Intl.NumberFormat(type, {
      currency: type,
      style: "currency"
    });
    return formatter.format(value);
  }
function change(){
     fromCurrency = prompt("from currency"); 
     toCurrency = prompt("to currency");
}
    
function myFunction() {
    console.log(fromCurrency)
    if (!fromCurrency || !toCurrency ){
         fromCurrency = prompt("enter from currency again"); 
         toCurrency = prompt(" enter to currency again");
    }
    fromCurrency = fromCurrency.toUpperCase()
    toCurrency = toCurrency.toUpperCase()
    let ratio = 1;
    let amn = amountInput.value
    if (fromCurrency === 'USD'){
        if (toCurrency === "VND"){
            ratio = 23235.5
            let result = formatCurrency('vnd',convert(ratio,amn))
            document.getElementById("demo").innerHTML =
            amn +  " in " +fromCurrency + " is " + result; 
        }
        else if( toCurrency === "KRW"){
            ratio = 1193.27
            let result = formatCurrency('krw',convert(ratio,amn))
            document.getElementById("demo").innerHTML =
            amn +  " in " +fromCurrency + " is " + result;         
        }
        else if( toCurrency === "EUR"){
            ratio = 0.9
            let result = formatCurrency('eur',convert(ratio,amn))
            document.getElementById("demo").innerHTML =
            amn +  " in " +fromCurrency + " is " + result;         
        }
        else if( toCurrency ==="USD"){
            ratio = 1
            let result = formatCurrency('usd',convert(ratio,amn))
            document.getElementById("demo").innerHTML =
            amn +  " in " +fromCurrency + " is " + result;          }
    }
    if (fromCurrency === 'VND'){
        if (toCurrency === "USD"){
            ratio = 0.000043
            let result = formatCurrency('usd',convert(ratio,amn))
            document.getElementById("demo").innerHTML =
            amn +  " in " +fromCurrency + " is " + result;  
                }
        else if( toCurrency === "KRW"){
            ratio = 0.051
            let result = formatCurrency('krw',convert(ratio,amn))
            document.getElementById("demo").innerHTML =
            amn +  " in " +fromCurrency + " is " + result;  
                }
        else if( toCurrency === "EUR"){
            ratio = 0.000039
            let result = formatCurrency('eur',convert(ratio,amn))
            document.getElementById("demo").innerHTML =
            amn +  " in " +fromCurrency + " is " + result;  
                }
        else if( toCurrency ==="VND"){
            ratio = 1
            let result = formatCurrency('VND',convert(ratio,amn))
            document.getElementById("demo").innerHTML =
            amn +  " in " +fromCurrency + " is " + result;  
                }
    }
    if (fromCurrency === 'KRW'){
        if (toCurrency === "USD"){
            ratio = 0.00084
            let result = formatCurrency('usd',convert(ratio,amn))
            document.getElementById("demo").innerHTML =
            amn +  " in " +fromCurrency + " is " + result;  
                }
        else if( toCurrency === "KRW"){
            ratio = 1
            let result = formatCurrency('krw',convert(ratio,amn))
            document.getElementById("demo").innerHTML =
            amn +  " in " +fromCurrency + " is " + result;  
                }
        else if( toCurrency === "EUR"){
            ratio = 0.00075
            let result = formatCurrency('eur',convert(ratio,amn))
            document.getElementById("demo").innerHTML =
            amn +  " in " +fromCurrency + " is " + result;  
                }
        else if( toCurrency ==="VND"){
            ratio = 19.47
            let result = formatCurrency('VND',convert(ratio,amn))
            document.getElementById("demo").innerHTML =
            amn +  " in " +fromCurrency + " is " + result;  
                }
    }
    if (fromCurrency === 'EUR'){
        if (toCurrency === "USD"){
            ratio = 1.19
            let result = formatCurrency('usd',convert(ratio,amn))
            document.getElementById("demo").innerHTML =
            amn +  " in " +fromCurrency + " is " + result;  
                }
        else if( toCurrency === "KRW"){
            ratio = 1413.03
            let result = formatCurrency('krw',convert(ratio,amn))
            document.getElementById("demo").innerHTML =
            amn +  " in " +fromCurrency + " is " + result;  
                }
        else if( toCurrency === "EUR"){
            ratio = 1
            let result = formatCurrency('eur',convert(ratio,amn))
            document.getElementById("demo").innerHTML =
            amn +  " in " +fromCurrency + " is " + result;  
                }
        else if( toCurrency ==="VND"){
            ratio = 27000.6
            let result = formatCurrency('VND',convert(ratio,amn))
            document.getElementById("demo").innerHTML =
            amn +  " in " +fromCurrency + " is " + result;  
                }
    }
    
    
    
    

}
