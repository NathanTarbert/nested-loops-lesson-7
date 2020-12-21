function wordWars(wordArray){

    var sum = 0; 
    var i = 0;
    var biggestWordSum = 0;
    var biggestWordString = '';
    
    while(wordArray[i] != "STOP" && i < wordArray.length){
        if(wordArray[i] == "STOP"){
            break;
        }
        sum = 0;
        var word = wordArray[i];
        var letterArray = word.split('');
        
        
        for(let j = letterArray.length; j > 0; j--){
            let letter = letterArray.shift();
            let valueOfLetter = letter.charCodeAt(0);
            sum += valueOfLetter;
            
        }
        if(sum > biggestWordSum){
            biggestWordSum = sum;//0 to 516
            biggestWordString = word;// 0 to "House"
        }
        
        
    i++;
                     
    }
        console.log(`Winner is ${biggestWordString} - ${biggestWordSum}!`);

}
wordWars(["House","Dog","Destination","STOP"]);