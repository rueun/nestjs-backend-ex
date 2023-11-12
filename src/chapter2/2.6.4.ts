// 접근자 데코레이터
// 접근자 프로퍼티에 적용할 수 있다.
// 접근자 프로퍼티는 getter/setter 함수를 가지는 프로퍼티이다.

// 접근자 프로퍼티에 적용할 수 있는 데코레이터는 다음과 같다.
// 1. get: 접근자 프로퍼티의 getter 함수에 적용
// 2. set: 접근자 프로퍼티의 setter 함수에 적용
// 3. enumerable: 프로퍼티가 열거 가능한지 여부를 나타내는 플래그에 적용
// 4. configurable: 프로퍼티가 재정의 가능한지 여부를 나타내는 플래그에 적용

// 접근자 데코레이터는 다음 세 가지 인수를 받는다.
// 1. 정적 멤버인지 여부를 나타내는 플래그
// 2. 멤버의 이름
// 3. 멤버의 프로퍼티 디스크립터
// 만약 접근자 데코레이터가 값을 반환한다면, 해당 값은 해당 멤버의 프로퍼티 디스크립터로 사용된다.

function Enumerable (enumerable: boolean) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        descriptor.enumerable = enumerable;
    }
}


class Person {
    constructor(private name: string) {} // 생성자

    @Enumerable(true)
    get getName() { // 접근자 프로퍼티 getter
        return this.name;
    }

    @Enumerable(false)
    set setName(name: string) { // 접근자 프로퍼티 setter
        this.name = name;
    }
}


const person = new Person('Mark');
for (let key in person) {
    console.log(`key: ${key}, value: ${person[key]}`);
}

// 실행결과
// key: name, value: Mark
// key: getName, value: Mark
