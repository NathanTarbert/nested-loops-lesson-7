function stupidPasswords(n){

    var output = '';

    for(let i = 2; i <= n; i += 2){
        for(let j = 1; j <= n; j += 2){
            output += ' ' + i + j + (i * j) + ' ';
        }
    }
    console.log(output);  
}
stupidPasswords(5);
// stupidPasswords(5);

















