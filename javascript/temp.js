//단축평가, 평가된 시점의 값을 반환한다
console.log(1 && 2); //2
console.log(0 && 2); //0

// asdds; //이렇게하면  정의되지않아 reference error발생하지만

console.log(1 || asda); //1 어차피 1에서 평가가 끝나기때문에 뒤에 읽지 않아서 reference error 발생 안함
