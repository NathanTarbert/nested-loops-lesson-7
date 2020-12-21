function combinations(n){

    let sum = 0;
    let num1 = 0;
    let num2 = 0;
    let num3 = 0;
    let num4 = 0;
    let num5 = 0;
    

    for(let num1 = 0; num1 <= n; num1++){
        for(let num2 = 0; num2 <= n; num2++){
            for(let num3 = 0; num3 <= n; num3++){
                for(let num4 = 0; num4 <= n; num4++){
                    for(let num5 = 0; num5 <= n; num5++){
                        let output = num1 + num2 + num3 + num4 + num5;
                        
                        if(output == n){
                            sum++;
                        }
                        

                    }
                }
            }
        }
    }
    console.log(sum);
    
}
combinations(25);