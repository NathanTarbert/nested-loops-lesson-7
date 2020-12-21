function clock2(inputHour,inputMinute){


    for(let hour = inputHour; hour <= 23; hour++){
        for(let minute = inputMinute; minute <= 59; minute++){
        //     for(let seconds = inputSeconds; seconds <= 59; seconds++){
            
            if(hour < 10){
                console.log(`0${hour}: `);
            }else {
                console.log(`${hour}: `);
            }if(minute < 10){
                console.log(`0${minute}: `);
            }else {
                console.log(`${minute}: `);
            }
           
           
        }
    }
}         
// clock2(21,59,58);
clock2(7,7);