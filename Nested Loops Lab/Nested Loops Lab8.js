function happyNumbers(n){

    let output = "";
    for(d1 = 1; d1 <= n; d1++){
        for(d2 = 0; d2 <= n; d2++){
            for(d3 = 0; d3 <= n; d3++){
                for(d4 = 0; d4 <= n; d4++){

                    if((d1 + d2) == n && (d3 + d4) == n){
                        output += `${d1}${d2}${d3}${d4} `;
                    }    
                }
            }
        }
    }
console.log(output);
}
happyNumbers(3);