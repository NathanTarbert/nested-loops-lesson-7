function travelSavings(travelArray){
    let moneyCollected = 0;
    let money = 0;
       
    var destination = travelArray.shift();
    
    while(destination != "End" && destination != "undefined"){
        if(destination == "undefined"){
            break;
        }
        var budget = travelArray.shift();
 
        for(let i = 0; i != "undefined"; i++){
            money = travelArray.shift();
    
            if(typeof money == "string" && money != "End"){
               console.log(`Going to ${destination}!`);
            
            destination = money;
            
                break;
            }else if(money == "End"){
                 if(moneyCollected >= budget){
                    console.log(`Going to ${destination}!`);
                    destination = money;
                break;
                 }
            budget = 0;
            moneyCollected = 0;
            }else {
            moneyCollected += money;
            console.log(`Collected: ${moneyCollected}`);
            }
        }
    moneyCollected = 0;
    }    
    

}
travelSavings(["Bali",3500,800,1800,1000,"Brazil",4600,5000,"End"]);