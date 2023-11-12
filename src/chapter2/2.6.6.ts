// 매개변수 데코레이터
// 매개변수 데코레이터는 함수의 매개변수에 선언하여 사용한다.


// 매개변수 데코레이터는 3개의 인수를 받는다.
// 1. 정적 멤버인지 여부를 나타내는 플래그
// 2. 멤버의 이름
// 3. 매개변수의 인덱스

import { BadRequestException } from "@nestjs/common";


// 매개변수의 최솟값을 검사하는 매개변수 데코레이터
function MinLength(min: number) {
    return function (target: any, propertyKey: string, parameterIndex: number) {
        target.validators = { // target 클래스(여기서는 user)의 validator 속성에 유효성을 검사하는 함수를 저장한다.
            minLength: function (args: string[]) {
                return args[parameterIndex].length >= min;
            }
        }
    }
}


function Validator(target: any, propertyName: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    
    descriptor.value = function (...args) { // descriptor.value에 유효성 검사를 수행하는 함수를 정의한다.
        Object.keys(target.validators).forEach(key => { // target.validator에 저장된 함수를 모두 실행한다.
            if(!target.validators[key](args)) { // 인수를 validator 함수에 전달하여 유효성 검사를 수행한다.
                throw new BadRequestException(`Invalid parameter: ${key}`); // 유효성 검사에 실패하면 BadRequestException을 발생시킨다.
            }
        })
        originalMethod.apply(this, args); // 원래 함수를 호출한다.
    }
}

class User {
    private name: string;

    @Validator
    setName(@MinLength(3) name: string) {
        this.name = name;
    }
}

const user = new User();
user.setName('Dexter'); // 정상 실행
console.log('----------------------------------');
user.setName('De'); // Error: Invalid parameter: minLength
