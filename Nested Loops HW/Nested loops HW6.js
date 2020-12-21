function trainTheTrainers(judges,trainingArray){
    var trainingScores = 0;
    var trainingSum = 0;
    var classScore = 0;
    var classAvg = 0;
    var classDescription = '';
    var counter = 0;
    var training = 0;
    var counter = 0;
    var finalScore = 0;
    
    
    for(let i = trainingArray.length; i > 0; i++){
        if(trainingArray == "Finish"){
        break;
        }
            if(typeof trainingArray == "string"){

            }else {
        
        training = trainingArray.shift();
        

        for(let j = 0; j < judges; j++){
            classScore = trainingArray.shift();
            trainingScores += classScore;
            trainingSum += classScore;

            counter ++; 
        }
            }
        classAvg = trainingScores / judges;
        trainingScores = 0;
        console.log(`${training} - ${classAvg.toFixed(2)}.`);

       
    }
        finalScore = trainingSum / counter;
        console.log(`Student's final assessment is ${finalScore.toFixed(2)}.`);

}
// trainTheTrainers(2,["While-Loop",6.00,5.5,"For-Loop",5.84,5.66,"Finish"]);
trainTheTrainers(1,['Objects', 3.00, 'Arrays', 4.00, 'Finish']);