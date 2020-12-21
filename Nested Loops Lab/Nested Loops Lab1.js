function building(floors,aptNums){



    for(let i = floors; i >= 1; i--){
       var output = "";
        for(let j = 0; j < aptNums; j++){
            if(i == floors){
                output += ` L${i}${j}`;

            }else if(i % 2 == 0){
                 output += ` O${i}${j}`;
                 
            }else {
                output += ` A${i}${j}`;
            }
           
        }
        console.log(output);
    }

}

building(6,4);
