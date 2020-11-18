let n = 0;
while(n < 5) {
    // do something
    n++;
}

for (let x = 0; x < 5; x++) {
    // do something
}

function fx(x) {
    let y =  x ** 2;
    // console.log(x, y);
    return y;
}

fx(2);
fx(5);
fx(6);
fx(0);

console.time("fx");
for (let i = -100; i <= 100; i++) {
    let n = fx(i);
  //  console.log(i, n);
}
console.timeEnd("fx");

function getNumber(max) {
    let n = Math.random();
    n = n * max;
    return Math.floor(n);

}
console.log(getNumber(100));





// 