function clock2(inputHour,inputMinute,inputSeconds){


    for(let hour = inputHour; hour <= 23; hour++){
        
        for(let minute = inputMinute; minute <= 59; minute++){
           
            for(let seconds = inputSeconds; seconds <= 59; seconds++){
               

           if(hour < 10 && minute < 10 && seconds < 10){
                console.log(`0${hour}:0${minute}:0${seconds}`);
           }
           else if(hour >= 9 && minute > 9 && seconds < 10){
                console.log(`${hour}:${minute}:0${seconds}`);

           }else if((hour >= 9) && (minute < 10) && (seconds < 10)){
                console.log(`${hour}:0${minute}:0${seconds}`);

           }else if(hour >= 9 && minute < 10 && seconds >= 9){
               console.log(`${hour}:0${minute}:${seconds}`);

           }else if(hour < 10 && minute < 10 && seconds >= 9){
               console.log(`0${hour}:0${minute}:${seconds}`);

           }else {
            console.log(`${hour}:${minute}:${seconds}`);
           }
           inputHour = 0;
           inputMinute = 0;
           inputSeconds = 0;
           
           
           }
      
        }
       
    }

}         
clock2(21,59,58);
