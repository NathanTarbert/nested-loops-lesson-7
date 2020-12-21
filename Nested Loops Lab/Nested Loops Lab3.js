function magicNumbers(number){

    num1 = 0;
    num2 = 0;
    num3 = 0;
    for(num1 = 1; num1 <=number; num1++){
        for(num2 = 1; num2 <=number; num2++){
            for(num3 = 1; num3 <=number; num3++){
                if(num1 * num2 * num3 == number){
                let output = `${num1}${num2}${num3}`;
                console.log(output);

                }
            }            
        }
    }
}

magicNumbers(3);