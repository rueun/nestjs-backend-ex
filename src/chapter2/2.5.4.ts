// 유니언 타입
// 타입스크립트는 변수에 여러 타입을 지정할 수 있다.
function getLength(obj: string | string[]) {
    return obj.length;
}


// 타입스크립트는 열거형을 제공한다.
enum Status { 
    READY = 'Ready',
    WAITING = 'Waiting' 
};


// 제네릭 타입
// 제네릭 타입은 타입스크립트에서 함수, 클래스, 인터페이스, 타입 별칭을 사용할 때 여러 종류의 타입에 대해 호환을 맞춰야 하는 상황에서 사용한다.
function identity<T>(arg: T): T {
    return arg;
}

const hello: string = identity('hello');
console.log(hello);
