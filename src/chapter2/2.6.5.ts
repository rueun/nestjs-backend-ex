// 속성 데코레이터
// 속성 데코레이터는 클래스의 프로퍼티를 꾸미는 역할을 한다.

// 속성 데코레이터는 다음 두 가지 인수를 받는다.
// 1. 정적 멤버의 경우 클래스의 생성자 함수 or 정적 멤버가 아닌 경우 클래스의 프로토타입
// 2. 멤버의 이름

function format(formatString: string) {
    return function (target: any, propertyKey: string): any {
        let value = target[propertyKey];

        const getter = function () {
            return `${formatString} ${value}`; // formatString을 앞에 붙여서 반환한다.
        }

        const setter = function (newVal: string) {
            value = newVal;
        }

        return {
            get: getter,
            set: setter,
            enumerable: true,
            configurable: true
        }
    }
}

class Greeter2 {
    @format('안녕하세요')
    greeting: string;
}

const g2 = new Greeter2();
g2.greeting = '반갑습니다.';
console.log(g2.greeting);