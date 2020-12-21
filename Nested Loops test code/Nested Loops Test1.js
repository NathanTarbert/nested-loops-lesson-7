// function isPrime(num) {
//     var prime = num != 1;
//     for(var i=2; i<num; i++) {
//         if(num % i == 0) {
//             prime = false;
//             break;
//         }
//     }
//    console.log(prime);
// }
// isPrime(2,3,5,7);
function main(d1, d2, d3) {
    for (num1 = 2; num1 <= d1; num1++) {
        for (num2 = 2; num2 <= d2; num2++) {
            for (num3 = 2; num3 <= d3; num3++) {
                if (num1 % 2 == 0 && num3 % 2 == 0) {
                    let isPrime = true;
                    for (let i = 2; i < num2; i++) {
                        if (num2 % i == 0 || i > 7) {
                            isPrime = false;
                            break;
                        }
                    }
                    if (isPrime == true) {
                        let output = `${num1} ${num2} ${num3}`;
                        console.log(output);
                    }
                }
            }
        }
    }
}
main(3,5,5)