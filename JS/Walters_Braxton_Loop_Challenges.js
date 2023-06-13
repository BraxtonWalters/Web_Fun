
// 1).
function odd20() {
    for (let i = 1; i < 21; i++) {
        if (i % 2 == 1) {
            console.log(i);
        }
    }
}
// odd20();

// 2).
function deMult3() {
    for (let i = 100; i > 0; i--) {
        if (i % 3 == 0) {
            console.log(i);
        }
    }
}
// deMult3();

// 3).
function pTheS() {
    const arr = [4, 2.5, 1, -.5, -2, -3.5];
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}
// pTheS();

// 4).
function sigma() {
    let sum = 0;
    for (let i = 0; i < 101; i++) {
        sum += i;
    }
    console.log(sum);
}
// sigma();

// 5).
function fact() {
    let product = 1;
    for (let i = 1; i < 13; i++) {
        product *= i;
    }
    console.log(product);
}
// fact();