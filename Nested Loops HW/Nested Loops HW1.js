function clock1(inputHour,inputMinute){


         for(let hour = inputHour; hour <= 23; hour++){
            for(let minute = inputMinute; minute <= 59; minute++){
                

                if(hour < 10 && minute < 10){
                    console.log(`0${hour} : 0${minute}`);
                }
                else if(hour < 10 && minute > 9){

                    console.log(`0${hour} : ${minute}`);

                }else if(hour > 9 && minute < 10){
                    console.log(`${hour} : 0${minute}`);

                }else{
                    console.log(`${hour} : ${minute}`);
                }
                inputMinute = 0;
           
            }
            
        }

}         
clock1(8,5);