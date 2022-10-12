
export function helloWorld(){
    console.log('Hello world!');
}


let testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

helloWorld();
console.log(testArray.reduce((p, c) => p + c, 0));