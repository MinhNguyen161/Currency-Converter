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
function converttoVND(amn){
    let ratio = 1;
    if (fromCurrency === "USD"){
        ratio = 23176.39
         result = convert(ratio,amn)
        console.log(result)
        document.getElementById("demo").innerHTML =
        amn +  " in " +fromCurrency + " is " + formatCurrency('VND',convert(ratio,amn));
        return result  

            }
    else if( fromCurrency === "KRW"){
        ratio = 19,56
         result = convert(ratio,amn)
        document.getElementById("demo").innerHTML =
        amn +  " in " +fromCurrency + " is " + formatCurrency('VND',convert(ratio,amn));  
        return result  

            }
    else if( fromCurrency === "EUR"){
        ratio = 27775.00
         result = convert(ratio,amn)
        document.getElementById("demo").innerHTML =
        amn +  " in " +fromCurrency + " is " + formatCurrency('VND',convert(ratio,amn));  
        return result  
            }
    else if( fromCurrency ==="VND"){
        ratio = 1
         result = convert(ratio,amn)
        document.getElementById("demo").innerHTML =
        amn +  " in " +fromCurrency + " is " + formatCurrency('VND',convert(ratio,amn));  
        return result  
            }

}
function change(){
    let a
    a = toC.value 
    toC.value = fromC.value
    fromC.value = a
    myFunction()
}
function exchange(){
    let ratio = 1;
    let amn = amountInput.value
    if (fromCurrency === 'USD'){
        if (toCurrency === "VND"){
            console.log()
            ratio = 23235.5
            let result = formatCurrency('vnd',convert(ratio,amn))
            document.getElementById("demo").innerHTML =
            amn +  " in " +fromCurrency + " is " + result; 
            return result
        }
        else if( toCurrency === "KRW"){
            ratio = 1193.27
            let result = formatCurrency('krw',convert(ratio,amn))
            document.getElementById("demo").innerHTML =
            amn +  " in " +fromCurrency + " is " + result;    
            return result
     
        }
        else if( toCurrency === "EUR"){
            ratio = 0.9
            let result = formatCurrency('eur',convert(ratio,amn))
            document.getElementById("demo").innerHTML =
            amn +  " in " +fromCurrency + " is " + result;    
            return result
     
        }
        else if( toCurrency ==="USD"){
            ratio = 1
            let result = formatCurrency('usd',convert(ratio,amn))
            document.getElementById("demo").innerHTML =
            amn +  " in " +fromCurrency + " is " + result;      
            return result
        }
    }
    if (fromCurrency === 'VND'){
        if (toCurrency === "USD"){
            ratio = 0.000043
            let result = formatCurrency('usd',convert(ratio,amn))
            document.getElementById("demo").innerHTML =
            amn +  " in " +fromCurrency + " is " + result;  
            return result

                }
        else if( toCurrency === "KRW"){
            ratio = 0.051
            let result = formatCurrency('krw',convert(ratio,amn))
            document.getElementById("demo").innerHTML =
            amn +  " in " +fromCurrency + " is " + result;  
            return result

                }
        else if( toCurrency === "EUR"){
            ratio = 0.000039
            let result = formatCurrency('eur',convert(ratio,amn))
            document.getElementById("demo").innerHTML =
            amn +  " in " +fromCurrency + " is " + result;  
            return result

                }
        else if( toCurrency ==="VND"){
            ratio = 1
            let result = formatCurrency('VND',convert(ratio,amn))
            document.getElementById("demo").innerHTML =
            amn +  " in " +fromCurrency + " is " + result;  
            return result

                }
    }
    if (fromCurrency === 'KRW'){
        if (toCurrency === "USD"){
            ratio = 0.00084
            let result = formatCurrency('usd',convert(ratio,amn))
            document.getElementById("demo").innerHTML =
            amn +  " in " +fromCurrency + " is " + result;  
            return result

                }
        else if( toCurrency === "KRW"){
            ratio = 1
            let result = formatCurrency('krw',convert(ratio,amn))
            document.getElementById("demo").innerHTML =
            amn +  " in " +fromCurrency + " is " + result;  
            return result

                }
        else if( toCurrency === "EUR"){
            ratio = 0.00075
            let result = formatCurrency('eur',convert(ratio,amn))
            document.getElementById("demo").innerHTML =
            amn +  " in " +fromCurrency + " is " + result;  
            return result

                }
        else if( toCurrency ==="VND"){
            ratio = 19.47
            let result = formatCurrency('VND',convert(ratio,amn))
            document.getElementById("demo").innerHTML =
            amn +  " in " +fromCurrency + " is " + result;  
            return result

                }
    }
    if (fromCurrency === 'EUR'){
        if (toCurrency === "USD"){
            ratio = 1.19
            let result = formatCurrency('usd',convert(ratio,amn))
            document.getElementById("demo").innerHTML =
            amn +  " in " +fromCurrency + " is " + result;  
            return result

                }
        else if( toCurrency === "KRW"){
            ratio = 1413.03
            let result = formatCurrency('krw',convert(ratio,amn))
            document.getElementById("demo").innerHTML =
            amn +  " in " +fromCurrency + " is " + result;  
            return result

                }
        else if( toCurrency === "EUR"){
            ratio = 1
            let result = formatCurrency('eur',convert(ratio,amn))
            document.getElementById("demo").innerHTML =
            amn +  " in " +fromCurrency + " is " + result;  
            return result

                }
        else if( toCurrency ==="VND"){
            ratio = 27000.6
            let result = formatCurrency('VND',convert(ratio,amn))
            document.getElementById("demo").innerHTML =
            amn +  " in " +fromCurrency + " is " + result;  
            return result
                }

    }
}
function myFunction() {
    let fromC = document.getElementById("fromC")
    let toC = document.getElementById("toC")
    fromCurrency= fromC.value
    toCurrency = toC.value
    exchange()
    
    
}
function coin(){
    let fromC = document.getElementById("fromC")
    fromCurrency= fromC.value
    toCurrency = "VND"
    let a = converttoVND(amountInput.value)
    let sheets = [500000, 200000, 100000, 50000, 20000, 10000, 5000, 2000, 1000]
    let am = []
    let b,c
    for (num in sheets) {
        b = a % sheets[num]
        c = (a-b)/ sheets[num]
        a = a - c*sheets[num]
        am.push(c)
    }
    document.getElementById("coin-demo").innerHTML =""
    for (num in sheets){
        if(am[num]!==0){        
            document.getElementById("coin-demo").innerHTML +=
            `<p>${am[num]}x ${sheets[num]/100}k</p>` 
        }
    }
}

