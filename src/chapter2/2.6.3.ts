// 메서드 데코레이터
// 메서드 데코레이터는 메서드의 선언부에 적용한다.
// 메서드 데코레이터는 다음 세 가지 인수를 받는다.
// 1. 정적 멤버인지 여부를 나타내는 플래그
// 2. 멤버의 이름
// 3. 멤버의 프로퍼티 디스크립터
// 만약 메서드 데코레이터가 값을 반환한다면, 해당 값은 메서드의 프로퍼티 디스크립터로 사용된다.


function HandleError() {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log(target);
        console.log(propertyKey);
        console.log(descriptor);

        const originalMethod = descriptor.value; // 원래 메서드를 저장한다.
        descriptor.value = function () { // 새로운 메서드를 정의한다.
            try {
                originalMethod();
            } catch (e) {
                // 에러를 처리하는 코드
                console.log(`Error: ${e.message}`);
            }
        }
    }
}


class Greeter {
    @HandleError()
    hello() {
        throw new Error('테스트 에러');
    }
}

const g = new Greeter();
g.hello();