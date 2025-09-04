function Square(n){
    return n*n;
}

function sumofSquares(a, b){
    const val1 = Square(a);
    const val2 = Square(b);
    return val1 + val2;
}

console.log(sumofSquares(2,3));