function pi(n) {
    var v = 0;
    for (i = 1; i <= n; i += 4) {  
        v +=  1 / i - 1 / (i + 2); 
    }
    return 4 * v;                  
}

console.log(pi(1000000000));