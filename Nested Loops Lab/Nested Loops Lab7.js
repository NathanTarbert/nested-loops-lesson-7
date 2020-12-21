function letterCombinations(start,end,ex){
    let counter = 0;
    let startASCII = start.charCodeAt(0);
    let endASCII = end.charCodeAt(0);

    for(let char1 = startASCII; char1 <= endASCII; char1++){
        for(let char2 = startASCII; char2 <= endASCII; char2++){
            for(let char3 = startASCII; char3 <= endASCII; char3++){

                let c1 = String.fromCharCode(char1);
                let c2 = String.fromCharCode(char2);
                let c3 = String.fromCharCode(char3);
                if(c1 != ex && c2 != ex && c3 != ex){
                    console.log(c1 + c2 + c3);
                    counter++;
                }
            }
        }
    }
    console.log(counter);
}

letterCombinations("a","c","b");