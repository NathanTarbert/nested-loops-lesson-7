function coding(number){

    var symbolsToPrint = '';
    var updatedEmptyStrng = '';
    var reverseInput = 0;
    var getNumber = 0;
    var getSymbol = 0;


    while(number > 0){
        reverseInput = number % 10;
        number = Math.floor(number/10);
        getNumber = reverseInput + 33;//adds single input number to 33.
        getSymbol = String.fromCharCode(`${getNumber}`);//converts number into symbol in ascii.
        
        for(i = reverseInput; i > 0; i--){
            reverseInput = getSymbol;
            symbolsToPrint += reverseInput + '';//build string sideways with symbols.
            
        }
        if(reverseInput == ''){
            console.log("ZERO");
        }else {
            console.log(symbolsToPrint);
        }
        symbolsToPrint = '';
    }
    

}
coding(2049);