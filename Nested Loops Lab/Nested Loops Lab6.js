function uniqueCodes(max1,max2,max3){


    num1 = 0;
    num2 = 0;
    num3 = 0;
    for(num1 = 1; num1 <=max1; num1++){
        for(num2 = 2; num2 <=max2; num2++){
            for(num3 = 1; num3 <=max3; num3++){
                if(num1 % 2 == 0 && num3 % 2 == 0){
                    let isPrime = true;
                    for(let i = 2;i < num2; i++){
                        if(num2 % i == 0 || i > 7)
                        {
                        isPrime = false;
                        break;
                        }
                    }    
                    if(isPrime == true){
                        let output = `${num1}${num2}${num3}`;
                        console.log(output);
                    }
                }
            }
        }
    }
}
uniqueCodes(3,5,5);