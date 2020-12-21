function primeNumbers(startNum,endNum){

    for(let i = startNum; i <= endNum; i++)
    {
        let isPrime = true;
        for(let j = 2;j < i; j++){
            if(i % j == 0)
            {
            isPrime = false;
            break;
            }
        }    
        if(isPrime == true){
            console.log(i);
       
        }
    }
}



primeNumbers(5,50,);