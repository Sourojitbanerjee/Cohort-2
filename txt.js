function Square(n) {
  return n * n;
}

function sumofSquares(a, b) {
  const val1 = Square(a);
  const val2 = Square(b);
  return val1 + val2;
}

console.log(sumofSquares(2, 3));

function Square(n) {
  return n * n;
}
function Cube(n) {
  return n * n * n;
}
function Rectangle(n, m) {
  return n * m;
}

function sumofSquares(a, b) {
  const val1 = Square(a);
  const val2 = Square(b);
  return val1 + val2;
}

function sumofCubes(a, b) {
  const val1 = Cube(a);
  const val2 = Cube(b);
  return val1 + val2;
}

function areaofRectangle(l, b) {
  return l * b;
}

console.log(areaofRectangle(4, 8));
